var app = new Vue({
  el: '#app',
  data: {
    // cities: [],
    number: '',
  },
  methods: {
    getClass() {
      console.log("Fetch " + this.number);

      var url = "https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/classes/" + this.number;
      console.log("URL " + url);

      fetch(url)
        .then((data) => {
          return (data.json());
        });
        // .then((classlist) => {
        //   console.log("Class Prof");
        //   console.log(classlist);
        // })
    },
  },
});