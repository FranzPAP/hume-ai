module.exports = {
    async headers() {
      return [
        {
          // Apply these headers to all routes (pages, API routes, etc.)
          source: '/(.*)', // Apply globally
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: 'http://localhost:5173', // Allow multiple origins
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
  