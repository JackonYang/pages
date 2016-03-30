 
function $$(oParent, elem) {
    return (oParent || document).getElementsByTagName(elem);
}
function $$$(oParent, sClass) {
    var aElem = $$(oParent, '*');
    var aClass = [];
    var i = 0;
    for (i = 0; i < aElem.length; i++) if (aElem[i].className == sClass) aClass.push(aElem[i]);
    return aClass;
}
function Alert() {
    this.initialize.apply(this, arguments);
}
Object.extend = function (destination, source) {
    for (var property in source) {
        destination[property] = source[property];
    }
    return destination;
};
Alert.prototype = {
    initialize: function (obj, frame, onEnd) {
        if ($(obj)) {
            var _this = this;
            this.obj = $(obj);
            this.frame = frame;
            this.oEve(onEnd);
            this.oTitle = this.onEnd.title;
            this.oContent = this.onEnd.content;
            this.iWidth = this.onEnd.width;
            this.iHeight = this.onEnd.height;
            this.iTop = this.onEnd.top;
            this.iLeft = this.onEnd.left;
            this.iFixed = this.onEnd.fixed;
            this.iClose = this.onEnd.close;
            this.obj.onclick = function () { _this.create(), _this.backg(); };
            window.onresize = function () { _this.backg(); };
        }
    },
    create: function () {
        this.oDiv = document.createElement('div');
        this.oAlert_backg = document.createElement('div');
        this.oAlert_frame = document.createElement('div');
        this.oTop_l = document.createElement('div');
        this.oTop_c = document.createElement('div');
        this.oTop_r = document.createElement('div');
        this.oCon = document.createElement('div');
        this.oCon_l = document.createElement('div');
        this.oCon_c = document.createElement('div');
        this.oCon_r = document.createElement('div');
        this.oBot_l = document.createElement('div');
        this.oBot_c = document.createElement('div');
        this.oBot_r = document.createElement('div');
        this.oDiv.id = this.frame;
        this.oAlert_backg.className = 'alert_backg';
        this.oAlert_frame.className = 'alert_frame';
        this.oTop_l.className = 'top_l';
        this.oTop_c.className = 'top_c';
        this.oTop_r.className = 'top_r';
        this.oCon.className = 'con';
        this.oCon_l.className = 'con_l';
        this.oCon_c.className = 'con_c';
        this.oCon_r.className = 'con_r';
        this.oBot_l.className = 'bot_l';
        this.oBot_c.className = 'bot_c';
        this.oBot_r.className = 'bot_r';
        document.body.appendChild(this.oDiv);
        this.box = $(this.frame);
        this.box.appendChild(this.oAlert_backg);
        this.box.appendChild(this.oAlert_frame);
        this.oFra = $$$(this.box, 'alert_frame')[0];
        this.oFra.appendChild(this.oTop_l);
        this.oFra.appendChild(this.oTop_c);
        this.oFra.appendChild(this.oTop_r);
        this.oFra.appendChild(this.oCon);
        this.oFra.appendChild(this.oBot_l);
        this.oFra.appendChild(this.oBot_c);
        this.oFra.appendChild(this.oBot_r);
        this.oCone = $$$(this.box, 'con')[0];
        this.oCone.appendChild(this.oCon_l);
        this.oCone.appendChild(this.oCon_c);
        this.oCone.appendChild(this.oCon_r);
        this.tit = $(this.frame);
        this.con = $$$(this.tit, 'con_c')[0];
        this.oAlert_tit = document.createElement('div');
        this.oAlert_con = document.createElement('div');
        this.oH2 = document.createElement('h2');
        this.oAlert_tit.className = 'alert_tit';
        this.oAlert_con.className = 'alert_con';
        if (this.oTitle != "") {
            this.con.appendChild(this.oAlert_tit);
            this.con.appendChild(this.oAlert_con);
            this.oAlert_tit = $$$(this.tit, 'alert_tit')[0];
            this.oH2.innerHTML = this.oTitle;
            this.oAlert_tit.appendChild(this.oH2);
        }
        this.content();
        this.width();
        this.height();
        this.top();
        this.left();
        this.fixed();
        this.close();
        this.Top = this.oFra.offsetTop;
        this.oFra.style.top = (this.Top - 40) + 'px';
        this.oFra.style.marginTop = 0;
        this.sMove(this.oFra, { top: this.Top, opacity: 100 });
        this.sMove(this.oBackg, { opacity: 50 });
    },
    oEve: function (onEnd) {
        this.onEnd = {};
        Object.extend(this.onEnd, onEnd || {});
    },
    content: function () {
        this.conent = $$$(this.tit, 'alert_con')[0];
        this.conent == undefined ? this.con.innerHTML = this.oContent : this.conent.innerHTML = this.oContent;
        this.oButton = $$(this.tit, 'button');
        var i = 0;
        var _this = this;
        for (i = 0; i < this.oButton.length; i++)
            if (i == 1) {
                this.oButton[i].onclick = function () { _this.em.onclick() };
            }
    },
    width: function () {
        this.oBackg = $$$(this.tit, 'alert_backg')[0];
        this.oFrame = $$$(this.tit, 'alert_frame')[0];
        this.oCon = $$$(this.oFrame, 'con')[0];
        this.oTop_c = $$$(this.oFrame, 'top_c')[0];
        this.oCon_c = $$$(this.oFrame, 'con_c')[0];
        this.oBot_c = $$$(this.oFrame, 'bot_c')[0];
        this.oAlert_tit = $$$(this.oFrame, 'alert_tit')[0];
        this.oAlert_con = $$$(this.oFrame, 'alert_con')[0];
        if (this.iWidth != "") {
            this.oFrame.style.width = parseInt(this.iWidth) + 'px';
            this.oFrame.style.marginLeft = -parseInt(this.iWidth) / 2 + 'px';
            this.oTop_c.style.width = parseInt(this.iWidth) - 10 + 'px';
            this.oCon_c.style.width = parseInt(this.iWidth) - 10 + 'px';
            this.oBot_c.style.width = parseInt(this.iWidth) - 10 + 'px';
            this.oAlert_tit.style.width = parseInt(this.iWidth) - 12 + 'px';
            this.oAlert_con.style.width = parseInt(this.iWidth) - 10 + 'px';
        }
    },
    height: function () {
        if (this.iHeight != "") {
            this.oFrame.style.height = parseInt(this.iHeight) + 'px';
            this.oFrame.style.marginTop = -parseInt(this.iHeight) / 2 + 'px';
            this.oCon.style.height = parseInt(this.iHeight) - 10 + 'px';
            this.oAlert_con.style.height = parseInt(this.iHeight) - 40 + 'px';
        }
    },
    top: function () {
        if (this.iTop != "") this.oFrame.style.top = parseInt(this.iTop) + 'px', this.oFrame.style.marginTop = 0;
    },
    left: function () {
        if (this.iLeft != "") this.oFrame.style.left = parseInt(this.iLeft) + 'px', this.oFrame.style.marginLeft = 0;
    },
    backg: function () {
        this.oScrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        this.oScrollWidth = document.documentElement.scrollWidth || document.body.scrollWidth;
        //this.oBackg.style.width = document.documentElement.clientWidth + (this.oScrollWidth - document.documentElement.clientWidth) + 'px'
        //this.oBackg.style.height = document.documentElement.clientHeight + (this.oScrollHeight - document.documentElement.clientHeight) + 'px'
    },
    fixed: function () {
        if (this.iFixed == "fixed") {
            var _this = this;
            this.oFrame.style.position = 'fixed';
            this.oAlert_tit.style.cursor = 'move';
            this.oAlert_tit.onmousedown = function (e) {
                var _thisE = this;
                this.oEvent = e || event;
                this.X = this.oEvent.clientX - _this.oFrame.offsetLeft;
                this.Y = this.oEvent.clientY - _this.oFrame.offsetTop;
                document.onmousemove = function (e) {
                    this.oEvent = e || event;
                    this.L = this.oEvent.clientX - _thisE.X;
                    this.T = this.oEvent.clientY - _thisE.Y;
                    if (this.L < 0) {
                        this.L = 0;
                    } else if (this.L > document.documentElement.clientWidth - _this.oFrame.offsetWidth) {
                        this.L = document.documentElement.clientWidth - _this.oFrame.offsetWidth
                    }
                    if (this.T < 0) {
                        this.T = 0;
                    } else if (this.T > document.documentElement.clientHeight - _this.oFrame.offsetHeight) {
                        this.T = document.documentElement.clientHeight - _this.oFrame.offsetHeight;
                    }
                    _this.oFrame.style.left = this.L + 'px';
                    _this.oFrame.style.top = this.T + 'px';
                    _this.oFrame.style.margin = 0;
                    return false;
                }
                document.onmouseup = function () {
                    document.onmouseup = null;
                    document.onmousemove = null;
                };
                return false;

            };
            if (this.oFrame) {
                if (! -[1, ] && !window.XMLHttpRequest) {
                    document.documentElement.style.textOverflow = "ellipsis";
                    this.oFrame.style.position = "absolute";
                    this.oFrame.style.setExpression("top", "eval(documentElement.scrollTop + " + this.oFrame.offsetTop + ') + "px"');
                }
            }
        }
    },
    close: function () {
        if (this.iClose == "close" && this.oTitle != "") {
            var _this = this;
            this.clos = $$$(this.tit, 'alert_tit')[0];
            var oEm = document.createElement('em');
            this.clos.appendChild(oEm);
            this.em = $$(this.tit, 'em')[0];
            _this.em.className = 'hove';
            this.em.onmouseover = function () { _this.em.className = 'hove'; };
            this.em.onmouseout = function () { _this.em.className = ''; };
            this.em.onclick = function () {
                _this.sMove(_this.oFra, { top: (_this.Top - 40), opacity: 0 }, function () {
                    document.body.removeChild(_this.em.parentNode.parentNode.parentNode.parentNode.parentNode);
                });
                _this.sMove(_this.oBackg, { opacity: 0 });
            }
        }
    },
    getStyle: function (obj, attr) {
        return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
    },
    sMove: function (obj, json, onEnd) {
        var _this = this;
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            _this.dMove(obj, json, onEnd);
        }, 30);
    },
    dMove: function (obj, json, onEnd) {
        this.attr = '';
        this.bStop = true;

        for (this.attr in json) {
            this.iCur = 0;
            this.attr == 'opacity' ? this.iCur = parseInt(parseFloat(this.getStyle(obj, this.attr)) * 100) : this.iCur = parseInt(this.getStyle(obj, this.attr));
            this.iSpeed = (json[this.attr] - this.iCur) / 7;
            this.iSpeed = this.iSpeed > 0 ? Math.ceil(this.iSpeed) : Math.floor(this.iSpeed);
            if (json[this.attr] != this.iCur) this.bStop = false;
            if (this.attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (this.iCur + this.iSpeed) + ')';
                obj.style.opacity = (this.iCur + this.iSpeed) / 100;
            } else {
                obj.style[this.attr] = this.iCur + this.iSpeed + 'px';
            }
        }
        if (this.bStop) {
            clearInterval(obj.timer);
            if (onEnd) onEnd();
        }
    }
};

