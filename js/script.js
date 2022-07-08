$(function(){
    $(window).scroll(function(){
        var fixed = $(this).scrollTop()
        if(fixed > 40){
            $(".sub-navbar").addClass("sticky-menu")
        }
        else{
            $(".sub-navbar").removeClass("sticky-menu")
        }
        if (fixed>200) {
            $(".back-to-top").fadeIn(300)
        }
        else{
            $(".back-to-top").fadeOut(300)
        }
    })
    $(".back-to-top").click(function(){
        $('html,body').animate({scrollTop : 0}, 1000)
    })

// scroll spy start
var html_body = $('html, body');
    $('.menu a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 17
                }, 1500);
                return false;
            }
        }
});

// scroll spy end

// preloader part start
$(window).load(function(){
    $("#preloader").delay(500).fadeOut(300)
})
// preloader part end

// counter part start
$('.counter').counterUp({
    delay: 70,
    time: 3000
})
// counter part end

// countdown part start
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "07/21/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)

// countdown part end
// typed.js part start
	$(".typed").typed({
		strings: ["PSD Template.", "Figma Template.", "XD Template.", "Bootstrap."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 60,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 60,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: Infinity,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
    // wow.js start
    new WOW().init();
    // wow.js end

// typed.js part end

// mixitup.js part start
    var containerEl = document.querySelector('.mixit-up-wrapper');

    var mixer = mixitup(containerEl);
// mixitup.js part end

})