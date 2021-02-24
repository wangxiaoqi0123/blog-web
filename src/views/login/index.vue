<template>
  <div class="login-wrap">
    <h2>Login</h2>

    <div class="form">
      <input type="text" placeholder="Username" name="un" v-model="formData.username" />
      <input type="password" placeholder="Password" name="pw" v-model="formData.password" />
      <button @click.stop="onSubmit">登录</button>
    </div>
  </div>
</template>
<script>
import { UserServer } from '@/api';
export default {
  name: 'login',
  data() {
    return {
      formData: {
        username: '',
        password: ''
      }
    };
  },
  computed: {},
  watch: {},
  mounted() { },
  methods: {
    onSubmit() {
      this.login()
    },
    async login() {
      const res = await UserServer.login(this.formData)
      let { errno, message } = res
      if (errno === 0) {
        this.$router.push('/admin')
      } else {
        this.$notify.error({ title: '错误', message: message || 'Error！' });
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.login-wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  // background: #ecf0f1;
  width: 380px;
  height: 320px;
  border-radius: 5px;
  box-shadow: 3px 3px 10px #ccc;
  // border: 1px solid #333;

  h2 {
    text-align: center;
    font-weight: 200;
    font-size: 2em;
    margin-top: 10px;
    color: #34495e;
  }

  .form {
    padding-top: 20px;

    input[type="text"],
    input[type="password"],
    button {
      width: 80%;
      margin-left: 10%;
      margin-bottom: 25px;
      height: 40px;
      border-radius: 5px;
      outline: 0;
      -moz-outline-style: none;
      box-sizing: border-box;
    }

    input[type="text"],
    input[type="password"] {
      border: 1px solid #bbb;
      padding: 0 0 0 10px;
      font-size: 14px;
      &:focus {
        border: 1px solid #3498db;
      }
    }

    a {
      text-align: center;
      font-size: 10px;
      color: #3498db;

      p {
        padding-bottom: 10px;
      }
    }

    button {
      background: #e74c3c;
      border: none;
      color: white;
      font-size: 18px;
      font-weight: 200;
      cursor: pointer;
      transition: box-shadow 0.4s ease;

      &:hover {
        box-shadow: 1px 1px 5px #555;
      }

      &:active {
        box-shadow: 1px 1px 7px #222;
      }
    }
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: -webkit-linear-gradient(
      left,
      #27ae60 0%,
      #27ae60 20%,
      #8e44ad 20%,
      #8e44ad 40%,
      #3498db 40%,
      #3498db 60%,
      #e74c3c 60%,
      #e74c3c 80%,
      #f1c40f 80%,
      #f1c40f 100%
    );
    background: -moz-linear-gradient(
      left,
      #27ae60 0%,
      #27ae60 20%,
      #8e44ad 20%,
      #8e44ad 40%,
      #3498db 40%,
      #3498db 60%,
      #e74c3c 60%,
      #e74c3c 80%,
      #f1c40f 80%,
      #f1c40f 100%
    );
    height: 5px;
    border-radius: 5px 5px 0 0;
  }
}
</style>