<template>
  <el-container class="container">
    <el-aside class="aside" :width="asideWidth">Aside</el-aside>
    <el-container class="wrapper" direction="vertical">
      <Header :expanded="expanded" @toggle="toggleMenu" />
      <el-main class="main">Main</el-main>
      <Footer />
    </el-container>
  </el-container>
</template>

<script>
import Header from './Header';
import Footer from './Footer';

export default {
  name: 'BasicLayout',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      collapsed: false,
      expanded: true, // 菜单是否展开
    };
  },
  computed: {
    asideWidth() {
      return this.expanded ? '210px' : '50px'
    },
  },
  methods: {
    toggleMenu() {
      this.expanded = !this.expanded;
    },
  },
  created() {
    console.log(this);
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;

  .aside {
    background-color: #222d32;
    transition: width 0.3s;
  }

  .wrapper {
    background-color: #f0f2f5;
  }
}

</style>


