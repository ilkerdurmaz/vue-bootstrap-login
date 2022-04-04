<template>
  <div class="row d-flex justify-content-center">
    <div class="col-12 col-sm-8 col-md-7 col-lg-5 col-xl-4 col-xxl-4">
      <div class="card" :style="{'background':bgColor}">
        <div class="card-header text-center p-3 pb-5">
          <h1 v-if="isCollapsed" class="card-title text-light" :style="{'font-size':titleSize+'rem'}">{{loginTitle}}</h1>
          <h1 v-else class="card-title text-light" :style="{'font-size':titleSize+'rem'}">{{registerTitle}}</h1>
        </div>
        <div class="card-body collapse p-0 show" id="collapseExample">
          <sign-in v-model="userInfo" :btn-color="btnColor"></sign-in>
        </div>
        <div class="card-footer text-center p-0">
          <button
            class="btn"
            :style="{'background':btnColor}"
            data-bs-toggle="collapse"
            @click="isCollapsed = !isCollapsed"
            data-bs-target="#collapseExample"
            style="margin-top: -2.5rem; position: relative"
          >
            <span v-if="!isCollapsed"
              ><strong class="text-light">Sign-in</strong></span
            >
            <span v-else><strong class="text-light">Sing-Up</strong></span>
          </button>
          <div class="collapse p-0" id="collapseExample">
            <sign-up v-model="userInfo" :btn-color="btnColor"></sign-up>
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
  props: {
    bgColor: {
      type: String,
      default: 'transparent'
    },
    btnColor: {
      type: String,
      default: 'linear-gradient(90deg,rgba(6, 154, 231, 1) 0%,rgba(35, 204, 236, 1) 100%)'
    },
    loginTitle: {
      type: String,
      default: 'WELCOME'
    },
    registerTitle: {
      type: String,
      default: 'JOIN US!'
    },
    titleSize: {
      type: String,
      default: '4'
    }
  },
  data () {
    return {
      isCollapsed: true,
      userInfo: {
        email: '',
        password: '',
        submitType: '',
        rememberMe: false
      }
    }
  },
  watch: {
    userInfo (val) {
      this.$emit('update:modelValue', val)
    }
  }
}
</script>

<style>

::placeholder {
  color: lightgray !important;
  opacity: 1;
}
.fa-shake {
  --fa-animation-duration: 2s;
  --fa-animation-iteration-count: 1;
}
.form-control {
  background: transparent !important;
}
</style>
