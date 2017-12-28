/*
* @Author: cghsir
* @Date:   2017-12-25 15:07:51
* @Last Modified by:   cghsir
* @Last Modified time: 2017-12-28 15:25:01
*/
require('./index.css');
require('page/common/header/index.js');
require('page/common/search-con/index.js');
require('page/common/home-tips/index.js');
// require('page/common/banner/index.js');
require('page/common/article-list/index.js');
require('page/common/notice/index.js');
require('page/common/about-me/index.js');
require('page/common/footer/index.js');
require('util/slider/index.js');

var templateBanner 	= require('./banner.string');
var _cc 			= require('util/cc.js');

$(function() {
	// 渲染banner的html
	var bannerHtml 	= _cc.renderHtml(templateBanner);
	$('.banner-con').html(bannerHtml);
	// 初始化banner
    var $slider		=$('.banner').unslider({
    	dots: true
    });
    // 前一张和后一张操作的事件绑定
    $('.banner-con .banner-arrow').click(function(){
    	var forward = $(this).hasClass('prev') ? 'prev' : 'next';
    	$slider.data('unslider')[forward]();
    });
});