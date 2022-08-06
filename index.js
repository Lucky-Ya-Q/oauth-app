const { OAuthApp, createNodeMiddleware } = require("@octokit/oauth-app");

const app = new OAuthApp({
    clientType: "oauth-app",
    clientId: "d18fe7df0f5527d36cd8",
    clientSecret: "a7016f89284ee335d352ee771f266b85b1d0daf8",
});

app.on("token", async ({ token, octokit }) => {
    const { data } = await octokit.request("GET /user");
    console.log(`Token retrieved for ${data.login}`);
});

require("http").createServer(createNodeMiddleware(app)).listen(3000);
// can now receive user authorization callbacks at /api/github/oauth/callback
// See all endpoints at https://github.com/octokit/oauth-app.js#middlewares
