/*
* @Author: cghsir
* @Date:   2017-12-27 10:54:29
* @Last Modified by:   cghsir
* @Last Modified time: 2017-12-27 13:56:46
*/
require('./index.css');
var template = require('./index.string');
var _cc = require('util/cc.js');

var page = {
	init : function(){
		this.onLoad();
		this.bindEvent();
	},
	onLoad : function(){
		this.loadNotice();
	},
	bindEvent : function(){
		$(document).on('click','.notice-item',function(){
			var index = $(this).data('index');
			$(this).addClass('active').siblings('.notice-item').removeClass('active');
			$('.notice-content').removeClass('active');
			$('.notice-content.' + index).addClass('active');
		});
	},
	// 加载公告内容区
	loadNotice : function(){
		var $noticeCon 	= $('.notice'),
			html 		= '';
		// 显示遮罩
		_cc.show($noticeCon);
		setTimeout(function(){
			html = _cc.renderHtml(template, {});
			$noticeCon.html(html);
		},500);
		
	}
}
$(function(){
	page.init();
})