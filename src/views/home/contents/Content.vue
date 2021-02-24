<template>
  <div class="container" v-loading="loading">
    <div class="card" v-for="(item,index) in list" :key="index">
      <div class="title" @click="onJump(item)">{{item.title}}</div>
      <div class="info">
        <span class="name">{{item.author}}</span>
        <span class="date">{{$day(item.updatedAt).format('YYYY年MM月DD日 HH:mm:ss')}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { BlogServer } from '@/api';
export default {
  name: 'Content',
  data() {
    return {
      loading: false,
      list: []
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      this.loading = true
      const res = await BlogServer.getList({ author: this.$route.query.author })
      let { data, message, errno } = res
      if (errno === 0) {
        this.loading = false
        this.list = data
      } else {
        this.$notify.error({ title: '错误', message: message || 'Error！' });
      }
    },
    onJump(item) {
      this.$router.push({
        path: '/detail',
        query: {
          id: item._id
        }
      })
    }
  }
};
</script>
<style lang='scss' scoped>
.container {
  width: 1200px;
  min-height: calc(100vh - 100px);
  margin: 0 auto;
  // border-left: 1px solid #000;
  // border-right: 1px solid #000;

  .card {
    min-height: 100px;
    border-bottom: 1px solid #ccc;
    padding: 20px 0;
    box-sizing: border-box;
  }
  .card:last-child {
    border-bottom: 1px solid transparent;
  }
  .title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
    cursor: pointer;
  }
  .info {
    font-weight: 500;
    color: rgb(150, 144, 144);
    font-size: 16px;
    .name {
      margin-right: 10px;
      cursor: pointer;
    }
  }
}
</style>