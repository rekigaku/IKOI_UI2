"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './report.module.css'; // CSSモジュールをインポート

const DailyReport: React.FC = () => {
  return (
    <div className="flex flex-col mx-auto p-10">
     {/* Header content */}
     <div className={`navbar ${styles.navbar}`}>
        <div className="navbar-start">
          <div className="ml-4 lg:ml-12">
            <Image src="/ikoi.png" alt="IKOI logo" width={150} height={50} />
          </div>
        </div>        
        <div className="navbar-end ">
          <Link href="/report" passHref>
            <button className="btn btn-active btn-primary text-lg mr-7">記録する</button>

          </Link>
          <Link href="/weekly" passHref>
          
          <button className="btn text-lg mr-7">レポートをみる</button>
          </Link>
        </div>
      </div>

      {/* Body content */}
      <div className="flex flex-col items-center justify-center p-10 bg-gray-100">
        <div className="card bg-white text-neutral-content" style={{ width: '980px' }}>
          <div className="card-body">
            <h2 className="text-2xl text-center font-semibold mb-6">部下へのアクション</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">

            <button className="btn btn-secondary">あいさつした</button>
            <button className="btn btn-secondary">笑顔で接した</button>
            <button className="btn btn-secondary">遮らずに相手の話を聞いた</button>
            <button className="btn btn-secondary">目をみて話した</button>
            <button className="btn btn-secondary">状況や進捗状態の<br /> 声かけをした</button>
            </div>
          </div>
        </div>
      </div>



      <div className="flex flex-col items-center justify-center p-10 bg-gray-100">
        <div className="card bg-white text-neutral-content" style={{ width: '980px' }}>
          <div className="card-body">
            <h2 className="text-2xl text-center font-semibold mb-6">部下からのアクション</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">

            <button className="btn btn-accent">あいさつしてくれた</button>
            <button className="btn btn-accent">笑顔で接してくれた</button>
            <button className="btn btn-accent">あいづちを打ってくれた</button>
            <button className="btn btn-accent">目をみて話してくれた</button>
            <button className="btn btn-accent">質問をしてくれた</button>
            </div>
          </div>
        </div>
      </div>




        <div className={styles.submitContainer}>
        <button className="btn btn-wide btn-primary text-xl">登録する</button>
        </div>
      

      {/* Footer content */}
      <footer className={`footer items-center p-4 ${styles.footer}`}>
        <aside className="items-center grid-flow-col">
          <p className="text-lg">Copyright © 2024 - All right reserved team IKOI</p>
        </aside>
      </footer>
    </div>
  );
};

export default DailyReport;

