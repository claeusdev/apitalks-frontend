<template>
  <div class="container">
    <h4>Register or Login to continue</h4>
    <div class="flex-container">
    <div class="half">
      <h1 class="title">Register</h1>

      <form @submit.prevent="register">
        <input type="email" placeholder="Your email" class="input" v-model.trim='registerForm.email'>
        <input type="password" placeholder="Your password" class="input" v-model.trim='registerForm.password'>
        <button class="button green">Register</button>
      </form>
    </div>

    <div class="half">
      <h1 class="title">Login</h1>

      <form @submit.prevent="login">
        <input type="email" placeholder="Your email" class="input" v-model.trim='loginForm.email'>
        <input type="password" placeholder="Your password" class="input" v-model.trim='loginForm.password'>
        <button class="button green">Login</button>
      </form>
    </div>
    
  </div>
  </div>
  
</template>


<script>
  import firebase from 'firebase'
  export default {
    name: 'Auth',
    data () {
      return {
        registerForm: {
          email: '',
          password: ''
        },
        loginForm: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      register () {
        console.log('You called')
        firebase.auth().createUserWithEmailAndPassword(this.registerForm.email, this.registerForm.password).then(user => {
          this.$store.commit('setCurrentUser', user)
        }).then(() => {
          this.$router.push('/home')
        }).catch(err => {
          alert(err.message)
        })
      },
      login () {
        firebase.auth().signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password).then(user => {
          this.$store.commit('setCurrentUser', user.user)
        }).then(() => {
          this.$router.push('/home')
        }).catch(err => {
          alert(err.message)
        })
      }
    },
    created () {
      firebase.auth().onAuthStateChanged(user => { this.authUser = firebase.auth().currentUser })
    }
  }
</script>

<style lang="scss">
  .container {
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 1280px;
    min-width: 310px;
    padding: 0 20px;
    position: relative;
    width: 100%;
  }
  .title {
    text-align: left;
  }
  .flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    width: 100%;

    .half {
      width: 50%;
    }

    @media(max-width: 468px){
      flex-direction: column;
    }

    @media(max-width: 320px){
      flex-direction: column;
    }
  }

  .input {
    padding: 15px 10px;
    border: 1px solid #d5d9dc;
    color: #2a2b2c;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    display: block;
    width: 360px;
    max-width: 100%;
    margin-bottom: 10px;
  }

  .button {
  cursor: pointer;
  color: white;
  font-size: 1em;
  border-radius: 4px;
  border: 0;
  padding: 1em 1.5em;
  outline: 0;
  text-align: center;
  display: inline-block;
  background-color: #2B65A1;
  background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #2B65A1), color-stop(100%, #1B426B));
  background-image: -webkit-linear-gradient(#2B65A1, #1B426B);
  background-image: -moz-linear-gradient(#2B65A1, #1B426B);
  background-image: -o-linear-gradient(#2B65A1, #1B426B);
  background-image: linear-gradient(#2B65A1, #1B426B);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff$color1', endColorstr='#ff$color2', GradientType=0);
}

.button.green {
    background-color: #23a45a;
    background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #23a45a), color-stop(100%, #279053));
    background-image: -webkit-linear-gradient(#23a45a, #279053);
    background-image: -moz-linear-gradient(#23a45a, #279053);
    background-image: -o-linear-gradient(#23a45a, #279053);
    background-image: linear-gradient(#23a45a, #279053);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff$color1', endColorstr='#ff$color2', GradientType=0);
    box-shadow: 0 3px 0 0 #186d3c;
}
</style>
