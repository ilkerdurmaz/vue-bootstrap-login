<template>
  <div class="container-fluid min-vh-100 bg-dark pt-5">
    <login-main :is-correct="isCorrect" v-model="user"></login-main>
    <button class="btn btn-primary" @click="login">TEST</button>
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
      isCorrect: true,
      user: null
    }
  },
  methods: {
    login () {
      console.log(this.user)
      if (this.user === 'invalidLogin' || this.user === 'invalidRegister') {
        this.isCorrect = false
        setTimeout(() => {
          this.isCorrect = true
        }, 3000)
      }
    }
  }
}
</script>

<style>
.container-fluid {
  background-image: url('assets/bg-image.jpg');
  background-position: center;
  background-size: auto;
}
</style>
