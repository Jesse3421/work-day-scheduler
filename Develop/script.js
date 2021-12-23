$(document).ready(function() {
//Time elements
$("#9AM .description").val(localStorage.getItem("9AM"));
$("#10AM .description").val(localStorage.getItem("10AM"));
$("#11AM .description").val(localStorage.getItem("11AM"));
$("#12PM .description").val(localStorage.getItem("12PM"));
$("#1PM .description").val(localStorage.getItem("1PM"));
$("#2PM .description").val(localStorage.getItem("2PM"));
$("#3PM .description").val(localStorage.getItem("3PM"));
$("#4PM .description").val(localStorage.getItem("4PM"));
//$("#9AM .description").val(localStorage.getItem());

//display date and time through moment
$("#currentDay").text(moment().format("dddd, MMMM Do"))
//const currentHour = moment().hour()

//click event to Save new entries
$(".saveBtn").on("click", function() {
    var hour = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();
    
    localStorage.setItem(hour, description);
});

//initialize current info from local storage


//checks the current hour
function currentHourTracker(){
    const currentHour = moment().hour()

    $(".time-block").each(function() {
        let hourBlock = parseInt($(this).attr("name"))

        if(hourBlock < currentHour){
            $(this).addClass("past")
        }else if(hourBlock === currentHour){
            $(this).removeClass("past")
            $(this).addClass("present")
        }else{
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
        
    })
    
};


currentHourTracker()

})