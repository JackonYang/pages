
function quickRgeOperate(){
	
		$("#qucikRegDiv").hide();
		$("#qucikRegDiv1").show();
	}
	function loginDiv(){
	    $("#LoginDiv").show();
		}

	function closeDiv(id){
			$("#"+id).hide();
			$("#qucikRegDiv").show();
		}

/*****************************************
字符串去除头尾空格
*****************************************/
String.prototype.Trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, "");
}

String.prototype.LTrim = function() {
	return this.replace(/(^\s*)/g, "");
}

String.prototype.RTrim = function() {
	return this.replace(/(\s*$)/g, "");
}
/*****************************************
取得event
*****************************************/
function Evt(e) {
	if (!e) {
		e = window.event;
	}
	return e;
}
function BEvent() {
	return window.event ? window.event : arguments.callee.caller.arguments[0];
}
/***********************************
回车提交
***********************************/
function EnterKey(ButtonID,evt)
{
	var key = window.event ? evt.keyCode : evt.which;
	var btn = $("#"+ButtonID);			
	if (key == 13)
	{
		btn.click();
		event.returnValue = false;
	}
}
/*****************************************
限制输入的执行函数
*****************************************/
//只能输入数字
function KeyPressNum(obj, evt) {
	var key = window.event ? evt.keyCode : evt.which;
	if (key < 27 || key > 128) return true; //如果输入的是功能按键，则不限制
	else if (key >= 48 && key <= 57) return true;
	else
		return false;
}
//只能输入数字和小数点，并且小数点要按规则输入
function KeyPressNumPoint(obj, evt) {
	var key = window.event ? evt.keyCode : evt.which;
	if (key < 27 || key > 128) //如果输入的是功能按键，则不限制
	{
		return true;
	}
	else if ((key >= 48 && key <= 57) || key == 46) {
		if (key == 46) {
			if (obj.value.Trim() == "") {
				return false;
			}
			if (obj.value.indexOf(".") >= 1) {
				return false;
			}
		}
		return true;
	}
	else
		return false;
}
//只允许输入带负号的小数数字格式
function KeyPressSignFloatNum(obj, evt) {
	var key = window.event ? evt.keyCode : evt.which;
	if (key < 27 || key > 128) //如果输入的是功能按键，则不限制
	{
		return true;
	}
	else if ((key >= 48 && key <= 57) || key == 46 || key == 45) {
		if (key == 46) {
			if (obj.value.Trim() == "") {
				return false;
			}
			if (obj.value.indexOf(".") >= 1) {
				return false;
			}
		}
		if (key == 45) {
			if (obj.value.Trim() != "")
				return false;
		}
		return true;
	}
	else
		return false;
}
//只能输入数字和横线
function KeyPressNumLine(obj, evt) {
	var key = window.event ? evt.keyCode : evt.which;
	if (key < 27 || key > 128) {
		return true;
	}
	else if ((key >= 48 && key <= 57) || key == 45) {
		return true;
	}
	else
		return false;
}
//只能输入数字、横线和括号（电话号码形式）
function KeyPressPhone(obj, evt) {
	var key = window.event ? evt.keyCode : evt.which;
	if (key < 27 || key > 128) {
		return true;
	}
	else if ((key >= 48 && key <= 57) || key == 45 || key == 40 || key == 41) {
		return true;
	}
	else
		return false;
}
/**********************************************
页面跳转
**********************************************/
//跳到本页并且去除url参数
function RefreshMe() {
	location.href = location.pathname;
}
//跳转到本页，不去除参数
function LocationToMe() {
	location.href = location.href;
}
//跳转到本页，并删除指定的参数
//参数：param:应为匹配指定参数的js正则表达式字符串
function RefreshMeDelParam(param) {
	var url = location.href;
	var reg = new RegExp(param, "ig");
	var x = url.replace(reg, "");
	LocationTo(x);
}
//跳到指定页
function LocationTo(url) {
	location.href = url;
}
//顶部窗口跳转
function TopLocationTo(url) {
	top.location.href = url;
}
//跳转到本页，并添加参数
function LocationToMeParam(param) {
	location.href = SetUrlParam(location.href, param);
}
//提交页面
function SubmitToMeParam(url) {
	document.forms[0].action = url;
	document.forms[0].submit();
}

