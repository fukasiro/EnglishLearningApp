import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

export default function SignUpForm({ onSignupSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUpWithEmail, loading, message } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    const result = await signUpWithEmail({ name, email, password });
    if (result && onSignupSuccess) {
      onSignupSuccess(email, name);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <Input
        type="text"
        placeholder="名前（任意）"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="メールアドレス"
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
        {loading ? '処理中...' : 'アカウントを作成（無料）'}
      </Button>

      {message && <p className="status-message">{message}</p>}
    </form>
  );
}
