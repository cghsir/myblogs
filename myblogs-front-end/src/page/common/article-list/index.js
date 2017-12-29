/*
* @Author: cghsir
* @Date:   2017-12-26 15:12:46
* @Last Modified by:   cghsir
* @Last Modified time: 2017-12-29 11:22:36
*/
require('./index.css');
var template = require('./index.string');
var _cc = require('util/cc.js');


var page = {
	data : {
		list : [
			{
				title	: 'iPhone难卖？苹果手机利润全球占比降至60%',
				img		: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3795930503,1867228670&fm=173&s=62507384E40D395FDEE5140B03007090&w=218&h=146&img.JPEG',
				content	: '　　【中关村在线新闻资讯】12月28日消息，调研公司CounterpointResearch今日发布报告称，今年第三季度苹果仍占据全球智能手机市场的绝大部分利润，不过较之去年，苹果的利润却出现了大幅下滑。',
				time 	: '2017-12-26',
				user 	: 'cghsir',
				tag 	: '我是标签',
				comment : 6,
				see		: 273
			},
			{
				title	: '美作家开枪怒杀全家 1小时前在晒父子温馨视频',
				img		: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=207713611,2529993099&fm=173&s=8A20CE034E22261546C048AF0300E0C2&w=218&h=146&img.JPEG',
				content	: '　　海外网12月28日电 25日，美国知名素食厨师和作家安东尼·米兰·罗斯（Anthony Milan Ross）在住所内枪杀前妻及一对儿女，警方当日即将他抓捕归案。令人难以置信的是，就在罗斯行凶前1小时，他还在脸书上发布了与儿子奈吉尔（Nigel）的圣诞视频。',
				time 	: '2017-12-26',
				user 	: 'cghsir',
				tag 	: '我是标签',
				comment : 9,
				see		: 102
			},
			{
				title	: '曼晚：曼城从未准备为范戴克支付超过5000万英镑',
				img		: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=83814361,4070120997&fm=173&s=BA22C44F024369510E31BCA903008016&w=218&h=146&img.JPEG',
				content	: '　　虎扑12月28日讯 《曼彻斯特晚报》报道，曼城从未准备为刚刚加盟利物浦的荷兰中卫范戴克支付创后卫身价纪录的转会费。据多家媒体报道，利物浦为范戴克支付了7500万英镑的转会费，而这个价格远高于曼城对范戴克的估价，即使他们也在冬窗寻找中卫。',
				time 	: '2017-12-26',
				user 	: 'cghsir',
				tag 	: '我是标签',
				comment : 54,
				see		: 654
			},
			{
				title	: '男子取快递嫌被怠慢 连踹女店员胸口将其踹倒',
				img		: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3775250229,271313032&fm=173&s=06E0F8140D61481B445160E00300B03E&w=218&h=146&img.JPEG',
				content	: '　　当时一位男子来取快递，由于没有收到提货码，在查询快递的过程中，和店员发生了冲突。男子认为女店员怠慢了他，没有积极地帮他找快递。',
				time 	: '2017-12-26',
				user 	: 'cghsir',
				tag 	: '我是标签',
				comment : 14,
				see		: 236
			},
			{
				title	: '银行做二房东预付数年租金 有房你愿尝试吗',
				img		: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3419724274,3679370654&fm=173&s=B1365B9160EE651F09BD55CA0300F092&w=218&h=146&img.JPEG',
				content	: '　　今年，住房租赁领域的创新接连不断。继官办租赁平台、信用免押金租房等出现后，一些银行也开始探索新型住房租赁金融产品，银行做起“二房东”的背后，租赁交易将迎来哪些新体验和问题？',
				time 	: '2017-12-26',
				user 	: 'cghsir',
				tag 	: '我是标签',
				comment : 645,
				see		: 1231
			},
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
		for(var i in _this.data.list){
			var temp = _this.data.list[i];
			temp.encodeTitle = encodeURIComponent(temp.title);
		}
		setTimeout(function(){
			var html = _cc.renderHtml(template,_this.data);
			$aritcleCon.html(html);
		},800);
	}
}
$(function(){
	page.init();
})