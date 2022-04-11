# A login/register component for the web apps.

### Sign-Up / Sign-In Transition
![1](https://user-images.githubusercontent.com/14932895/162794507-9556211c-3cd6-494c-a322-44e5eb5dc06c.gif)
### Validation and Error
![2](https://user-images.githubusercontent.com/14932895/162794528-254ad16e-fb64-4fdc-8de3-d8f10cfc7445.gif)

## Using the component:

**Installing**

```bash
   npm i vue-bootstrap-login
```

**Import to Project**

```javascript
// main.js file
import loginMain from 'vue-bootstrap-login/src/components/loginMain'
Vue.component('myLoginComp', loginMain)
```
or

```vue
<script>
 import loginMain from 'vue-bootstrap-login/src/components/loginMain'
  export default {
    components: {
      myLoginComp: loginMain
    }
  }
</script>
```
and

```vue
<template>
  <myLoginComp ...props>
</template>
```
### Props
``` html
   <myLoginComp 
    v-model=""
    btnColor=""
    bgColor=""
    isDark=""
    loginTitle=""
    registerTitle=""            
    titleSize=""
    passLength=""
    forgotPassLink=""
    termsLink=""            
    isCorrect=""            
    loginMessage=""
    registerMessage=""/>
```
| Prop                       | Type    | Description                                                                               | Default                                                                   |
|----------------------------|---------|-------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| value/modelValue (v-model) | Object  | email/password/submitType(login/register)/rememberMe                                      | {}                                                                        |
| bgColor                    | String  | component background color                                                                | transparent                                                               |
| btnColor                   | String  | buttons background color                                                                  | linear-gradient(90deg,rgba(6, 154, 231, 1) 0%,rgba(35, 204, 236, 1) 100%) |
| loginTitle                 | String  | -                                                                                         | WELCOME                                                                   |
| registerTitle              | String  | -                                                                                         | JOIN US!                                                                  |
| titleSize                  | String  | css font size                                                                             | 4rem                                                                      |
| passLength                 | Number  | minimum password size                                                                     | 6                                                                         |
| forgotPassLink             | String  | forgot password link                                                                      | #                                                                         |
| termsLink                  | String  | registration terms link                                                                   | #                                                                         |
| isCorrect                  | Boolean | sign up / sign in form validation result, when is false login/register button is disabled | true                                                                      |
| isDark                     | Boolean | Title and button texts color switch (dark/light)                                          | false                                                                     |
| loginMessage               | String  | error message displayed on the login button when isCorrect=false                          | information is incorrect                                                  |
| registerMessage            | String  | error message displayed on the register button when isCorrect=false                       | information is incorrect                                                  |

### Built With

* [Vue.js](https://vuejs.org/)
* [Bootstrap, Bootstrap Icons](https://getbootstrap.com)
* [Vuelidate](https://vuelidate-next.netlify.app/)
