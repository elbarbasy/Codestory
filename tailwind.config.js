module.exports = {
  content: [
    './src/app/**/*.{ts,tsx,js,jsx}',
    './src/components/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        dark: '#0F172A',
        background: '#F8FAFC',
        'secondary-text': '#64748B',
        border: '#E2E8F0'
      },
      boxShadow: {
        soft: '0 6px 20px rgba(2,6,23,0.08)'
      },
      borderRadius: {
        btn: '16px',
        card: '20px'
      }
    }
  },
  plugins: []
};
