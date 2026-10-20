
function changeNewsletterText() {
  //Removed to use jQuery
 document.getElementById("newsletter-discount").innerHTML = "Subscribe to receive 10% off merchandise!";
// document.getElementById("newsletter-discount").classList.add("blue-text");
// document.getElementById("newsletter").classList.add("blue-text");
$("#newsletter-discount").addClass("blue-text");
$("#newsletter").addClass("blue-text");
$("#newsletter-discount").fadeIn(2000);
}





const form = document.querySelector("#form-newsletter");

form.addEventListener("submit", function() {

var firstname = document.getElementById("firstname").value;

  alert("Hi " + firstname + "! Thanks for subscribing ");


});



/* Week 5.5 APIs 
USE THIS SECTION FOR APIS*/
async function loadJSON() {
  const url = "https://api.freeapi.app/api/v1/public/quotes/quote/random";
 


try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }

  const apiQuotes = await response.json();

 // document.getElementById("result").innerHTML="";     REMOVED THIS TO TEST jQUERY
$("#result").empty(); /*added this jQuery*/
 
  

  myDisplayer("Author: " + apiQuotes.data.author  );
myDisplayer('Quote: "' + apiQuotes.data.content + '"')

 
 
}

  
  catch(err) {
    //myDisplayer(err.message); //Removed this so users get an approprite message (usability)
    document.getElementById("result").innerHTML="";
    myDisplayer("Apologies there's an error generating random quotes, we are working 'eight days a week' to fix it!")

  }
}

loadJSON();

// Function to display any text
function myDisplayer(text) {

  document.getElementById("result").innerHTML += text + "<br>";
}

