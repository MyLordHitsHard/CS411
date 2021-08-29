$(".btn3").click(function() {


    $(".btn1").removeClass("hiddenclass");
    $(".btn2").removeClass("hiddenclass");
    $(".btn3").addClass("hiddenclass");
});

$(".btn1").click (function () {

    $("table").removeClass("hiddenclass");
    $(".subjectgrid").addClass("hiddenclass");
});

$(".btn2").click (function () {

    $("table").addClass("hiddenclass");
    $(".subjectgrid").removeClass("hiddenclass");
});

alert("CHANGE LOG: \nNow you can join a class directly by clicking\nthe subject name from the time table.\nSubject details will be updated later.\n Thanks for visiting...");