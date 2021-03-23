<template>
  <div id="app">
    <Header />
    <Pages>
      <router-view/>
    </Pages>
    <Footer />
  </div>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s | Alfatta Rezqa',
  },
  name: 'App',
  components: {
    Header: () => import('./components/Header.vue'),
    Pages: () => import('./components/Pages.vue'),
    Footer: () => import('./components/Footer.vue'),
  },
};
</script>

<style lang="scss" scoped>

</style>
