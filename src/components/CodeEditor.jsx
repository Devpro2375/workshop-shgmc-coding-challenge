import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';

const langExtensions = {
  html: [html()],
  css: [html()],
  js: [javascript()]
};

export default function CodeEditor({ code, onChange, moduleId, theme }) {
  const extensions = langExtensions[moduleId] || [html()];

  return (
    <div className="editor-container">
      <div className="editor-header">
        <span>📝 editor.{moduleId === 'js' ? 'js' : moduleId === 'css' ? 'html' : 'html'}</span>
        <span style={{ color: 'var(--accent-green)', fontSize: '0.7rem' }}>● Live</span>
      </div>
      <div className="editor-wrapper">
        <CodeMirror
          value={code}
          onChange={onChange}
          extensions={extensions}
          theme={theme === 'light' ? 'light' : 'dark'}
          basicSetup={{
            lineNumbers: true,
            highlightActiveLine: true,
            bracketMatching: true,
            closeBrackets: true,
            autocompletion: true,
            foldGutter: true,
            indentOnInput: true,
          }}
          style={{ height: '100%', fontSize: '14px' }}
        />
      </div>
    </div>
  );
}
