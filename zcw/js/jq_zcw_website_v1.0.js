$(function($){
	/////////////////验证start//////////////////
	// $.fn.extend({
	// 	isEmpty:function(){

	// 	}
	// });

	$.fn.isEmpty=function(){
		var value=$(this).val();
		var vid=$(this).attr("id");
		var defaults={
			Vai:function(){
				return (/.+/i).test(value);
			},
			msg:'不能为空!',
			id:vid
		};
		return ReVerMsg(defaults);
	};

	$.fn.isNumber=function(){
		var value=$(this).val();
		var vid=$(this).attr("id");
		var defaults={
			Vai:function(){
				return (/^[+]?[1-9]+\d*$/i).test(value); 
			},
			msg:'请输入数字',
			id:vid
		};
		ReVerMsg(defaults);
	}

	$.fn.isidcard=function(){
		var value=$(this).val();
		var vid=$(this).attr("id");
		var defaults={
			Vai:function(){
				return (/^\d{15}(\d{2}[A-Za-z0-9])?$/i).test(value); 
			},
			msg:'身份证号码格式不正确',
			id:vid
		};
		ReVerMsg(defaults);
	}

	$.fn.isTel=function(){
		var value=$(this).val();
		var vid=$(this).attr("id");
		var defaults={
			Vai:function(){
				return (/^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i).test(value); 
			},
			msg:'格式不正确,请使用下面格式:020-88888888',
			id:vid
		};
		ReVerMsg(defaults);
	};

	$.fn.isMobile=function(){
		var value=$(this).val();
		var vid=$(this).attr("id");
		var defaults={
			Vai:function(){
				return (/^(13|15|18)\d{9}$/i).test(value); 
			},
			msg:'手机号码格式不正确',
			id:vid
		};
		ReVerMsg(defaults);
	};

	$.fn.isMinLength=function(min){
		var value=$(this).val();
		var vid=$(this).attr("id");
		var defaults={
			Vai:function(){
				return value.length>=n;
			},
			msg:'请输入至少'+n+'字符',
			id:vid
		};
		ReVerMsg(defaults);
	}

	$.fn.isLength=function(min,max){
		var value=$(this).val();
		var vid=$(this).attr("id");
		var defaults={
			Vai:function(){
				return value.length>=min&&value.length<=max;
			},
			msg:'输入内容长度必须介于'+min+'和'+max+'之间',
			id:vid
		};
		ReVerMsg(defaults);
	}

	$.fn.isChinese=function(){
		var value=$(this).val();
		var vid=$(this).attr("id");
		var defaults={
			Vai:function(){
				return (/^[\Α-\￥]+$/i).test(value); 
			},
			msg:'请输入中文',
			id:vid
		};
		ReVerMsg(defaults);
	}

	$.fn.isEnglish=function(){
		var value=$(this).val();
		var vid=$(this).attr("id");
		var defaults={
			Vai:function(){
				return (/^[A-Za-z]+$/i).test(value); 
			},
			msg:'请输入英文',
			id:vid
		};
		ReVerMsg(defaults);
	}

	$.fn.isEmail=function(){
		var value=$(this).val();
		var vid=$(this).attr("id");
		var defaults={
			Vai:function(){
				return  (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i).test(value);
			},
			msg:'请输入正确的邮箱地址',
			id:vid
		};
		ReVerMsg(defaults);
	}

	$.fn.isSame=function(oval){
		var value=$(this).val();
		var vid=$(this).attr("id");
		var defaults={
			Vai:function(){
				return value==$("#"+oval).val();
			},
			msg:'两次输入的内容不一致！',
			id:vid

		};
		ReVerMsg(defaults);
	}

	var ReVerMsg=function(options){
		if(!options.Vai()){
			$("#"+options.id).css('background','#bc6bf0');
			return false;
		}
		else{
			$("#"+options.id).css('background','#fff');
			return true;
		}
	}
	/////////////验证end//////////////


	///////////////////返回顶部start///////////////
  	GoToTop=function(options){
		var defaults={
			"id":"goTopBtn",
			"title":"返回顶部",
			"imgurl":0,
			"time":1000,
			"display": "none",
	    	"width": "18px",
	    	"padding": "5px 0",
	    	"background-color": "#999",
		    "color": "#fff",
		    "font-size": "12px",
		    "text-align": "center",
		    "position": "fixed",
		    "right": "10px",
		    "bottom": "50px",
		    "cursor": "pointer"
		};

		var init=function(nopt){
			nopt.imgurl==0?$("div").eq(0).append("<div id=\""+nopt.id+"\">"+nopt.title+"</div>"):$("div").eq(0).append("<div id=\""+nopt.id+"\"><img src=\""+nopt.imgurl+"\" /></div>");
			var ngtt=$("#"+nopt.id);
			$.each(nopt,function(a,b){ngtt.css(a,b);});
			$(window).scroll(function(){
				var sc=$(window).scrollTop();
				sc>100?ngtt.fadeIn("slow",function(){ngtt.css("display","block")}):ngtt.fadeOut("slow",function(){ngtt.css("display","none")})
		    })
			ngtt.click(function(){
				var sc=$(window).scrollTop();
				$('body,html').animate({scrollTop:0},nopt.time);
		    }) 
		}

		var opt=$.extend(defaults,options);
		init(opt);
	}
	///////////////////返回顶部end///////////////


	///////////////////滚动start///////////////
	$.fn.w_scoll_lr=function(options){       //有停留的左右滚动         
		var defaults={                        
			x:1,//横向数量
			y:4,//竖向数量
			direction:"top",
			autoTime:3000
		}                
		var options=$.extend(defaults,options);                
		var _this=$(this);

		var roll=function(){ 
		 	for(var i = 0 ; i < options.x ; i++){
		 		var mt=defaults.direction!="top"?mt=_this.find('li').eq(0).height():-(_this.find('li').eq(0).height());
		  		_this.find('li').eq(i).animate({marginTop:mt},500,function(){                
		  			$(this).css({marginTop:0});              
		  			_this.append($(this).clone());              
		  			$(this).remove();            
				});          
			}        
		 };  

		var set=setInterval(roll,options.autoTime);
    	_this.find('li').mouseover(function(){
    		clearInterval(set);
    	}).mouseout(function(){
    		set=setInterval(roll,options.autoTime);                
    	})       
	}        
	///////////////////滚动end////////////////

	///////////////////////选项卡 start/////////////////////////
	tabs_hover= function(tabTit,tabCon,on){
		$(tabCon).each(function(){
			$(this).children().eq(0).show();
		});

		$(tabTit).each(function(){
			$(this).children().eq(0).addClass(on);
		});

		$(tabTit).children().hover(function(){
			$(this).addClass(on).siblings().removeClass(on);
			$(tabCon).children().eq($(tabTit).children().index(this)).show().siblings().hide();
		});
	}

	tabs_click= function(tabTit,tabCon,on){
		$(tabCon).each(function(){
			$(this).children().eq(0).show();
		});

		$(tabTit).each(function(){
			$(this).children().eq(0).addClass(on);
		});

		$(tabTit).children().click(function(){
			$(this).addClass(on).siblings().removeClass(on);
			$(tabCon).children().eq($(tabTit).children().index(this)).show().siblings().hide();
		});
	}
	////////////////////////选项卡 end////////////////////////

	///////////////////////////滚动条 start///////////////////////////////
	$.fn.extend({//添加滚轮事件//by jun
		mousewheel:function(Func){
			return this.each(function(){
				var _self = this;
			    _self.D = 0;//滚动方向
				if($.browser.msie||$.browser.safari){
				   _self.onmousewheel=function(){_self.D = event.wheelDelta;event.returnValue = false;Func && Func.call(_self);};
				}else{
				   _self.addEventListener("DOMMouseScroll",function(e){
						_self.D = e.detail>0?-1:1;
						e.preventDefault();
						Func && Func.call(_self);
				   },false); 
				}
			});
		}
	});
	$.fn.extend({
		jscroll:function(j){
			return this.each(function(){
				j = j || {}
				j.Bar = j.Bar||{};//2级对象
				j.Btn = j.Btn||{};//2级对象
				j.Bar.Bg = j.Bar.Bg||{};//3级对象
				j.Bar.Bd = j.Bar.Bd||{};//3级对象
				j.Btn.uBg = j.Btn.uBg||{};//3级对象
				j.Btn.dBg = j.Btn.dBg||{};//3级对象
				var jun = { W:"15px"
							,BgUrl:""
							,Bg:"#efefef"
							,Bar:{  Pos:"up"
									,Bd:{Out:"#b5b5b5",Hover:"#ccc"}
									,Bg:{Out:"#fff",Hover:"#fff",Focus:"orange"}}
							,Btn:{  btn:true
									,uBg:{Out:"#ccc",Hover:"#fff",Focus:"orange"}
									,dBg:{Out:"#ccc",Hover:"#fff",Focus:"orange"}}
							,Fn:function(){}}
				j.W = j.W||jun.W;
				j.BgUrl = j.BgUrl||jun.BgUrl;
				j.Bg = j.Bg||jun.Bg;
					j.Bar.Pos = j.Bar.Pos||jun.Bar.Pos;
						j.Bar.Bd.Out = j.Bar.Bd.Out||jun.Bar.Bd.Out;
						j.Bar.Bd.Hover = j.Bar.Bd.Hover||jun.Bar.Bd.Hover;
						j.Bar.Bg.Out = j.Bar.Bg.Out||jun.Bar.Bg.Out;
						j.Bar.Bg.Hover = j.Bar.Bg.Hover||jun.Bar.Bg.Hover;
						j.Bar.Bg.Focus = j.Bar.Bg.Focus||jun.Bar.Bg.Focus;
					j.Btn.btn = j.Btn.btn!=undefined?j.Btn.btn:jun.Btn.btn;
						j.Btn.uBg.Out = j.Btn.uBg.Out||jun.Btn.uBg.Out;
						j.Btn.uBg.Hover = j.Btn.uBg.Hover||jun.Btn.uBg.Hover;
						j.Btn.uBg.Focus = j.Btn.uBg.Focus||jun.Btn.uBg.Focus;
						j.Btn.dBg.Out = j.Btn.dBg.Out||jun.Btn.dBg.Out;
						j.Btn.dBg.Hover = j.Btn.dBg.Hover||jun.Btn.dBg.Hover;
						j.Btn.dBg.Focus = j.Btn.dBg.Focus||jun.Btn.dBg.Focus;
				j.Fn = j.Fn||jun.Fn;
				var _self = this;
				var Stime,Sp=0,Isup=0;
				$(_self).css({overflow:"hidden",position:"relative",padding:"0px"});
				var dw = $(_self).width(), dh = $(_self).height()-1;
				var sw = j.W ? parseInt(j.W) : 21;
				var sl = dw - sw
				var bw = j.Btn.btn==true ? sw : 0;
				if($(_self).children(".jscroll-c").height()==null){//存在性检测
			$(_self).wrapInner("<div class='jscroll-c' style='top:0px;z-index:1111;zoom:1;position:relative'></div>");
				$(_self).children(".jscroll-c").prepend("<div style='height:0px;overflow:hidden'></div>");
				$(_self).append("<div class='jscroll-e' unselectable='on' style=' height:100%;top:0px;right:0;-moz-user-select:none;position:absolute;overflow:hidden;z-index:10000;'><div class='jscroll-u' style='position:absolute;top:0px;width:100%;left:0;background:blue;overflow:hidden'></div><div class='jscroll-h'  unselectable='on' style='background:green;position:absolute;left:0;-moz-user-select:none;border:1px solid'></div><div class='jscroll-d' style='position:absolute;bottom:0px;width:100%;left:0;background:blue;overflow:hidden'></div></div>");
				}
				var jscrollc = $(_self).children(".jscroll-c");
				var jscrolle = $(_self).children(".jscroll-e");
				var jscrollh = jscrolle.children(".jscroll-h");
				var jscrollu = jscrolle.children(".jscroll-u");
				var jscrolld = jscrolle.children(".jscroll-d");
				if($.browser.msie){document.execCommand("BackgroundImageCache", false, true);}
				jscrollc.css({"padding-right":sw});
				jscrolle.css({width:sw,background:j.Bg,"background-image":j.BgUrl});
				jscrollh.css({top:bw,background:j.Bar.Bg.Out,"background-image":j.BgUrl,"border-color":j.Bar.Bd.Out,width:sw-2});
				jscrollu.css({height:bw,background:j.Btn.uBg.Out,"background-image":j.BgUrl});
				jscrolld.css({height:bw,background:j.Btn.dBg.Out,"background-image":j.BgUrl});
				jscrollh.hover(function(){if(Isup==0)$(this).css({background:j.Bar.Bg.Hover,"background-image":j.BgUrl,"border-color":j.Bar.Bd.Hover})},function(){if(Isup==0)$(this).css({background:j.Bar.Bg.Out,"background-image":j.BgUrl,"border-color":j.Bar.Bd.Out})})
				jscrollu.hover(function(){if(Isup==0)$(this).css({background:j.Btn.uBg.Hover,"background-image":j.BgUrl})},function(){if(Isup==0)$(this).css({background:j.Btn.uBg.Out,"background-image":j.BgUrl})})
				jscrolld.hover(function(){if(Isup==0)$(this).css({background:j.Btn.dBg.Hover,"background-image":j.BgUrl})},function(){if(Isup==0)$(this).css({background:j.Btn.dBg.Out,"background-image":j.BgUrl})})
				var sch = jscrollc.height();
				//var sh = Math.pow(dh,2) / sch ;//Math.pow(x,y)x的y次方
				var sh = (dh-2*bw)*dh / sch
				if(sh<10){sh=10}
				var wh = sh/6//滚动时候跳动幅度
			//	sh = parseInt(sh);
				var curT = 0,allowS=false;
				jscrollh.height(sh);
				if(sch<=dh){jscrollc.css({padding:0});jscrolle.css({display:"none"})}else{allowS=true;}
				if(j.Bar.Pos!="up"){
				curT=dh-sh-bw;
				setT();
				}
				jscrollh.bind("mousedown",function(e){
					j['Fn'] && j['Fn'].call(_self);
					Isup=1;
					jscrollh.css({background:j.Bar.Bg.Focus,"background-image":j.BgUrl})
					var pageY = e.pageY ,t = parseInt($(this).css("top"));
					$(document).mousemove(function(e2){
						 curT =t+ e2.pageY - pageY;//pageY浏览器可视区域鼠标位置，screenY屏幕可视区域鼠标位置
							setT();
					});
					$(document).mouseup(function(){
						Isup=0;
						jscrollh.css({background:j.Bar.Bg.Out,"background-image":j.BgUrl,"border-color":j.Bar.Bd.Out})
						$(document).unbind();
					});
					return false;
				});
				jscrollu.bind("mousedown",function(e){
				j['Fn'] && j['Fn'].call(_self);
					Isup=1;
					jscrollu.css({background:j.Btn.uBg.Focus,"background-image":j.BgUrl})
					_self.timeSetT("u");
					$(document).mouseup(function(){
						Isup=0;
						jscrollu.css({background:j.Btn.uBg.Out,"background-image":j.BgUrl})
						$(document).unbind();
						clearTimeout(Stime);
						Sp=0;
					});
					return false;
				});
				jscrolld.bind("mousedown",function(e){
				j['Fn'] && j['Fn'].call(_self);
					Isup=1;
					jscrolld.css({background:j.Btn.dBg.Focus,"background-image":j.BgUrl})
					_self.timeSetT("d");
					$(document).mouseup(function(){
						Isup=0;
						jscrolld.css({background:j.Btn.dBg.Out,"background-image":j.BgUrl})
						$(document).unbind();
						clearTimeout(Stime);
						Sp=0;
					});
					return false;
				});
				_self.timeSetT = function(d){
					var self=this;
					if(d=="u"){curT-=wh;}else{curT+=wh;}
					setT();
					Sp+=2;
					var t =500 - Sp*50;
					if(t<=0){t=0};
					Stime = setTimeout(function(){self.timeSetT(d);},t);
				}
				jscrolle.bind("mousedown",function(e){
						j['Fn'] && j['Fn'].call(_self);
								curT = curT + e.pageY - jscrollh.offset().top - sh/2;
								asetT();
								return false;
				});
				function asetT(){				
							if(curT<bw){curT=bw;}
							if(curT>dh-sh-bw){curT=dh-sh-bw;}
							jscrollh.stop().animate({top:curT},100);
							var scT = -((curT-bw)*sch/(dh-2*bw));
							jscrollc.stop().animate({top:scT},1000);
				};
				function setT(){				
							if(curT<bw){curT=bw;}
							if(curT>dh-sh-bw){curT=dh-sh-bw;}
							jscrollh.css({top:curT});
							var scT = -((curT-bw)*sch/(dh-2*bw));
							jscrollc.css({top:scT});
				};
				$(_self).mousewheel(function(){
						if(allowS!=true) return;
						j['Fn'] && j['Fn'].call(_self);
							if(this.D>0){curT-=wh;}else{curT+=wh;};
							setT();
				})
			});
		}
	});
	/////////////////////////////滚动条 end////////////////////////////

	///////////////////弹窗层start///////////////
   

	///////////////////弹窗层end////////////////

	///////////////////tip start///////////////
 	var tips = [],
		reBgImage = /^url\(["']?([^"'\)]*)["']?\);?$/i,
		rePNG = /\.png$/i,
		ie6 = !!window.createPopup && document.documentElement.currentStyle.minWidth == 'undefined';

	// make sure the tips' position is updated on resize
	function handleWindowResize() {
		$.each(tips, function() {
			this.refresh(true);
		});
	}
	$(window).resize(handleWindowResize);

	$.Poshytip = function(elm, options) {
		this.$elm = $(elm);
		this.opts = $.extend({}, $.fn.poshytip.defaults, options);
		this.$tip = $(['<div class="',this.opts.className,'">',
				'<div class="tip-inner tip-bg-image"></div>',
				'<div class="tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left"></div>',
			'</div>'].join('')).appendTo(document.body);
		this.$arrow = this.$tip.find('div.tip-arrow');
		this.$inner = this.$tip.find('div.tip-inner');
		this.disabled = false;
		this.content = null;
		this.init();
	};

	$.Poshytip.prototype = {
		init: function() {
			tips.push(this);

			// save the original title and a reference to the Poshytip object
			var title = this.$elm.attr('title');
			this.$elm.data('title.poshytip', title !== undefined ? title : null)
				.data('poshytip', this);

			// hook element events
			if (this.opts.showOn != 'none') {
				this.$elm.bind({
					'mouseenter.poshytip': $.proxy(this.mouseenter, this),
					'mouseleave.poshytip': $.proxy(this.mouseleave, this)
				});
				switch (this.opts.showOn) {
					case 'hover':
						if (this.opts.alignTo == 'cursor')
							this.$elm.bind('mousemove.poshytip', $.proxy(this.mousemove, this));
						if (this.opts.allowTipHover)
							this.$tip.hover($.proxy(this.clearTimeouts, this), $.proxy(this.mouseleave, this));
						break;
					case 'focus':
						this.$elm.bind({
							'focus.poshytip': $.proxy(this.showDelayed, this),
							'blur.poshytip': $.proxy(this.hideDelayed, this)
						});
						break;
				}
			}
		},
		mouseenter: function(e) {
			if (this.disabled)
				return true;

			this.$elm.attr('title', '');
			if (this.opts.showOn == 'focus')
				return true;

			this.showDelayed();
		},
		mouseleave: function(e) {
			if (this.disabled || this.asyncAnimating && (this.$tip[0] === e.relatedTarget || jQuery.contains(this.$tip[0], e.relatedTarget)))
				return true;

			if (!this.$tip.data('active')) {
				var title = this.$elm.data('title.poshytip');
				if (title !== null)
					this.$elm.attr('title', title);
			}
			if (this.opts.showOn == 'focus')
				return true;

			this.hideDelayed();
		},
		mousemove: function(e) {
			if (this.disabled)
				return true;

			this.eventX = e.pageX;
			this.eventY = e.pageY;
			if (this.opts.followCursor && this.$tip.data('active')) {
				this.calcPos();
				this.$tip.css({left: this.pos.l, top: this.pos.t});
				if (this.pos.arrow)
					this.$arrow[0].className = 'tip-arrow tip-arrow-' + this.pos.arrow;
			}
		},
		show: function() {
			if (this.disabled || this.$tip.data('active'))
				return;

			this.reset();
			this.update();

			// don't proceed if we didn't get any content in update() (e.g. the element has an empty title attribute)
			if (!this.content)
				return;

			this.display();
			if (this.opts.timeOnScreen)
				this.hideDelayed(this.opts.timeOnScreen);
		},
		showDelayed: function(timeout) {
			this.clearTimeouts();
			this.showTimeout = setTimeout($.proxy(this.show, this), typeof timeout == 'number' ? timeout : this.opts.showTimeout);
		},
		hide: function() {
			if (this.disabled || !this.$tip.data('active'))
				return;

			this.display(true);
		},
		hideDelayed: function(timeout) {
			this.clearTimeouts();
			this.hideTimeout = setTimeout($.proxy(this.hide, this), typeof timeout == 'number' ? timeout : this.opts.hideTimeout);
		},
		reset: function() {
			this.$tip.queue([]).detach().css('visibility', 'hidden').data('active', false);
			this.$inner.find('*').poshytip('hide');
			if (this.opts.fade)
				this.$tip.css('opacity', this.opacity);
			this.$arrow[0].className = 'tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left';
			this.asyncAnimating = false;
		},
		update: function(content, dontOverwriteOption) {
			if (this.disabled)
				return;

			var async = content !== undefined;
			if (async) {
				if (!dontOverwriteOption)
					this.opts.content = content;
				if (!this.$tip.data('active'))
					return;
			} else {
				content = this.opts.content;
			}

			// update content only if it has been changed since last time
			var self = this,
				newContent = typeof content == 'function' ?
					content.call(this.$elm[0], function(newContent) {
						self.update(newContent);
					}) :
					content == '[title]' ? this.$elm.data('title.poshytip') : content;
			if (this.content !== newContent) {
				this.$inner.empty().append(newContent);
				this.content = newContent;
			}

			this.refresh(async);
		},
		refresh: function(async) {
			if (this.disabled)
				return;

			if (async) {
				if (!this.$tip.data('active'))
					return;
				// save current position as we will need to animate
				var currPos = {left: this.$tip.css('left'), top: this.$tip.css('top')};
			}

			// reset position to avoid text wrapping, etc.
			this.$tip.css({left: 0, top: 0}).appendTo(document.body);

			// save default opacity
			if (this.opacity === undefined)
				this.opacity = this.$tip.css('opacity');

			// check for images - this code is here (i.e. executed each time we show the tip and not on init) due to some browser inconsistencies
			var bgImage = this.$tip.css('background-image').match(reBgImage),
				arrow = this.$arrow.css('background-image').match(reBgImage);

			if (bgImage) {
				var bgImagePNG = rePNG.test(bgImage[1]);
				// fallback to background-color/padding/border in IE6 if a PNG is used
				if (ie6 && bgImagePNG) {
					this.$tip.css('background-image', 'none');
					this.$inner.css({margin: 0, border: 0, padding: 0});
					bgImage = bgImagePNG = false;
				} else {
					this.$tip.prepend('<table class="tip-table" border="0" cellpadding="0" cellspacing="0"><tr><td class="tip-top tip-bg-image" colspan="2"><span></span></td><td class="tip-right tip-bg-image" rowspan="2"><span></span></td></tr><tr><td class="tip-left tip-bg-image" rowspan="2"><span></span></td><td></td></tr><tr><td class="tip-bottom tip-bg-image" colspan="2"><span></span></td></tr></table>')
						.css({border: 0, padding: 0, 'background-image': 'none', 'background-color': 'transparent'})
						.find('.tip-bg-image').css('background-image', 'url("' + bgImage[1] +'")').end()
						.find('td').eq(3).append(this.$inner);
				}
				// disable fade effect in IE due to Alpha filter + translucent PNG issue
				if (bgImagePNG && !$.support.opacity)
					this.opts.fade = false;
			}
			// IE arrow fixes
			if (arrow && !$.support.opacity) {
				// disable arrow in IE6 if using a PNG
				if (ie6 && rePNG.test(arrow[1])) {
					arrow = false;
					this.$arrow.css('background-image', 'none');
				}
				// disable fade effect in IE due to Alpha filter + translucent PNG issue
				this.opts.fade = false;
			}

			var $table = this.$tip.find('> table.tip-table');
			if (ie6) {
				// fix min/max-width in IE6
				this.$tip[0].style.width = '';
				$table.width('auto').find('td').eq(3).width('auto');
				var tipW = this.$tip.width(),
					minW = parseInt(this.$tip.css('min-width')),
					maxW = parseInt(this.$tip.css('max-width'));
				if (!isNaN(minW) && tipW < minW)
					tipW = minW;
				else if (!isNaN(maxW) && tipW > maxW)
					tipW = maxW;
				this.$tip.add($table).width(tipW).eq(0).find('td').eq(3).width('100%');
			} else if ($table[0]) {
				// fix the table width if we are using a background image
				// IE9, FF4 use float numbers for width/height so use getComputedStyle for them to avoid text wrapping
				// for details look at: http://vadikom.com/dailies/offsetwidth-offsetheight-useless-in-ie9-firefox4/
				$table.width('auto').find('td').eq(3).width('auto').end().end().width(document.defaultView && document.defaultView.getComputedStyle && parseFloat(document.defaultView.getComputedStyle(this.$tip[0], null).width) || this.$tip.width()).find('td').eq(3).width('100%');
			}
			this.tipOuterW = this.$tip.outerWidth();
			this.tipOuterH = this.$tip.outerHeight();

			this.calcPos();

			// position and show the arrow image
			if (arrow && this.pos.arrow) {
				this.$arrow[0].className = 'tip-arrow tip-arrow-' + this.pos.arrow;
				this.$arrow.css('visibility', 'inherit');
			}

			if (async && this.opts.refreshAniDuration) {
				this.asyncAnimating = true;
				var self = this;
				this.$tip.css(currPos).animate({left: this.pos.l, top: this.pos.t}, this.opts.refreshAniDuration, function() { self.asyncAnimating = false; });
			} else {
				this.$tip.css({left: this.pos.l, top: this.pos.t});
			}
		},
		display: function(hide) {
			var active = this.$tip.data('active');
			if (active && !hide || !active && hide)
				return;

			this.$tip.stop();
			if ((this.opts.slide && this.pos.arrow || this.opts.fade) && (hide && this.opts.hideAniDuration || !hide && this.opts.showAniDuration)) {
				var from = {}, to = {};
				// this.pos.arrow is only undefined when alignX == alignY == 'center' and we don't need to slide in that rare case
				if (this.opts.slide && this.pos.arrow) {
					var prop, arr;
					if (this.pos.arrow == 'bottom' || this.pos.arrow == 'top') {
						prop = 'top';
						arr = 'bottom';
					} else {
						prop = 'left';
						arr = 'right';
					}
					var val = parseInt(this.$tip.css(prop));
					from[prop] = val + (hide ? 0 : (this.pos.arrow == arr ? -this.opts.slideOffset : this.opts.slideOffset));
					to[prop] = val + (hide ? (this.pos.arrow == arr ? this.opts.slideOffset : -this.opts.slideOffset) : 0) + 'px';
				}
				if (this.opts.fade) {
					from.opacity = hide ? this.$tip.css('opacity') : 0;
					to.opacity = hide ? 0 : this.opacity;
				}
				this.$tip.css(from).animate(to, this.opts[hide ? 'hideAniDuration' : 'showAniDuration']);
			}
			hide ? this.$tip.queue($.proxy(this.reset, this)) : this.$tip.css('visibility', 'inherit');
			if (active) {
				var title = this.$elm.data('title.poshytip');
				if (title !== null)
					this.$elm.attr('title', title);
			}
			this.$tip.data('active', !active);
		},
		disable: function() {
			this.reset();
			this.disabled = true;
		},
		enable: function() {
			this.disabled = false;
		},
		destroy: function() {
			this.reset();
			this.$tip.remove();
			delete this.$tip;
			this.content = null;
			this.$elm.unbind('.poshytip').removeData('title.poshytip').removeData('poshytip');
			tips.splice($.inArray(this, tips), 1);
		},
		clearTimeouts: function() {
			if (this.showTimeout) {
				clearTimeout(this.showTimeout);
				this.showTimeout = 0;
			}
			if (this.hideTimeout) {
				clearTimeout(this.hideTimeout);
				this.hideTimeout = 0;
			}
		},
		calcPos: function() {
			var pos = {l: 0, t: 0, arrow: ''},
				$win = $(window),
				win = {
					l: $win.scrollLeft(),
					t: $win.scrollTop(),
					w: $win.width(),
					h: $win.height()
				}, xL, xC, xR, yT, yC, yB;
			if (this.opts.alignTo == 'cursor') {
				xL = xC = xR = this.eventX;
				yT = yC = yB = this.eventY;
			} else { // this.opts.alignTo == 'target'
				var elmOffset = this.$elm.offset(),
					elm = {
						l: elmOffset.left,
						t: elmOffset.top,
						w: this.$elm.outerWidth(),
						h: this.$elm.outerHeight()
					};
				xL = elm.l + (this.opts.alignX != 'inner-right' ? 0 : elm.w);	// left edge
				xC = xL + Math.floor(elm.w / 2);				// h center
				xR = xL + (this.opts.alignX != 'inner-left' ? elm.w : 0);	// right edge
				yT = elm.t + (this.opts.alignY != 'inner-bottom' ? 0 : elm.h);	// top edge
				yC = yT + Math.floor(elm.h / 2);				// v center
				yB = yT + (this.opts.alignY != 'inner-top' ? elm.h : 0);	// bottom edge
			}

			// keep in viewport and calc arrow position
			switch (this.opts.alignX) {
				case 'right':
				case 'inner-left':
					pos.l = xR + this.opts.offsetX;
					if (this.opts.keepInViewport && pos.l + this.tipOuterW > win.l + win.w)
						pos.l = win.l + win.w - this.tipOuterW;
					if (this.opts.alignX == 'right' || this.opts.alignY == 'center')
						pos.arrow = 'left';
					break;
				case 'center':
					pos.l = xC - Math.floor(this.tipOuterW / 2);
					if (this.opts.keepInViewport) {
						if (pos.l + this.tipOuterW > win.l + win.w)
							pos.l = win.l + win.w - this.tipOuterW;
						else if (pos.l < win.l)
							pos.l = win.l;
					}
					break;
				default: // 'left' || 'inner-right'
					pos.l = xL - this.tipOuterW - this.opts.offsetX;
					if (this.opts.keepInViewport && pos.l < win.l)
						pos.l = win.l;
					if (this.opts.alignX == 'left' || this.opts.alignY == 'center')
						pos.arrow = 'right';
			}
			switch (this.opts.alignY) {
				case 'bottom':
				case 'inner-top':
					pos.t = yB + this.opts.offsetY;
					// 'left' and 'right' need priority for 'target'
					if (!pos.arrow || this.opts.alignTo == 'cursor')
						pos.arrow = 'top';
					if (this.opts.keepInViewport && pos.t + this.tipOuterH > win.t + win.h) {
						pos.t = yT - this.tipOuterH - this.opts.offsetY;
						if (pos.arrow == 'top')
							pos.arrow = 'bottom';
					}
					break;
				case 'center':
					pos.t = yC - Math.floor(this.tipOuterH / 2);
					if (this.opts.keepInViewport) {
						if (pos.t + this.tipOuterH > win.t + win.h)
							pos.t = win.t + win.h - this.tipOuterH;
						else if (pos.t < win.t)
							pos.t = win.t;
					}
					break;
				default: // 'top' || 'inner-bottom'
					pos.t = yT - this.tipOuterH - this.opts.offsetY;
					// 'left' and 'right' need priority for 'target'
					if (!pos.arrow || this.opts.alignTo == 'cursor')
						pos.arrow = 'bottom';
					if (this.opts.keepInViewport && pos.t < win.t) {
						pos.t = yB + this.opts.offsetY;
						if (pos.arrow == 'bottom')
							pos.arrow = 'top';
					}
			}
			this.pos = pos;
		}
	};

	$.fn.poshytip = function(options) {
		if (typeof options == 'string') {
			var args = arguments,
				method = options;
			Array.prototype.shift.call(args);
			// unhook live events if 'destroy' is called
			if (method == 'destroy') {
				this.die ?
					this.die('mouseenter.poshytip').die('focus.poshytip') :
					$(document).undelegate(this.selector, 'mouseenter.poshytip').undelegate(this.selector, 'focus.poshytip');
			}
			return this.each(function() {
				var poshytip = $(this).data('poshytip');
				if (poshytip && poshytip[method])
					poshytip[method].apply(poshytip, args);
			});
		}

		var opts = $.extend({}, $.fn.poshytip.defaults, options);

		// generate CSS for this tip class if not already generated
		if (!$('#poshytip-css-' + opts.className)[0])
			$(['<style id="poshytip-css-',opts.className,'" type="text/css">',
				'div.',opts.className,'{visibility:hidden;position:absolute;top:0;left:0;}',
				'div.',opts.className,' table.tip-table, div.',opts.className,' table.tip-table td{margin:0;font-family:inherit;font-size:inherit;font-weight:inherit;font-style:inherit;font-variant:inherit;vertical-align:middle;}',
				'div.',opts.className,' td.tip-bg-image span{display:block;font:1px/1px sans-serif;height:',opts.bgImageFrameSize,'px;width:',opts.bgImageFrameSize,'px;overflow:hidden;}',
				'div.',opts.className,' td.tip-right{background-position:100% 0;}',
				'div.',opts.className,' td.tip-bottom{background-position:100% 100%;}',
				'div.',opts.className,' td.tip-left{background-position:0 100%;}',
				'div.',opts.className,' div.tip-inner{background-position:-',opts.bgImageFrameSize,'px -',opts.bgImageFrameSize,'px;}',
				'div.',opts.className,' div.tip-arrow{visibility:hidden;position:absolute;overflow:hidden;font:1px/1px sans-serif;}',
			'</style>'].join('')).appendTo('head');

		// check if we need to hook live events
		if (opts.liveEvents && opts.showOn != 'none') {
			var handler,
				deadOpts = $.extend({}, opts, { liveEvents: false });
			switch (opts.showOn) {
				case 'hover':
					handler = function() {
						var $this = $(this);
						if (!$this.data('poshytip'))
							$this.poshytip(deadOpts).poshytip('mouseenter');
					};
					// support 1.4.2+ & 1.9+
					this.live ?
						this.live('mouseenter.poshytip', handler) :
						$(document).delegate(this.selector, 'mouseenter.poshytip', handler);
					break;
				case 'focus':
					handler = function() {
						var $this = $(this);
						if (!$this.data('poshytip'))
							$this.poshytip(deadOpts).poshytip('showDelayed');
					};
					this.live ?
						this.live('focus.poshytip', handler) :
						$(document).delegate(this.selector, 'focus.poshytip', handler);
					break;
			}
			return this;
		}

		return this.each(function() {
			new $.Poshytip(this, opts);
		});
	}

	// default settings
	$.fn.poshytip.defaults = {
		content: 		'[title]',	// content to display ('[title]', 'string', element, function(updateCallback){...}, jQuery)
		className:		'tip-yellow',	// class for the tips
		bgImageFrameSize:	10,		// size in pixels for the background-image (if set in CSS) frame around the inner content of the tip
		showTimeout:		500,		// timeout before showing the tip (in milliseconds 1000 == 1 second)
		hideTimeout:		100,		// timeout before hiding the tip
		timeOnScreen:		0,		// timeout before automatically hiding the tip after showing it (set to > 0 in order to activate)
		showOn:			'hover',	// handler for showing the tip ('hover', 'focus', 'none') - use 'none' to trigger it manually
		liveEvents:		false,		// use live events
		alignTo:		'cursor',	// align/position the tip relative to ('cursor', 'target')
		alignX:			'right',	// horizontal alignment for the tip relative to the mouse cursor or the target element
							// ('right', 'center', 'left', 'inner-left', 'inner-right') - 'inner-*' matter if alignTo:'target'
		alignY:			'top',		// vertical alignment for the tip relative to the mouse cursor or the target element
							// ('bottom', 'center', 'top', 'inner-bottom', 'inner-top') - 'inner-*' matter if alignTo:'target'
		offsetX:		-22,		// offset X pixels from the default position - doesn't matter if alignX:'center'
		offsetY:		18,		// offset Y pixels from the default position - doesn't matter if alignY:'center'
		keepInViewport:		true,		// reposition the tooltip if needed to make sure it always appears inside the viewport
		allowTipHover:		true,		// allow hovering the tip without hiding it onmouseout of the target - matters only if showOn:'hover'
		followCursor:		false,		// if the tip should follow the cursor - matters only if showOn:'hover' and alignTo:'cursor'
		fade: 			true,		// use fade animation
		slide: 			true,		// use slide animation
		slideOffset: 		8,		// slide animation offset
		showAniDuration: 	300,		// show animation duration - set to 0 if you don't want show animation
		hideAniDuration: 	300,		// hide animation duration - set to 0 if you don't want hide animation
		refreshAniDuration:	200		// refresh animation duration - set to 0 if you don't want animation when updating the tooltip asynchronously
	};
	//////////////////tip end////////////////

	///////////////////预加载start///////////////////////
	// loadimg=function() {
	// 	var li = $("*").find("body").first();
	// 	var win = $(window);
	// 	var wh = win.height();
	// 	var n = 0;
	// 	var loadimg = function() {
	// 		//alert("ok");
	// 		var st = win.scrollTop() + wh;
	// 		li.each(function() {
	// 			var t = $(this);
	// 			var ot = t.offset().top;
	// 			if (st >= ot && !t.attr("loaded")) {
	// 				n++;
	// 				t.attr("loaded", true);z
	// 				t.find("img").each(function() {
	// 					var img = $(this);
	// 					var ori = img.attr("original");
	// 					img.hide().attr("src", ori).fadeIn();
	// 				});
	// 			}
	// 		});
	// 		if (n == li.length) {
	// 			win.unbind("scroll", loadimg);
	// 		}
	// 	};
	// 	//win.bind("scroll", loadimg);
	// 	$(window).scroll(function(){
	// 		loadimg();
	// 	});
	// 	loadimg();
	// }
	///////////////////预加载end/////////////////////






































});

