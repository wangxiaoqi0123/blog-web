<template>
  <div class="container" v-loading="loading">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="formInline.keyword" style="width:300px" size="small" placeholder="关键字"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch" size="small">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="success" size="small" @click="$router.push('/add')">新增</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :data="list"
      style="width: 100%"
      :header-cell-style="{background:'#F3F4F7',color:'#555'}"
    >
      <el-table-column prop="title" label="标题">
        <template slot-scope="scope">
          <div class="title" @click="onJump(scope.row)">{{scope.row.title}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="jumpUpdate(scope.row)">编辑</el-button>
          <el-button type="danger" size="mini" @click="onDel(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { BlogServer } from '@/api';
export default {
  name: 'Content',
  data() {
    return {
      loading: false,
      list: [],
      formInline: {
        keyword: ''
      }
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
      const res = await BlogServer.getList({ admin: true, keyword: this.formInline.keyword })
      this.loading = false
      let { data, message, errno } = res
      if (errno === 0) {
        this.list = data
      } else {
        this.$notify.error({ title: '错误', message: message || 'Error！' });
      }
    },
    async delBlog(item) {
      this.loading = true
      const res = await BlogServer.del({ id: item.id })
      this.loading = false
      let { message, errno } = res
      if (errno === 0) {
        this.getList()
      } else {
        this.$notify.error({ title: '错误', message: message || 'Error！' });
      }
    },
    onDel(item) {
      this.$confirm(`此操作将删除${item.title}, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.delBlog(item)
      }).catch(() => { });
    },
    onJump(item) {
      this.$router.push({
        path: '/detail',
        query: {
          id: item.id
        }
      })
    },
    onSearch() {
      this.getList()
    },
    jumpUpdate(item) {
      this.$router.push({
        path: '/add',
        query: {
          id: item.id
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
    font-weight: 500;
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
.demo-form-inline {
  margin-top: 30px;
}
</style>