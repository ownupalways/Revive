function adjust() {
    var x = document.getElementById("power_nav");
    if (x.className === "topnav") {
    x.className += " responsive";
    }else { x.className = "topnav"
    };
};



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