<template>
  <div class="my-container">
    <!-- 头部 蓝色区域 -->
    <van-cell-group class="my-info">
      <van-cell
        class="base-info"
        center
        :border="false"
      >
        <van-image
        class="avatar"
          slot="icon"
          round
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div
          class="name"
          slot="title"
        >黑马头条号</div>
        <van-button
        class="update-btn"
          size="small"
          round
        >编辑资料</van-button>
      </van-cell>
      <van-grid
      class="data-info"
      :border="false"
      >
        <van-grid-item>
          <div slot="text">
            <div class="count">123</div>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="count">123</div>
            <div class="text">关注</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="count">123</div>
            <div class="text">粉丝</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="count">123</div>
            <div class="text">获赞</div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <!-- /头部 蓝色区域 -->
    <!-- 收藏 / 历史 -->
    <van-grid
    class="nav-grid mb-4"
    :column-num="2"
    >
      <van-grid-item
        class="nav-grid-item"
        icon-prefix="toutiao"
        icon="shoucang"
        text="收藏"
      />
      <van-grid-item
        class="nav-grid-item"
        icon-prefix="toutiao"
        icon="lishi"
        text="历史"
      />
    </van-grid>
    <!-- /收藏 / 历史 -->
    <!-- 消息通知 / 小智 / 退出按钮 -->
    <van-cell title="消息通知" is-link url="/" />
    <van-cell class="mb-4" title="小智同学" is-link to="/" />
    <van-cell class="logout-cell" title="退出登录" />
    <!-- /消息通知 / 小智 / 退出按钮 -->
  </div>
</template>

<script>
export default {
  name: 'MyIndex',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
.my-container {
  .my-info {
    background: url(./banner.png) no-repeat;
    background-size: cover;
    .base-info {
      box-sizing: border-box;
      background-color: unset;
      height: 115px;
      padding-top: 38px;
      padding-bottom: 11px;
      .avatar {
        width: 66px;
        height: 66px;
        border: 1px solid #fff;
        box-sizing: border-box;
      }
      .name {
        padding-left: 11px;
        font-size: 15px;
        color: #fff;
      }
      .update-btn {
        height: 16px;
        font-size: 10px;
        color: #666666;
      }
    }
  }
  .data-info {
    height: 65px;
    color: #fff;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .count {
      font-size: 18px;
    }
    .text {
      font-size: 11px;
    }
  }
  /deep/ .van-grid-item__content {
    background-color: unset;
  }
  /deep/ .nav-grid {
    .nav-grid-item {
      height: 70px;
      background-color: #fff;
      .toutiao {
        font-size: 22px;
      }
      .toutiao-shoucang {
        color: #eb5253;
      }
      .toutiao-lishi {
        color: #ff9d1d;
      }
      .van-grid-item__text {
        font-size: 14px;
        color: #333;
      }
    }
  }
  .logout-cell {
    text-align: center;
    color: #d86262;
  }
  .mb-4 {
    margin-bottom: 4px;
  }
}
</style>
