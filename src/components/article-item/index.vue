<template>
  <van-cell class="article-item">
    <!-- 文章标题 -->
    <div slot="title" class="text van-multi-ellipsis--l3">{{article.title}}
    </div>
    <div slot="label">
      <!-- 三图模式 -->
      <div
        v-if="article.cover.type === 3"
        class="cover-wrap"
      >
        <div
          class="cover-wrap-item"
          v-for="(img, index) in article.cover.images"
          :key="index"
        >
          <van-image
            class="cover-image"
            fit="cover"
            :src="img"
          />
        </div>
      </div>
      <!-- 文章作者 评论 时间 -->
      <div class="label-wrap">
        <span>{{ article.aut_name }}</span>
        <span>{{ article.comm_count }}评论</span>
        <span>{{ article.pubdate | relativeTime}}</span>
      </div>
    </div>
    <!-- 单图模式 -->
    <van-image
      class="right-cover"
      v-if="article.cover.type === 1"
      fit="cover"
      :src="article.cover.images[0]"
    >

    </van-image>
  </van-cell>
</template>

<script>
export default {
  name: 'ArticleItem',
  components: {},
  props: {
    article: {
      type: Object,
      required: true
    }
  },
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
.article-item {
  .text {
    font-size: 16px;
    color: #3a3a3a;
  }
  .van-cell__value {
    flex: unset;
    width: 116px;
    height: 73px;
    margin-left: 12px;
  }
  .right-cover {
    width: 116px;
    height: 73px;
  }
  .cover-wrap {
    display: flex;
    padding: 15px 0;
    .cover-wrap-item {
      flex: 1;
      height: 73px;
      &:not(:last-child) {
        padding-right: 4px;
      }
      .cover-image {
        width: 100%;
        height: 73px;
      }
    }
  }
  .label-wrap {
    font-size: 11px;
    color: #b4b4b4;
    span {
      margin-right: 12px;
    }
  }
}
</style>
