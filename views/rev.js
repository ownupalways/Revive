function adjust() {
    var x = document.getElementById("power_nav");
    if (x.className === "topnav") {
    x.className += " responsive";
    }else { x.className = "topnav"
    };
};



$(() => {
        var light = $("<div></div>").text("It does not really matter how long it takes you to achieve you desire goal. what matter is how despirate are you towards achieving it. That enough can to keep you going until you ACHIEVE IT!");
        $(".mom3").after(light);
    });

$(() => {
        $("#push").click(() => {
                $(".rollout").slideToggle(500);
            });
    });

$(() => {
        $(".Gallary").click(() => {
                $(".gallery-wall").slideToggle(600);
            });
    });
$(() => {
        $(".min-btn").click(() => {
                $(".min-content").slideToggle(400);
            });
    });