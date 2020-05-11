<template>
  <div class="my-container">
    <!-- 头部 蓝色区域 -->
    <van-cell-group>
      <van-cell
        title="昵称"
        value="编辑资料"
        center
      >
        <van-image
          slot="icon"
          width="66"
          height="66"
          round
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div
          slot="title"
          class="myTitle"
        >黑马头条号</div>
        <van-button
          size="small"
          round
        >编辑资料</van-button>
      </van-cell>
    </van-cell-group>
    <van-grid>
      <van-grid-item>
        <div slot="text">
          <div class="span">123</div>
          <div class="text">头条</div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <div slot="text">
          <div class="span">123</div>
          <div class="text">关注</div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <div slot="text">
          <div class="span">123</div>
          <div class="text">粉丝</div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <div slot="text">
          <div class="span">123</div>
          <div class="text">获赞</div>
        </div>
      </van-grid-item>
    </van-grid>
    <!-- /头部 蓝色区域 -->
    <!-- 收藏 / 历史 -->
    <van-grid :column-num="2">
      <van-grid-item
        icon-prefix="toutiao"
        icon="shoucang"
        text="收藏"
      />
      <van-grid-item
        icon-prefix="toutiao"
        icon="lishi"
        text="历史"
      />
    </van-grid>
    <!-- /收藏 / 历史 -->
    <!-- 消息通知 / 小智 / 退出按钮 -->
    <van-cell title="消息通知" is-link url="/" />
    <van-cell title="小智同学" is-link to="/" />
    <van-cell title="退出登录" to="/">
    </van-cell>
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
.myTitle {
  padding-left: 11px;
  font-size: 15px;
}
.span {
  font-size: 18px;
}
.text {
  font-size: 11px;
}
</style>
