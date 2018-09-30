var $menu_item1 = '#menu_item1';
var $menu_item2 = '#menu_item2';
var $menu_item3 = '#menu_item3';
var $menu_item4 = '#menu_item4';
var $section1 = '#section1';
var $section2 = '#section2';
var $section3 = '#section3';
$(document).ready(function(){
	$($menu_item1).addClass('custom_active1');
	$($section1).fadeIn();
	$($menu_item1).click(function(){
		$(this).addClass('custom_active1');
		$($menu_item2).removeClass('custom_active2');
		$($menu_item3).removeClass('custom_active3');
		$($menu_item4).removeClass('custom_active4');
		
		$($section1).slideDown('slow');
		$($section2).fadeOut('fast');
		$($section3).fadeOut('fast');
		$($section4).fadeOut('fast');
	});	
	$($menu_item2).click(function(){
		$(this).addClass('custom_active2');
		$($menu_item1).removeClass('custom_active1');
		$($menu_item3).removeClass('custom_active3');
		$($menu_item4).removeClass('custom_active4');
		
		$($section1).fadeOut('fast');
		$($section2).slideDown('slow');
		$($section3).fadeOut('fast');
		$($section4).fadeOut('fast');
	});		
	$($menu_item3).click(function(){
		$(this).addClass('custom_active3');
		$($menu_item1).removeClass('custom_active1');
		$($menu_item2).removeClass('custom_active2');
		$($menu_item4).removeClass('custom_active4');
		
		$($section1).fadeOut('fast');
		$($section2).fadeOut('fast');
		$($section3).slideDown('slow');
		$($section4).fadeOut('fast');
	});	
	
	$($menu_item4).click(function(){
		$(this).addClass('custom_active4');
		$($menu_item1).removeClass('custom_active1');
		$($menu_item3).removeClass('custom_active3');
		$($menu_item2).removeClass('custom_active2');
		
		$($section1).fadeOut('fast');
		$($section2).fadeOut('fast');
		$($section3).fadeOut('fast');
		$($section4).slideDown('slow');
	});
});
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
        var that = this;
        var delta = 200 - Math.random() * 100;
        if (this.isDeleting) { delta /= 2; }
        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }
        setTimeout(function() {
        that.tick();
        }, delta);
    };
    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});