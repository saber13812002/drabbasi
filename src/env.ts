export const ENV = {
  name: "Development",
  api: {
    //baseUrl: 'http://localhost:3000',
    baseUrl: 'http://webservice.yaghin.org/jsonservice.asmx?op=GetSessions',
    //baseUrl:'https://qavami.com/wp-json/wp/v2',
    //baseUrl: 'https://kolbeh-keramat.ir/',
    //baseUrl: 'https://zeinabian.ir/drabbasi/wp-json/wp/v2',
  },
    webapp: {
      baseUrl: "https://kolbeh-keramat.ir",
      //baseUrl: "https://kolbeh-keramat.ir",
    socialUrl: "/social",
    avatarFolder: "/upload"
  },
  service: {
    baseUrl: "https://kolbeh-keramat.ir"
  },
  security: {
    serverUrl: "https://kolbeh-keramat.ir/blog",
    //serverUrl: "https://berimbasket.ir",
    jwtToken: "/wp-json/jwt-auth/v1/token"
  },
  googleMap: {
    apikey: "dsgasdfasdfsdf"
  },
  logError: true
}; 