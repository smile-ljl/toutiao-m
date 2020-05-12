<template>
  <div class="home-container">
    <van-nav-bar
      class="app-nav-bar"
    >
      <!-- 导航栏 -->
      <van-button
        class="search-btn"
        slot="title"
        type="info"
        size="small"
        round
        icon="search"
      >搜索</van-button>
      </van-nav-bar>
      <!-- /导航栏 -->
      <!-- 文章频道 -->
      <van-tabs v-model="active">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
      </van-tabs>
      <!-- /文章频道 -->
  </div>
</template>

<script>
export default {
  name: 'HomeIndex',
  components: {},
  props: {},
  data () {
    return {
      active: 0 // 控制被激活的标签
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
.home-container {
  .app-nav-bar {
    /deep/ .van-nav-bar__title {
      max-width: none;
    }
    .search-btn {
      background-color: #5babfb;
      width: 277px;
      height: 32px;
      border: none;
      .van-button__text {
        font-size: 14px;
      }
      .van-icon {
        font-size: 16px;
      }
    }
  }
}
</style>
