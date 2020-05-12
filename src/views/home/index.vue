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
        <van-tab
          :title="channel.name"
          v-for="channel in channels"
          :key="channel.id"
        >
          <article-list :channel="channel" />
        </van-tab>
      </van-tabs>
      <!-- /文章频道 -->
  </div>
</template>

<script>
import { getUsreChannels } from '@/api/user'
import ArticleList from './comments/article-list'
export default {
  name: 'HomeIndex',
  components: {
    ArticleList
  },
  props: {},
  data () {
    return {
      active: 0, // 控制被激活的标签
      channels: []
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadChannels()
  },
  mounted () {},
  methods: {
    async loadChannels () {
      const { data } = await getUsreChannels()
      this.channels = data.data.channels
    }
  }
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
