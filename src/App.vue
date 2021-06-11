<template>
  <div id="app" class="base-single-app">
    <div class="app-left" :class="collapsed ? 'app-left-collapsed' : ''">
      <base-logo></base-logo>
      <slide-menu :collapsed="collapsed"></slide-menu>
    </div>
    <div class="app-content">
      <base-header
        :collapsed.sync="collapsed"
        class="base-header"
      ></base-header>
      <div class="main-content">
        <router-view />
        <div id="microApp"></div>
      </div>
    </div>
  </div>
</template>
<script>
import slideMenu from "@/components/common/slide-menu";
import BaseHeader from "./components/common/base-header.vue";
import BaseLogo from "./components/common/base-logo.vue";

export default {
  components: { slideMenu, BaseHeader, BaseLogo },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style scoped lang="less">
:root.base-single-app {
  // :root可以避免添加前缀
  width: 100%;
  height: 100%;
  display: flex;
}
.app-left {
  flex: none;
  background: #001529;
  width: 200px;
}
.app-left-collapsed {
  width: auto;
}
.app-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .base-header {
    flex: none;
  }
  .main-content {
    height: 100%;
    overflow: auto;
  }
}
</style>
