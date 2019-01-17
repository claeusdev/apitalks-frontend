<template>
  <div class="div">
    <div class="store__search container--small">
      <div class="search-input search-input--large">
        <input type="text" placeholder="Search Stores..." v-model="searchTerm" autofocus="">
      </div>
    </div>
    <div class="stores">
      <StoreListItem
        v-for="store in searchedStores" :store="store" :key="store.id"/>
    </div>
    <hr>
    <ul>
      <li v-for="p in paginatedData" :key="p.id">
        {{p.first}}
        {{p.last}}
        {{p.suffix}}
      </li>
    </ul>
    <button @click="prevPage">
      Previous
    </button>
    <button @click="nextPage">
      Next
    </button>
  </div>
</template>

<script>
  import StoreListItem from './StoreListItem'
  export default {
    components: { StoreListItem },
    data () {
      return {
        searchTerm: '',
        pageNumber: 0
      }
    },
    props: {
      stores: {
        required: true,
        type: Array
      },
      size: {
        type: Number,
        required: false,
        default: 10
      }
    },
    computed: {
      searchedStores () {
        return this.stores.filter(store => {
          return store.city.match(this.searchTerm) || store.storeName.match(this.searchTerm)
        })
      },
      pageCount () {
        const l = this.stores.length
        const s = this.size
        return Math.ceil(l / s)
      },
      paginatedData () {
        const start = this.pageNumber * this.size
        const end = start + this.size
        return this.stores.slice(start, end)
      }
    },
    methods: {
      nextPage () {
        this.pageNumber++
      },
      prevPage () {
        this.pageNumber--
      }
    }
  }
</script>


<style lang="scss">
.stores {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .store {
      background-color: white;
      margin: 0 0 4% 0;
      box-shadow: 0px 3px 8px -4px rgba(0,0,0,0.15);
      display: block;
      transform: translate3d(0, 0, 0);
      -webkit-transform: translate3d(0, 0, 0);
      -webkit-transition: 0.3s;
      transition: 0.3s;
      width: 25%;
      &__img {
        width: 20%;
        height: 50px;
        img {
          width: 100%;
        }
      }

      &__info {
        width: 80%;
        h3 {
          color: grey;
        }
      }
    @media(max-width: 540px) {
      width: 100% !important;
    }
  }
  @media(max-width: 540px) {
      flex-direction: column;
    }
}

.search-input--large {
    input {
      -webkit-transition: -webkit-box-shadow .3s;
      transition: -webkit-box-shadow .3s;
      transition: box-shadow .3s;
      transition: box-shadow .3s,-webkit-box-shadow .3s;
      font-size: 16px;
      line-height: 22px;
      padding: 20px;
      padding-left: 50px;
      padding-right: 50px;
      background-color: #fff;
      -webkit-box-shadow: 0 3px 6px 0 rgba(0,0,0,.1), 0 1px 3px 0 rgba(0,0,0,.08);
      box-shadow: 0 3px 6px 0 rgba(0,0,0,.1), 0 1px 3px 0 rgba(0,0,0,.08);
    }
    &:before {
    font-size: 22px;
    left: 20px;
  }
}
.search-input {
  position: relative;
  margin-bottom: 20px;
  input{
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    border: 0;
    outline: 0;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    -webkit-appearance: none;
  }
    &:before {
    position: absolute;
    height: 24px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
}

</style>
