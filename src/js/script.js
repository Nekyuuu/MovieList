var opened = false;

class movie{
    constructor(image){
        this.image = image;
    }
}


function createMovie(){
    var card = document.createElement("div");
    card.classList.add("card");
    container = document.querySelector(".container");
    container.appendChild(card);

    var deletebtn = document.createElement("button");
    deletebtn.id = "delete";
    deletebtn.innerHTML = "X";
    deletebtn.onclick = function deleteCard(){
        console.log(this.parentNode.remove());
    };
    card.appendChild(deletebtn);

    var movieImage = document.createElement("img");
    movieImage.setAttribute("src", document.getElementById("imglink").value);
    card.appendChild(movieImage);

    var content = document.createElement("div");
    content.classList.add("content");
    card.appendChild(content);

    var title = document.createElement("h3");
    title.id = "cardtitle"
    content.appendChild(title);
    title.innerText = document.getElementById("movietitle").value;

    var rating = document.createElement("p");
    rating.id = "cardraiting"
    content.appendChild(rating);
    let stars = '';
    for(let i = 0; i < document.getElementById("rating").value; i++){
        stars = stars + "⭐"
        console.log(stars);
    }
    rating.innerText = stars;
}

function openDiv(){

    console.log(opened);
    if (!opened){
        window.scrollTo(0, 0);
        let get = document.getElementById('div');
        get.style.display = 'block'

        container = document.querySelector(".container");
        container.style.display = "none";
    
        document.body.classList.add("stop-scrolling");

        button = document.querySelector(".add");
        button.innerText = "Click to add !"
        
        opened = true;
    } else {
        console.log("else")

        if (document.getElementById("movietitle").value == "" || document.getElementById("movietitle").value == null || document.getElementById("imglink").value == "" || document.getElementById("imglink").value == null){
            console.log(document.getElementById("movietitle").value)
            alert("A value is null !")
        } else if(0 > document.getElementById("rating").value || 5 < document.getElementById("rating").value){
            alert("Rating value is invalid (put a value between 1 and 5")
        } else if (!isValidUrl(document.getElementById("imglink").value)){
            alert("Invalid link")
        } else{
            createMovie();
            opened = false;
            closeDiv();
        }

    }
    
}
function closeDiv(){
    let get = document.getElementById('div');
    get.style.display = 'none';

    container = document.querySelector(".container");
    container.style.display = "flex";

    document.body.classList.remove("stop-scrolling");

    button.innerText = "Add Movie +";

    opened = false;
    console.log(document.getElementById("movietitle").value)
}


const isValidUrl = urlString=> {
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
  '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
return !!urlPattern.test(urlString);
}
