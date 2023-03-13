


fetch("./data.json")
.then(response => response.json())
.then(myMovies => loadMovies(myMovies));

function loadMovies(myMovies) {
    var imgb1= document.getElementById("imgB1");
    var imgb2 = document.getElementById("imgB2"); 
   
    var txtb1 = document.getElementById("txtB1"); 
    var txtb2 = document.getElementById("txtB2"); 
    
    for(var i=0; i<myMovies.business.length;i++)
    {
        let title = myMovies.business[i].title;
        let description = myMovies.business[i].description;
        let year = myMovies.business[i].year;
        let url = myMovies.business[i].url;

        let imgb = document.createElement("div");
        imgb.innerHTML = `<img src=${url} class="card-img-top"></img>`;
        let txtb = document.createElement("p");
        txtb.innerHTML = `<p class="card-text"> <strong>${title}</strong>, ${description}</p>, ${year}</p>`;

            if (myMovies.business[i].title === "Singul Art website") {
                imgb1.appendChild(imgb);
                txtb1.appendChild(txtb);
            }
            else if (myMovies.business[i].title === "UGallery Art website") {
            imgb2.appendChild(imgb);
            txtb2.appendChild(txtb);
            } 
            


    }
}