window.onload = function () {
    new Alert('but', 'box', {
        title: '登录',
        content: '<div class="size" style="z-index:100;"><div id="msgdiv" style="height:25px; color:Red;"></div>账号&nbsp;:&nbsp;<input name="all" type="text" id="all" style="background-color: #FFFFFF;border: 1px solid #2A5DA9; height:22px; width:146;" tabindex="2" class="text" name="username" /></br>密码&nbsp;:&nbsp;<input name="password" type="password" style="background-color: #FFFFFF;border: 1px solid #2A5DA9; height:22px; width:146;" id="password" tabindex="2" class="text" /></div><div class="but"><button class="button" onclick="butOnclick()">登录</button><button class="button">关闭</button></div>',
        width: '',
        height: '',
        top: '',
        left: '',
        fixed: '',
        close: 'close'
    });

    new Alert('but2', 'box', {
        title: '登录',
        content: '<div class="size" style="z-index:100;"><div id="msgdiv" style="height:25px; color:Red;"></div>账号&nbsp;:&nbsp;<input name="all" type="text" id="all" tabindex="2" class="text" name="username" /></br>密码&nbsp;:&nbsp;<input name="password" type="password" id="password" tabindex="3" class="text"/></div><div class="but"><button class="button" onclick="butOnclick()">登录</button><button class="button">关闭</button></div>',
        width: '',
        height: '',
        top: '',
        left: '',
        fixed: '',
        close: 'close'
    });
};

