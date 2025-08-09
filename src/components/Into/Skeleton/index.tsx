import Skeleton from "./Skeleton";

export default Skeleton;
export { default as Skeleton } from "./Skeleton";

const srOnly: React.CSSProperties = {
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
};

type SkeletonTextProps = {
  lines?: number;
  lineHeight?: number;
  gap?: number; 
  className?: string;
};

export function SkeletonText({
  lines = 3,
  lineHeight = 12,
  gap = 8,
  className,
}: SkeletonTextProps) {
  return (
    <div style={{ display: "grid", gap }} className={className}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span style={srOnly} aria-live="polite" aria-busy="true">
            Carregando linha {i + 1}
          </span>

          <div style={{ width: "100%" }}>
            <div style={{ height: lineHeight }}>
              <Skeleton width={`100%`} height={lineHeight} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

type SkeletonAvatarProps = {
  size?: number;
  className?: string;
};

export function SkeletonAvatar({ size = 40, className }: SkeletonAvatarProps) {
  return (
    <Skeleton
      circle
      width={size}
      height={size}
      className={className}
      aria-label="Carregando avatar"
    />
  );
}
