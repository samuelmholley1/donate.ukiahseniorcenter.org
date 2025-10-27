'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { ZEFFY_EMBED_URL } from '@/lib/copy';

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
      // For Google Analytics / GTM
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 transition-opacity duration-300"
      onClick={handleOverlayClick}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className="relative bg-white rounded-lg shadow-xl w-[92vw] max-w-[720px] p-6 min-h-[580px] flex flex-col transform transition-all duration-300 ease-out motion-reduce:transform-none motion-reduce:transition-none"
        style={{
          transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(10px)',
          opacity: isOpen ? 1 : 0,
        }}
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Close donation modal"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Tip Instruction */}
        <div className="p-4 bg-gray-50 border-b border-gray-200 rounded-t-lg">
          <p className="text-sm text-gray-700">
            Tip is optional. You can adjust or set it to $0 during checkout.
          </p>
        </div>

        {/* Iframe Container */}
        <div className="relative flex-1 bg-gray-50 rounded-b-lg overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin motion-reduce:animate-none"></div>
                <p className="text-sm text-gray-600">Loading donation form...</p>
              </div>
            </div>
          )}
          {hasLoaded && (
            <iframe
              src={ZEFFY_EMBED_URL}
              className="w-full h-full border-0"
              title="Zeffy donation form"
              onLoad={() => setIsLoading(false)}
              allow="payment"
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
