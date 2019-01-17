<template>
  <header>
    <nav class="top-nav">
      <div class="container nav-container">
        <p class="logo">
          <router-link to="/">
            Starbucks Locator
          </router-link>
          </p>
        <ul class="nav-links">
          <li>Signed in as {{currentUser.email}}</li>
          <li><a @click="logout" class="button small">Logout</a></li>

        </ul>
      </div>

    </nav>
  </header>
</template>
<script>
  import firebase from 'firebase'
  export default {
    data () {
      return {
        currentUser: firebase.auth().currentUser
      }
    },
    methods: {
      logout () {
        firebase.auth().signOut().then(() => {
          this.$store.dispatch('clearData')
          this.$router.push('/')
        })
      }
    }
  }
</script>

<style lang="scss">
  .logo {
    a {
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;
      text-decoration: none;
    }
  }
</style>
