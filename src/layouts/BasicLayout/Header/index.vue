<template>
  <el-header :class="$style.container" height="50px">
    <div :class="$style['hamburger-container']" @click="handleClickHamburger">
      <svg-icon :class="$style.hamburger" :name="hamburgerName" />
    </div>
    <div :class="$style['right-menu']">
      <Search />
    </div>
  </el-header>
</template>

<script>
import Search from './Search';

export default {
  name: 'Header',
  components: {
    Search,
  },
  props: {
    expanded: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      msg: '',
    };
  },
  computed: {
    hamburgerName() {
      return this.expanded ? 'menu-fold' : 'menu-unfold';
    },
  },
  methods: {
    handleClickHamburger() {
      this.$emit('toggle');
    },
  },
}
</script>

<style lang="scss" module>
$height: 50px;

.container {
  padding: 0;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    float: left;
    width: $height;
    height: $height;
    line-height: $height;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.025);
    }

    .hamburger {
      font-size: 18px;
      vertical-align: middle;
    }
  }
  .right-menu {
    float: right;
    height: $height;
    line-height: $height;
  }
}
</style>


