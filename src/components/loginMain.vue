<template>
  <div class="row d-flex justify-content-center ">
    <div class="col-12 col-md-6 col-lg-5 col-xl-4 col-xxl-3 pt-5">
      <div class="card">
        <div class="card-header text-center p-3 pb-5">
          <h1 v-if="isCollapsed" class="card-title text-light">WELCOME</h1>
          <h1 v-else class="card-title text-light">JOIN US!</h1>
        </div>
        <div class="card-body collapse p-0 show" id="collapseExample">
          <sign-in></sign-in>
        </div>
        <div class="card-footer text-center p-0">
          <button class="btn" data-bs-toggle="collapse"
                  @click="isCollapsed=!isCollapsed"
                  data-bs-target="#collapseExample" style="margin-top: -2.5rem;position: relative">
            <span v-if="!isCollapsed"><strong class="text-light">Sign-in</strong></span>
            <span v-else><strong class="text-light">Sing-Up</strong></span>
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

<style >
.card {
  background: rgb(238, 174, 202);
  background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(18, 82, 157, 1) 100%);
}
.btn{
  background: rgb(6,154,231);
  background: linear-gradient(90deg, rgba(6,154,231,1) 0%, rgba(35,204,236,1) 100%);
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: lightgray!important;
  opacity: 1; /* Firefox */
}
</style>
