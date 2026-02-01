//menu header
$('.js-mobile').on('click', function(){
	$(this).toggleClass("js-mobile--close");
	$("html").toggleClass("js-locked");
	// $(".nav-menu").slideToggle();
	// e.preventDefault();
	$(".header-nav").fadeToggle();
});


$('.float-right__menu-option').on('click', function(){
	$(this).toggleClass("active");
	$(".float-right").toggleClass("active");
});






//backtop
jQuery(document).ready(function ($) {
	$(window).on("scroll", function () {
		if($(window).scrollTop()> $("#footer").offset().top - $(window).outerHeight()){
			$(".float-right").addClass("fixd");
		}
		else {
			$(".float-right").removeClass("fixd");
		}
	});
	$('.js-backtop').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});




$(function ($) {
	$('.js-popup').click(function (e) {
		e.preventDefault();
		var href = $(this).attr("data-target");
		var target = $("#" + href);
		var position = target.addClass("on");
		$("html").addClass("js-locked");
		initAspectModal('#modal-01');
		initAspectModal('#modal-02');
		return false;
	});
	$(".popup-wrap__close").click(function () {
		$(".popup").removeClass("on");
		$("html").removeClass("js-locked");
	});
	$(".popup").click(function () {
		$(".popup").removeClass("on");
		$("html").removeClass("js-locked");
	});
	$(".popup-wrap--stop").click(function (e) {
		e.stopPropagation();
	});

});


function initAspectModal(modalSelector) {
	const modal = document.querySelector(modalSelector);
	if (!modal) return;

	const wrap = modal.querySelector('.popup-wrap');
	const content = modal.querySelector('.popup-wrap__content-main');
	const ttl = modal.querySelector('.popup-wrap__ttl');

	if (!wrap || !content || !ttl) return;

	function setContentHeight() {
		const ttlStyle = getComputedStyle(ttl);
		const ttlHeight =
			ttl.offsetHeight +
			parseFloat(ttlStyle.marginTop) +
			parseFloat(ttlStyle.marginBottom);

		content.style.height = (wrap.offsetHeight - ttlHeight - 80) + 'px';
	}

	// chạy khi layout thay đổi thật sự
	const ro = new ResizeObserver(setContentHeight);
	ro.observe(wrap);

	// chạy lần đầu
	window.addEventListener('load', setContentHeight);
}

