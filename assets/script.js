var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
 console.log(dateTime)
var currentDate = moment().format('MMMM Do YYYY, h:mm');
$("#currentDay").html(currentDate);


$(document).ready(function () {
    console.log("ready")
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
   
    function timeEvaluater() {
        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var currentHour = parseInt($(this).attr("id"));

            if (currentHour< currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (currentHour === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    
    timeEvaluater();
})