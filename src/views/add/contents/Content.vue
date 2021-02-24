<template>
  <div class="container" v-loading="loading">
    <el-form :model="formData" class="demo-form-inline" :rules="rules" ref="ruleForm">
      <el-form-item label="标题" prop="title">
        <el-input v-model="formData.title" style="width:100%" size="small" placeholder="标题"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input
          type="textarea"
          :rows="5"
          v-model="formData.content"
          style="width:100%"
          size="small"
          placeholder="内容"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
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
      formData: {
        title: '',
        content: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ],
      }
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.init()
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          if (!this.$route.query.id) {
            this.newBlog()
          } else {
            this.undateBlog()
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    async init() {
      if (!this.$route.query.id) { return }
      this.loading = true
      const res = await BlogServer.getDetail({ id: this.$route.query.id })
      this.loading = false
      let { data, errno, message } = res
      if (errno === 0) {
        this.formData = data
      } else {
        this.$notify.error({ title: '错误', message: message || 'Error！' });
      }
    },
    async newBlog() {
      this.loading = true
      const res = await BlogServer.newBlog(this.formData)
      this.loading = false
      let { errno, message } = res
      if (errno === 0) {
        this.$alert('创建成功', '提示', {
          confirmButtonText: '确定',
          callback: () => { this.$router.back() }
        });
      } else {
        this.$notify.error({ title: '错误', message: message || 'Error！' });
      }
    },
    async undateBlog() {
      this.loading = true
      const res = await BlogServer.undateBlog(this.$route.query.id, this.formData)
      this.loading = false
      let { errno, message } = res
      if (errno === 0) {
        this.$alert('编辑成功', '提示', {
          confirmButtonText: '确定',
          callback: () => { this.$router.back() }
        });
      } else {
        this.$notify.error({ title: '错误', message: message || 'Error！' });
      }
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