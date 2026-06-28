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
        >
          <span className="icon">🏠</span> ダッシュボード
        </button>

        {/* 📚 英単語学習 */}
        <button 
          className={`sidebar-item ${activeMenu === 'chat' ? 'active' : ''}`}
          onClick={() => {
            onNavigate('chat');
            setActiveMenu('chat');
          }}
        >
          <span className="icon">📚</span> 英単語学習
        </button>

        {/* 🧠 文法学習 */}
        <button 
          className={`sidebar-item ${activeMenu === 'grammar' ? 'active' : ''}`}
          onClick={() => {
            onNavigate('grammar');
            setActiveMenu('grammar');
          }}
        >
          <span className="icon">🧠</span> 文法学習
        </button>

        {/* 🎧 リスニング */}
        <button 
          className={`sidebar-item ${activeMenu === 'vocab' ? 'active' : ''}`}
          onClick={() => {
            onNavigate('vocab');
            setActiveMenu('vocab');
          }}
        >
          <span className="icon">🎧</span> リスニング
        </button>

        {/* ✍️ ライティング */}
        <button 
          className={`sidebar-item ${activeMenu === 'analysis' ? 'active' : ''}`}
          onClick={() => {
            onNavigate('analysis');
            setActiveMenu('analysis');
          }}
        >
          <span className="icon">✍️</span> ライティング
        </button>

        {/* 📝 総合テスト（追加項目） */}
        <button 
          className={`sidebar-item ${activeMenu === 'test' ? 'active' : ''}`}
          onClick={() => {
            // 現状は真っ白防止のため暫定的にchatなどに飛ばすか、必要に応じてApp.jsxに分岐を作ってください
            onNavigate('chat'); 
            setActiveMenu('test');
          }}
        >
          <span className="icon">📝</span> 総合テスト
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
            >
              ログイン
            </button>
            <button 
              className={`nav-signup-btn ${currentMode === 'signup' ? 'active' : ''}`} 
              onClick={() => onNavigate('signup')}
            >
              新規登録
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