//打开窗口的js类，默认打开空页面
function NewWindow() {
	this.Url = "about:blank";
	this.Name = "_blank";
	this.Height = Math.round(window.screen.height / 2);
	this.Width = Math.round(window.screen.width / 2);
	this.ToolBar = "yes";
	this.MenuBar = "yes";
	this.ScrollBars = "yes";
	this.Location = "yes";
	this.Status = "yes";
	this.Resizable = "yes";
	this.Left = Math.round(((window.screen.availWidth - this.Width) / 2) / 2);
	this.Top = Math.round(((window.screen.availHeight - this.Height) / 2) / 2);
}
NewWindow.prototype.Open = function() {
	window.open(this.Url, this.Name, 'height=' + this.Height + ',width=' + this.Width + ',toolbar=' + this.ToolBar + ',menubar=' + this.MenuBar + ',scrollbars=' + this.ScrollBars + ',resizable=' + this.Resizable + ',location=' + this.Location + ',status=' + this.Status + ',left=' + this.Left + ',top=' + this.Top + '');
}
//打开一个没有任何限制的窗口
function OpenUrl(url) {
	var win = new NewWindow();
	win.Url = url;
	win.Open();
}
//打开一个所有操作工具条都没有的窗口
function OpenUrlNotAll(url, width, height) {
	if (url == null || url == "")
		url = "/";
	if (width == null || width == 0)
		width = Math.round(window.screen.width / 2);
	if (height == null || height == 0)
		height = Math.round(window.screen.height / 2);

	var win = new NewWindow();
	win.Url = url;
	win.Height = height;
	win.Width = width;
	win.ToolBar = "no";
	win.MenuBar = "no";
	win.ScrollBars = "yes";
	win.Location = "no";
	win.Status = "no";
	win.Resizable = "yes";
	win.Left = Math.round((window.screen.availWidth - win.Width) / 2);
	win.Top = Math.round((window.screen.availHeight - win.Height) / 2);
	win.Open();
}
/**************************************************
屏幕尺寸
**************************************************/
function Screen() {
	this.ScrollTop = document.documentElement.scrollTop; //网页被卷去的高
	this.ScrollLeft = document.documentElement.scrollLeft; //网页被卷去的左
	this.ScrollWidth = document.documentElement.scrollWidth; //网页正文全文宽
	this.ScrollHeight = document.documentElement.scrollHeight; //网页正文全文高
	this.ClientHeight = document.documentElement.clientHeight; //网页可见区域高
	this.ClientWidth = document.documentElement.clientWidth; //网页可见区域宽
	this.OffsetWidth = document.documentElement.offsetWidth; //网页可见区域宽(包括边线)
	this.OffsetHeight = document.documentElement.offsetHeight; //网页可见区域高(包括边线)
	this.ScreenTop = window.screenTop; //网页正文部分上
	this.ScreenLeft = window.screenLeft; //网页正文部分左
	this.ScreenHeight = window.screen.height; //屏幕分辨率的高
	this.ScreenWidth = window.screen.width; //屏幕分辨率的宽
	this.AvailHeight = window.screen.availHeight; //屏幕有效工作区高
	this.AvailWidth = window.screen.availWidth; //屏幕有效工作区宽
};
/**************************************************
可用于显示页面进度条的隐藏层操作
**************************************************/
//创建一个浮动的div，未指定宽高度及位置，指定部分样式
//var timer = null;
function CreateStateDiv(divID) {
	var div = document.createElement("div");
	div.id = divID;
	with (div.style) {
		fontSize = "12px";
		color = "#000";
		background = "url(/images/System/D_bg.gif) repeat-x left top";
		border = "1px solid #99bfd8";
		position = "absolute";
		zIndex = "100000";
		display = "none";
	}
	return div;
}
//浮动层操作：关闭
function HiddenState(divID, time) {
	if ($("#" + divID).length > 0) {
		if (time == null || time == "undefined" || time == 0) time = 1000
		var tmp = "#" + divID;
		$("#" + divID).hide(time, function() {
			$(tmp).remove();
		});
	}
}
//扩展：显示网页提示信息
function MsgDiv(text, width) {

	var s = new Screen();
	//创建遮罩层
	var mask = $("#Mask");
	if (mask.length == 0) {
		mask = CreateStateDiv("Mask");
		with (mask.style) {
			border = "0px";
			filter = "alpha(opacity=0)";
			opacity = "0.8";
			zIndex = "99999";
			backgroundImage = "none";
			position = "absolute";
			top = 0;
			left = 0;
			width = Math.max(s.ClientWidth, s.ScrollWidth) + "px";
			height = Math.max(s.ClientHeight, s.ScrollHeight) + "px";
			display = "inline";
		}
		$(mask).css("-moz-opacity", "0.8");
		$(mask).click(function() { HiddenState("Mask", 1); HiddenState("Tranning", 1) });
		AppendElement(mask);
	}
	else {
		mask.css("display", "inline");
	}

	var state = $("#Tranning")[0];
	if (state == null) {
		state = CreateStateDiv("Tranning");
		AppendElement(state);
	}
	var swidth = (width == null || width == "" || width == 0) ? 600 : width;

	var content = '<div style="line-height:15px; background-color:#320F15; color:#FCE5AC;border:0px; padding:2px 2px 2px 2px; ">';
	content += text;
	content += '</div>';

	$(state).css("display", "inline");
	$(state).css("width", swidth + "px");
	$(state).html(content);
	$(state).css("top", s.ScrollTop + (s.ClientHeight - $(state).attr("clientHeight")) / 2);
	$(state).css("left", s.ScrollLeft + ((s.ClientWidth - width) / 2));
	setTimeout("HiddenState(\'Mask\', 1);HiddenState(\'Tranning\',200);", 2000);
}
//扩展：显示网页提示信息
function Msg(text, width) {

    var s = new Screen();
    //创建遮罩层
    var mask = $("#Mask");
    if (mask.length == 0) {
        mask = CreateStateDiv("Mask");
        with (mask.style) {
            border = "0px";
            filter = "alpha(opacity=80)";
            opacity = "0.8";
            zIndex = "99999";
            backgroundImage = "none";
            backgroundColor = "#fefefe";
            position = "absolute";
            top = 0;
            left = 0;
            width = Math.max(s.ClientWidth, s.ScrollWidth) + "px";
            height = Math.max(s.ClientHeight, s.ScrollHeight) + "px";
            display = "inline";
        }
        $(mask).css("-moz-opacity", "0.8");
        $(mask).click(function() { HiddenState("Mask", 1); HiddenState("Tranning", 1) });
        AppendElement(mask);
    }
    else {
        mask.css("display", "inline");
    }

    var state = $("#Tranning")[0];
    if (state == null) {
        state = CreateStateDiv("Tranning");
        AppendElement(state);
    }
    var swidth = (width == null || width == "" || width == 0) ? 600 : width;

    var content = '<div style="color: #153c64; font-weight: bold; font-size: 14px; padding: 7px 0 0 12px;cursor:move;" onmouseover="DivMove(\'Tranning\');">';
    content += '<span style="position: absolute; top: 4px; right: 5px;">';
    content += '<img src="/images/System/d_close.gif" width="21" height="19" style="border: 0;cursor:pointer;" title="关闭" alt="关闭" onclick="HiddenState(\'Mask\', 1);HiddenState(\'Tranning\',200);" /></span>';
    content += '网页对话框</div>';
    content += '<div style="padding: 25px; line-height: 24px;">';
    content += text;
    content += '</div>';
    content += '<div style="height: 27px; background: url(/images/System/d_bottom.gif) repeat-x left top; border-top: 1px solid #e1e1e1; text-align: center; padding-top: 4px;">';
    content += '<img src="/images/System/d_btn.gif" style="border:0;cursor:pointer;" title="关闭" alt="关闭" onclick="HiddenState(\'Mask\', 1);HiddenState(\'Tranning\',200);" />';
    content += '</div>';

    $(state).css("display", "inline");
    $(state).css("width", swidth + "px");
    $(state).html(content);
    $(state).css("top", s.ScrollTop + (s.ClientHeight - $(state).attr("clientHeight")) / 2);
    $(state).css("left", s.ScrollLeft + ((s.ClientWidth - width) / 2));
}
function HallMsg(text, width) {

    var s = new Screen();
    //创建遮罩层
    var mask = $("#Mask");
    if (mask.length == 0) {
        mask = CreateStateDiv("Mask");
        with (mask.style) {
            border = "0px";
            filter = "alpha(opacity=0)";
            opacity = "0.0";
            zIndex = "99999";
            backgroundImage = "none";
            position = "absolute";
            top = 0;
            left = 0;
            width = Math.max(s.ClientWidth, s.ScrollWidth) + "px";
            height = Math.max(s.ClientHeight, s.ScrollHeight) + "px";
            display = "inline";
        }
        $(mask).css("-moz-opacity", "0.0");
        $(mask).click(function() { HiddenState("Mask", 1); HiddenState("Tranning", 1) });
        AppendElement(mask);
    }
    else {
        mask.css("display", "inline");
    }

    var state = $("#Tranning")[0];
    if (state == null) {
        state = CreateStateDiv("Tranning");
        AppendElement(state);
    }
    var swidth = (width == null || width == "" || width == 0) ? 600 : width;

    var content = '<div style="background:url(/images/MembersImg/tishi2.jpg) no-repeat;width:280px; height:187px; position:relative">';

    content += '<span style="cursor:pointer; display:block; height:28px; width:35px;  line-height:100px; overflow:hidden; position:absolute; top:10px; right:8px; text-align:center;"><img src="/images/MembersImg/Bn_guanbi.png"   onclick="HiddenState(\'Mask\', 1);HiddenState(\'Tranning\',200);"/></span>';
   content += '<div style="_display:inline; float:left; width:250px; height:62px; margin:66px 0 0 20px; color:#f00; display:block; font-size:16px; text-align:center;">';
   content += text;
   content += '</div><div style=" width:100%; float:left; margin-top:18px; text-align:center;"><img style="margin:0 12px; cursor:pointer;"  onclick="HiddenState(\'Mask\', 1);HiddenState(\'Tranning\',200);" src="/images/MembersImg/Bn_qr.png" /><img src="/images/MembersImg/Bn_quxiao.png" style="margin:0 12px; cursor:pointer;"  onclick="HiddenState(\'Mask\', 1);HiddenState(\'Tranning\',200);"/></div>';
  


    $(state).css("display", "inline");
    $(state).css("width", swidth + "px");
    $(state).html(content);
    $(state).css("top", s.ScrollTop + (s.ClientHeight - $(state).attr("clientHeight")) / 2);
    $(state).css("left", s.ScrollLeft + ((s.ClientWidth - width) / 2));
}
//扩展：显示进度条
function OpenStateBar(text) {
    var state = $("#Tranning")[0];
    if (state == null) {
        state = CreateStateDiv("Tranning");
        AppendElement(state);
    }

    var content = LOADING_ICON + text;

    $(state).css("display", "inline");
    $(state).html(content);
    var s = new Screen();
    $(state).css("border", "0");
    $(state).css("top", s.ScrollTop + (s.ClientHeight - $(state).attr("clientHeight")) / 2);
    $(state).css("left", s.ScrollLeft + ((s.ClientWidth - $(state).attr("clientWidth")) / 2));
}
//扩展：显示进度条
function OpenStateBar(text) {
	var state = $("#Tranning")[0];
	if (state == null) {
		state = CreateStateDiv("Tranning");
		AppendElement(state);
	}

	var content = LOADING_ICON + text;

	$(state).css("display", "inline");
	$(state).html(content);
	var s = new Screen();
	$(state).css("border", "0");
	$(state).css("top", s.ScrollTop + (s.ClientHeight - $(state).attr("clientHeight")) / 2);
	$(state).css("left", s.ScrollLeft + ((s.ClientWidth - $(state).attr("clientWidth")) / 2));
}
//扩展：关闭进度条
function CloseStateBar() {
	$("#Tranning").hide(500, function() { $("#Tranning").remove(); });
}
//扩展：层的移动
var drag_ = false;
function DivMove(objID) {
	var x, y;
	var tmp = "#" + objID;
	$(tmp).mousedown(
		function(e) {
			drag_ = true;
			with ($(tmp)) {
				css("position", "absolute");
				var off = offset();
				var temp1 = off.left;
				var temp2 = off.top;
				x = Evt(e).clientX;
				y = Evt(e).clientY;

				document.onmousemove = function(e) {
					if (!drag_) return false;
					with (this) {
						css("left", temp1 + Evt(e).clientX - x);
						css("top", temp2 + Evt(e).clientY - y);
					}
				}
			}
		}
	);
	document.onmouseup = new Function("drag_=false;");
}
//扩展：为文档添加一个元素
function AppendElement(element) {
	if (document.readyState) {
		if (document.readyState == "complete") {
			$(document.body).append(element);
		}
		else {
			$(document).ready(
			function() { $(document.body).append(element); }
			);
		}
	}
	else {
		$(document.body).append(element);
	}
}
/***************************************************************
url操作
***************************************************************/
//获取url中一个指定的参数值
function GetRequest(paramName, defaultValue) {
	var search = paramName + "=";
	var FieldValue = "";
	var URL = location.href;
	var offset = URL.indexOf(search);
	if (offset != -1) {
		offset += search.length;
		var end = URL.indexOf("&", offset);
		if (end == -1) {
			FieldValue = URL.substring(offset);
		}
		else {
			FieldValue = URL.substring(offset, end);
		}
	}
	if (FieldValue == "") {
		FieldValue = defaultValue;
	}
	return FieldValue.toLowerCase();
}
//为url添加参数，自动判断是更新还是添加
//参数格式：如：page=1的形式，不能是“page=1&params=1”的形式，即一次只能添加一个参数
function SetUrlParam(url, param) {
	var interrogation = url.indexOf("?");

	if (interrogation == -1) {
		url += "?" + param;
	}
	else {
		//如果?后面有查询字符串,则检测有没有该字段，如果有，则重新付值
		var fp = param.split("=");
		var search = fp[0] + "=";
		var offset = url.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = url.indexOf("&", offset);
			if (end == -1) {
				url = url.substring(0, offset) + fp[1];
			}
			else {
				url = url.substring(0, offset) + fp[1] + url.substring(end);
			}
		}
		else {
			url = url + "&" + param;
		}
	}
	return url;
}
/*************************************************************
* 对象操作
*************************************************************/
//获取select的当前选定项的文本
function DropGetText(dropID) {
	var selector = "#" + dropID + " option:selected"
	return $(selector).text();
}
//获取select的当前选定项的值
function DropGetValue(dropID) {
	var selector = "#" + dropID + " option:selected"
	return $(selector).val();
}
//根据文本设置select的选定项
function DropSetByText(dropID, text) {
	var selector = "#" + dropID + " option";
	$(selector).each(
		function() {
			this.selected = (this.text == text) ? true : false;
		}
	);
}
//根据值设置select的选定项
function DropSetByValue(dropID, value) {
	var selector = "#" + dropID + " option";
	$(selector).each(
		function() {
			this.selected = (this.value == value) ? true : false;
		}
	);
}

