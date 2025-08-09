'use client';
import { useState, useCallback, useEffect, CSSProperties } from 'react';
import styles from './ImageWithLoader.module.css';

type Props = {
  src: string;
  alt: string;
  wrapperStyle?: CSSProperties;
  imgStyle?: CSSProperties;
  loaderStyle?: CSSProperties;
  loaderImgStyle?: CSSProperties;
  loaderSrc?: string;
  fallbackSrc?: string;
  lazy?: boolean;
  className?: string;
  imgClassName?: string;
  onLoad?: () => void;
  onError?: () => void;
};

export function ImageWithLoader({
  src,
  alt,
  wrapperStyle,
  imgStyle,
  loaderStyle,
  loaderImgStyle,
  loaderSrc = '/images/ImageLoader.gif',
  fallbackSrc,
  lazy = true,
  className,
  imgClassName,
  onLoad,
  onError,
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setFailed(false);
  }, [src]);

  const handleLoad = useCallback(() => {
    setTimeout(() => {
      setLoaded(true);
      onLoad?.();
    }, 1000)
  }, [onLoad]);

  const handleError = useCallback(() => {
    setFailed(true);
    setLoaded(true);
    onError?.();
  }, [onError]);

  const finalSrc = failed && fallbackSrc ? fallbackSrc : src;

  return (
    <div className={`${styles.wrapper} ${className ?? ''}`} style={wrapperStyle}>
      {!loaded && (
        <div className={styles.loader} style={loaderStyle}>
          {loaderSrc ? <img src={loaderSrc} style={loaderImgStyle} alt="Carregando..." /> : <span>Carregando…</span>}
        </div>
      )}
      <img
        src={finalSrc}
        alt={alt}
        loading={lazy ? 'lazy' : 'eager'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`${styles.img} ${loaded ? styles.imgLoaded : ''} ${imgClassName ?? ''}`}
        style={imgStyle}
        draggable={false} />
    </div>
  );
}
