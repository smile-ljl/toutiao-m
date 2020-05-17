<template>
  <div class="search-result">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="(article, index) in list"
        :key="index"
        :title="article.title"
      />
    </van-list>
  </div>
</template>

<script>
import { getSearchResult } from '@/api/search'
export default {
  name: 'SearchResult',
  components: {},
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1,
      perpage: 20
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLoad () {
      const { data } = await getSearchResult({
        page: this.page,
        per_page: this.perPage,
        q: this.searchText
      })
      // 将数据放到列表中
      const { results } = data.data
      this.list.push(...results)
      this.loading = false
      // 判断是否还有数据
      if (results.length) {
        // 有 则更新获取下一页数据的页码
        this.page++
      } else {
        // 没有 则把finished设置为true ,关闭加载更多
        this.finished = true
      }
    }
  }
}
</script>

<style scoped lang="less">
.search-result {
  position: fixed;
  left: 0;
  right: 0;
  top: 54px;
  bottom: 0;
  overflow-y: auto;
}
</style>
