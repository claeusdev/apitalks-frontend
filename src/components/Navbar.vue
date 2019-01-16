<template>
  <header class="container">
    <nav class="top-nav">
      <p>Starbucks Locator</p>
      <ul class="nav-link">
        <li>Signed in as {{currentUser.email}}</li>
        <li><a @click="logout">Logout</a></li>

      </ul>
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
  .container {
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 1280px;
    min-width: 310px;
    padding: 0 20px;
    position: relative;
    width: 100%;
  }
  .top-nav {
    display: flex;
    justify-content: space-between;
  }
</style>
