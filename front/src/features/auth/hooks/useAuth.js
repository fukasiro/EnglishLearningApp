import { useState } from 'react';

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);

  const loginWithEmail = async (email, password) => {
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        setMessage(data.detail || data.message || 'ログインに失敗しました。');
        return null;
      }

      setMessage(data.message);
      setUser({ email: data.email });
      return data;
    } catch (error) {
      setMessage('サーバー接続に失敗しました。');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const signUpWithEmail = async ({ name, email, password }) => {
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://127.0.0.1:8000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        setMessage(data.detail || data.message || 'アカウント作成に失敗しました。');
        return null;
      }

      setMessage(data.message);
      return data;
    } catch (error) {
      setMessage('サーバー接続に失敗しました。');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const verifyEmailCode = async ({ email, name, code }) => {
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://127.0.0.1:8000/verify-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, code }),
      });
      const data = await response.json();

      if (!response.ok) {
        setMessage(data.detail || data.message || '認証に失敗しました。');
        return null;
      }

      setMessage(data.message);
      setUser({ email: data.email });
      return data;
    } catch (error) {
      setMessage('サーバー接続に失敗しました。');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loginWithEmail, signUpWithEmail, verifyEmailCode, loading, message, user };
}
