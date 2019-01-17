<template>
  <div class="store">
    <div class="store__img">
      <img src="" alt="">
    </div>
    <div class="store__info">
      <h2 class="store__info-title">
        <router-link :to="{name: 'StoreShow', params: {id: store.id}}">
          {{store.brand}} - {{store.storeName}}
        </router-link>
      </h2>
      <p class="store__info-address"><i class="icon ion-md-locate">
        </i> {{store.streetAddress}}, {{store.city}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    store: {
      required: true,
      type: Object
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
  .flex-container {
    display: flex;
    justify-content: space-between;

    .half {
      width: 50%;
      max-width: 100%;
    }
  }

  .store__info {
    &-title {
      a {
        text-decoration: none;
        display: block;
        padding: 0 0 13px;
        font-size: 15px;
        font-weight: 700;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: #525252;
      }
      
    }
    &-address {
      color: #999999;
      font-weight: 700;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      letter-spacing: 2px;
      margin-top: 12px;
    }
  }
  

</style>
