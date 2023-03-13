

fetch("./watercolor.json")
.then(response => response.json())
.then(myMovies => loadMovies(myMovies));

function loadMovies(myMovies) {
    var imgW1= document.getElementById("imgw1");
    var imgW2 = document.getElementById("imgw2"); 
    var imgW3 = document.getElementById("imgw3"); 
    var imgW4 = document.getElementById("imgw4"); 
   
    var txtW1 = document.getElementById("txtw1"); 
    var txtW2 = document.getElementById("txtw2"); 
    var txtW3 = document.getElementById("txtw3"); 
    var txtW4 = document.getElementById("txtw4"); 
    
    for(var i=0; i<myMovies.watercolor.length;i++)
    {
        let title = myMovies.watercolor[i].title;
        let description = myMovies.watercolor[i].description;
        let year = myMovies.watercolor[i].year;
        let url = myMovies.watercolor[i].url;

        let imgw = document.createElement("div");
        imgw.innerHTML = `<img src=${url} class="card-img-top"></img>`;
        let txtw = document.createElement("p");
        txtw.innerHTML = `<p class="card-text"> <strong>${title}</strong>, ${description}</p>, ${year}</p>`;

            if (myMovies.watercolor[i].title === "Abstract Fluid painting") {
                imgW1.appendChild(imgw);
                txtW1.appendChild(txtw);
            }
            else if (myMovies.watercolor[i].title === "Tree") {
            imgW2.appendChild(imgw);
            txtW2.appendChild(txtw);
            } 
            else if (myMovies.watercolor[i].title === "Flower") {
            imgW3.appendChild(imgw);
            txtW3.appendChild(txtw);
            } 
            else if (myMovies.watercolor[i].title === "Strokes") {
            imgW4.appendChild(imgw);
            txtW4.appendChild(txtw);
            }
            



    }
}