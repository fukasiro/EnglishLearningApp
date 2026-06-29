// front/src/features/auth/components/VerifyCodeForm.jsx
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import './VerifyCodeForm.css';

export default function VerifyCodeForm({ email, name, onVerifySuccess }) {
  const [code, setCode] = useState('');
  const { verifyEmailCode, loading, message } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code || !email) return;
    
    const result = await verifyEmailCode({ email, code });
    
    // 💡 修正ポイント：resultがある、またはメッセージに「作成しました」「成功」などのキーワードが含まれたら成功とみなす
    const isSuccess = result || (message && (message.includes('作成しました') || message.includes('成功')));
    
    if (isSuccess && onVerifySuccess) {
      // 1. サーバーからトークンが返ってきている場合はそれを使い、無ければ自動ログイン用のダミーを割り当てる
      const token = (result && typeof result === 'object' ? (result.token || result.data?.token) : null) 
                    || 'auto_login_token_after_verify';
      
      // 2. 登録時に入力したユーザー名（name）を引き継ぐ
      const userName = name || (result && typeof result === 'object' ? result.user?.name : null) || email.split('@')[0];
      
      // 💡 親（SignUpForm -> App.jsx）の handleAuthSuccess を一撃で発火させる
      onVerifySuccess(token, userName);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="verify-form">
      <div className="verify-header">
        <p className="verify-subtitle">
          {email} に送信された6桁の認証コードを入力してください。
        </p>
      </div>

      <div className="verify-alert">
        <p>コードは30分以内に有効です。届かない場合は迷惑メールフォルダを確認してください。</p>
      </div>

      <div className="form-input-group">
        <Input
          type="text"
          placeholder="認証コードを入力"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
          className="verify-input"
        />
      </div>

      <div className="form-button-group">
        <Button type="submit" variant="primary">
          {loading ? '確認中...' : '認証してアカウントを作成'}
        </Button>
      </div>

      {/* 画面遷移が走るため、成功時はメッセージを隠し、エラーのみを表示 */}
      {message && !message.includes('作成しました') && !message.includes('成功') && (
        <p className="verify-message">{message}</p>
      )}
    </form>
  );
}