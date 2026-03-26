import React, { useState, useCallback, useRef } from 'react';
import confetti from 'canvas-confetti';
import { modules } from './data/challenges';
import Sidebar from './components/Sidebar';
import CodeEditor from './components/CodeEditor';
import OutputPreview from './components/OutputPreview';
import './App.css';

function App() {
  const [activeModule, setActiveModule] = useState('html');
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [code, setCode] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [hintsRevealed, setHintsRevealed] = useState(0);
  const [showHints, setShowHints] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [challengeKey, setChallengeKey] = useState(0);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
  };

  const currentModule = modules.find(m => m.id === activeModule);
  const challenge = currentModule?.challenges[activeChallenge];

  // Initialize code when challenge changes
  React.useEffect(() => {
    if (challenge) {
      setCode(challenge.starterCode);
      setHintsRevealed(0);
      setShowHints(false);
      setShowExplanation(false);
      setShowSuccess(false);
      setChallengeKey(k => k + 1);
    }
  }, [activeModule, activeChallenge]);

  const handleRun = useCallback(() => {
    if (window.__runCode) {
      window.__runCode(code);
    }
  }, [code]);

  const handleCheck = useCallback(() => {
    if (!challenge) return;
    const isValid = challenge.validate(code);
    if (isValid) {
      setShowSuccess(true);
      setShowExplanation(true);
      if (!completedChallenges.includes(challenge.id)) {
        setCompletedChallenges(prev => [...prev, challenge.id]);
      }
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.65 },
        colors: ['#6366f1', '#8b5cf6', '#22d3ee', '#10b981', '#f59e0b']
      });
    } else {
      if (window.__runCode) window.__runCode(code);
    }
  }, [code, challenge, completedChallenges]);

  const handleNext = () => {
    setShowSuccess(false);
    if (activeChallenge < (currentModule?.challenges.length || 1) - 1) {
      setActiveChallenge(activeChallenge + 1);
    }
  };

  const handleShowSolution = () => {
    if (challenge) {
      setCode(challenge.solution);
      setShowExplanation(true);
    }
  };

  const handleReset = () => {
    if (challenge) {
      setCode(challenge.starterCode);
    }
  };

  const revealHint = () => {
    if (challenge && hintsRevealed < challenge.hints.length) {
      setHintsRevealed(hintsRevealed + 1);
    }
  };

  return (
    <div className="app-layout">
      <Sidebar
        modules={modules}
        activeModule={activeModule}
        setActiveModule={setActiveModule}
        activeChallenge={activeChallenge}
        setActiveChallenge={setActiveChallenge}
        completedChallenges={completedChallenges}
      />

      <div className="main-content">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="top-bar-title">
            <h2>
              {currentModule?.icon} {challenge?.title}
              <span
                className="module-badge"
                style={{ background: `${currentModule?.color}22`, color: currentModule?.color }}
              >
                {currentModule?.name} • {activeChallenge + 1}/{currentModule?.challenges.length}
              </span>
            </h2>
          </div>
          <div className="top-bar-actions">
            <button className="btn btn-ghost" onClick={toggleTheme} title="Toggle Light/Dark">{theme === 'dark' ? '☀️' : '🌙'} {theme === 'dark' ? 'Light' : 'Dark'}</button>
            <button className="btn btn-ghost" onClick={handleReset}>↺ Reset</button>
            <button className="btn btn-outline" onClick={handleShowSolution}>💡 Solution</button>
            <button className="btn btn-primary" onClick={handleRun}>▶ Run Code</button>
            <button className="btn btn-success" onClick={handleCheck}>✓ Submit</button>
          </div>
        </div>

        {/* Workspace */}
        <div className="workspace">
          {/* Left: Instructions + Editor */}
          <div className="left-panel">
            <div className="instruction-panel" key={challengeKey}>
              <div className="concepts-list">
                {challenge?.concepts.map((c, i) => (
                  <span key={i} className="concept-tag">{c}</span>
                ))}
              </div>
              <h3>{challenge?.title}</h3>
              <p>{challenge?.description}</p>

              {/* Hints */}
              <div className="hints-container" style={{ padding: 0 }}>
                <button className="hint-toggle" onClick={() => setShowHints(!showHints)}>
                  {showHints ? '▾ Hide Hints' : '▸ Need a Hint?'}
                </button>
                {showHints && (
                  <div className="hints-list">
                    {challenge?.hints.slice(0, hintsRevealed).map((h, i) => (
                      <div key={i} className="hint-item">💡 {h}</div>
                    ))}
                    {hintsRevealed < (challenge?.hints.length || 0) && (
                      <button
                        className="hint-toggle"
                        onClick={revealHint}
                        style={{ marginTop: '0.25rem' }}
                      >
                        + Reveal Hint {hintsRevealed + 1}/{challenge?.hints.length}
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Explanation Panel */}
              {showExplanation && challenge?.explanation && (
                <div className="explanation-panel">
                  <div className="explanation-header">
                    <span>📖 How It Works</span>
                    <button className="hint-toggle" onClick={() => setShowExplanation(false)} style={{ color: 'var(--text-muted)' }}>✕</button>
                  </div>
                  <div className="explanation-body">
                    {challenge.explanation.split('\n').map((line, i) => (
                      <div key={i} className="explanation-line">{line}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <CodeEditor
              code={code}
              onChange={(val) => setCode(val)}
              moduleId={activeModule}
              theme={theme}
            />
          </div>

          {/* Right: Output */}
          <OutputPreview
            code={code}
            moduleId={activeModule}
            challenge={challenge}
          />
        </div>

        {/* Bottom Bar */}
        <div className="bottom-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {completedChallenges.filter(c => c.startsWith(activeModule)).length}/{currentModule?.challenges.length} completed in {currentModule?.name}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              className="btn btn-ghost"
              onClick={() => setActiveChallenge(Math.max(0, activeChallenge - 1))}
              disabled={activeChallenge === 0}
            >
              ← Prev
            </button>
            <button
              className="btn btn-primary"
              onClick={handleNext}
              disabled={activeChallenge === (currentModule?.challenges.length || 1) - 1}
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      {/* Success Overlay */}
      {showSuccess && (
        <div className="success-overlay" onClick={() => setShowSuccess(false)}>
          <div className="success-card" onClick={e => e.stopPropagation()}>
            <div className="emoji">🎉</div>
            <h3>Challenge Complete!</h3>
            <p>Great job! Your code passed the validation checks.</p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
              <button className="btn btn-ghost" onClick={() => setShowSuccess(false)}>
                Review Code
              </button>
              {activeChallenge < (currentModule?.challenges.length || 1) - 1 && (
                <button className="btn btn-success" onClick={handleNext}>
                  Next Challenge →
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
