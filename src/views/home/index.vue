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
        to="/search"
      >搜索</van-button>
      </van-nav-bar>
      <!-- /导航栏 -->
      <!-- 文章频道 -->
      <van-tabs
        class="channel-tabs"
        v-model="active"
      >
        <van-tab
          :title="channel.name"
          v-for="channel in channels"
          :key="channel.id"
        >
          <article-list :channel="channel" />
        </van-tab>

        <div
          class="wap-nav-placeholder"
          slot="nav-right"
        ></div>
        <!-- 汉堡按钮 -->
        <div
          class="wap-nav-wrap"
          slot="nav-right"
          @click="isChannelEditShow = true"
        >
          <van-icon name="wap-nav" />
        </div>
        <!-- /汉堡按钮 -->
      </van-tabs>
      <!-- /文章频道 -->

      <!-- 文章编辑弹出层 -->
      <van-popup
        class="channel-edit-popup"
        v-model="isChannelEditShow"
        position="bottom"
        style="height: 100%"
        closeable
        close-icon-position="top-left"
        get-container="body"
      >
        <channel-edit />
      </van-popup>
      <!-- /文章编辑弹出层 -->
  </div>
</template>

<script>
import { getUsreChannels } from '@/api/user'
import ArticleList from './comments/article-list'
import ChannelEdit from './comments/channel-edit'
export default {
  name: 'HomeIndex',
  components: {
    ArticleList,
    ChannelEdit
  },
  props: {},
  data () {
    return {
      active: 0, // 控制被激活的标签
      channels: [],
      isChannelEditShow: false
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
  .channel-tabs {
    /deep/ .van-tab {
      border-right: 1px solid #edeff3;
      border-bottom: 1px solid #edeff3;
    }
    /deep/ .van-tabs__line {
      bottom: 20px;
      width: 15px !important;
      height: 3px;
      background: #3296fa;
    }
  }
  .wap-nav-placeholder {
    width: 33px;
    flex-shrink: 0;
  }
  .wap-nav-wrap {
    position: fixed;
    right: 0;
    width: 33px;
    height: 43px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: .9;
    .van-icon {
      font-size: 24px;
    }
    &:before {
      content: '';
      width: 1px;
      background: url('./line.png') no-repeat;
      background-size: contain;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
    }
  }
}
</style>
