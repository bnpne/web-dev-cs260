// document.getElementById("enterClass").addEventListener("submit", function(enterClass()));
    
// function enterClass() {
//     var id = document.getElementById("index").value;
//     var fullURL = "http://dnd5eapi.co/api/classes/" + id;

//     console.log(fullURL);

//     fetch(fullURL)
//     .then ((resp) => resp.json())
//     .then (function(data) {
//         //let result = `<h2>Class Information</h2>`;
//         console.log(data)
//     });


//     //document.getElementById('result').innerHTML = result;

// }


    

document.getElementById("enterClass").addEventListener("submit", function(event) {
    event.preventDefault();
    var id = document.getElementById("index").value;
    console.log("id is",id);
    var fullURL = "http://dnd5eapi.co/api/classes/" + id;

    fetch(fullURL, {mode:'no-cors'})
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data => {
        let result = `<h2>class</h2>`; 
        console.log(data);
        
    });
    
    document.getElementById("result").innerHTML;
  });

