$(function(){
		$(".hidden_close").click(function(){
			$(".hidden_window").removeClass('active');
		})
	})
	$(function(){
		$(".hidden_window_trigger").click(function(){
			if ($($(this).attr('href')).hasClass('active')){
				$(".hidden_window").removeClass('active');
			} else{
				$(".hidden_window").removeClass('active');
				$($(this).attr('href')).addClass('active');
			}
			return false;
		})
	})
	
	$(function(){
		$(".slider-switch").click(function(){
			$(".slider-switch").removeClass('active');
			$(".slide").hide();
			$(this).addClass('active');
			$(".slide"+$(this).attr('id')).show();

			
			return false;
		})
	})	
	
	$(function(){
		$(".small-picture").click(function(){
		$(".small-picture").removeClass('active');
		$(this).addClass('active');
		$("#big_picture").attr("src",$(this).attr("data_attr"));
		return false;
		})
		
	})

	$(function(){
		$("#show_comment").click(function(){
			$("#leave_comment").show();
		return false;
		})
	})
	
	$(function(){
		$("#close_comment").click(function(){
				$("#leave_comment").hide();
			
			return false;
		})
	})
	
	$(function(){
		$("#sale_click").click(function(){
		$(".catalog").hide();
		$(".type_choose").removeClass('active');
		$(".catalog.sale").show();
		$(this).addClass('active');
		return false;
		})
		
	})
	$(function(){
		$("#hit_click").click(function(){
		$(".catalog").hide();
		$(".type_choose").removeClass('active');
		$(".catalog.hit").show();
		$(this).addClass('active');
		return false;
		})
		
	})
	$(function(){
		$("#newone_click").click(function(){
		$(".catalog").hide();
		$(".type_choose").removeClass('active');
		$(".catalog.new").show();
		$(this).addClass('active');
		return false;
		})
		
	})	
	$(function(){
		$(".page_choose").click(function(){
			$(".page_choose").removeClass('active');
			$(this).addClass('active');
			return false;
		})
	})
		$(function(){
		$(".type_choose").click(function(){
			$(".type_choose").removeClass('active');
			$(this).addClass('active');
			return false;
		})
	})