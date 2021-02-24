<template>
  <div class="container">
    <div class="head">
      <div class="title">{{formData.title}}</div>
      <div class="info">
        <span class="name">{{formData.author}}</span>
        <span class="date">{{$day(formData.updatedAt).format('YYYY年MM月DD日')}}</span>
      </div>
    </div>

    <div class="content">{{formData.content}}</div>
  </div>
</template>
<script>
import { BlogServer } from '@/api';
export default {
  name: 'detail',
  data() {
    return {
      formData: {}
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.getDetail()
  },
  methods: {
    async getDetail() {
      const res = await BlogServer.getDetail({ id: this.$route.query.id })
      let { data, errno, message } = res
      if (errno === 0) {
        this.formData = data
      } else {
        this.$notify.error({ title: '错误', message: message || 'Error！' });
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.container {
  padding: 50px 0;
  width: 1200px;
  min-height: calc(100vh - 100px);
  margin: 0 auto;
}
.title {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
  cursor: pointer;
}
.head {
  .info {
    font-weight: 500;
    color: rgb(150, 144, 144);
    font-size: 16px;
    .name {
      margin-right: 10px;
      cursor: pointer;
    }
  }
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
.content {
  padding: 20px 0;
  line-height: 30px;
}
</style>