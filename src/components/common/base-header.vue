<template>
  <div class="base-header">
    <div class="base-header-left">
      <a-button type="link" @click="toggleCollapsed">
        <a-icon
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          style="font-size: 20px"
        />
      </a-button>
    </div>
    <div class="baser-header-right">
      <base-info></base-info>
    </div>
  </div>
</template>

<script>
import baseInfo from "@/components/common/base-info";

export default {
  components: {
    baseInfo,
  },
  props: {
    collapsed: {
      default: false,
    },
  },
  methods: {
    toggleCollapsed() {
      this.$emit("update:collapsed", !this.collapsed);
    },
  },
};
</script>

<style lang="less" scoped>
.base-header {
  height: 56px;
  box-shadow: 0px 1px 10px #999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .base-header-left {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
