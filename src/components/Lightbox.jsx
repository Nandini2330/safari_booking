import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ isOpen, images, currentIndex, onClose, onPrev, onNext }) {
  const handleKey = useCallback((e) => {
    if (!isOpen) return;
    if (e.key === 'Escape')      onClose();
    if (e.key === 'ArrowLeft')   onPrev();
    if (e.key === 'ArrowRight')  onNext();
  }, [isOpen, onClose, onPrev, onNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else        document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen || currentIndex === null || !images || images.length === 0) return null;

  const item = images[currentIndex];
  const src  = item?.src || item?.image || '';
  const title = item?.title || '';
  const category = item?.category || '';

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/93 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Content area — stop propagation so clicking image doesn't close */}
      <div
        className="relative max-w-5xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-50"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image */}
        <div className="w-full max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl bg-stone-900">
          <img
            src={src}
            alt={title}
            className="w-full h-full object-contain max-h-[80vh]"
          />
        </div>

        {/* Caption */}
        {(title || category) && (
          <div className="mt-4 text-center">
            {category && (
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#DDB64C] uppercase">{category}</span>
            )}
            {title && (
              <p className="text-white text-sm font-medium mt-0.5">{title}</p>
            )}
          </div>
        )}

        {/* Counter */}
        <p className="mt-2 text-white/40 text-xs">
          {currentIndex + 1} / {images.length}
        </p>
      </div>

      {/* Prev / Next */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/12 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur transition-all z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/12 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur transition-all z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}
    </div>
  );
}
