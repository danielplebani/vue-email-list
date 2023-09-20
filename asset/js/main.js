const { createApp } = Vue

createApp({
  data() {
    return {
      randomEmail: [],
      printTogether: 0,
    }
  },

  methods:{
    repeatEmail(){
      for (let i = 0; i < 10; i++) {
        axios 
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
          console.log(response.data.response)
          this.randomEmail.push(response.data.response)

          this.printTogether++
        })
        .catch(error => {
          console.log('errore!!! fai attenzione', error);
        })
      }  
    }
      
  },

  mounted(){
    this.repeatEmail()
  }
}).mount('#app')