requirejs.config({
	paths:{ //配置文件移入需要的模块  并起别名
		 jquery:"jquery-1.11.1.min",
		 cookie:"cookie",
		 publicJs:"public",
	}
})
//子功能实现
requirejs(["jquery","publicJs"],function($,pJs){
	pJs.shopCar();
	$(".header").load("public.html #header",function(){
		$(".topnav_con,.header_center_cont,.mainnav_cont").removeClass("w1100").addClass("w960")
		pJs.headerJs();
	})
	$(".footer").load("public.html #footer",function(){
		$(".foot_top,.foot_bottom").removeClass("w1100").addClass("w960")
		$(".foot_top dl").css("padding",0)
	})
	$(".side").load("public.html #side",function(){
		pJs.sideJs();
		$(".side_left").css("display","none")
	})
	window.onscroll = function(){
	 	//获取页面滚走的距离
	 	var h=1460;
	 	var sTop = document.body.scrollTop || document.documentElement.scrollTop;
	 	if( sTop > h ){
	 		$(".detail_info_nav")[0].style.position = "fixed";
	 		$(".detail_info_nav")[0].style.top = "0";
	 	}else{
	 		$(".detail_info_nav")[0].style.position = "";
	 	}
	 }
})