<template>
  <div class="container">
    <BasicLayout />
  </div>
</template>

<script>
import BasicLayout from '@/layouts/BasicLayout';

export default {
  name: 'login',
  components: {
    BasicLayout,
  },
  data() {
    return {
      msg: '测试',
    };
  },
  methods: {
    showMsg() {
      alert(this.msg);
    },
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>


