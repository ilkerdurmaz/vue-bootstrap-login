<template>
  <div
    class="container-fluid min-vh-100 bg-dark"
    style="background-image: url('bg-image.jpg')"
  >
    <login-main></login-main>
  </div>
</template>

<script>
import loginMain from '@/components/loginMain'

export default {
  components: {
    loginMain
  }
}
</script>

<style>
@import "bootstrap";
.container-fluid {
  background-position: center;
  background-size: auto;
}
</style>
