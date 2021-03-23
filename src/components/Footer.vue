<template>
  <div class="footer">
    <div class="footer-content">
      <p class="follow-me">Follow Me</p>
      <div class="social-link">
        <a href="https://facebook.com/alfattarezqa" target="_blank">
          <FAIcon :icon="['fab', 'facebook']" />
        </a>
        <a href="https://twitter.com/alfattarezqa" target="_blank">
          <FAIcon :icon="['fab', 'twitter']" />
        </a>
        <a href="https://linkedin.com/in/alfattarezqa" target="_blank">
          <FAIcon :icon="['fab', 'linkedin']" />
        </a>
        <a href="https://github.com/alfatta" target="_blank">
          <FAIcon :icon="['fab', 'github']" />
        </a>
      </div>
      <p class="copyright">Copyright &copy; {{ currentYear }}</p>
      <p class="copyright">Alfatta Rezqa</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: white;
  border-top-left-radius: 40px;
  padding: 40px 0;
  width: 100%;

  &-content {
    margin: 0 auto;
    width: 80%;
    max-width: 1080px;
    text-align: right;

    .follow-me {
      font-weight: 700;
      font-size: 14px;
      font-family: 'Open Sans', sans-serif;
      margin-bottom: 16px;
    }

    .social-link {
      margin-bottom: 32px;

      *:not(:last-child) {
        margin-right: 20px;
      }
    }

    .copyright {
      font-weight: 300;
      font-family: 'Lato', sans-serif;

      &:not(:last-child) {
        margin-bottom: 6px;
      }
    }
  }
}
</style>
