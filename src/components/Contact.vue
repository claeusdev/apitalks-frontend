<template>
  <div class="contaier">
    <div class="contact">
      <form @submit.prevent="submitForm"><h2>Contact</h2>
        <input type="text" placeholder="Your name" class="input" v-model="form.name">
        <i v-if="!nameIsValid" class="error">Name is required</i>
        <input type="text" placeholder="Your age" class="input" v-model.number="form.age">
        <i v-if="!ageIsValid" class="error">Age is invalid</i>
        <input type="email" placeholder="Your email" class="input" v-model="form.email">
        <i v-if="!emailIsValid" class="error">Email is required</i>
        <hr>
        <button class="button green">Send</button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Contact',
  data () {
    return {
      form: {
        name: null,
        age: null,
        email: null
      }
    }
  },
  computed: {
    nameIsValid () {
      return !!this.form.name
    },
    ageIsValid () {
      return typeof this.form.age === 'number' && this.form.age
    },
    emailIsValid () {
      return !!this.form.email
    }
  },
  methods: {
    submitForm () {
      const formIsValid = this.nameIsValid && this.ageIsValid && this.emailIsValid
      if (formIsValid) {
        axios
          .post(
            'https://912kgb8em7.execute-api.us-east-1.amazonaws.com/dev/contact/',
          {
            headers: {
              'x-api-key': 'UtlnFHAHf64AhpJRzCflf2tS9gumOJa55gGikcIm'
            }
          },
          {
            Name: this.form.name,
            Age: this.form.age,
            Email: this.form.email
          }).then((response) => {
            console.log(response)
            this.$router.push('/home')
          })
      } else {
        console.log('invalid form')
      }
    }
  }
}
</script>
<style lang="scss">
  body {
    background: #F2F2F2;
  }
  .error {
    color: red;
  }
  .contact {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    form {
      padding: 20px;
      background: #fff;
      max-width: 360px;
      .input {
        padding: 15px 10px;
        border: 1px solid #d5d9dc;
        color: #2a2b2c;
        border-radius: 5px;
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
        display: block;
        max-width: 100%;
        margin-bottom: 10px;
      }
    }
    @media(max-width: 540px){
      max-width: 100%;
    }
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