/**************************************************************************
设为主页、加入收藏和复制到剪贴板
**************************************************************************/
//设为主页
function SetHomePage() {
	if (document.all) {
		document.body.style.behavior = 'url(#default#homepage)';
		document.body.setHomePage(location.href);
	}
	else if (window.sidebar) {
		if (window.netscape) {
			try {
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			}
			catch (e) {
				alert("该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值改为true");
			}
		}
		var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
		prefs.setCharPref('browser.startup.homepage', location.href);
	}
}
//加入浏览器收藏
function AddFavorite(title, url) {
	if (document.all) {
		window.external.addFavorite(url, title);
	}
	else if (window.sidebar) {
		window.sidebar.addPanel(title, url, "");
	}
}
//加入会员收藏夹
function AddMemberFavorite(title, url) {
	//加入会员收藏夹的代码
	//进度条
	OpenStateBar("请稍候...");
	var url = "/Members/UsersForm.html?params=addfavorite&title=" + encodeURIComponent(title) + "&url=" + encodeURIComponent(url) + "&x=" + Math.random();
	$.get(
		url,
		function(data) {
			if (data == "nologin") {
				Msg(ERROR_MSG_ICON + '<p style="text-indent:2em;">您尚未登录，不能使用会员收藏夹，要收藏到浏览器中吗？<div style="text-align:center;">【<a href="javascript:HiddenState(\'Tranning\',500);AddFavorite(\'' + title + '\',\'' + url + '\');" title="收藏到浏览器">收藏</a>】&nbsp;&nbsp;【<a href="/Login.html" title="现在登录">现在登录</a>】</div></p>', 450);
			}
			else if (data == "success") {
				Msg(SUCCESS_MSG_ICON + '<p style="text-indent:2em;">已添加到您的商品收藏夹，您可以在个人中心再次查看这个商品，现在查看收藏夹吗？<div style="text-align:center;">【<a href="/Members/ProductsFavorite.html" title="进入会员收藏夹">是</a>】&nbsp;&nbsp;【<a href="javascript:HiddenState(\'Tranning\',500);">否</a>】</div></p>', 450);
			}
			else {
				Msg(ERROR_MSG_ICON + "错误：" + data, 300);
			}
		}
	);
}
//复制信息到剪贴板
function CopyToClipboard(str) {
	var msg = "本页信息复制成功，您可以粘贴到QQ、MSN或邮箱中，发送给您的好友。";
	if (window.clipboardData) {
		window.clipboardData.clearData();
		window.clipboardData.setData("Text", str);
		alert(msg);
	}
	else if (window.netscape) {
		try {
			netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
		} catch (e) {
			alert("被浏览器拒绝！\n请在浏览器地址栏输入'about:config'并回车\n然后将'signed.applets.codebase_principal_support'设置为'true'");
		}
		var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
		if (!clip)
			return;
		var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
		if (!trans)
			return;
		trans.addDataFlavor('text/unicode');
		var len = new Object();
		var str2 = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
		var copytext = str;
		str2.data = copytext;
		trans.setTransferData("text/unicode", str2, copytext.length * 2);
		var clipid = Components.interfaces.nsIClipboard;
		if (!clip)
			return false;
		clip.setData(trans, null, clipid.kGlobalClipboard);
		alert(msg);
	}
}
//复制信息到剪贴板，无提示
function CopyToClipboardNonAlert(str) {
	if (window.clipboardData) {
		window.clipboardData.clearData();
		window.clipboardData.setData("Text", str);
	}
	else if (window.netscape) {
		try {
			netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
		} catch (e) {
		}
		var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
		if (!clip)
			return;
		var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
		if (!trans)
			return;
		trans.addDataFlavor('text/unicode');
		var len = new Object();
		var str2 = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
		var copytext = str;
		str2.data = copytext;
		trans.setTransferData("text/unicode", str2, copytext.length * 2);
		var clipid = Components.interfaces.nsIClipboard;
		if (!clip)
			return false;
		clip.setData(trans, null, clipid.kGlobalClipboard);
	}
}

