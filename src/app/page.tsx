'use client';

import { useEffect } from 'react';

export default function Redirect() {
  useEffect(() => {
    // Redirect to Zeffy campaign page
    window.location.href = 'https://www.zeffy.com/en-US/donation-form/support-ukiah-senior-center';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#f7faf9',
      padding: '2rem'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        <h1 style={{ 
          fontSize: '2rem', 
          color: '#2C7A7B',
          marginBottom: '1rem',
          fontWeight: 'bold'
        }}>
          Redirecting to Donation Page...
        </h1>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#444',
          marginBottom: '2rem'
        }}>
          You&apos;re being redirected to our secure donation form.
        </p>
        <div style={{
          display: 'inline-block',
          width: '50px',
          height: '50px',
          border: '4px solid #E5E7EB',
          borderTop: '4px solid #2C7A7B',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <p style={{ 
          fontSize: '0.875rem', 
          color: '#6B7280',
          marginTop: '2rem'
        }}>
          If you&apos;re not redirected automatically,{' '}
          <a 
            href="https://www.zeffy.com/en-US/donation-form/support-ukiah-senior-center"
            style={{
              color: '#2C7A7B',
              textDecoration: 'underline',
              fontWeight: '600'
            }}
          >
            click here
          </a>
        </p>
      </div>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