function butOnclick() {
    var name = document.getElementById("all").value;
    var password = document.getElementById("password").value;
    if (name == "") {
        document.getElementById("msgdiv").innerHTML = "请输入账号!";
        return;
    }
    if (password == "") {
        document.getElementById("msgdiv").innerHTML = "请输入密码!";
        return;
    }

    ajaxCheck("temp.html?name=" + name + "&password=" + password + "", "", function (responsetext) {
        if (responsetext == "OK") {
            document.getElementById("msgdiv").innerHTML = "登录成功!";
            window.top.location.reload();
        }
        else {
            document.getElementById("msgdiv").innerHTML = responsetext;
        }
    })
}

function addfavorite() {
    var thisURL = document.URL;
    if (document.all) {
        window.external.addFavorite(thisURL, '王者游戏');
    }
    else if (window.sidebar) {
        window.sidebar.addPanel('王者游戏', thisURL, "");
    }
}



var ib = 1;
function reloadcode() {
    ib = ib + 1;
    document.getElementById('showimg_img').src = "images/auth_code.jpeg?xxx=" + ib + "";
}

function setCookie(name, value) {
    var argv = setCookie.arguments;
    var argc = setCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    if (expires != null) {
        var LargeExpDate = new Date();
        LargeExpDate.setTime(LargeExpDate.getTime() + (expires * 1000 * 3600 * 24 * 30));
    }
    document.cookie = name + "=" + escape(value) + ((expires == null) ? "" : ("; expires=" + LargeExpDate.toGMTString()));
}

