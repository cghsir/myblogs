/*
* @Author: cghsir
* @Date:   2017-12-26 14:51:31
* @Last Modified by:   cghsir
* @Last Modified time: 2017-12-27 10:15:04
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