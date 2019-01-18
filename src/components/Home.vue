<template>
  <div class="home container">
    <H1 class="title">Search Starbucks Stores around the worlld</H1>
    <p>Search by name or city</p>
    
    <StoreList :stores="stores"/>
  </div>
</template>

<script>
  import axios from 'axios'
  import StoreList from './StoreList'
  export default {
    name: 'Home',
    components: {StoreList},
    data () {
      return {
        stores: [],
        search: ''
      }
    },
    mounted () {
      axios.get('https://912kgb8em7.execute-api.us-east-1.amazonaws.com/dev/shops',
        {
          headers: {
            'x-api-key': 'UtlnFHAHf64AhpJRzCflf2tS9gumOJa55gGikcIm'
          }
        })
            .then(res => {
              console.log(res.data)
              this.stores = Object.values(res.data.stores)
              // this.$store.commit('setStores', Object.values(res.data.stores))
            }
        ).catch(err => {
          console.error(err)
        })
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    text-align: center;
    display: block;
    padding: 0 0 48px;
    font-size: 18px;
    font-weight: 700;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #525252;
  }
</style>
