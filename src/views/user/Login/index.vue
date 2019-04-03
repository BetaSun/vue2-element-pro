<template>
  <div class="container">
    <SideBar />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar';

export default {
  name: 'login',
  components: {
    SideBar,
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


