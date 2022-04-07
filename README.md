# A login component that was made with vue, bootstrap,vuelidate and much love.

<img src="https://user-images.githubusercontent.com/14932895/161431964-f8c09dea-5375-4ba3-b853-47b134085d23.gif">

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


# It needs font awesome cdn for free icons, you will find up-to-date cdn here:
https://cdnjs.com/libraries/font-awesome
