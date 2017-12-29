/*
* @Author: cghsir
* @Date:   2017-12-26 14:51:31
* @Last Modified by:   cghsir
* @Last Modified time: 2017-12-29 13:13:50
*/
require('./index.css');
var _cc = require('util/cc.js');

var page = {
	data : {
		
	},
	init : function(){
		this.onLoad();
		this.bindEvent();
	},
	onLoad : function(){
		this.selectMenu();
	},
	bindEvent : function(){
		$('.fa-qq').click(function(){
			alert("QQ登录还在开发中!");
		});
		$('.fa-wechat').click(function(){
			alert("QQ登录还在开发中!");
		});
	},
	// 设置选中菜单
	selectMenu : function(){
		var page = _cc.getUrlParam('page') || 'index';
		if(page){
			$('.menu-item').removeClass('active');
			$('.menu-item.' + page).addClass('active');
		}
	}
}
$(function(){
	page.init();
})