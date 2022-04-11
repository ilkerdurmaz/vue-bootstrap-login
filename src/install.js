import loginMain from './components/loginMain.vue'
export default {
  install: (app, options) => {
    app.component(loginMain.name, loginMain)
  }
}
