$(document).ready(function($){

  //mobile - open lateral menu clicking on the menu icon
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		if( $('.cd-main-content').hasClass('nav-is-visible') ) {
			closeNav();
			$('.cd-overlay').removeClass('is-visible');
			$('.cd-search').removeClass('left-x');
		} else {
			$(this).addClass('nav-is-visible');
			$('.cd-search').addClass('left-x');
			$('.cd-primary-nav').addClass('nav-is-visible');
			$('.cd-main-header').addClass('nav-is-visible');
			$('.cd-main-content').addClass('nav-is-visible');
			toggleSearch('close');
			$('.cd-overlay').addClass('is-visible');
		}
	});

	//open search form
	$('.cd-search-trigger, .cd-search .btn-close').on('click', function(event){
		event.preventDefault();
		toggleSearch();
		closeNav();
		$('.cd-search').removeClass('left-x');
		$('.cd-overlay').removeClass('is-visible');
	});

	//close lateral menu on mobile
	$('.cd-overlay').on('swiperight', function(){
		if($('.cd-primary-nav').hasClass('nav-is-visible')) {
			closeNav();
			$('.cd-overlay').removeClass('is-visible');
		}
	});
	$('.cd-overlay').on('click', function(){
		closeNav();
		toggleSearch('close')
		$('.cd-overlay').removeClass('is-visible');
	});

  function closeNav() {
		$('.cd-nav-trigger').removeClass('nav-is-visible');
		$('.cd-main-header').removeClass('nav-is-visible');
		$('.cd-primary-nav').removeClass('nav-is-visible');
		$('.has-children div').addClass('is-hidden');
		$('.cd-main-content').removeClass('nav-is-visible');
	}

	function toggleSearch(type) {
		if(type=="close") {
			$('.cd-search').removeClass('is-visible');
			$('.cd-search-trigger').removeClass('search-is-visible');
			//$('.cd-overlay').removeClass('search-is-visible');
		} else {
			$('.cd-search').toggleClass('is-visible');
			$('.cd-search-trigger').toggleClass('search-is-visible');
			//$('.cd-overlay').toggleClass('search-is-visible');
			//($('.cd-search').hasClass('is-visible')) ? $('.cd-overlay').addClass('is-visible') : $('.cd-overlay').removeClass('is-visible') ;
		}
	}

});