'use client';

import styles from './AppLinks.module.css';

export default function AppLinks() {
  return (
    <div className={styles.linkAppContainer}>
      <a
        href="https://play.google.com/store/apps/details?id=com.litoralnamesa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/btn_app_store.png" alt="Baixar na App Store" />
      </a>

      <a
        href="https://apps.apple.com/app/litoral-na-mesa/id6446021234"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/btn_google_play.png" alt="Disponível no Google Play" />
      </a>
    </div>
  );
}
