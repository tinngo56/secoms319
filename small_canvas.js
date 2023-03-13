

fetch("./small_canvas.json")
.then(response => response.json())
.then(myMovies => loadMovies(myMovies));

function loadMovies(myMovies) {
    var img1= document.getElementById("imgSmall1");
    var img2 = document.getElementById("imgSmall2"); 
    var img3 = document.getElementById("imgSmall3"); 
    var img4 = document.getElementById("imgSmall4"); 
    var img5 = document.getElementById("imgSmall5"); 
    var img6 = document.getElementById("imgSmall6");
    var txt1 = document.getElementById("txtSmall1"); 
    var txt2 = document.getElementById("txtSmall2"); 
    var txt3 = document.getElementById("txtSmall3"); 
    var txt4 = document.getElementById("txtSmall4"); 
    var txt5 = document.getElementById("txtSmall5"); 
    var txt6 = document.getElementById("txtSmall6");
    for(var i=0; i<myMovies.small.length;i++)
    {
        let title = myMovies.small[i].title;
        let description = myMovies.small[i].description;
        let year = myMovies.small[i].year;
        let url = myMovies.small[i].url;

        let img = document.createElement("div");
        img.innerHTML = `<img src=${url} class="card-img-top"></img>`;
        let txt = document.createElement("p");
        txt.innerHTML = `<p class="card-text"> <strong>${title}</strong>, ${description}</p>, ${year}</p>`;

            if (myMovies.small[i].title === "Michael Jordon") {
                img1.appendChild(img);
                txt1.appendChild(txt);
            }
            else if (myMovies.small[i].title === "Artificial Intelligence") {
            img2.appendChild(img);
            txt2.appendChild(txt);
            } 
            else if (myMovies.small[i].title === "Player") {
            img3.appendChild(img);
            txt3.appendChild(txt);
            } 
            else if (myMovies.small[i].title === "Chess") {
            img4.appendChild(img);
            txt4.appendChild(txt);
            }
            else if (myMovies.small[i].title === "River") {
                img5.appendChild(img);
                txt5.appendChild(txt);
                }
            else if (myMovies.small[i].title === "Cat") {
                    img6.appendChild(img);
                    txt6.appendChild(txt);
                    }



    }
}