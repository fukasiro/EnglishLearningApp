import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginWithEmail, loading, message } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    loginWithEmail(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <Input
        type="email"
        placeholder="Eメールまたはユーザー名"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" variant="primary">
        {loading ? '処理中...' : 'ログイン'}
      </Button>

      {message && <p className="status-message">{message}</p>}
    </form>
  );
}
