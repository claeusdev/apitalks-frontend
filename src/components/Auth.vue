<template>
  <div class="flex-container">
    <div class="half">
      <h1 class="title">Register</h1>

      <form @submit.prevent="register">
        <input type="email" placeholder="Your email" v-model.trim='registerForm.email'>
        <input type="password" placeholder="Your password" v-model.trim='registerForm.password'>
        <button>Regitser</button>
      </form>
    </div>

    <div class="half">
      <h1 class="title">Login</h1>

      <form @submit.prevent="login">
        <input type="email" placeholder="Your email" v-model.trim='loginForm.email'>
        <input type="password" placeholder="Your password" v-model.trim='loginForm.password'>
        <button>Regitser</button>
      </form>
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
  .flex-container {
    display: flex;
    justify-content: space-between;
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
</style>
