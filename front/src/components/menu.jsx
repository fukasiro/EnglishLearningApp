// front/src/components/menu.jsx
import React from 'react';
import './menu.css';

// 💡 引数の波括弧の中に、App.jsxから渡される「isLoggedIn」をしっかり追加しました
export default function Menu({ currentMode, activeMenu, setActiveMenu, onNavigate, onLogout, isLoggedIn }) {
  
  // ── 💡 ここにあった「const isLoggedIn = currentMode === 'chat';」のバグの原因行を完全に消去しました ──

  return (
    <aside className="app-sidebar">
      {/* 1. 最上部：サービスロゴ */}
      <div className="sidebar-logo" onClick={() => onNavigate('landing')}>
        toeichacker
      </div>

      {/* 2. 中央：学習用メインメニュー */}
      {/* 2. 中央：学習用メインメニュー */}
      <nav className="sidebar-nav-menu">
        
        {/* 🏠 ダッシュボード */}
        <button 
          className={`sidebar-item ${activeMenu === 'dashboard' ? 'active' : ''}`}
          onClick={() => {
            onNavigate('landing');
            setActiveMenu('dashboard');
          }}
          title="ダッシュボード"
        >
          <span className="icon">🏠</span>
          <span className="sidebar-label">ダッシュボード</span>
        </button>

        {/* 📚 英単語学習 */}
        <button 
          className={`sidebar-item ${activeMenu === 'chat' ? 'active' : ''}`}
          onClick={() => {
            onNavigate('chat');
            setActiveMenu('chat');
          }}
          title="英単語学習"
        >
          <span className="icon">📚</span>
          <span className="sidebar-label">英単語学習</span>
        </button>

        {/* 🧠 文法学習 */}
        <button 
          className={`sidebar-item ${activeMenu === 'grammar' ? 'active' : ''}`}
          onClick={() => {
            onNavigate('grammar');
            setActiveMenu('grammar');
          }}
          title="文法学習"
        >
          <span className="icon">🧠</span>
          <span className="sidebar-label">文法学習</span>
        </button>

        {/* 🎧 リスニング */}
        <button 
          className={`sidebar-item ${activeMenu === 'vocab' ? 'active' : ''}`}
          onClick={() => {
            onNavigate('vocab');
            setActiveMenu('vocab');
          }}
          title="リスニング"
        >
          <span className="icon">🎧</span>
          <span className="sidebar-label">リスニング</span>
        </button>

        {/* ✍️ ライティング */}
        <button 
          className={`sidebar-item ${activeMenu === 'analysis' ? 'active' : ''}`}
          onClick={() => {
            onNavigate('analysis');
            setActiveMenu('analysis');
          }}
          title="ライティング"
        >
          <span className="icon">✍️</span>
          <span className="sidebar-label">ライティング</span>
        </button>

        {/* 📝 総合テスト（追加項目） */}
        <button 
          className={`sidebar-item ${activeMenu === 'test' ? 'active' : ''}`}
          onClick={() => {
            onNavigate('chat'); 
            setActiveMenu('test');
          }}
          title="総合テスト"
        >
          <span className="icon">📝</span>
          <span className="sidebar-label">総合テスト</span>
        </button>
      </nav>

      {/* 3. 最下部：ログイン・新規登録 or プロフィール切替領域 */}
      <div className="sidebar-footer-area">
        <button className="mode-toggle-btn-sidebar">💡 ダークモード</button>
        
        <div className="auth-separator"></div>

        {!isLoggedIn ? (
          /* 未ログイン時：ログイン・新規登録ボタン */
          <div className="sidebar-auth-buttons">
                <button 
              className={`nav-login-btn ${currentMode === 'login' ? 'active' : ''}`} 
              onClick={() => onNavigate('login')}
              title="ログイン"
              aria-label="ログイン"
            >
              ログイン
            </button>
            <button 
              className={`nav-signup-btn ${currentMode === 'signup' ? 'active' : ''}`} 
              onClick={() => onNavigate('signup')}
              title="新規登録"
              aria-label="新規登録"
            >
              新規登録
            </button>
            <button 
              className={`nav-profile-btn mobile-only-profile-btn ${isLoggedIn ? 'logged-in' : ''}`} 
              onClick={() => {
                if (isLoggedIn) {
                  onNavigate('landing');
                } else {
                  onNavigate('login');
                }
              }}
              title={isLoggedIn ? 'プロフィール' : 'ログイン'}
              aria-label={isLoggedIn ? 'プロフィール' : 'ログイン'}
            >
              <svg viewBox="0 0 24 24" className="profile-icon" aria-hidden="true">
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5.5 18.5a6.5 6.5 0 0 1 13 0" />
              </svg>
            </button>
          </div>
        ) : (
          /* 💡 ログイン済みの時：プロフィール＆ログアウト表示 */
          <div className="sidebar-profile-box">
            <div className="profile-info">
              <div className="profile-avatar">👤</div>
              <div className="profile-details">
                <span className="profile-name">ゲストユーザー</span>
                <span className="profile-status">Premium 会員</span>
              </div>
            </div>
            <button className="sidebar-logout-btn" onClick={onLogout}>
              ログアウト
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}