module.exports = {
  plugins: {
    // postcss-selector-namespace: 给所有css添加统一前缀，然后父项目添加命名空间
    "postcss-selector-namespace": {
      namespace(css) {
        if (css.includes("antd.css")) return "";
        return ".base-single-app"; // 返回要添加的类名
      },
    },
  },
};
