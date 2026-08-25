"use client";

import { useCallback, useEffect, useState } from "react";

type ModelGalleryProps = {
  images: string[];
  labels: string[];
  modelName: string;
};

export default function ModelGallery({ images, labels, modelName }: ModelGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];

  const move = useCallback((direction: number) => {
    setActiveIndex((current) => current === null ? 0 : (current + direction + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const closeOrMove = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOrMove);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOrMove);
    };
  }, [activeIndex, move]);

  return (
    <>
      <div className={`model-gallery-grid gallery-count-${images.length}`}>
        {images.map((image, index) => (
          <figure key={image}>
            <button type="button" onClick={() => setActiveIndex(index)} aria-label={`Ampliar ${labels[index]} da ${modelName}`}>
              <img src={image} alt={`${modelName} - ${labels[index]}`} loading={index === 0 ? "eager" : "lazy"} />
              <span className="gallery-zoom" aria-hidden="true">+</span>
            </button>
            <figcaption>{labels[index]}</figcaption>
          </figure>
        ))}
      </div>

      {activeImage && activeIndex !== null && (
        <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={`Foto ampliada da ${modelName}`} onClick={() => setActiveIndex(null)}>
          <div className="image-lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button className="image-lightbox-close" type="button" aria-label="Fechar foto ampliada" title="Fechar" onClick={() => setActiveIndex(null)}>×</button>
            <button className="image-lightbox-arrow previous" type="button" aria-label="Foto anterior" title="Foto anterior" onClick={() => move(-1)}>‹</button>
            <img src={activeImage} alt={`${modelName} - ${labels[activeIndex]}`} />
            <button className="image-lightbox-arrow next" type="button" aria-label="Próxima foto" title="Próxima foto" onClick={() => move(1)}>›</button>
            <div className="image-lightbox-caption"><strong>{labels[activeIndex]}</strong><span>{activeIndex + 1} / {images.length}</span></div>
          </div>
        </div>
      )}
    </>
  );
}
