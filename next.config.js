
module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: '/:path*',
        destination: `http://127.0.0.1:5780/api/v1/:path*`,
      },
    ];
  };
  return {
    rewrites,
  };
};
