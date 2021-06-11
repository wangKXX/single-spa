<template>
  <div class="base-info">
    <a-dropdown>
      <a-avatar size="large" icon="user" />
      <a-menu slot="overlay" style="width: 180px" class="base-info-menu">
        <a-menu-item> <a-icon type="user" /><span>用户信息</span> </a-menu-item>
        <a-menu-item>
          <a-icon type="logout" /><span>退出登录</span>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<style lang="less" scoped>
.base-info {
  /deep/ .ant-avatar {
    margin-right: 8px;
  }
}
</style>
