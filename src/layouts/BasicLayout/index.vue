<template>
  <el-container :class="container">
    <el-aside :class="aside" :width="asideWidth">Aside</el-aside>
    <el-container :class="wrapper" direction="vertical">
      <Header />
      <el-main :class="main">Main</el-main>
      <Footer />
    </el-container>
  </el-container>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { classNamePrefixer } from '@/utils/utils';

export default {
  name: 'BasicLayout',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      asideWidth: '210px',
      collapsed: false,
    };
  },
  computed: {
    ...classNamePrefixer([
      'container',
      'aside',
      'wrapper',
      'main',
    ]),
  },
  created() {
    console.log(this);
  },
}
</script>

<style lang="scss" scoped>
$namespace: 'BasicLayout';

.#{$namespace} {
  &-container {
    height: 100%;
  }

  &-aside {
    background-color: #222d32;
  }

  &-wrapper {
    background-color: #f0f2f5;
  }
}
</style>


