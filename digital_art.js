


fetch("./digital_art.json")
.then(response => response.json())
.then(myMovies => loadMovies(myMovies));

function loadMovies(myMovies) {
    var imgDig1= document.getElementById("imgd1");
    var imgDig2 = document.getElementById("imgd2"); 
    var imgDig3 = document.getElementById("imgd3"); 
    var imgDig4 = document.getElementById("imgd4"); 
    var imgDig5 = document.getElementById("imgd5"); 
    var imgDig6 = document.getElementById("imgd6");
    var txtDig1 = document.getElementById("txtd1"); 
    var txtDig2 = document.getElementById("txtd2"); 
    var txtDig3 = document.getElementById("txtd3"); 
    var txtDig4 = document.getElementById("txtd4"); 
    var txtDig5 = document.getElementById("txtd5"); 
    var txtDig6 = document.getElementById("txtd6");
    for(var i=0; i<myMovies.digital.length;i++)
    {
        let title = myMovies.digital[i].title;
        let description = myMovies.digital[i].description;
        let year = myMovies.digital[i].year;
        let url = myMovies.digital[i].url;

        let imgdig = document.createElement("div");
        imgdig.innerHTML = `<img src=${url} class="card-img-top"></img>`;
        let txtdig = document.createElement("p");
        txtdig.innerHTML = `<p class="card-text"> <strong>${title}</strong>, ${description}</p>, ${year}</p>`;

            if (myMovies.digital[i].title === "Cyborg") {
                imgDig1.appendChild(imgdig);
                txtDig1.appendChild(txtdig);
            }
            else if (myMovies.digital[i].title === "Monster") {
            imgDig2.appendChild(imgdig);
            txtDig2.appendChild(txtdig);
            } 
            else if (myMovies.digital[i].title === "Silhouette") {
            imgDig3.appendChild(imgdig);
            txtDig3.appendChild(txtdig);
            } 

            else if (myMovies.digital[i].title === "Dog") {
            imgDig4.appendChild(imgdig);
            txtDig4.appendChild(txtdig);
            }
            else if (myMovies.digital[i].title === "Explosion") {
                imgDig5.appendChild(imgdig);
                txtDig5.appendChild(txtdig);
                }
            else if (myMovies.digital[i].title === "Teddy") {
                    imgDig6.appendChild(imgdig);
                    txtDig6.appendChild(txtdig);
                    }



    }
}