/*****************************************************
表单验证
*****************************************************/
//var ERROR_MSG_ICON="<img src='/images/System/smallerror.gif' align='absmiddle' width='32' height='32' />&nbsp;";
var ERROR_MSG_ICON = "<img src='/images/System/053753112.gif' align='absmiddle' width='16' height='16' />&nbsp;";
var LOADING_ICON = "<img src='/images/System/smallloading.gif' align='absmiddle' width='16' height='16' />&nbsp;";
var INFO_MSG_ICON = "<img src='/images/System/no.jpg' align='absmiddle' width='32' height='32' />&nbsp;";
//var SUCCESS_MSG_ICON = "<img src='/images/System/ORB_Icons_by_014.png' align='absmiddle' width='32' height='32' />&nbsp;";
var SUCCESS_MSG_ICON = "<img src='/images/System/053753200.gif' align='absmiddle' width='16' height='16' />&nbsp;";
function CK_HtmlControl() {
	this.Message = ""; //错误信息容器
	this.Postfix = "<br />"; //错误信息后缀
	//验证不能为空，可加长度限制
	//参数：obj:要验证的对象; objTitle:要显示的错误信息前缀; maxlength:要限制的字符串长度最大值，为-1表示不限制；minLength:要限制的字符串长度最小值，为-1表示不限制
	//返回：true:表示验证成功，false:表示发生错误
	this.Required_TextBox = function(obj, objTitle, maxLength, minLength) {
		if (obj) {
			var tmp = obj.value.Trim();
			if (tmp == "") {
				this.Message += objTitle + "不能留空" + this.Postfix;
				return false;
			}
			else {
				if (maxLength > -1 && minLength > -1) {//两种长度同时限制
					if (!((tmp.length <= maxLength) && (tmp.length >= minLength))) {
						this.Message += objTitle + "长度应在" + minLength + "～" + maxLength + "个字之间" + this.Postfix;
						return false;
					}
					return true;
				}
				else if (maxLength > -1 && minLength <= -1) {//限制最大长度
					if (!(tmp.length <= maxLength)) {
						this.Message += objTitle + "长度应小于" + maxLength + "个字" + this.Postfix;
						return false;
					}
					return true;
				}
				else if (maxLength <= -1 && minLength > -1) {//限制最小长度
					if (!(tmp.length >= minLength)) {
						this.Message += objTitle + "长度应大于" + minLength + "个字" + this.Postfix;
						return false;
					}
					return true;
				}
				return true;
			}
		}
		this.Message = "内部错误：对象不存在。";
		return false;
	}
	//验证数字字符串不能为空，只能输入数字，并带有数字范围验证
	this.Required_Number_TextBox = function(obj, objTitle, maxValue, minValue) {
		if (obj) {
			var tmp = obj.value.Trim();
			if (tmp == "") {
				this.Message += objTitle + "不能留空" + this.Postfix;
				return false;
			}
			else if (isNaN(tmp)) {
				this.Message += objTitle + "只能输入数字" + this.Postfix;
				return false;
			}
			else {
				var value = parseInt(tmp);
				if (value > maxValue || value < minValue) {
					this.Message += objTitle + "必须在" + minValue.toString() + "和" + maxValue.toString() + "之间" + this.Postfix;
					return false;
				}
				return true;
			}
		}
		this.Message = "内部错误：对象不存在。";
		return false;
	}
	//验证字符串格式
	//参数：reg:要匹配的正则模式
	this.Regular_TextBox = function(obj, objTitle, reg) {
		if (obj) {
			var tmp = obj.value.Trim();
			if (tmp.match(reg) == null) {
				this.Message += objTitle + "格式不正确" + this.Postfix;
				return false;
			}
			return true;
		}
		this.Message = "内部错误：对象不存在";
		return false;
	}
	//验证两个字符串相等
	this.CompareEquals = function(str1, str2, mess) {
		if (str1 == str2) return true;
		this.Message += mess;
		return false;
	}
	//验证两个字符串不相等
	this.CompareNotEquals = function(str1, str2, mess) {
		if (str1 != str2) return true;
		this.Message += mess;
		return false;
	}
	//验证一组checkbox或radio至少选中了一个
	this.Checked = function(objseltor, errormsgtitle, isradio) {
		if ($(objseltor + ":checked").length > 0) { return true; }
		else {
			if (isradio)
			{ this.Message += "请选择" + errormsgtitle + this.Postfix; }
			else
			{ this.Message += "您至少应该选择" + errormsgtitle + "中的一个" + this.Postfix; }
			return false;
		}
	}
	//验证两个输入控件至少要填写一个
	this.Alternative_TextBox = function(obj1, obj2, title1, title2) {
		if (obj1 == null || obj2 == null) {
			this.Message += "错误：对象不存在！";
			return false;
		}
		if ($(obj1).val().Trim() == "" && $(obj2).val().Trim() == "") {
			this.Message += title1 + "和" + title2 + "您至少应该填写一项。" + this.Postfix;
			return false;
		}
		else {
			return true;
		}
	}
}

