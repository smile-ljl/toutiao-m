<template>
  <div class="login-container">
    <van-nav-bar
      title="登录/注册"
      left-arrow
      class="app-nav-bar"
      @click-left="$router.back()"
    />

    <!-- 登录表单 -->
    <van-cell-group>
      <van-field
        v-model="user.mobile"
        icon-prefix="toutiao"
        left-icon="shouji"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="user.code"
        icon-prefix="toutiao"
        clearable
        left-icon="yanzhengma"
        placeholder="请输入密码"
      >
        <template #button>
          <van-button
            size="mini"
            round
            class="send-btn"
            >
            发送验证码
            </van-button>
        </template>
      </van-field>

      <div class="login-btn-wrap">
        <van-button
          class="login-btn"
          type="info"
          block
          @click="onLogin"
          >登录</van-button>
      </div>
    </van-cell-group>
    <!-- /登录表单 -->
  </div>
</template>

<script>
// import { Notify } from 'vant'
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLogin () {
      try {
        const res = await login(this.user)
        console.log(res)
        this.$notify({
          message: '登录成功',
          type: 'success'
        })
      } catch (err) {
        console.log('登录失败', err)
        this.$notify({
          message: '登录失败',
          type: 'danger'
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  .send-btn {
    width: 76px;
    height: 23px;
    background-color: #ededed;
    .van-button__text {
      font-size: 11px;
      color: #666666;
    }
  }
  .login-btn-wrap {
    padding: 26px 16px;
     .login-btn {
      background-color: #6db4fb;
      border: none;
      .van-button__text {
        font-size: 15px;
      }
    }
  }
}
</style>
