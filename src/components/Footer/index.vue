<template>
  <el-footer :class="container" height="auto" v-once>
    Copyright
    &copy;
    2019
    <a href="https://github.com/BetaSun/vue2-element-pro" target="_blank">https://github.com/BetaSun/vue2-element-pro</a>
  </el-footer>
</template>

<script>
import { classNamePrefixer } from '@/utils/utils';

export default {
  name: 'Footer',
  computed: {
    ...classNamePrefixer([
      'container',
    ]),
  },
}
</script>

<style lang="scss" scoped>
$namespace: 'Footer';

.#{$namespace} {
  &-container {
    padding: 1em;
    text-align: center;
    color: #999;
    border-top: 1px solid transparent;

    a {
      word-wrap: break-word;
    }
  }
}
</style>