/*****************************************************************
会员登录验证
*****************************************************************/
//会员登录页表单验证
function CheckMemberFullLogin() {
	var ck = new CK_HtmlControl();
	ck.Postfix = "</li>";
	if (
		ck.Required_TextBox($("#txtLoginName")[0], "<li style='color:red;'>-用户名", 50, 2) &&
		ck.Required_TextBox($("#txtLoginPassword")[0], "<li style='color:red;'>-密码", 200, 6) &&
		ck.Required_TextBox($("#txtValidate")[0], "<li style='color:red;'>-验证码", 4, 4)
		) {
		return true;
	}
	else {
		var error = '<strong>您的输入有以下错误：</strong><br /><ol>';
		error += ck.Message + "</ol>";
		Msg(ERROR_MSG_ICON + error, 300);
		return false;
	}
}
//顶部会员登录表单验证
function CheckTopMemberLogin() {
	var ck = new CK_HtmlControl();
	ck.Postfix = "</li>";
	if (
		ck.Required_TextBox($("#txtTopLoginName")[0], "<li style='color:red;'>-用户名", 50, 2) &&
		ck.Required_TextBox($("#txtTopLoginPwd")[0], "<li style='color:red;'>-密码", 200, 6)
		) {
		return true;
	}
	else {
		var error = '<strong>您的输入有以下错误：</strong><br /><ol>';
		error += ck.Message + "</ol>";
		Msg(ERROR_MSG_ICON + error, 300);
		return false;
	}
}
//顶部会员登录动作
function TopLoginAction() {
	if (CheckTopMemberLogin()) {
		var btn = $("#spanTopLoginBtn").html();
		$("#spanTopLoginBtn").html("<font color='#3794e2'>请稍候...</font>");
		var url = "/Members/UsersForm.html?params=login&un=" + encodeURIComponent($("#txtTopLoginName").val()) + "&pwd=" + $("#txtTopLoginPwd").val();
		var msg = $.get(url, function(data) {
			if (data != "登录成功") {
				Msg(ERROR_MSG_ICON + "错误：" + data, 200);
				$("#spanTopLoginBtn").html(btn);
			}
			else {
				LocationTo("/Members/");
			}
		});
	}
}
/**************************************************************
分站函数
**************************************************************/
function IsSubSite() {
	var subdomain = location.host.substring(0, location.host.indexOf("."));
	return (subdomain != "www" && subdomain.indexOf("test") < 0)
}
function SubDomain() {
	return location.host.substring(0, location.host.indexOf("."));
}
/**************************************************************
在线客服
**************************************************************/
function InitFloatService(objseltor) {
	//移动的效果
	var obj = $(objseltor);
	var s = new Screen();
	obj.css("top", s.ScrollTop + 200);
	obj.css("right", 0);
	//跟随滚动条
	$(window).scroll(
		function() {
			var s = new Screen();
			$(objseltor).css("top", s.ScrollTop + 200);
			$(objseltor).css("right", 0);
		}
	);
	//读取在线客服
	var file = "/XML/";
	var subdomain = location.host.substring(0, location.host.indexOf("."));
	if (subdomain != "www" && subdomain.indexOf("test") < 0) {
		file += subdomain + "/Service.xml";
	}
	else {
		file += "Service.xml";
	}
	$.get(
		file + "?x=" + Math.random(),
		function(xml) {
			$("#big>ul").remove();
			$("#big>h3").remove();

			//先取得所有部门
			var sector = new Array();
			$(xml).find("Item").each(
				function() {
					var g = $(this).attr("Group");
					if (sector.length <= 0) {
						sector.push(g);
					}
					else {
						if (sector.toString().indexOf(g) < 0) {
							sector.push(g);
						}
					}
				}
			);

			for (var i = 0; i < sector.length; i++) {
				var h3 = $(document.createElement("h3"));
				h3.text(sector[i]);
				$("#big").append(h3);
				var ul = $(document.createElement("ul"));
				$(xml).find("Item[Group=" + sector[i] + "]").each(
					function() {
						var node = $(this);
						var type = node.children("Type").text();
						var sn = node.children("SN").text();
						var title = node.children("Name").text();
						var li = $(document.createElement("li"));
						var href = $(document.createElement("A"));
						var img = $(document.createElement("img"));
						var txt = $(document.createTextNode(title));
						if (type.toLowerCase() == "msn") {
							href.attr("href", "msnim:chat?contact=" + sn);
							href.attr("title", title);
							img.attr("src", "/images/msn_online.gif");
						}
						else {
							href.attr("href", "http://wpa.qq.com/msgrd?V=1&Uin=" + sn + "&Site=" + location.host);
							href.attr("target", "_blank");
							href.attr("title", title);
							img.attr("src", "http://wpa.qq.com/pa?p=1:" + sn + ":4");
						}
						href.append(img);
						href.append(txt);
						li.append(href);
						ul.append(li);
						$("#big").append(ul);
					}
				);
			}
			$("#big>ul:last").css("border-bottom", "2px solid #0977cd");
		}
	);
}

