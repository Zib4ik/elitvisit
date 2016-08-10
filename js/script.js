	$(function(){
		$(".wide-search").click(function(){
			if ($($(this).attr('href')).hasClass('active')){
				$($(this).attr('href')).removeClass('active');
			} else{
				$(".hidden_window").removeClass('active');
				$($(this).attr('href')).removeClass('active');
				$($(this).attr('href')).addClass('active');
				
			}
			return false;
		})
	})
	
/*	$(function(){
		$(".add-advert").click(function(){
			
			if ($(".add-advert-window").hasClass('active')){
				$(".add-advert-window").removeClass('active');
				$(".hidden_window").removeClass('active');
			} else{
				$(".hidden_window").removeClass('active');
				$(".add-advert-window").addClass('active');
			}
				
			
			return false;
		})
	})*/
	
	/*$(function(){
		$(".show-full-advert").click(function(){
			
			if ($(".see-full-advert-window").hasClass('active')){
				$(".see-full-advert-window").removeClass('active');
				$(".hidden_window").removeClass('active');
			} else{
				$(".hidden_window").removeClass('active');
				$(".see-full-advert-window").addClass('active');
			}
				
			
			return false;
		})
	})*/
	
	$(function(){
		$(".hidden_window_trigger").click(function(){
			if ($($(this).attr('href')).hasClass('active')){
				$(".popup").removeClass('active');
				$(".hidden_window").removeClass('active');
			} else{
				$(".hidden_window").removeClass('active');
				$(".popup").removeClass('active');
				$($(this).attr('href')).addClass('active');
				$(".popup").addClass('active');
			}
			return false;
		})
	})
	
	$(function(){
		$(".hidden_close").click(function(){
			$(".hidden_window").removeClass('active');
			$(".popup").removeClass('active');
		})
	})
	
	$(function(){
		$(".popup").click(function(){
			$(".hidden_window").removeClass('active');
			$(".popup").removeClass('active');
		})
	})
	
	/*$(function(){
		$(".button-search").click(function(){
			if ($(".search-results").hasClass('active')){
				$(".search-results").removeClass('active');
				$(".hidden_window").removeClass('active');
			} else{
				$(".hidden_window").removeClass('active');
				$(".search-results").addClass('active');
			}
			return false;
		})
	})*/
	

/*	$(function(){
		$(".result-show").click(function(){
				$(".search-results-block").removeClass('active');
				$($(this).attr('href')).addClass('active');
				
		})
	})*/
	$(function(){
		 $(".result-show").click(function(){
			 if  ($(".result1-show").hasClass('active')){
				$(".search-results-block").removeClass('result1');
			} 
			 if  ($(".result2-show").hasClass('active')){
				$(".search-results-block").removeClass('result2');
			} 
 			 if  ($(".result3-show").hasClass('active')){
				$(".search-results-block").removeClass('result3');
			}
			($(".result-show").removeClass('active'));
			$(".search-results-block").addClass($(this).data('added'));
			$($(this).addClass('active'));
			return false;
		 })	
		
			 
	})		 
	 
			 
			 
	