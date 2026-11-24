export default {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/demo', destination: '/live-demo', permanent: true }
    ];
  }
};
