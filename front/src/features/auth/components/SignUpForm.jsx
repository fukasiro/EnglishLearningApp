// front/src/features/auth/components/SignUpForm.jsx
import { useState } from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import './SignUpForm.css'; // 専用のCSSを読み込む

export default function SignUpForm({ onNavigateToLanding, onNavigateToLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 登録ロジック
  };

  return (
    <div className="auth-page-container">
      <main className="main-content-card">
        
        <button className="back-to-home-btn" onClick={onNavigateToLanding}>
          ← ホームに戻る
        </button>

        <h1 className="page-title">アカウントを作ろう！</h1>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-input-group">
            <Input
              type="email"
              placeholder="Eメールアドレス"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-input-group">
            <Input
              type="password"
              placeholder="パスワードを作成"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-button-group">
            <Button type="submit" variant="primary">
              アカウントを作成
            </Button>
          </div>

          <p className="signup-redirect-text">
            すでにアカウントをお持ちですか？{' '}
            <span className="signup-link" onClick={onNavigateToLogin}>
              ログインする
            </span>
          </p>
        </form>

      </main>
    </div>
  );
}