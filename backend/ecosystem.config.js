// module.exports = {
//     apps: [
//       {
//         name: "your-app-name",
//         script: "app.js",
//         watch: false,
//         env: {
//           NODE_ENV: "development",
//           OPEN_AI_KEY: "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"
//         }
//       }
//     ]
//   };

module.exports = {
  apps: [{
    name: 'node-app',
    script: './server.js',
    env: {
      NODE_ENV: 'development',
      DATABASE_URI:'mongodb://localhost:27017/nutricionista',
      DATABASE_URI_DOCKER:'mongodb://mongo_db:27017/nutricionista',

      JWT_SECRET:'1faadb8ekK6b4c9e9cq2fh7c1b8e2aPeaf2d3c4b5e6a7Ced9e4a2D5c78df1b1',

      ACCESS_TOKEN_SECRET:'842cd284a624lme9c4Q3b7c1b8s8aWeaf2d323b5e6a7c8d9e4a2vecAA8f1b3',
      REFRESH_TOKEN_SECRET:'4W2cdb8e4a6b4c9e94tF3b7c1bt62af2cdbiE4ajm4c9e9c6J3b7c1b8edfkb6k',

      SESSION_SECRET:'d9g7s8d6grsdofg764s5d8m584mn59v358mw98vwcyu8c350ycw35mnvyc3580m32nyp5',

      GOOGLE_CLIENT_ID_LOCAL:'600214875861-uc4lnrj6sl0svdarlcd2iaqrab8jfhm2.apps.googleusercontent.com',
      GOOGLE_CLIENT_SECRET_LOCAL:'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',
      
      GOOGLE_CLIENT_ID_PRODUCTION:'189697801859-ioer5vc2gpvuk9j8qggqvmrn0o2brv7e.apps.googleusercontent.com',
      GOOGLE_CLIENT_SECRET_PRODUCTION:'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',

      OPEN_AI_KEY:'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',
      PORT:5000
    }
  }]
}