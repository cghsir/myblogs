/*
* @Author: cghsir
* @Date:   2017-12-28 11:30:10
* @Last Modified by:   cghsir
* @Last Modified time: 2017-12-28 11:50:33
*/
var page = {
	init : function(){
		this.bindEvent();
	},
	bindEvent : function(){
		// 绑定返回顶部事件
		$(document).on('click','.back-top',function(){
			$('html,body').animate({scrollTop:0},'slow');
		});

		// 绑定窗口滚动事件
		$(window).on('scroll', function(){
			if($(window).scrollTop() > $(window).height()){
				$('.back-top').fadeIn();
			}else{
				$('.back-top').fadeOut();
			}
		});

		$(window).trigger('scroll');
	}
}
$(function(){
	page.init();
});