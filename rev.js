function adjust() {
			var x = document.getElementById("power_nav");
			if (x.className === "topnav") {
				x.className += " responsive";
			}else {
				x.className = "topnav";
			}
		}
		$(function() {
			var light=$("<div></div>").text("It does not really matter how long it take you to achieve you desire goal. what matter is how despirate are you to achieve it, that can is Enough to keep you going until you can ACHIEVE IT");
			$(".mom3").after(light);
		});
		$(function() {
			$("#push").click(function() {
				$(".rollout").slideToggle(500);
			});
		});
		
		//fetch the Modal
		var view = document.getElementById("mail");
		var close = document.getElementByClassName("close")[0];
		
		close.onclick = function() {
			view.style.display ="none";
		}
		// it will close if user click anywhere on the window
		window.onclick = function (event) {
			if(event.target == view ) {
				view.style.display = "none";
			}
		}