"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './daily.module.css'; // CSSモジュールをインポート

const DailyReportPage: React.FC = () => {
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
            <button className="btn text-lg mr-7">記録する</button>

          </Link>
          <Link href="/weekly" passHref>
          <button className="btn btn-active btn-primary text-lg mr-7">レポートをみる</button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-10 bg-gray-100">
        <div className={`${styles.card} card mx-auto`}>
          <div className="card-body">
            <h2 className="text-center text-3xl font-bold mb-4">今日のアクション振り返り</h2>
            <p className="text-center text-xl mb-4 italic">今日は積極的にコミュニケーションをとりながら、仕事の進捗状況を報告しましたね。</p>
            <div className={styles.submitButton}>
              <input type="submit" value="ホームに戻る" className={styles.inputSubmit} />
            </div>
          </div>
        </div>
      </div>
      <footer className={`${styles.footer} footer items-center p-4`}>
        <aside className="items-center grid-flow-col">
          <p className="text-lg">Copyright © 2024 - All rights reserved team IKOI</p>
        </aside>
      </footer>
    </div>
  );
};

export default DailyReportPage;