/***************************************************************************
*					tab效果
***************************************************************************/
//参数：navseltor：导航栏选择器；listseltor：列表内容选择器；activecss：活动导航css样式
function TabbedPanels(navseltor, listseltor, activecss) {
	$(navseltor).each(
		function() {
			$(this).mousemove(
				function() {
					this.className = activecss;
					$(this).siblings().each(
						function() { this.className = ""; }
					);
					var index = $.inArray(this, $.makeArray($(navseltor)));
					$(listseltor).each(
						function(i) {
							$(this).css("display", (i == index ? "" : "none"));
						}
					);
				}
			);
		}
	);
}
//参数：navseltor：导航栏选择器；listseltor：列表内容选择器；activecss：活动导航css样式；morecontainer：更多链接的容器
function TabbedPanelsMore(navseltor, listseltor, activecss, morecontainer) {
	$(navseltor).each(
		function() {
			$(this).mousemove(
				function() {
					this.className = activecss;
					$(morecontainer).html("<a href='" + this.href + "' title='查看更多'>更多&gt;&gt;</a>");
					$(this).siblings().each(
						function() { this.className = ""; }
					);
					var index = $.inArray(this, $.makeArray($(navseltor)));
					$(listseltor).each(
						function(i) {
							$(this).css("display", (i == index ? "" : "none"));
						}
					);
				}
			);
		}
	);
}

