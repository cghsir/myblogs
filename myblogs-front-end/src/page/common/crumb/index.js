/*
* @Author: cghsir
* @Date:   2017-12-29 10:56:29
* @Last Modified by:   cghsir
* @Last Modified time: 2017-12-29 11:26:36
*/
require('./index.css');
var template = require('./index.string');
var _cc = require('util/cc.js');

var page = {
	
	init : function(){
		this.onLoad();
		
	},
	onLoad : function(){
		this.loadCrumbInfo();
	},
	loadCrumbInfo : function(){
		var obj = {
				articleTitle : _cc.getUrlParam('articleTitle'),
				pageUrl		 : _cc.getUrlParam('page')
			},
			html = _cc.renderHtml(template,obj);
		$('.crumb-con').html(html);
	}
}
$(function(){
	page.init();
})