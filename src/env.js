export var ENV = {
    name: "Development",
    api: {
        //baseUrl: 'http://localhost:3000',
        baseUrl: 'http://webservice.yaghin.org/jsonservice.asmx?op=GetSessions',
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
//# sourceMappingURL=env.js.map