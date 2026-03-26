import React from 'react';

const levelConfig = {
  beginner: { label: '🌱 Beginner', color: '#10b981' },
  intermediate: { label: '🔥 Intermediate', color: '#f59e0b' },
  advanced: { label: '🚀 Advanced', color: '#ef4444' }
};

export default function Sidebar({ modules, activeModule, setActiveModule, activeChallenge, setActiveChallenge, completedChallenges, activeLevel, setActiveLevel }) {
  const currentModule = modules.find(m => m.id === activeModule);
  const totalAll = modules.reduce((s, m) => s + m.challenges.length, 0);
  const completedAll = completedChallenges.length;

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">🚀</div>
          <h1>
            WebDev 2026
            <span>Learn What Matters</span>
          </h1>
        </div>
      </div>

      {/* Level Selector */}
      <div className="level-selector">
        {Object.entries(levelConfig).map(([key, { label, color }]) => (
          <button
            key={key}
            className={`level-btn ${activeLevel === key ? 'active' : ''}`}
            onClick={() => setActiveLevel(key)}
            style={activeLevel === key ? { background: color, borderColor: color } : {}}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="module-tabs">
        {modules.map(mod => (
          <button
            key={mod.id}
            className={`module-tab ${activeModule === mod.id ? 'active' : ''}`}
            onClick={() => { setActiveModule(mod.id); setActiveChallenge(0); }}
          >
            <span className="tab-icon">{mod.icon}</span>
            {mod.name}
          </button>
        ))}
      </div>

      <div className="challenge-list">
        {currentModule?.challenges.map((ch, idx) => (
          <div
            key={ch.id}
            className={`challenge-item ${activeChallenge === idx ? 'active' : ''} ${completedChallenges.includes(ch.id) ? 'completed' : ''}`}
            onClick={() => setActiveChallenge(idx)}
          >
            <div className="challenge-status">
              {completedChallenges.includes(ch.id) ? '✓' : idx + 1}
            </div>
            <div className="challenge-info">
              <h4>{ch.title}</h4>
              <span className={`difficulty ${ch.difficulty.toLowerCase()}`}>
                {ch.difficulty}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="sidebar-progress">
        <div className="progress-label">
          <span>Overall Progress</span>
          <span>{completedAll}/{totalAll}</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${totalAll ? (completedAll / totalAll) * 100 : 0}%` }} />
        </div>
      </div>
    </aside>
  );
}
