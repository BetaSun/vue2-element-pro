<template>
  <div :class="$style.container">
    <div :class="$style.iconContainer" @click="handleClick">
      <svg-icon :class="$style.icon" name="search" />
    </div>
    <transition name="fade">
      <el-select
        ref="search"
        :class="$style.search"
        v-show="show"
        v-model="search"
        filterable
        remote
        default-first-option
        placeholder="请输入关键词"
        :remote-method="handleSearch"
        @change="handleChange"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :value="item.value"
          :label="item.label"
        />
      </el-select>
    </transition>
  </div>  
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      search: '',
      options: [{ value: 1, label: 'test' }],
      show: false,
    };
  },
  methods: {
    handleClick() {
      // if (!this.show) {
      //   this.show = true;
      // }
      this.show = !this.show;
    },
    handleSearch(value) {
      console.log(value);
    },
    handleChange(value) {
      console.log(value);
    },
  },
}
</script>

<style lang="scss" module>
.container {
  font-size: 16px;
  overflow: hidden;

  .iconContainer {
    display: inline-block;
    padding: 0 0.5em;
    height: 100%;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.025);
    }
    
    .icon {
      vertical-align: middle;
    }
  }

  .search {
    padding-right: 0.5em;
    width: 12.5em;

    :global {
      .el-input__inner {
        padding: 0;
        border-width: 0;
        border-bottom-width: 1px;
        border-radius: 0;
      }
    }
  }

  :global {
    .fade-enter-active, .fade-leave-active {
      transition: width 0.3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      width: 0;
      padding-right: 0;
    }
  }
}
</style>


