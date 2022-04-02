<template>
  <div class="row d-flex justify-content-center ">
    <div class="col-12 col-md-4 pt-3">
      <div class="card bg-light">
        <div class="card-header text-center p-3">
            <h2 v-if="isCollapsed" class="card-title">WELCOME</h2>
          <h2 v-else class="card-title">JOIN US!</h2>
        </div>
        <div class="card-body collapse p-0 show" id="collapseExample">
          <sign-in></sign-in>
        </div>
        <div class="card-footer text-center">
          <button  class="btn btn-success" data-bs-toggle="collapse"
                  @click="isCollapsed=!isCollapsed"
                  data-bs-target="#collapseExample" style="margin-top: -2.5rem;position: relative">
            <span v-if="!isCollapsed">SIGN IN</span>
            <span v-else>SIGN UP</span>
          </button>
          <div class="collapse p-0" id="collapseExample">
            <sign-up></sign-up>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import signIn from '@/components/signIn'
import signUp from '@/components/signUp'

export default {
  name: 'loginMain',
  components: {
    signIn,
    signUp
  },
  data () {
    return {
      isCollapsed: true
    }
  }
}
</script>

<style scoped>
.card {
  background: rgb(238, 174, 202);
  background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(18, 82, 157, 1) 100%);
}

</style>
