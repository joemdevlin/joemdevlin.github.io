var divs = ["aboutDiv", "projectsDiv", "contactDiv"];
document.addEventListener('DOMContentLoaded', function(event) {
    var tab = document.getElementById("about");
    tab.click(0);
});

function switchPage(element)
{
    divs.forEach(function(eleID){
        console.log(eleID);
        var ele = document.getElementById(eleID);
        ele.style.display = "none";
    });

    var linkID = element.id;
    var divID = linkID + "Div";
    console.log(divID);
    var ele = document.getElementById(divID);
    ele.style.display = "block";
}