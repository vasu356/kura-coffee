import { useState } from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export function ImageWithFallback({ src, alt, className, style, ...props }: Props) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className={className} style={{ background: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}>
        <span style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>{alt}</span>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} style={style} onError={() => setError(true)} loading="lazy" {...props} />;
}
