# A login/register component for the web apps.
# A login/register component for the web apps.
### Sign-In / Sign-Up Transition
https://user-images.githubusercontent.com/14932895/162789597-a9e850f8-9867-44d6-88b2-236b0049ca63.mp4
### Validation and Error Message
https://user-images.githubusercontent.com/14932895/162789715-1e96c29f-2087-421c-a371-b39c2c04c075.mp4

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
    btn-color=""
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
| Prop                       | Type    | Value                                                                                     | Default                                    |
|----------------------------|---------|-------------------------------------------------------------------------------------------|--------------------------------------------|
| value/modelValue (v-model) | Object  | email/password/submitType(login/register)/rememberMe                                      | {}                                         |
| btnColor                   | String  | css background color                                                                      | transparent                                |
| loginTitle                 | String  | -                                                                                         | WELCOME                                    |
| registerTitle              | String  | -                                                                                         | JOIN US!                                   |
| titleSize                  | String  | css font size                                                                             | 4rem                                       |
| passLength                 | Number  | minimum password size                                                                     | 6                                          |
| forgotPassLink             | String  | forgot password link                                                                      | #                                          |
| termsLink                  | String  | registration terms link                                                                   | #                                          |
| isCorrect                  | Boolean | sign up / sign in form validation result, when is false login/register button is disabled | true                                       |
| loginMessage               | String  | error message displayed on the login button when isCorrect=false                          | Your login information is incorrect        |
| registerMessage            | String  | error message displayed on the register button when isCorrect=false                       | Your registration information is incorrect |

### Built With


* [Vue.js](https://vuejs.org/)
* [Bootstrap, Bootstrap Icons](https://getbootstrap.com)
* [Vuelidate](https://vuelidate-next.netlify.app/)
