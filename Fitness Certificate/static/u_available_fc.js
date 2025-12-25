document.addEventListener("DOMContentLoaded", function() {
    var fc1Text = document.getElementById("fc1Text");
    if (fc1Text) {
        fc1Text.addEventListener("click", function(event) {
            event.preventDefault(); 
            window.location.href = "u_fc1_details.html";
        });
    } 
});
