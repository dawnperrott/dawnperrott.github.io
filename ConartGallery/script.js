//6 images, display the artwork image in large scale once it has been clicked
function displayGallery(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}

//swapping images in the gallery section to show text information about the gallery
function swapImage(){
  if (document.getElementById("pic").src.endsWith('thumbnail.jpeg') == true)  //Comparison
  { 
       document.getElementById("pic").src = "gallery123/art1.jpeg"; //assignment  

   } 
   else if (document.getElementById("pic").src.endsWith("gallery123/art1.jpeg") == true) 
   { 
      document.getElementById("pic").src = "thumbnails/art1_thumbnail.jpeg"; 
     
  }

}
function swapImage1(){
  if (document.getElementById("pic1").src.endsWith('thumbnail.jpeg') == true)  //Comparison
  { 
       document.getElementById("pic1").src = "gallery123/art2.jpeg"; //assignment  

   } 
   else if (document.getElementById("pic1").src.endsWith("gallery123/art2.jpeg") == true) 
   { 
      document.getElementById("pic1").src = "thumbnails/art2_thumbnail.jpeg"; 
 
  }

}     
function swapImage2(){
  if (document.getElementById("pic2").src.endsWith('thumbnail.jpeg') == true)  //Comparison
  { 
       document.getElementById("pic2").src = "gallery123/art3.jpeg"; //assignment  

   } 
   else if (document.getElementById("pic2").src.endsWith("gallery123/art3.jpeg") == true) 
   { 
      document.getElementById("pic2").src = "thumbnails/art3_thumbnail.jpeg"; 
     
  }

}
//an array that validates the contact form
function validateForm() {
  let x = document.forms["contactForm"]["fname"].value;
  if (x == "") {
    alert("First name must be filled out");
    return false;
  }
  let lname = document.forms["contactForm"]["lname"].value;
  if (lname == "") {
    alert("Last name must be filled out");
    return false;
  }
  let phoneNum = document.forms["contactForm"]["phoneNum"].value;
  if(!(isNumber(phoneNum))){
      alert("Phone number must be filled out with numbers");
      return false;
    }
    let emailaddress = document.forms["contactForm"]["emailaddress"].value;
  if (emailaddress == "") {
    alert("Email address must be filled out");
    return false;
  }
}
  function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
  }