
// fetch("./sketches.json")
// .then(function (response) {
// return response.json();
// })
// .then(function (data) {
// appendData(data);
// })
// .catch(function (err) {
// console.log('error:' + err);
// })

fetch("./sketches.json")
.then(response => response.json())
.then(myMovies => loadMovies(myMovies));

function loadMovies(myMovies) {
    var imgMovie1= document.getElementById("imgMovie1");
    var imgMovie2 = document.getElementById("imgMovie2"); 
    var imgMovie3 = document.getElementById("imgMovie3"); 
    var imgMovie4 = document.getElementById("imgMovie4"); 
    var imgMovie5 = document.getElementById("imgMovie5"); 
    var imgMovie6 = document.getElementById("imgMovie6");
    var txtMovie1 = document.getElementById("txtMovie1"); 
    var txtMovie2 = document.getElementById("txtMovie2"); 
    var txtMovie3 = document.getElementById("txtMovie3"); 
    var txtMovie4 = document.getElementById("txtMovie4"); 
    var txtMovie5 = document.getElementById("txtMovie5"); 
    var txtMovie6 = document.getElementById("txtMovie6");
    for(var i=0; i<myMovies.sketch.length;i++)
    {
        let title = myMovies.sketch[i].title;
        let description = myMovies.sketch[i].description;
        let year = myMovies.sketch[i].year;
        let url = myMovies.sketch[i].url;

        let imgMovie = document.createElement("div");
        imgMovie.innerHTML = `<img src=${url} class="card-img-top"></img>`;
        let txtMovie = document.createElement("p");
        txtMovie.innerHTML = `<p class="card-text"> <strong>${title}</strong>, ${description}</p>, ${year}</p>`;

            if (myMovies.sketch[i].title === "Car") {
                imgMovie1.appendChild(imgMovie);
                txtMovie1.appendChild(txtMovie);
            }
            else if (myMovies.sketch[i].title === "Bridge") {
            imgMovie2.appendChild(imgMovie);
            txtMovie2.appendChild(txtMovie);
            } 
            else if (myMovies.sketch[i].title === "Bird") {
            imgMovie3.appendChild(imgMovie);
            txtMovie3.appendChild(txtMovie);
            } 
            else if (myMovies.sketch[i].title === "Cartoon") {
            imgMovie4.appendChild(imgMovie);
            txtMovie4.appendChild(txtMovie);
            }
            else if (myMovies.sketch[i].title === "Sunset") {
                imgMovie5.appendChild(imgMovie);
                txtMovie5.appendChild(txtMovie);
                }
            else if (myMovies.sketch[i].title === "Cat") {
                    imgMovie6.appendChild(imgMovie);
                    txtMovie6.appendChild(txtMovie);
                    }



    }
}