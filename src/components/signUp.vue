<template>
  <div class="p-2">
    <form class="pb-4 p-2">
      <div class="input-group mb-3">
        <span class="input-group-text"><i class="fa-solid fa-envelope"></i></span>
        <input type="email" class="form-control" placeholder="enter your e-mail"
        >
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text"><i class="fa-solid fa-lock"></i></span>
        <input type="password" class="form-control" placeholder="enter your password"
        >
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text"><i class="fa-solid fa-check-double"></i></span>
        <input type="password" class="form-control" placeholder="confirm your password"
        >
      </div>
      <div class="form-check mb-3 float-start">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
        <label class="form-check-label" for="flexCheckIndeterminate">
          I agree to <a href="#" class="link-warning">the terms and conditions</a>
        </label>
      </div>
      <button type="button" class="btn btn-primary w-100">REGISTER</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'signUp'
}
</script>

<style scoped>

</style>
