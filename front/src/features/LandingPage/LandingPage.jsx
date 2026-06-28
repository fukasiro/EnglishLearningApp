// front/src/features/LandingPage/LandingPage.jsx
import React from 'react';
import './LandingPage.css';

export default function LandingPage({ onStartLearning }) {
  return (
    <div className="landing-container">
      <div className="landing-main">
        {/* 💡 もともとここにあった <aside className="landing-sidebar">... </aside> を削除しました */}

        {/* 右側：コンテンツ表示エリア */}
        <main className="landing-content">
          {/* ヒーローセクションカード */}
          <div className="hero-card">
            <div className="badge">Beta Version v1.0</div>
            <h1 className="hero-title">AIで、TOEICの壁をハックする。</h1>
            <p className="hero-subtitle">
              最先端のAIコーチが、あなたのスコアアップに必要な弱点を瞬時に分析。今日から始めるスマートな英語学習。
            </p>
            <div className="hero-actions">
              <button className="btn-start" onClick={onStartLearning}>
                今すぐ無料で体験する 🚀
              </button>
              <button className="btn-flow" disabled>
                学習の流れを見る
              </button>
            </div>
          </div>

          {/* 機能解説グリッド（2カラム） */}
          <div className="info-grid">
            <div className="info-card">
              <h3>🎯 toeichackerの特徴</h3>
              <ul>
                <li>24時間いつでも即レス対応のAI会話コーチング</li>
                <li>あなたの解答の「なぜ間違えたか」をピンポイントで言語化</li>
                <li>現在のレベルに最適化されたスマート英単語サプリメント</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>⚡ ロードマップ</h3>
              <ul>
                <li>AIによる発音・スピーキングのリアルタイム評価機能</li>
                <li>新形式問題に対応した高精度シミュレーション模試</li>
                <li>モチベーションを維持する学習進捗ダッシュボード</li>
              </ul>
            </div>
          </div>
        </main>
      </div>

    </div>
  );
}