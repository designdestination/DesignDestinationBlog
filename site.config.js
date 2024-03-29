const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Akilesh Varma",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Principal Architect / Entrepreneur",
    bio: "🏛️ Principal Architect specializing in innovative design solutions and sustainable architecture, dedicated to shaping environments that inspire and endure. Passionate about merging creativity with functionality to create spaces that enrich lives. 🌱",
    email: "mail.designdestination@gmail.com",
    linkedin: "akilesh-varma/",
    github: "designdestination",
    instagram: "designdestinationfirm",
  },
  projects: [
    {
      name: `📃 Portfolio`,
      href: "https://design-destination-blog.vercel.app/",
    },
  ],

  // blog setting (required)
  blog: {
    title: "Design Destination Blog",
    description: "Welcome to Design Destination Blog!",
  },

  // CONFIG configration (required)
  link: "https://design-destination-blog.vercel.app/",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "designdestination/DesignDestinationBlog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  //revalidateTime: 21600 * 7, // revalidate time for [slug], index
  revalidateTime: 1,
}

module.exports = { CONFIG }
