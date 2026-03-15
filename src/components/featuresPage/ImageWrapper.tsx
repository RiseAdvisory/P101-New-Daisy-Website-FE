import Image from 'next/image';
import { CSSProperties } from 'react';

interface ImageWrapperProps {
  src: string;
  alt: string;
  stylePicture?: CSSProperties;
  sizes?: string;
  className?: string;
  zIndex?: string;
}

/**
 * Reusable wrapper for feature images that applies consistent padding,
 * object-fit: contain, and the stylePicture overrides from feature data.
 */
export function ImageWrapper({
  src,
  alt,
  stylePicture,
  sizes = '(max-width: 768px) 100vw, 50vw',
  className = 'absolute inset-0',
  zIndex = 'z-20',
}: ImageWrapperProps) {
  return (
    <div
      className={`${className} ${zIndex}`}
      style={{ padding: '24px', ...stylePicture }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="!relative w-full h-full"
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}
