
class Bird{
    constructor(name, description, dfound, notes, image, url) {
        this.name = name;
        this.description = description;
        this.dfound = dfound;
        this.notes =  notes;
        this.image =  image;
        this.url =  url;
  
    }
}

var birds = [
    {
        name: "Wood Duck",
        description: "There is a distinctive multicolored iridescent plumage and red eyes, with a distinctive white flare down the neck",
        dfound: "April 17, 2021",
        notes: "Big Bird",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Wood_Duck_%28Aix_sponsa%29%2C_Parc_du_Rouge-Clo%C3%AEtre%2C_Brussels.jpg",
        url: "https://en.wikipedia.org/wiki/Wood_duck"
        },
        {
         name: "Northen Cardinal",
         description: "It has a distinctive crest on the head and a mask on the face which is black.<br>The bird is also vibrant red.",
         dfound: "April 15, 2021",
         notes: "Small Bird",
         image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Cardinal.jpg",
        url: "https://en.wikipedia.org/wiki/Northern_cardinal"
            }

    
];


// Get Bird from JSON local file and add it to the array

function addnewBird(){

    console.log(birds);
    var newBird_des = JSON.parse(localStorage.getItem("bird"));

    var addBird = new Bird(newBird_des.name, newBird_des.description, newBird_des.dfound, newBird_des.notes, newBird_des.image, newBird_des.url)
    console.log(addBird);
    birds.push(addBird);


}

// Display Element
function displayMenu(){

    var index=0;

    document.getElementById("dropdown-menu").innerHTML = "";

    birds.forEach(element => {

        document.getElementById("dropdown-menu").innerHTML += "<a id='breed-name' class='dropdown-item' href='#' onclick='DisplayInfo(" + index +")'>" + element.name + "</a>";
        index++;
        
    });


}

function DisplayInfo(index){

    console.log(index);
    var imgUrl = birds[index].image;
    document.getElementById("img-container").innerHTML = "  <img src=" + imgUrl + " width='1000px' >";
    document.getElementById('r-header').style.display = "block";

    document.getElementById("info-bird").style.te
    document.getElementById("info-bird").innerHTML = "<th style='width: 150px; font-weight: normal;'>"+birds[index].name+"</th>";
    document.getElementById("info-bird").innerHTML += "<th style='width: 343px; font-weight: normal;'>"+birds[index].description+"</th>";
    document.getElementById("info-bird").innerHTML += "<th style='width: 150px; font-weight: normal;'>"+birds[index].dfound+"</th>";
    document.getElementById("info-bird").innerHTML += "<th style='width: 350px; font-weight: normal;'>"+birds[index].notes+"</th>";
    document.getElementById("info-bird").innerHTML += "<th style='width: 150px; font-weight: normal;'> <a href='" +  birds[index].url  +"'> Click Here! </a></th>";

}

window.onload = function() {
    addnewBird();
    displayMenu()

  };

