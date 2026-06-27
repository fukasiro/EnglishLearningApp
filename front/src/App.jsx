import { useState } from 'react';
import './App.css';
import LoginForm from './features/auth/components/LoginForm';
import SignUpForm from './features/auth/components/SignUpForm';
import VerifyCodeForm from './features/auth/components/VerifyCodeForm';
import Button from './components/Button';

function App() {
  const [mode, setMode] = useState('login');
  const [signupEmail, setSignupEmail] = useState('');
  const [pendingName, setPendingName] = useState('');
  const isLoginMode = mode === 'login';
  const isVerifyMode = mode === 'verify';

  return (
    <div className="app-viewport">
      <div className="top-navigation">
        <button className="close-btn">×</button>
        <Button
          variant="secondary"
          type="button"
          onClick={() => setMode(isVerifyMode ? 'login' : isLoginMode ? 'signup' : 'login')}
        >
          {isVerifyMode ? 'ログイン' : isLoginMode ? '登録' : 'ログイン'}
        </Button>
      </div>

      <main className="main-content">
        <h1 className="page-title">
          {isLoginMode && 'ログイン'}
          {mode === 'signup' && 'アカウントを作ろう！'}
          {isVerifyMode && '認証コードを入力'}
        </h1>

        {isLoginMode && <LoginForm />}
        {mode === 'signup' && (
          <SignUpForm
            onSignupSuccess={(email, name) => {
              setSignupEmail(email);
              setPendingName(name || '');
              setMode('verify');
            }}
          />
        )}
        {isVerifyMode && (
          <VerifyCodeForm
            email={signupEmail}
            name={pendingName}
            onVerifySuccess={() => setMode('login')}
          />
        )}

        <div className="divider">
          <span>または</span>
        </div>

        <p className="legal-text">
          ログインするとDuolingoの <span>利用規約</span> と <span>プライバシーポリシー</span> に同意したことになります。
        </p>
        <p className="recaptcha-text">
          このサイトはreCAPTCHA Enterpriseにより保護されており、Googleの <span>プライバシー ポリシー</span> と <span>利用規約</span> が適用されます。
        </p>
      </main>
    </div>
  );
}

export default App;
