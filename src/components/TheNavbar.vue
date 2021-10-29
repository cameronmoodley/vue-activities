<template lang="">
  <div>
    <nav class="navbar is-white topNav">
      <div class="container">
        <div class="navbar-brand">
          <h1>{{ fullAppName }}</h1>
        </div>
      </div>
    </nav>
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item is-active" href="#">
              Newest
            </a>
            <a class="navbar-item" href="#">
              In Progress
            </a>
            <a class="navbar-item" href="#">Finished</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  props: {
    fullAppName: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang=""></style>