function getCookie(Name) {
    var search = Name + "="
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search)
        if (offset != -1) {
            offset += search.length
            end = document.cookie.indexOf(";", offset)
            if (end == -1) end = document.cookie.length
            return unescape(document.cookie.substring(offset, end))
        }
        else return ""
    }
}

function deleteCookie(name) {
    var expdate = new Date();
    expdate.setTime(expdate.getTime() - (86400 * 1000 * 1));
    setCookie(name, "", expdate);
}

function ImgButtonOnclick11() {
    alert("请下载大厅注册");
}
function ImgButtonOnclick() {
    var name = document.getElementById("left_login_username").value;
    var password = document.getElementById("left_login_password").value;
    var yanzhen = document.getElementById("left_login_yz").value;
    var checkbox_true = document.getElementById("checkbox_true");

    if (name == "") {
        alert("请输入账号!");
        return;
    }
    if (password == "") {
        alert("请输入密码!");
        return;
    }
    if (yanzhen == "") {
        alert("请输入验证码!");
        return;
    }

    if (checkbox_true.checked == true) {
        setCookie("UserNameStr", name);
    }
    if (checkbox_true.checked == false) {
        deleteCookie("UserNameStr");
    }

    ajaxCheck("../temp.html?name=" + name + "&password=" + password + "&yz=" + yanzhen + "", "", function (responsetext) {
      //  alert(responsetext);
        if (responsetext == "OK") {
            window.top.location.reload();
        }
        else {
            alert(responsetext);
        }
    })
}
