$(document).ready(function () {
        $("#supercharged").click(function () {
            $("#main-image").hide(0, showPic);
        });
        $(".boxSlider h2").mouseover(function () {
            $(".boxSlider h2").animate({
                "margin-top": "10px"
            }, 1000, showPara);
        });
    });

        function showPic() {
            $("#main-image-alternate").show();
            $("#supercharged").hide();
            $("#shell, #colorScreen, #memory, #floppyDrive").fadeIn(5000);
        }


function showPara() {
    $(".boxSlider p").show(1000);
}
