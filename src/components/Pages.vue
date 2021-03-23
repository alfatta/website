<template>
  <div class="page">
    <div class="page-content" :style="minHeight">
      <slot />
    </div>
    <div class="page-decorator" ></div>
  </div>
</template>

<script>
export default {
  name: 'Pages',
  computed: {
    minHeight() {
      const screenHeight = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

      // calculate pagesMinHeight = screenHeight - headerHeight - footerHeight - padding
      return `min-height: ${screenHeight - 120 - 210 - 140}px`;
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  display: flex;
  justify-content: center;

  &-decorator {
    position: absolute;
    z-index: 3;
    top: 0;
    height: 240px;
    width: 100%;
    background-color: rgba($color: #FFFFFF, $alpha: 0.8);
    border-bottom-right-radius: 40px;
  }

  &-content {
    z-index: 5;
    width: 80%;
    max-width: 1080px;
    padding: 40px 0;
    padding-bottom: 100px;
  }
}
</style>
