$(document).ready(function(){

    $(".masthead-avatar").dblclick(function(){
        $("header").removeClass("bg-primary").addClass("bg-danger");
    });

    $(".masthead-heading").hide(2000, function(){
        alert("heading hided");
    })

});