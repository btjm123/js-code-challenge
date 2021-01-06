
$(document).ready(function (){
    validate();
	$('.input-address, .input-amount, .input-otp').keyup(validate);
	$('.input-address').keyup(adjustAddress);
	$('.input-amount').keyup(adjustAmount);
	$('.input-otp').keyup(adjustOTP);
    var smsOTP = document.querySelector('.input-otp');
	var smallTexts = $('.passwordHelpBlock').hide(); 
	smsOTP.oninput = function() {
		if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
	}
	document.querySelector(".input-amount").addEventListener("keypress", function (evt) {
		if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57) {
			evt.preventDefault();
		}
	});
		
	document.querySelector(".input-otp").addEventListener("keypress", function (evt) {
		if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57) {
			evt.preventDefault();
		}
	});
});


function adjustAddress() {
	if (checkBitcoin($('.input-address').val())) {
		$('.passwordHelpBlock:eq(0)').hide();
		$('.fa-bitcoin').css('margin-bottom', '0');
	} else {
		$('.passwordHelpBlock:eq(0)').show();
		$('.fa-bitcoin').css('margin-bottom', '7%');
	}

}

function adjustAmount() {
	if ($('.input-amount').val().length >= 2) {
		$('.passwordHelpBlock:eq(1)').hide();
		$('.fa-money').css('margin-bottom', '0');
	} else {
		$('.passwordHelpBlock:eq(1)').show();
		$('.fa-money').css('margin-bottom', '7%');
	}

}

function adjustOTP() {
	if ($('.input-otp').val().length == 6) {
		$('.passwordHelpBlock:eq(2)').hide();
		$('.fa-phone').css('margin-bottom', '0');
	} else {
		$('.passwordHelpBlock:eq(2)').show();
		$('.fa-phone').css('margin-bottom', '7%');
	}
}
   
function checkBitcoin(x) {
	if (x.length < 26 || x.length > 35) return false;
	return x[0] == '1' || x[0] == '3' || x.substring(0,3) == 'bc1';
}
function validate(){
    if (checkBitcoin($('.input-address').val())   &&
    	$('.input-amount').val().length >= 2   &&
        $('.input-otp').val().length == 6) {
        $(".login-form-btn").prop("disabled", false);
    }
    else {
        $(".login-form-btn").prop("disabled", true);
    }
      // alert($(".login-form-btn").prop("disabled"));
}

		particlesJS("particles-js", {
		"particles": {
		"number": {
		   "value": 100,
		   "density": {
			   "enable": true,
			   "value_area": 800
		   }
		},
		"color": {
		   "value": "#ffffff"
		},
		"shape": {
		   "type": "circle",
		   "stroke": {
			   "width": 0,
			   "color": "#000000"
		   },
		   "polygon": {
			   "nb_sides": 5
		   },
		   "image": {
			   "src": "img/github.svg",
			   "width": 100,
			   "height": 100
		   }
		},
		"opacity": {
		   "value": 0.5,
		   "random": false,
		   "anim": {
			   "enable": false,
			   "speed": 1,
			   "opacity_min": 0.1,
			   "sync": false
		   }
		},
		"size": {
		   "value": 3,
		   "random": true,
		   "anim": {
			   "enable": false,
			   "speed": 40,
			   "size_min": 0.1,
			   "sync": false
		   }
		},
		"line_linked": {
		   "enable": true,
		   "distance": 150,
		   "color": "#ffffff",
		   "opacity": 0.4,
		   "width": 1
		},
		"move": {
		   "enable": true,
		   "speed": 6,
		   "direction": "none",
		   "random": false,
		   "straight": false,
		   "out_mode": "out",
		   "bounce": false,
		   "attract": {
			   "enable": false,
			   "rotateX": 600,
			   "rotateY": 1200
		   }
		}
		},
		"interactivity": {
		"detect_on": "canvas",
		"events": {
		   "onhover": {
			   "enable": true,
			   "mode": "repulse"
		   },
		   "onclick": {
			   "enable": true,
			   "mode": "push"
		   },
		   "resize": true
		},
		"modes": {
		   "grab": {
			   "distance": 400,
			   "line_linked": {
				   "opacity": 1
			   }
		   },
		   "bubble": {
			   "distance": 400,
			   "size": 40,
			   "duration": 2,
			   "opacity": 8,
			   "speed": 3
		   },
		   "repulse": {
			   "distance": 200,
			   "duration": 0.4
		   },
		   "push": {
			   "particles_nb": 4
		   },
		   "remove": {
			   "particles_nb": 2
		   }
		}
		},
		"retina_detect": true
		});     
