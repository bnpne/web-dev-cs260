var app = new Vue({
  el: '#app',
  data: {
    number: '',
    result: "",
  },
  methods: {
    getInfo() {      
      console.log("Fetch " + this.number);

      var url = "https://cors-anywhere.herokuapp.com/http://numbersapi.com/" + this.number;
      console.log("URL " + url);

      fetch(url, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  
      })
      .then(response => response.json())
      .then(data => (this.result = data));
    },
    getRandom() {      
      console.log("Fetch Random");

      var url = "https://cors-anywhere.herokuapp.com/http://numbersapi.com/random";
      console.log("URL " + url);

      fetch(url, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  
      })
      .then(response => response.json())
      .then(data => (this.result = data));
    },
  },
});