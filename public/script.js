console.log("Logged in");

function change() // no ';' here
{
    var elem = document.getElementById("name");
    if (elem.value=="Hi Sam"){
        
        elem.value = "Bye Sam";
    } 
    else elem.value = "Hi Sam";
}