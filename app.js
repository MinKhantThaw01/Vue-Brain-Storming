const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        number : '',
      };
    },
    methods:{
    // randomNum(){
    //   const x= Math.random(20);
    //     this.number = x
    // },
    
      add(num){
        this.counter = this.counter + num;
      },
      reduce(num){
        this.counter = this.counter - num;
        if(this.counter == 0){
            this.counter = 0
        }
        if(this.counter === 14){
            alert("You success this level")
        }
      }

    }
  });
  
  app.mount('#events');
  