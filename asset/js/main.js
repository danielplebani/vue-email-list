const { createApp } = Vue

createApp({
  data() {
    return {
      randomEmail: [],
      printTogether: 0,
      buttonClicked: false
    }
  },

  methods:{
    clickButton(){
      this.buttonClicked = true
    }
  },

  mounted(){
    for (let i = 0; i < 10; i++) {
      axios 
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(response => {
        console.log(response.data.response)
        this.randomEmail.push(response.data.response)
      })
      .catch(error => {
        console.log('errore!!! fai attenzione', error);
      })
    }
  }
}).mount('#app')