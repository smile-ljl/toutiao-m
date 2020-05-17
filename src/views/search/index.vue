<template>
  <div class="search-container">
    <!-- 搜索栏 -->
    <form action="/">
      <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch(searchText)"
        @cancel="$router.back()"
        @focus="isResultShow = false"
      />
    </form>
    <!-- /搜索栏 -->

    <!-- 搜索结果 -->
    <search-result v-if="isResultShow" :search-text="searchText" />
    <!-- /搜索结果 -->

    <!-- 联想搜索 -->
    <search-suggestion
      v-else-if="searchText"
      :search-text="searchText"
      @search="onSearch"
    />
    <!-- /联想搜索 -->

    <!-- 搜索历史 -->
    <search-history
      v-else
      :search-histories="searchHistories"
    />
    <!-- /搜索历史 -->
  </div>
</template>

<script>
import SearchResult from './components/search-result'
import SearchHistory from './components/search-history'
import SearchSuggestion from './components/search-suggestion'
import { getItem, setItem } from '@/utils/storage'
import { getSearchHistories } from '@/api/search'
import { mapState } from 'vuex'
export default {
  name: 'SearchIndex',
  components: {
    SearchResult,
    SearchHistory,
    SearchSuggestion
  },
  props: {},
  data () {
    return {
      searchText: '',
      isResultShow: false, // 控制搜索结果的显示状态
      searchHistories: [] // 搜索历史记录
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  created () {
    this.loadSearchHistories()
  },
  mounted () {},
  methods: {
    onSearch (searchText) {
      // 把输入框设置为要搜索的文本
      this.searchText = searchText
      const index = this.searchHistories.indexOf(searchText)
      if (index !== -1) {
        this.searchHistories.splice(index, 1)
      }
      this.searchHistories.unshift(searchText)
      setItem('search-histories', this.searchHistories)
      this.isResultShow = true // 展示搜索结果
    },
    async loadSearchHistories () {
      let searchHistories = getItem('search-histories') || []
      if (this.user) {
        const { data } = await getSearchHistories()
        // console.log(data.data.keywords)
        searchHistories = [...new Set([
          ...searchHistories,
          ...data.data.keywords
        ])]
      }
      // console.log(searchHistories)
      this.searchHistories = searchHistories
    }
  }
}
</script>

<style scoped lang="less"></style>
