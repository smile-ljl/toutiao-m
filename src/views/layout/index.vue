<template>
  <div class="layout-container">
    <router-view />
    <!-- 底部导航栏 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item name="shouji" class-prefix="toutiao" to="/">首页</van-tabbar-item>
      <van-tabbar-item name="wenda" class-prefix="toutiao" to="/qa">问答</van-tabbar-item>
      <van-tabbar-item name="shipin" class-prefix="toutiao" to="/video">视频</van-tabbar-item>
      <van-tabbar-item name="wode" class-prefix="toutiao" to="/my">我的</van-tabbar-item>
    </van-tabbar>
    <!-- /底部导航栏 -->
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  components: {},
  props: {},
  data () {
    return {
      active: 0
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less"></style>
