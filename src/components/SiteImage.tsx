import { useState, type ImgHTMLAttributes } from "react";

type SiteImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "onError">;

export function SiteImage({ alt, className = "", loading = "lazy", ...props }: SiteImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div role="img" aria-label={alt} className={`${className} bg-muted`} />;
  }

  return (
    <img
      {...props}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => setFailed(true)}
    />
  );
}
