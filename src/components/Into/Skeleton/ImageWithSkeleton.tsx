"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import Skeleton from "./Skeleton";
import styles from "./ImageWithSkeleton.module.css";

type Props = Omit<ImageProps, "fill"> & {
    ratio?: `${number}/${number}` | number;
    rounded?: boolean;
    onLoadComplete?: () => void;
};

export default function ImageWithSkeleton({
    alt,
    src,
    ratio = "1/1",
    rounded = true,
    onLoadComplete,
    className,
    ...imgProps
}: Props) {
    const [loading, setLoading] = useState(true);
    const [failed, setFailed] = useState(false);

    return (
        <div
            className={[
                styles.frame,
                rounded ? styles.rounded : "",
                className ?? ""
            ].join(" ")}
            style={{ aspectRatio: typeof ratio === "number" ? String(ratio) : ratio }}
        >
            {loading && !failed && (
                <Skeleton className={[
                    styles.overlay,
                    rounded ? styles.rounded : ""
                ].join(" ")} aria-label="Carregando imagem" />
            )}

            {!failed && (
                <Image
                    {...imgProps}
                    alt={alt}
                    src={src}
                    fill
                    onLoad={() => {
                        setTimeout(() => {
                            setLoading(false)
                            onLoadComplete?.();
                        }, 1000)
                    }}
                    onError={() => {
                        setFailed(true);
                        setLoading(false);
                    }}
                    className={`${styles.img} ${!loading ? styles.imgLoaded : ''}`}
                />
            )}

            {failed && (
                <div className={styles.fallback}>
                    <span>Imagem indisponível</span>
                </div>
            )}
        </div>
    );
}