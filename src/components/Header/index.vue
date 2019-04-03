<template>
  <el-header :class="container" height="50px">
    <div :class="hamburgerContainer" @click="toggleMenu">
      <svg-icon :name="hamburgerName" :class="hamburger" />
    </div>
  </el-header>
</template>

<script>
import { classNamePrefixer } from '@/utils/utils';

export default {
  name: 'Header',
  data() {
    return {
      expanded: true,
    };
  },
  computed: {
    ...classNamePrefixer([
      'container',
      'hamburgerContainer',
      'hamburger',
    ]),
    hamburgerName() {
      return this.expanded ? 'menu-close' : 'menu-open';
    },
  },
  methods: {
    toggleMenu() {
      this.expanded = !this.expanded;
    },
  },
}
</script>

<style lang="scss" scoped>
$namespace: 'Header';
$height: 50px;

.#{$namespace} {
  &-container {
    padding: 0;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
  }
  &-hamburgerContainer {
    float: left;
    width: $height;
    height: $height;
    line-height: $height;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.025);
    }
  }
  &-hamburger {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
}
</style>


