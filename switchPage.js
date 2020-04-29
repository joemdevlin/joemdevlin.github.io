// Hames of all the sections on index page
var divs = ["aboutDiv", "projectsDiv", "contactDiv"];

// Have to wait for dom to load before redirecting to home page
document.addEventListener("DOMContentLoaded", function (event) {
  var tab = document.getElementById("about");
  tab.click(0);
});

// Only show one div at a time
function switchPage(element) {
  // Hide all sections
  divs.forEach(function (eleID) {
    console.log(eleID);
    var ele = document.getElementById(eleID);
    ele.style.display = "none";
  });

  // Show the one section of interest
  var linkID = element.id;
  var divID = linkID + "Div";
  console.log(divID);
  var ele = document.getElementById(divID);
  ele.style.display = "block";
}
