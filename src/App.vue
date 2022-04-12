<template>
  <div
    class="container-fluid min-vh-100 d-flex justify-content-center align-items-center flex-column pt-3"
    :style="{ background: gradientBg }"
  >
    <div class="row">
      <h1 style="font-size:4vw;color: white">Vue.JS Login/Register Component</h1>
    </div>
    <div class="row d-flex justify-content-center align-items-center mb-auto mt-auto">
      <div class="col-12 col-sm-auto pt-3">
        <login-main
          v-model="userInfo"
          :btnColor="gradientBtn"
          :login-title="loginTitle"
          :register-title="registerTitle"
          :title-size="titleSize"
          :login-message="loginMessage"
          :register-message="registerMessage"
          :is-correct="!isCorrect"
          :is-dark="isDark"
          :pass-length="passLength"
          :forgot-pass-link="forgotPassLink"
          :terms-link="termsLink"
        ></login-main>
      </div>

      <div class="col-12 col-md-10 col-lg-7 pt-3">
        <div class="card shadow-lg border-2">
          <div class="card-body pB-0">
            <div class="row">
              <div class="col-12 col-sm-6">
                <h5 class="card-title fw-bold text-light">
                  Background Gradient Color
                </h5>
                <div class="input-group input-group-sm mb-2">
                  <input
                    v-model="bgColor.color1"
                    type="text"
                    class="form-control pe-0 text-light"
                    placeholder="color 1"
                    :style="{ background: bgColor.color1 + '!important' }"
                  />
                  <button
                    class="btn btn-outline-light"
                    type="button"
                    @click="swapColors(bgColor)"
                  >
                    <i class="bi bi-arrow-left-right"></i>
                  </button>
                  <input
                    v-model="bgColor.color2"
                    type="text"
                    class="form-control pe-0 text-light"
                    placeholder="color 2"
                    :style="{ background: bgColor.color2 + '!important' }"
                  />
                  <button
                    class="btn btn-outline-light"
                    type="button"
                    @click="shuffleColors(bgColor)"
                  >
                    <i class="bi bi-shuffle"></i>
                  </button>
                </div>

                <h5 class="card-title fw-bold text-light">
                  Buttons Gradient Color
                </h5>
                <div class="input-group input-group-sm mb-2">
                  <input
                    v-model="btnColor.color1"
                    type="text"
                    class="form-control pe-0 text-light"
                    placeholder="color 1"
                    :style="{ background: btnColor.color1 + '!important' }"
                  />
                  <button
                    class="btn btn-outline-light"
                    type="button"
                    @click="swapColors(btnColor)"
                  >
                    <i class="bi bi-arrow-left-right"></i>
                  </button>
                  <input
                    v-model="btnColor.color2"
                    type="text"
                    class="form-control pe-0 text-light"
                    placeholder="color 2"
                    :style="{ background: btnColor.color2 + '!important' }"
                  />
                  <button
                    class="btn btn-outline-light"
                    type="button"
                    @click="shuffleColors(btnColor)"
                  >
                    <i class="bi bi-shuffle"></i>
                  </button>
                </div>
                <div class="form-check form-switch">
                  <input
                    v-model="isDark"
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="isDark"
                  />
                  <label
                    class="form-check-label text-light fw-bold"
                    for="isDark"
                  >Titles & Button Texts to Dark</label
                  >
                </div>
                <div class="form-check form-switch mb-2">
                  <input
                    v-model="isCorrect"
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="isCorrect"
                  />
                  <label
                    class="form-check-label text-light fw-bold"
                    for="isCorrect"
                  >Error Message and Disable Button</label
                  >
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <h5 class="card-title fw-bold text-light">
                  Sign-In / Sign-Up Form Titles
                </h5>

                <div class="input-group input-group-sm mb-2">
                  <span class="input-group-text">Titles</span>
                  <input
                    v-model="loginTitle"
                    type="text"
                    class="form-control pe-0 text-light"
                    placeholder="loginTitle"
                  />
                  <input
                    v-model="registerTitle"
                    type="text"
                    class="form-control pe-0 text-light"
                    placeholder="registerTitle"
                  />
                </div>
                <p class="form-label text-light fw-bold">
                  Title Size({{ titleSize }}rem):
                </p>
                <input
                  v-model="titleSize"
                  type="range"
                  class="form-range"
                  min="0.5"
                  max="5"
                  step="0.1"
                />
                <p class="form-label text-light fw-bold">
                  Max Password Length({{ passLength }} char):
                </p>
                <input
                  v-model="passLength"
                  type="range"
                  class="form-range"
                  min="2"
                  max="16"
                  step="1"
                />
              </div>
            </div>

            <hr class="m-2" />

            <div class="row">
              <div class="col-12 col-sm-6">
                <h5 class="card-title fw-bold text-light">
                  Error Messages and Links
                </h5>

                <div class="input-group input-group-sm mb-2">
                  <span class="input-group-text">Login Error Msg</span>
                  <input
                    v-model="loginMessage"
                    type="text"
                    class="form-control pe-0 text-light"
                    placeholder="loginMessage"
                  />
                </div>

                <div class="input-group input-group-sm mb-2">
                  <span class="input-group-text">Register Error Msg</span>
                  <input
                    v-model="registerMessage"
                    type="text"
                    class="form-control pe-0 text-light"
                    placeholder="registerMessage"
                  />
                </div>

                <div class="input-group input-group-sm mb-2">
                  <span class="input-group-text">Forgot Pass Link</span>
                  <input
                    v-model="forgotPassLink"
                    type="text"
                    class="form-control pe-0 text-light"
                    placeholder="forgotPassLink"
                  />
                </div>
                <div class="input-group input-group-sm mb-2">
                  <span class="input-group-text">Terms Link</span>
                  <input
                    v-model="termsLink"
                    type="text"
                    class="form-control pe-0 text-light"
                    placeholder="forgotPassLink"
                  />
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <textarea
                  :value="returnUser"
                  class="form-control text-light mt-2"
                  rows="6"
                  readonly
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <a href="https://github.com/ilkerdurmaz/vue-bootstrap-login" class="col"><i class="bi bi-github text-light" style="font-size: 5rem"></i></a>
      <a href="https://www.linkedin.com/in/ilker-durmaz" class="col"><i class="bi bi-linkedin" style="font-size: 5rem"></i></a>
    </div>
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
      userInfo: null,
      bgColor: {
        deg: 160,
        color1: '#b721ff',
        color2: '#23ccec'
      },
      btnColor: {
        deg: 90,
        color1: '#069ae7',
        color2: '#23ccec'
      },
      loginTitle: 'WELCOME',
      registerTitle: 'JOIN US',
      titleSize: '4',
      loginMessage: 'information is incorrect',
      registerMessage: 'information is incorrect',
      isCorrect: false,
      isDark: false,
      passLength: 6,
      termsLink: 'https://www.google.com',
      forgotPassLink: 'https://www.google.com'
    }
  },
  methods: {
    swapColors (obj) {
      const temp = obj.color1
      obj.color1 = obj.color2
      obj.color2 = temp
    },
    shuffleColors (obj) {
      obj.color1 = '#' + Math.random().toString(16).slice(2, 8)
      obj.color2 = '#' + Math.random().toString(16).slice(2, 8)
      obj.deg = Math.random() * 360
    }
  },
  computed: {
    gradientBg () {
      return `linear-gradient(${this.bgColor.deg}deg, ${this.bgColor.color1}, ${this.bgColor.color2})`
    },
    gradientBtn () {
      return `linear-gradient(${this.btnColor.deg}deg, ${this.btnColor.color1}, ${this.btnColor.color2})`
    },
    returnUser () {
      if (this.userInfo !== null) {
        return JSON.stringify(this.userInfo, null, 1)
      } else {
        return 'The returned user object is currently empty. Please login or register to see the returned user object.'
      }
    }
  }
}
</script>

<style scoped>
.card {
  background: transparent;
}

textarea {
  resize: none;
}
</style>
