<template>
  <div class="login-container">
    <van-nav-bar
      title="登录/注册"
      left-arrow
      class="app-nav-bar"
      @click-left="$router.back()"
    />

    <!-- 登录表单 -->
    <van-form
      :show-error="false"
      :show-error-message="false"
      validate-first
      ref="login-from"
      @submit="onLogin"
      @failed="onFailed"
      >
      <van-field
        v-model="user.mobile"
        icon-prefix="toutiao"
        left-icon="shouji"
        placeholder="请输入手机号"
        name="mobile"
        :rules="FormRules.mobile"
      />
      <van-field
        v-model="user.code"
        icon-prefix="toutiao"
        clearable
        left-icon="yanzhengma"
        placeholder="请输入密码"
        name="code"
        :rules="FormRules.code"
      >
        <template #button>
          <van-button
            size="mini"
            round
            class="send-btn"
            @click.prevent="onSendSms"
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
          >登录</van-button>
      </div>
    </van-form>
    <!-- /登录表单 -->
  </div>
</template>

<script>
import { Toast } from 'vant'
import {
  login,
  sendSms
} from '@/api/user'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      FormRules: {
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的手机号' }
        ],
        code: [
          { required: true, message: '请输入密码' },
          { pattern: /^\d{6}$/, message: '请输入正确的密码' }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLogin () {
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0 // 新的提示会把这个提示替换掉,所以不用手动关闭
      })
      try {
        const res = await login(this.user)
        console.log(res)
        Toast.success('登录成功')
      } catch (err) {
        // console.log('登录失败', err)
        Toast.fail('登录失败')
      }
    },
    onFailed (error) {
      // console.log(error)
      if (error.errors[0]) {
        Toast({
          message: error.errors[0].message,
          position: 'top'
        })
      }
    },
    async onSendSms () {
      try {
        await this.$refs['login-from'].validate('mobile')
        // 验证通过,请求发送验证码
        const res = await sendSms(this.user.mobile)
        console.log(res)
      } catch (err) {
        // console.log(err)
        let message = ''
        if (err && err.response && err.response.status === 429) {
          // 发送短信失败的错误提示
          message = '发送短信频繁,请稍后重试'
        } else if (err.name === 'mobile') {
          // 表单验证失败的错误提示
          message = err.message
        } else {
          // 未知错误
          message = '发送失败,请稍后重试'
        }
        // console.log('验证失败', err)
        Toast({
          message,
          position: 'top'
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
