'use client';

export default function LoadingView() {
  // This page shows the loading view WITHOUT redirecting
  // Perfect for previewing the redirect screen
  
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
        <div style={{
          marginTop: '3rem',
          padding: '1rem',
          backgroundColor: '#fef3c7',
          borderRadius: '0.5rem',
          border: '1px solid #fbbf24'
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: '#92400e',
            margin: 0
          }}>
            ℹ️ <strong>Preview Mode:</strong> This page shows the redirect screen without actually redirecting. The main page redirects automatically.
          </p>
        </div>
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
