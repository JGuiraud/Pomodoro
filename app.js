$(document).ready(function(){

var buzzer = $("#buzzer")[0];
var count = parseInt($("#clock").html());
var break = setInterval(breaktimer, 1000);
console.log(count);

    $("#start").click(function(){
        var counter = setInterval(timer, 1000);

        function timer(){
            $("#start").hide()
            count=count-1;
            if (count===0){
                buzzer.play();
                clearInterval(counter)
            }
            $("#clock").html(count);
        }
    });


});