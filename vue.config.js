module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      "/fetch": {
        target: "http://127.0.0.1:8081",
        changeOrigin: true,
        pathRewrite: {
          "^/fetch": "/",
        },
      },
      "/local": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/local": "/",
        },
      }
    },
  },
};
