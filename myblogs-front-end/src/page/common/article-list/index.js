/*
* @Author: cghsir
* @Date:   2017-12-26 15:12:46
* @Last Modified by:   cghsir
* @Last Modified time: 2017-12-27 13:49:06
*/
require('./index.css');
var template = require('./index.string');
var _cc = require('util/cc.js');


var page = {
	data : {
		list : [
			{
				title: '我是标题',
				content: '我是内容',
				time: '2017-12-26',
				user: 'cghsir',
				tag: '我是标签',
				comment : 6,
				see	: 273
			},{
				title: '我是标题',
				content: '我是内容',
				time: '2017-12-26',
				user: 'cghsir',
				tag: '我是标签',
				comment : 6,
				see	: 273
			},{
				title: '我是标题',
				content: '我是内容',
				time: '2017-12-26',
				user: 'cghsir',
				tag: '我是标签',
				comment : 6,
				see	: 273
			},{
				title: '我是标题',
				content: '我是内容',
				time: '2017-12-26',
				user: 'cghsir',
				tag: '我是标签',
				comment : 6,
				see	: 273
			},{
				title: '我是标题',
				content: '我是内容',
				time: '2017-12-26',
				user: 'cghsir',
				tag: '我是标签',
				comment : 6,
				see	: 273
			}
		]
	},
	init : function(){
		this.onLoad();
		this.bindEvent();
	},
	onLoad : function(){
		this.loadIndexArticle();
	},
	bindEvent : function(){

	},
	// 加载首页文章列表
	loadIndexArticle : function(){
		var _this 		= this
			$aritcleCon = $('.article-con');
		_cc.show($aritcleCon);
		setTimeout(function(){
			var html = _cc.renderHtml(template,_this.data);
			$aritcleCon.html(html);
		},800);
	}
}
$(function(){
	page.init();
})