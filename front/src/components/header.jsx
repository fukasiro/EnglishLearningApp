// front/src/components/header.jsx
import React from 'react';
import './header.css'; // 💡 小文字の header.css をインポート

export default function Header({ currentMode, onNavigateToLogin, onNavigateToSignUp, onNavigateToHome }) {
  return (
    <header className="landing-header">
      {/* ロゴをクリックしたらトップ（landing）に戻ります */}
      <div className="header-logo" onClick={onNavigateToHome} style={{ cursor: 'pointer' }}>
        toeichacker
      </div>
      
      <div className="header-actions">
        <button className="mode-toggle-btn">ダーク</button>

        {/* 1. トップ（ランディング）画面のときは両方表示 */}
        {currentMode === 'landing' && (
          <>
            <button className="nav-login-btn" onClick={onNavigateToLogin}>ログイン</button>
            <button className="nav-signup-btn" onClick={onNavigateToSignUp}>新規登録</button>
          </>
        )}

        {/* 2. ログイン画面のときは「新規登録」だけを表示 */}
        {currentMode === 'login' && (
          <button className="nav-signup-btn" onClick={onNavigateToSignUp}>新規登録</button>
        )}

        {/* 3. 新規登録画面のときは「ログイン」だけを表示 */}
        {currentMode === 'signup' && (
          <button className="nav-login-btn" onClick={onNavigateToLogin}>ログイン</button>
        )}

        {/* 4. メイン機能（チャットなど）のときは「ログアウト」を表示 */}
        {currentMode === 'chat' && (
          <button className="nav-login-btn" onClick={onNavigateToHome}>ログアウト</button>
        )}
      </div>
    </header>
  );
}