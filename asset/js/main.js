const { createApp } = Vue

createApp({
  data() {
    return {
      randomEmail: []
    }
  },

  methods:{
    repeatEmail(){
      for (let i = 0; i < 10; i++) {
        axios 
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
          console.log(response.data.response);
          this.randomEmail.push(response.data.response)
        })
      }  
    }
      
  },

  mounted(){
    this.repeatEmail
  }
}).mount('#app')