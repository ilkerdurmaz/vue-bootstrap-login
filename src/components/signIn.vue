<template>
  <form class="p-5">
    <div class="input-group mb-3">
      <span class="input-group-text"><i class="fa-solid fa-envelope fa-shake"
                                        style="--fa-animation-iteration-count: 1"></i></span>
      <input type="email" class="form-control text-light" placeholder="enter your e-mail"
      >
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text"><i class="fa-solid fa-lock fa-shake" style="--fa-animation-iteration-count: 1"></i></span>
      <input type="password" class="form-control text-light" placeholder="enter your password"
      >
    </div>
    <div class="form-check mb-3">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
      <label class="form-check-label text-light" for="flexCheckIndeterminate">
        Remember Me
      </label>
    </div>
    <div class="text-center">
      <button type="button" class="btn w-100 text-light"><strong>Login</strong></button>
    </div>
  </form>

</template>

<script>
export default {
  name: 'signIn'
}
</script>

<style scoped>
.form-control{
  background: transparent!important;
}
</style>
