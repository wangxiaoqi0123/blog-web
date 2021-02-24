<template>
  <div class="container-home">
    <Header />
    <Content />
    <Footer />
  </div>
</template>
<script>
import Header from './contents/Header';
import Content from './contents/Content';
import Footer from './contents/Footer';
export default {
  name: 'Home',
  components: {
    Header,
    Content,
    Footer
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() { },
  methods: {}
};
</script>
<style lang='scss' scoped>
.container-home {
  min-height: 100vh;
}
</style>