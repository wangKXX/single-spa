/* eslint-disable */
import { registerApplication } from "single-spa";
import axios from "axios";

const apps = [
  {
    name: "app1",
    app: loadApp("/fetch", "app1"),
    activeWhen: (location) => location.pathname.startsWith("/app1"),
    customProps: {},
  },
  {
    name: "canonical",
    app: loadApp("/local", "canonical"),
    activeWhen: (location) => location.pathname.startsWith("/canonical"),
    customProps: {},
  },
];

/*
* getManifest：远程加载manifest.json 文件，解析需要加载的js
* url: manifest.json 链接
* bundle：entry名称
* */
const getManifest = (url) => new Promise(async (resolve) => {
  const { data } = await axios.get(url);
  const { entrypoints, publicPath } = data;
  const assets = entrypoints.app.assets;
  for (let i = 0; i < assets.length; i++) {
      await runScript(publicPath + assets[i]).then(() => {
          if (i === assets.length - 1) {
              resolve()
          }
      })
  }
});

const runScript = async (url) => {
  return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(script, firstScript);
  });
};

function loadApp(url, globalVar) {
  return async () => {
    await getManifest(`${url}/manifest.json`, globalVar)
    return window[globalVar];
  }
};

export default () => {
  apps.forEach((app) => registerApplication(app));
};
