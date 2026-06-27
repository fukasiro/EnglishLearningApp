import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

export default function VerifyCodeForm({ email, name, onVerifySuccess }) {
  const [code, setCode] = useState('');
  const { verifyEmailCode, loading, message } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code || !email) return;
    const result = await verifyEmailCode({ email, name, code });
    if (result && onVerifySuccess) {
      onVerifySuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="status-message">{email} に送信されたコードを入力してください。</div>
      <Input
        type="text"
        placeholder="認証コード"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
      />
      <Button type="submit" variant="primary">
        {loading ? '処理中...' : '認証してアカウントを作成'}
      </Button>

      {message && <p className="status-message">{message}</p>}
    </form>
  );
}
