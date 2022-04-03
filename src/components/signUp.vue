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
    <div class="input-group mb-3">
      <span class="input-group-text"><i class="fa-solid fa-check-double fa-shake"
                                        style="--fa-animation-iteration-count: 1"></i></span>
      <input type="password" class="form-control text-light" placeholder="confirm your password"
      >
    </div>
    <div class="form-check mb-3 float-start">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
      <label class="form-check-label text-light" for="flexCheckIndeterminate">
        I agree to <a href="#" class="link-warning">the terms and conditions</a>
      </label>
    </div>
    <button type="button" class="btn w-100 text-light"><strong>Register</strong></button>
  </form>
</template>

<script>
export default {
  name: 'signUp'
}
</script>

<style scoped>
.form-control{
  background: transparent!important;
}
</style>
