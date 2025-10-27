'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { COPY, ZEFFY_EMBED_URL } from '@/lib/copy';

interface ZeffyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ZeffyModal({ isOpen, onClose }: ZeffyModalProps) {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Track analytics events
  const logEvent = useCallback((eventName: string) => {
    if (typeof window !== 'undefined') {
      if (window.dataLayer) {
        window.dataLayer.push({ event: eventName });
      }
      console.log(`[Analytics] ${eventName}`);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleClose = useCallback(() => {
    logEvent('donate_close');
    onClose();
  }, [onClose, logEvent]);

  useEffect(() => {
    if (!isOpen) return;

    // Lazy load the embed on first open
    if (!hasLoaded) {
      setHasLoaded(true);
    }

    // Store the element that triggered the modal
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Log modal open event
    logEvent('donate_open');

    // Prevent body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus the close button when modal opens
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    // Handle Esc key
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleEsc);
      
      // Return focus to trigger element
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [isOpen, logEvent, handleClose, hasLoaded]);

  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    modal.addEventListener('keydown', handleTab as EventListener);
    return () => modal.removeEventListener('keydown', handleTab as EventListener);
  }, [isOpen]);

  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  }, [handleClose]);

  if (!mounted || !isOpen) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-50 grid place-items-center p-4"
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'blur(4px)' : 'none'
      }}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="donate-modal-title"
      data-testid="donate-modal"
    >
      <div
        ref={modalRef}
        className="max-w-[760px] w-[92vw] rounded-xl shadow-xl p-6"
        style={{ 
          backgroundColor: 'var(--card)',
          borderRadius: 'var(--radius)'
        }}
      >
        {/* Visually hidden title for a11y */}
        <h2 id="donate-modal-title" className="sr-only">
          Make Your Donation
        </h2>

        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2"
          aria-label="Close donation modal"
        >
          <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Tip Instruction */}
        <div className="text-xs text-neutral-600 mb-3">
          {COPY.modalTipInstruction}
        </div>

        {/* Iframe Container */}
        <div className="relative min-h-[600px] rounded-lg overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 border-4 border-neutral-200 rounded-full animate-spin" style={{ borderTopColor: 'var(--accent)' }}></div>
                <p className="text-sm text-neutral-600">Loading donation form...</p>
              </div>
            </div>
          )}
          {hasLoaded && (
            <iframe
              src={ZEFFY_EMBED_URL}
              className="w-full h-full border-0"
              style={{ minHeight: '600px' }}
              title="Zeffy donation form"
              onLoad={() => setIsLoading(false)}
              allow="payment"
              data-testid="zeffy-frame"
            />
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

// Type declaration for dataLayer
declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}
