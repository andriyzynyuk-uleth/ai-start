console.log("hello");

$("body").css("background-color", "#dbdae2");

$(".funding").on("click", function() {
    $(".funding h3").after("<p>This exhibition draws upon research supported by the Government of Canada’s New Frontiers in Research Fund (NFRF) and the Social Sciences and Humanities Research Council, and the Canada Foundation for Innovation.<p/>");
    $(".funding").css("cursor", "pointer");
});

$("#logo").on("click", function() {
    $(this).attr("src", "assets/ulag_logo_black.webp");
});
$(".title h1").on("click", updateTitle);
$(document).on("keydown", function(e){
    if(e.key == '?') {
        updateTitle();
    }
});

function updateTitle() {
    $(".title h1").html("Abundant Memory, <em>Relational Intelligence<em>");
    $(".title").append("<p>October 17th 2025 - January 23, 2025<p/>");
    $("title").unbind("click");
}

$("#grid-view").on("click", function() {
    $(".tiles").removeClass("type");
    $(".tile-blank").hide();
    $("#abc-view").removeClass("active");
    $("#grid-view").addClass("active");
})

$("#abc-view").on("click", function() {
    $(".tiles").addClass("type");
    $(".tile-blank").show();
    $("#grid-view").removeClass("active");
    $("#abc-view").addClass("active");
})
