
$(document).ready(function() {
    $("#Burger").click(function(){
        console.log("OK")
        if($("#navbar").hasClass("navbar-open")){
            $("#navbar").removeClass("navbar-open")
        } else {
        $("#navbar").addClass("navbar-open");
        }
        console.log()

    })
})