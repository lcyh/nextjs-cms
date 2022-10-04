module.exports = [
  "strapi::errors",
  "strapi::security",
  {
    //跨域配置
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
      origin: [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:1337",
        "http://127.0.0.1:1337",
      ],
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
