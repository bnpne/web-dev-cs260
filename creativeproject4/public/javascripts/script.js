var app = new Vue ({
    el: '#app',
    // created: function() {
    //     this.recieve();
    // },
    methods: {
        getanswer() {
            console.log("get answer");

            var url = "https://cors-anywhere.herokuapp.com/https://yesno.wtf/api";

            const main = document.getElementById("main");
            main.innerHTML = "Let Me Think..."

            

            fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data.answer);
                

                main.innerHTML = data.answer;
            });
        },
    },
})