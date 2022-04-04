<template>
  <div
    class="container-fluid min-vh-100 bg-dark"
  >
    <login-main></login-main>
  </div>
</template>

<script>
import loginMain from '@/components/loginMain'

export default {
  components: {
    loginMain
  },
  data () {
    return {
      user: null
    }
  }
}
</script>

<style>
@import "bootstrap";
.container-fluid {
  background-image: url('assets/bg-image.jpg');
  background-position: center;
  background-size: auto;
}
</style>
