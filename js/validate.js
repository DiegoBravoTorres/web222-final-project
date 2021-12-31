
// global variables
var validName = false;
var validDescription = false;
var validImage = false;
var validUrl = false;

function validate(event) {
  // TODO - write custom validation logic to validate the 
  // values entered by the user. If values are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  validateSpeciesName();
  validateDescription();
  
  validateImage();
  validateURL();
  console.log('TODO - validate the entries of Bird here before submitting');

  // If all fields are correct, store data in JSON
  if(validName && validDescription && validImage && validUrl )
  {
    StoreDataJSON()
  }
  
}


// Data Stored in JSON

function StoreDataJSON(){

  const form = document.querySelector('form');

  let bird = {
    name: form.sname.value,
    description: form.description.value,
    dfound: form.dfound.value,
    notes: form.notes.value,
    image: form.image.value,
    url: form.url.value
    };

  let mybird_serialized = JSON.stringify(bird);
  localStorage.setItem("bird", mybird_serialized);

console.log("Array stored in memory");
console.log(bird);

// console.log(localStorage.getItem("bird"));


}


function validateSpeciesName(){

  const form = document.querySelector('form');
  if (!form.sname.value){
    
    document.getElementById('enter-Sname').style.display = "block";
    console.log("enter sname");
    validName =  false;
  }else
 {
  validName =  true;
  document.getElementById('enter-Sname').style.display = "none";
 }
}



function validateDescription(){

  const form = document.querySelector('form');
  if (!form.description.value){
    
    document.getElementById('enter-description').style.display = "block";
    console.log("enter desctiption");
    validDescription =  false;
  }else
  document.getElementById('enter-description').style.display = "none";
  validDescription =  true;
}



// Validate image field
function validateImage(){

  const form = document.querySelector('form');

  let imageLink = form.image.value;
   let extension = imageLink.split('.').pop();

  
  if (!form.image.value){
    
    document.getElementById('enter-image').style.display = "block";
    validImage =  false;
 
  }else
  {

// Validate extension

  if(extension != "jpg" && extension != "png" && extension != "jpeg" && extension != "webp")
    {
       document.getElementById('enter-image-type').style.display = "block";
       validImage =  false;
    }else
  {

  document.getElementById('enter-image-type').style.display = "none";}
  document.getElementById('enter-image').style.display = "none";
  validImage =  true;
  }
}



//Function Definition
function validateURL()
{
  const form = document.querySelector('form');
  let url = form.url.value;

 if(url == ""){

document.getElementById('enter-wiki').style.display = "none";
  document.getElementById('enter-wiki-field').style.display = "block";
  validUrl  =  false;

 }

 else{
 try{

  document.getElementById('enter-wiki-field').style.display = "none";

    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    console.log(hostname);

    //Comparing the domains entered by the user
    if(hostname == 'en.wikipedia.org')
    {
        document.getElementById('enter-wiki').style.display = "none";
        validUrl =  true;
        }
else {
        console.log('URL is not an expected Wikipedia Domain',url);
        document.getElementById('enter-wiki').style.display = "block";
        validUrl =  false;
     
    }
 }catch{
  document.getElementById('enter-wiki').style.display = "block";
 

 }
}
}


// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
 
  form.onsubmit = validate;
 
};
