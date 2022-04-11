<template>
  <div class="container-fluid min-vh-100 d-flex justify-content-center align-items-center p-0 m-0">
        <login-main
          :is-correct="isCorrect"
          :bg-color="bgColor"
          v-model="user"
        ></login-main>
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
      user: null,
      bgColor: 'transparent'
    }
  },
  watch: {
    user () {
      console.log(this.user)
      if (this.user === 'invalidLogin' || this.user === 'invalidRegister') {
        this.isCorrect = false
        setTimeout(() => {
          this.isCorrect = true
        }, 1000)
      }
    }
  }
}
</script>

<style>
.container-fluid {
  background: linear-gradient(312deg,rgba(33,212,253,1)0%,rgba(183,33,255,1)100%);
}
</style>
