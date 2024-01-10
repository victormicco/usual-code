/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.ocp.news",
        port: "",
        pathname: "/2020/04/calculadora-calculando-contas-matematica.jpg",
      },
    ],
  },
};

module.exports = nextConfig;
