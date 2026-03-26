import React, { useState, useEffect, useRef } from 'react';

export default function OutputPreview({ code, moduleId, challenge }) {
  const [activeTab, setActiveTab] = useState(moduleId === 'js' ? 'console' : 'preview');
  const [consoleOutput, setConsoleOutput] = useState([]);
  const iframeRef = useRef(null);

  useEffect(() => {
    setActiveTab(moduleId === 'js' ? 'console' : 'preview');
  }, [moduleId]);

  const runCode = (codeToRun) => {
    setConsoleOutput([]);

    if (moduleId === 'js') {
      setActiveTab('console');
      const logs = [];
      const html = challenge?.html || '';
      const wrappedCode = `
        <!DOCTYPE html>
        <html><head><style>body{font-family:sans-serif;padding:1rem;color:#333;}</style></head>
        <body>${html}
        <script>
          const __logs = [];
          const origLog = console.log;
          console.log = (...args) => {
            const msg = args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ');
            __logs.push({type:'log', msg});
            window.parent.postMessage({type:'console', logs: __logs}, '*');
          };
          console.error = (...args) => {
            const msg = args.map(a => String(a)).join(' ');
            __logs.push({type:'error', msg});
            window.parent.postMessage({type:'console', logs: __logs}, '*');
          };
          try {
            ${codeToRun}
          } catch(e) {
            __logs.push({type:'error', msg: e.message});
            window.parent.postMessage({type:'console', logs: __logs}, '*');
          }
          setTimeout(() => {
            window.parent.postMessage({type:'console', logs: __logs}, '*');
          }, 1000);
        <\/script></body></html>
      `;
      if (iframeRef.current) {
        iframeRef.current.srcdoc = wrappedCode;
      }
    } else {
      setActiveTab('preview');
      if (iframeRef.current) {
        iframeRef.current.srcdoc = codeToRun;
      }
    }
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === 'console') {
        setConsoleOutput(e.data.logs);
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  // Expose runCode to parent
  useEffect(() => {
    window.__runCode = runCode;
  }, [code, moduleId, challenge]);

  return (
    <div className="right-panel">
      <div className="output-tabs">
        <button
          className={`output-tab ${activeTab === 'preview' ? 'active' : ''}`}
          onClick={() => setActiveTab('preview')}
        >
          👁️ Preview
        </button>
        <button
          className={`output-tab ${activeTab === 'console' ? 'active' : ''}`}
          onClick={() => setActiveTab('console')}
        >
          ⌨️ Console
        </button>
      </div>

      {activeTab === 'preview' ? (
        <iframe
          ref={iframeRef}
          className="preview-frame"
          title="Output Preview"
          sandbox="allow-scripts allow-modals"
        />
      ) : (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <iframe
            ref={iframeRef}
            style={{ display: 'none' }}
            title="JS Runner"
            sandbox="allow-scripts"
          />
          <div className="console-output">
            {consoleOutput.length === 0 && (
              <div style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
                Click "▶ Run Code" to see output...
              </div>
            )}
            {consoleOutput.map((line, i) => (
              <div key={i} className={`console-line ${line.type === 'error' ? 'error' : ''}`}>
                <span className="prefix">{line.type === 'error' ? '✕' : '›'}</span>
                <span style={{ whiteSpace: 'pre-wrap' }}>{line.msg}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
