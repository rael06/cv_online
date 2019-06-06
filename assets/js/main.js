"use strict";

(function(){
	var responsiveState = 0;
	var resized = function() {
		
		if(window.innerWidth > 991) {
			if(responsiveState === 0) {
				responsiveState++;
				responsive();
			}
		} else {
			responsiveState = 0;
			document.querySelector(".main_content").appendChild(document.querySelector(".experiences"));
			document.querySelector(".main_content").appendChild(document.querySelector(".courses"));

			if (document.querySelector(".exp_courses") !== null) {
				document.querySelector(".main_content").removeChild(document.querySelector(".exp_courses"));
			}
		}
	}
	var responsive = function() {
		var newDiv = document.createElement("div");
		newDiv.classList.add("exp_courses");
		document.querySelector(".courses").parentElement.appendChild(newDiv);
		document.querySelector(".exp_courses").appendChild(document.querySelector(".experiences"));
		document.querySelector(".exp_courses").appendChild(document.querySelector(".courses"));
	}
	resized();
	window.addEventListener("resize", resized);
})()