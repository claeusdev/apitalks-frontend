<template>
  <div class="container">
    <div class="store-details">
      <div class="store-details__img-container">
        <div class="store-details-image">

        </div>
      </div>

      <div class="store-details__info">
        <h1 class="store-details__info-title">{{store.storeNumber}}, {{store.brand}} - {{store.storeName}}</h1>
        <h3 class="store-details__info-location">
          <i class="icon ion-md-locate">
            </i> {{store.streetAddress || 'No address on record'}},
          {{store.city}}, {{store.country}} - {{store.postCode}}
        </h3>
        <hr>
        <h4>Ownership Type: {{store.ownershipType}}</h4>
        <p class="store-details__info-address"><i class="icon ion-md-navigate"></i> {{store.longitude}}, {{store.latitude}}, Timezone: {{store.timezone}}</p>

        <h3><i class="icon ion-md-call">
        </i> {{store.phoneNumber}}</h3>
        
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'StoreShow',
  data () {
    return {
      store: {}
    }
  },
  methods: {
    fetchStore (id) {
      axios.get(`https://912kgb8em7.execute-api.us-east-1.amazonaws.com/dev/shops/${id}`)
      .then(res => {
        console.log(res.data)
        this.store = res.data.store
        // this.$store.commit('setStores', Object.values(res.data.stores))
      }
    ).catch(err => {
      console.error(err)
    })
    }
  },
  created () {
    this.fetchStore(this.$route.params.id)
  }
}
</script>

<style lang="scss">
  body {
    background: #F2F2F2;
  }
  .store-details {
    position: relative;
    background-color: white;
    overflow-x: hidden;
    margin: 40px auto 80px;
    box-shadow: 0px 3px 8px -4px rgba(0,0,0,0.15);
    display: flex;
    width: 100%;
    height: 640px;
    box-shadow: 0px 13px 40px -24px rgba(0,0,0,0.15);
    &__img-container {
      background: white;
      display: block;
      text-align: center;
      width: 50%;
      user-select: none;
      position: relative;
      top: 0;
      bottom: 0;
      left: 0;
      transition-property: width, height;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
      .store-details-image {
        background-image: url('~@/assets/logo.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        bottom: 0;
        font-size: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        margin: 12%;
        margin-right: 10%;
        margin-left: 18%;
        margin-bottom: 20%;
        -moz-transform: rotate(0.01deg);
        transform: rotate(0.01deg);
        -webkit-transition: opacity 0.2s ease-in-out;
        transition: opacity 0.2s ease-in-out;
      }
      @media only screen and (max-width: 680px){
        position: relative;
        width: 100%;
        height: 448px;
      }
    }

    &__info {
      width: 50%;
      display: inline-block;
      padding-left: 50px;
      padding-right: 50px;
      height: 100%;
      font-size: 1rem;
      box-sizing: border-box;
      position: relative;
      vertical-align: top;
      text-align: left;
      padding-top: 30px;
      @media only screen and (max-width: 680px){
        position: relative;
        width: 100%;
        height: 448px;
      }

      &-title {
        text-transform: uppercase;
        color: #525252;
        font-size: 36px;
        font-weight: 400;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        line-height: 42px;
        overflow: hidden;
        margin: 20px 0 0;
        transition: all 0.2s ease-in-out;

        @media only screen and (max-width: 400px){
          margin-top: 0;
        }

        @media only screen and (max-width: 540px) {
          margin-top: 10px;
          font-size: 28px;
          line-height: 38px;
          max-height: 76px;
        }
      }
      &-location {
        text-transform: uppercase;
        color: #999999;
        font-weight: 700;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        letter-spacing: 2px;
        margin-top: 12px;
      }

      &-address {
        color: #999999;
        font-weight: 500;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        white-space: nowrap;
      }
    }
    @media(max-width: 540px) {
      flex-direction: column;
    }

  }
</style>
