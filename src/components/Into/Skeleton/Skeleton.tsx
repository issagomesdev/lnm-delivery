import clsx from "clsx";
import styles from "./Skeleton.module.css";

type Props = {
  width?: number | string;
  height?: number | string;
  circle?: boolean;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
};

export default function Skeleton({
  width,
  height,
  circle,
  className,
  style,
  ...rest
}: Props) {
  return (
    <span
      className={clsx(styles.skeleton, circle && styles.circle, className)}
      style={{ width, height, ...style }}
      aria-busy="true"
      aria-live="polite"
      {...rest}
    />
  );
}
