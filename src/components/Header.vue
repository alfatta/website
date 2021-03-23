<template>
  <div class="header">
    <div class="header-content">
      <div class="header-content-left">
        <div class="header-title">
          <h1>Alfatta Rezqa</h1>
          <p>FrontEnd Developer</p>
        </div>
      </div>
      <div class="header-content-right">
        <div class="header-menu">
          <FAIcon icon="bars" class="header-menu-icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
.header {
  background-color: white;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  &-content {
    width: 80%;
    max-width: 1080px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-title {
    h1 {
      font-size: 24px;
      font-weight: 700;
      font-family: 'Open Sans', sans-serif;
      color: #3B5898;
      margin-bottom: 4px;
    }
    p {
      font-size: 14px;
      font-weight: 300;
      font-family: 'Lato', sans-serif;
    }
  }

  &-menu {
    &-icon {
      color: #3B5898;
      font-size: 24px;
    }
  }
}
</style>
