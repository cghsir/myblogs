/*
* @Author: cghsir
* @Date:   2017-12-26 15:16:51
* @Last Modified by:   cghsir
* @Last Modified time: 2017-12-27 10:21:31
*/
// html渲染插件
var Hogan = require('hogan.js');
var conf = {
    serverHost : ''
};
var _cc = {
    $modalLoading : $('.modal-loading'),
    // 网络请求
    request : function(param){
        var _this = this;
        $.ajax({
            type        : param.method  || 'get',
            url         : param.url     || '',
            dataType    : param.type    || 'json',
            data        : param.data    || '',
            success     : function(res){
                // 请求成功
                if(0 === res.status){
                    typeof param.success === 'function' && param.success(res.data, res.msg);
                }
            },
            error       : function(err){
                typeof param.error === 'function' && param.error(err.statusText);
            }
        });
    },
    // 获取服务器地址
    getServerUrl : function(path){
        return conf.serverHost + path;
    },
    // 获取url参数
    getUrlParam : function(name){
        var reg     = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var result  = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    },
    // 渲染html模板
    renderHtml : function(htmlTemplate, data){
        var template    = Hogan.compile(htmlTemplate),
            result      = template.render(data);
        return result;
    },
    // 成功提示
    successTips : function(msg){
        alert(msg || '操作成功！');
    },
    // 错误提示
    errorTips : function(msg){
        alert(msg || '哪里不对了~');
    },
    // 字段的验证，支持非空、手机、邮箱的判断
    validate : function(value, type){
        var value = $.trim(value);
        // 非空验证
        if('require' === type){
            return !!value;
        }
        // 手机号验证
        if('phone' === type){
            return /^1\d{10}$/.test(value);
        }
        // 邮箱格式验证
        if('email' === type){
            return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
        }
    },
    goHome : function(){
        window.location.href = './index.html';
    },
    // obj jQuery容器。如果传递容器则在容器的地方显示loading不传递则显示全屏loading.
    show : function(obj){
        if(obj){
            obj.html('<div class="loading"></div>');
        }else{
            this.$modalLoading.addClass('show');
        }
    },
    // 隐藏全屏遮罩
    hide : function(){
        this.$modalLoading.removeClass('show');
    }
};

module.exports = _cc;