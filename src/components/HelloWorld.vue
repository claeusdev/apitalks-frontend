<template>
  <div class="homepage">
    <div v-if="currentUser">
      <h2>Signed in as {{currentUser.email}}</h2>
    </div>
    <div v-else>
      <div class="cta">
      <div class="cta__text">
        <h1>Find your favorite starbucks store around the world</h1>
        <router-link to="/auth" tag="button">
          Get Started
        </router-link>
      </div>
    </div>
    <div class="starbucks">

    </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'HelloWorld',
  data () {
    return {
      currentUser: firebase.auth().currentUser,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .homepage {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;

    .cta {
      width: 50%;
      padding: 20px;
      text-align: left;
    }

    .starbucks {
      width: 50%;
    }
  }
</style>
