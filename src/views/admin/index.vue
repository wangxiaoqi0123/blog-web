<template>
  <div class="container-home">
    <Header />
    <Content />
  </div>
</template>
<script>
import Header from './contents/Header';
import Content from './contents/Content';
export default {
  name: 'Home',
  components: {
    Header,
    Content
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

</style>