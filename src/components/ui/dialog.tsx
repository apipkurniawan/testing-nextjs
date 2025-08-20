'use client';

import { useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

interface DialogProps {
  isOpen: boolean;
  closeIcon?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  closeIcon = true,
  children,
  className,
}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup untuk menghapus class saat komponen unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='prd-flex prd-justify-center prd-bg-ocean-overlay prd-bg-opacity-50 prd-items-center prd-overflow-hidden prd-transition-opacity prd-duration-300 prd-animate-fadeIn prd-z-[1000] prd-opacity-100 prd-fixed prd-inset-0'>
      <div
        ref={popupRef}
        className={cn(
          'animate-scaleIn prd-bg-white prd-font-bca prd-rounded-xl prd-grid prd-p-8 prd-border prd-min-w-[330px] prd-max-w-[330px] prd-border-slate-200 prd-relative prd-transition-transform prd-duration-300 prd-ease-in-out sm:prd-min-w-[400px] sm:prd-max-w-[400px] prd-transform prd-shadow-lg scale-100',
          className,
        )}
      >
        {/* Close Button */}
        {closeIcon && (
          <button
            onClick={onClose}
            className='prd-font-bold prd-text-ocean-dark-20 hover:prd-text-ocean-dark-30 prd-absolute prd-right-3 prd-top-2'
          >
            &#10005;
          </button>
        )}

        {children}
      </div>
    </div>
  );
};

export default Dialog;
