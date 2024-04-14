'use client';

import React, { useState, MouseEvent } from 'react';
import styles from './App.module.css'; // CSSモジュールをインポート

type DataType = {
  position: string;
  left: string;
  top: string;
  width: string;
  height: string;
  backgroundColor: string;
  borderRadius?: string;
  animation?: string;
}

interface AppProps {
  title: string;
}

const comments = ["笑顔が全て", "HAPPY", "Let’s communication"];
const colors = ["#ff000066", "#00ff0066", "#0000ff66", "#ffff0066", "#ff00ff66", "#00ffff66"]; // 色の配列

const App: React.FC<AppProps> = ({ title }) => {
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<DataType[]>([]);
  const [currentComment, setCurrentComment] = useState<string>("Welcome!");

  const shuffleComments = () => {
    const index = Math.floor(Math.random() * comments.length);
    setCurrentComment(comments[index]);
  };

  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)]; // ランダムな色を選択
  const getRandomSize = () => `${50 + Math.random() * 150}px`; // 50pxから200pxのランダムな大きさを生成

  const doClick = (event: MouseEvent<HTMLDivElement>) => {
    const size = getRandomSize(); // 同じ値でwidthとheightを設定
    const ob: DataType = {
      position: "absolute",
      left: `${event.pageX - parseInt(size) / 2}px`, // 中心に配置
      top: `${event.pageY - parseInt(size) / 2}px`,
      width: size,
      height: size,
      backgroundColor: getRandomColor(),
      borderRadius: "50%",
      animation: "pop 0.5s ease-out forwards"
    };
    setData(currentData => [...currentData, ob]);
    setCount(currentCount => currentCount + 1);
    shuffleComments();
  };

  return (
    <div className={styles.App}>
      <h1>{title}</h1>
      <p className={styles.comment}>{currentComment}</p>
      <div className={styles.canvas} onClick={doClick}>
        {data.map((item, key) => (
          <div style={item} key={key}></div>
        ))}
      </div>
    </div>
  );
}

export default App;
