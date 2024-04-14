"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './weekly.module.css'; // CSSモジュールをインポート

const WeeklyReportPage: React.FC = () => {
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

      
      {/* body */}  
      <div className="flex flex-col items-center justify-center p-10 bg-gray-100">
        <div className={`${styles.card} card mx-auto`}>
          <div className="card-body">
            <h2 className="text-center text-3xl font-bold mb-6">先週のアクションレポート</h2>
            <p className="text-center text-xl mb-10 italic">今週は色々な人に挨拶をしてコミュニケーションをとりましたね。今週は積極的に質問するようにしましょう。</p>
            <p className="text-center text-xl mb-6">【今週の強化アクション】</p>
            <p className="text-center mt-4 text-2xl font-bold pt-50 mb-10">遮らずに相手の話を聞こう</p>
            <div className={styles.progressBarContainer}>
              <div className={`${styles.progressBar}`} style={{ width: '40%' }}>
                40%
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={`${styles.footer} footer items-center p-4`}>
        <aside className="items-center grid-flow-col">


          
          {/* Footer content */}
          <p className="text-lg">Copyright © 2024 - All rights reserved team IKOI</p>
        </aside>
      </footer>
    </div>
  );
};

export default WeeklyReportPage;
