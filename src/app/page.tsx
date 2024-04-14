"use client"

import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';


const LoginPage = () => {
  const [email, setEmail] = useState(''); // メールアドレスの状態
  const [password, setPassword] = useState(''); // パスワードの状態

  const handleSubmit = async (event) => {
    event.preventDefault(); // デフォルトのフォーム送信を防止
    try {
      // バックエンドにログインリクエストを送信
      const response = await axios.post('ログインAPIのURL', { email, password });
      console.log(response.data);
      // 成功したら、ここで何か処理をする (例: レスポンスに基づいて画面遷移)
    } catch (error) {
      console.error('ログイン失敗', error);
      // エラー処理 (例: エラーメッセージの表示)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="max-w-lg w-full p-8 bg-white rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold mb-8 text-center">IKOI</h1>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="メールアドレス" 
            className="input input-bordered input-lg w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="パスワード" 
            className="input input-bordered input-lg w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            type="submit" 
              className="btn btn-primary btn-lg w-full">

  ログイン
</button>

      
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

