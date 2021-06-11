<template>
  <div class="slide-menu">
    <a-menu mode="inline" theme="dark" :inline-collapsed="collapsed">
      <a-menu-item key="1" @click="handleClick('/home')">
        <a-icon type="pie-chart" style="font-szie: 16px" />
        <span>home</span>
      </a-menu-item>
      <a-menu-item key="2" @click="handleClick('/about')">
        <a-icon type="desktop" />
        <span>about</span>
      </a-menu-item>
      <a-menu-item key="7" @click="handleClick('/canonical')">
        <a-icon type="desktop" />
        <span>canonical</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="mail" /><span>app1</span></span>
        <a-menu-item key="5" @click="handleClick('/app1/home')">
          home
        </a-menu-item>
        <a-menu-item key="6" @click="handleClick('/app1/about')">
          about
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  props: {
    collapsed: {
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick(path) {
      this.$router.push({
        path,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.slide-menu {
  /deep/ .ant-menu-dark.ant-menu-inline .ant-menu-item {
    font-size: 16px;
  }
}
</style>
