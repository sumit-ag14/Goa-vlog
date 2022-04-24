function slider() {
    $(document).addClass
}
var i = 0;
$(".right").on("click", function() {
    i++;
    if (i > 5)
        i = 0;
    $("img").attr("src", "raw fottages/img" + i + ".jpg")
    $(".right").animate({ fontSize: 100 })
    $(".right").animate({ fontSize: 150 })

});

$(".left").on("click", function() {
    i--;
    if (i < 0)
        i = 5;
    $("img").attr("src", "raw fottages/img" + i + ".jpg")
    $(".left").animate({ fontSize: 100 })
    $(".left").animate({ fontSize: 150 })

});