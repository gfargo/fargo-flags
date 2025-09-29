import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Fargo Flags Documentation - Complete Guide'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 25% 25%, #511281 0%, transparent 50%), radial-gradient(circle at 75% 75%, #7c3aed 0%, transparent 50%)',
            opacity: 0.1,
          }}
        />
        
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          {/* Logo/Icon */}
          <div
            style={{
              width: 100,
              height: 100,
              background: 'linear-gradient(135deg, #511281 0%, #7c3aed 100%)',
              borderRadius: 25,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 50,
              fontWeight: 'bold',
              marginBottom: 30,
            }}
          >
            📚
          </div>
          
          {/* Title */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #511281 0%, #7c3aed 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: 15,
            }}
          >
            Fargo Flags
          </div>
          
          {/* Subtitle */}
          <div
            style={{
              fontSize: 48,
              color: '#475569',
              marginBottom: 20,
            }}
          >
            Documentation
          </div>
          
          {/* Description */}
          <div
            style={{
              fontSize: 24,
              color: '#64748b',
              maxWidth: 800,
              lineHeight: 1.3,
              marginBottom: 30,
            }}
          >
            Complete guide to installation, usage, CLI tools, and best practices
          </div>
          
          {/* Topics */}
          <div
            style={{
              display: 'flex',
              gap: 30,
              fontSize: 18,
              color: '#475569',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span>📦</span>
              <span>Installation</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span>🛠️</span>
              <span>CLI Tools</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span>⚡</span>
              <span>API Reference</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}