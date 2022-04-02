<template>
  <form class="pb-5 p-2">
    <div class="input-group mb-3">
      <span class="input-group-text"><i class="fa-solid fa-envelope fa-shake" style="--fa-animation-iteration-count: 2"></i></span>
      <input type="email" class="form-control" placeholder="enter your e-mail"
      >
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text"><i class="fa-solid fa-lock fa-shake" style="--fa-animation-iteration-count: 2"></i></span>
      <input type="password" class="form-control" placeholder="enter your password"
      >
    </div>
    <div class="form-check mb-3">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
      <label class="form-check-label" for="flexCheckIndeterminate">
        Remember Me
      </label>
    </div>
    <button type="button" class="btn btn-primary w-100">LOGIN</button>
  </form>

</template>

<script>
export default {
  name: 'signIn'
}
</script>

<style scoped>

</style>