var regexEnum =
{
	intege: "^-?[1-9]\\d*$", 				//整数
	intege1: "^[1-9]\\d*$", 				//正整数
	intege2: "^-[1-9]\\d*$", 				//负整数
	num: "^([+-]?)\\d*\\.?\\d+$", 		//数字
	num1: "^[1-9]\\d*|0$", 				//正数（正整数 + 0）
	num2: "^-[1-9]\\d*|0$", 				//负数（负整数 + 0）
	decmal: "^([+-]?)\\d*\\.\\d+$", 		//浮点数
	decmal1: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$", //正浮点数
	decmal2: "^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$", //负浮点数
	decmal3: "^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$", //浮点数
	decmal4: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$", //非负浮点数（正浮点数 + 0）
	decmal5: "^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$", //非正浮点数（负浮点数 + 0）

	email: "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$", //邮件
	color: "^[a-fA-F0-9]{6}$", 			//颜色
	url: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$", //url
	chinese: "^[\\u4E00-\\u9FA5\\uF900-\\uFA2D]+$", 				//仅中文
	ascii: "^[\\x00-\\xFF]+$", 			//仅ACSII字符
	zipcode: "^\\d{6}$", 					//邮编
	mobile: "^(13|15)[0-9]{9}$", 			//手机
	ip4: "^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$", //ip地址
	notempty: "^\\S+$", 					//非空
	picture: "(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$", //图片
	rar: "(.*)\\.(rar|zip|7zip|tgz)$", 							//压缩文件
	date: "^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$", 				//日期
	qq: "^[1-9]*[1-9][0-9]*$", 			//QQ号码
	tel: "^(([0\\+]\\d{2,3}-)?(0\\d{2,3})-)?(\\d{7,8})(-(\\d{3,}))?$", //电话号码的函数(包括验证国内区号,国际区号,分机号)
	username: "^\\w+$", 					//用来用户注册。匹配由数字、26个英文字母或者下划线组成的字符串
	letter: "^[A-Za-z]+$", 				//字母
	letter_u: "^[A-Z]+$", 				//大写字母
	letter_l: "^[a-z]+$", 				//小写字母
	idcard: "^[1-9]([0-9]{14}|[0-9]{17})$"	//身份证
}

var aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" }

/*function isCardID(sId) {
	var iSum = 0;
	var info = "";
	if (!/^\d{17}(\d|x)$/i.test(sId)) return "你输入的身份证长度或格式错误";
	sId = sId.replace(/x$/i, "a");
	if (aCity[parseInt(sId.substr(0, 2))] == null) return "你的身份证地区非法";
	sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
	var d = new Date(sBirthday.replace(/-/g, "/"));
	if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) return "身份证上的出生日期非法";
	for (var i = 17; i >= 0; i--) iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
	if (iSum % 11 != 1) return "你输入的身份证号非法";
	return true; //aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女") 
}*/




