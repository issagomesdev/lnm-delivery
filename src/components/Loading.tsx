'use client';
import loadingStyles from './Loading.module.css';

export const Loading = () => {
  return (
    <div className={loadingStyles.overlay}>
      <img className={loadingStyles.bouncingImage} src="/images/logo_without_text.png" alt="Loading..." />
      <div className={loadingStyles.loadingText}>Carregando...</div>
    </div>
  );
};
