$(document).ready(function () {
        $("#supercharged").click(function () {
            $("#main-image").hide(0, showPic);
        });
        $(".boxSlider").mouseenter(function () {
            var target = $(this).find('p');
            var h2 = $(this).find('h2');
            h2.animate({
                "margin-top": "10px"
            }, 700, function(){showPara(target);});
        });
    });


function showPic(){
    $("#main-image-alternate").show();
    $("#supercharged").hide();
    $("#shell, #colorScreen, #memory, #floppyDrive").fadeIn(3000);
}


function showPara(target) {
    target.show(800);
}


