module.exports = {
    async headers() {
      return [
        {
          // Apply these headers to all routes (pages, API routes, etc.)
          source: '/(.*)',  // This applies to all routes in your app
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: (req) => {
                const allowedOrigins = ['http://localhost:5173'];
                const origin = req.headers.get('origin');
                return allowedOrigins.includes(origin) ? origin : allowedOrigins[0]; // Fallback to https://example.com if origin is not allowed
              },
            },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'GET, POST, OPTIONS',
            },
            {
              key: 'Access-Control-Allow-Headers',
              value: 'Content-Type, Authorization',
            },
          ],
        },
      ];
    },
  };
  