//短时间，形如 (13:04:06)
function isTime(str) {
	var a = str.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);
	if (a == null) { return false }
	if (a[1] > 24 || a[3] > 60 || a[4] > 60) {
		return false;
	}
	return true;
}

//短日期，形如 (2003-12-05)
function isDate(str) {
	var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
	if (r == null) return false;
	var d = new Date(r[1], r[3] - 1, r[4]);
	return (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]);
}

//长时间，形如 (2003-12-05 13:04:06)
function isDateTime(str) {
	var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
	var r = str.match(reg);
	if (r == null) return false;
	var d = new Date(r[1], r[3] - 1, r[4], r[5], r[6], r[7]);
	return (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4] && d.getHours() == r[5] && d.getMinutes() == r[6] && d.getSeconds() == r[7]);
}


//验证身份证
function chkidcard(){
		var txt = document.getElementById('idcard');
        var tip = document.getElementById("idcardspan");
	     if(!idcard())
	     {
		    tip.className="note_no";
		    tip.innerText='身份证号无效！';
		    return false;
	     }
	     else
	     {
		    tip.className="note_yes";
		    tip.innerText='恭喜您，身份证号码检测通过。';
		    return true;
	     }
        
	}   
	
/*---------------验证身份证是否合法------------------*/
function idcard(card) {
	var vl = card;
	var tst=/^\d{18}$|^\d{17}(\d|x|X)$|^\d{15}$/;	
	if(!tst.test(vl)){		//验证是否为18位数字或17为数字+X或15位数字	
		return "-1";
	}
	if(vl.length==15){			
		var address = "11x22x35x44x53x12x23x36x45x54x13x31x37x46x61x14x32x41x50x62x15x33x42x51x63x21x34x43x52x64x65x71x81x82x91";
		var sf=vl.substring(0,2);
		if(address.indexOf(sf)==-1){	//省份验证
		    return "-1";
		}
		var birth="19"+vl.substr(6,6);
		var year=parseInt("19"+vl.substr(6,2),10);
		var month=vl.substr(8,2);
		var day=vl.substr(10,2);
		if(chkdate(birth,year,month,day)==-1){	//生日的验证
		    return "-1";
		}
		if (!IsEighteen(year, month, day)) { 
            return "-2";
        }	
		return "1";	
	}
	if(vl.length==18){
		var address = "11x22x35x44x53x12x23x36x45x54x13x31x37x46x61x14x32x41x50x62x15x33x42x51x63x21x34x43x52x64x65x71x81x82x91"; //省份验证
		var sf=vl.substring(0,2);			
		if(address.indexOf(sf)==-1){
		    return "-1";
		}
		var birth=vl.substr(6,8);	
		var year=parseInt(vl.substr(6,4),10);
		var month=vl.substr(10,2);
		var day=vl.substr(12,2);
		if((parseInt(year,10)>2010)||(parseInt(year,10)<1900)){ //年份范围验证
		    return "-1";
		}
		if(chkdate(birth,year,month,day) == -1){	 //生日的验证
		    return "-1";
		}
		var rightcode=new Array("1","0","X","9","8","7","6","5","4","3","2"); //有效校正码
		var heft= new Array("7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"); //身份证前17位每位占有权重
		var cardarr=vl.substr(0,17).split("");
		var sum=0;
		for(var i=0;i<17;i++){
			sum+=parseInt(cardarr[i],10)*parseInt(heft[i],10);
		}
		sum=sum%11;
		if(rightcode[sum].toUpperCase()!=vl.substr(17).toUpperCase()){
			//alert("校正码错误");
		    return "-1";
         }
         if (!IsEighteen(year, month, day)) { 
            return "-2";
        }
	}
	//alert("恭喜您,测试通过");
	return "1";
}


/*---------------验证身份证中的生日是否合法------------------*/
function chkdate(birth,year,month,day){
	var bigmonth="01x03x05x07x08x10x12";
	var smallmonth="02x04x06x09x11";
	if((parseInt(month,10)>12)||(parseInt(month,10)<1)){	//验证月份是否合法
		//alert("月份错误");
		return -1;
	}
	/*判断日期是否合法*/
	if(bigmonth.indexOf(month)!=-1){			//月份是大月时
		if(day>31||day<1){
			//alert("日期错误,月大");
			return -1;
		}
	}
	if(smallmonth.indexOf(month)!=-1){			//当月份是小月时
		if(day>30||day<1){
			//alert("日期错误，月小"+day);
			return -1;
		}
	}
	if(month=="02"){							//当月份是2月时
		if((year%4==0&&year%100!=0)||year%400==0){
			if(day>28||day<1){
				//alert("日期错误，二月");
				return -1;
			}
		}else{
			if(day>29||day<1){
					//alert("日期错误，二月平年");
					return -1;
			}
		}
	}
}

/*-------------验证身份证身份证号码主任人是否已满18周岁---------*/
function IsEighteen(year, month, day) {
    d = new Date();
    var nowMonth = (d.getMonth() + 1);
    var nowDay = d.getDate();
    var nowYear = d.getUTCFullYear();
    //判断年
    if ((nowYear - year) < 18) {
        return false; //差年
    } else if ((nowYear - year) == 18) {
    if ((nowMonth - month) < 0) {
            return false; //差月
        } else if ((nowMonth - month) == 0) {
        if ((nowDay - day) < 0) {
                return false; //差月
            }
        }
    }
    return true; //验证通过                                             
}
