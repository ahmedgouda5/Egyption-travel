// ! header

$(".header .icon").on("click",function () {
    $(".side").removeClass("d-none");
})

$(".side .icon").on("click",function () {
    $(".side").addClass("d-none");
})
// ^singer
$(".singer ").on("click",function () {
    $(this).siblings().slideToggle(300)
   
})


let countDownNow = new Date("Jun 1, 2024 23:59:59").getTime();

let counter = setInterval(() => {
    let now = new Date().getTime();
    let diff = countDownNow - now;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.querySelector(".days").innerHTML = `${days} D`;

    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.querySelector(".hours").innerHTML = `${hours} h`;

    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.querySelector(".minute").innerHTML = `${minutes} M`;

    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.querySelector(".second").innerHTML = `${seconds} S`;
    if (diff <= 0) {
        clearInterval(counter);
    }
}, 1000);




$("textarea").on("keyup",function () {
    let maxMount=100;
    let textLength=$(this).val().length;
    let final=maxMount-textLength
    if (final <= 0) {
        $(".chars").text("complete");
    }else{
        $(".chars").text(final);

    }
});