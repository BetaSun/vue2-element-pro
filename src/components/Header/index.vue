<template>
  <el-header :class="container" height="50px">Header</el-header>
</template>

<script>
import { classNamePrefixer } from '@/utils/utils';

export default {
  name: 'Header',
  computed: {
    ...classNamePrefixer([
      'container',
    ]),
  },
}
</script>

<style lang="scss" scoped>
$namespace: 'Header';

.#{$namespace} {
  &-container {
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
  }
}
</style>


