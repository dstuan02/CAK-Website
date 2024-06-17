module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.hallstattvietnam.com.vn",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "api-crmcak.vps.vn",
        pathname: "**",
      },
    ],
    // domains: ['localhost'],
  },
  async rewrites() {
    return [
      {
        source: "/gioi-thieu",
        destination: "/introduce-eurotravel",
      },
      {
        source: "/chinh-sach-bao-mat",
        destination: "/private-policy",
      },
      {
        source: "/dieu-khoan-dich-vu",
        destination: "/terms-policy",
      },
      {
        source: "/chinh-sach-hoan-huy-dich-vu",
        destination: "/service-cancellation-policy",
      },
      {
        source: "/phuong-thuc-thanh-toan",
        destination: "/payment-method",
      },
      {
        source: "/du-lich/:slug*",
        destination: "/tour/:slug*",
      },
      {
        source: "/lien-he/:slug*",
        destination: "/contact/:slug*",
      },
      {
        source: "/dich-vu-marketing/:slug*",
        destination: "/marketing/:slug*",
      },
      {
        source: "/thiet-ke-website/:slug*",
        destination: "/marketing/:slug*",
      },
      {
        source: "/dich-vu/:slug*",
        destination: "/software/:slug*",
      },
      {
        source: "/tin-tuc",
        destination: "/blogs/",
      },
      {
        source: "/ve-cak",
        destination: "/about-us/",
      },
      {
        source: "/lien-he",
        destination: "/contact/",
      },
    ];
  },
};
