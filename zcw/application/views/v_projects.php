<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
<style type="text/css"> 

ul,li{ list-style:none;}
/*---------------------------------------demo css--------------------------------------------*/
#container{ text-align:center;width:780px;;}
#container .cell{ padding:10px 10px 10px 10px; border:1px solid #E3E3E3; background:#F5F5F5; margin-top:10px}
#container p{ line-height:20px; margin-top:5px;text-align: left}
#container img{width:228px;border:0 none;}
/*-----------------------------------------------------------------------------------*/
</style> 
<script type="text/javascript" src="<?php echo base_url()?>js/jquery-1.8.0.min.js"></script>

<script>
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
		$("#"+nopt.id).remove();
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

	GoToTop({});
///////////////////返回顶部end///////////////
</script>

<!----------------------------------------------------demo js---------------------------------------------------->
<script type="text/javascript">
(function($){
   var 
   //参数
   setting={
      column_width:250,//列宽
	  column_className:'waterfall_column',//列的类名
	  column_space:10,//列间距
	  cell_selector:'.cell',//要排列的砖块的选择器，context为整个外部容器
	  img_selector:'img',//要加载的图片的选择器
	  auto_imgHeight:true,//是否需要自动计算图片的高度
	  fadein:true,//是否渐显载入
	  fadein_speed:600,//渐显速率，单位毫秒
	  insert_type:1, //单元格插入方式，1为插入最短那列，2为按序轮流插入
	  getResource:function(index){ }  //获取动态资源函数,必须返回一个砖块元素集合,传入参数为加载的次数
   },
   //
   waterfall=$.waterfall={},//对外信息对象
   $container=null;//容器
   waterfall.load_index=0, //加载次数
   $.fn.extend({
       waterfall:function(opt){
		  opt=opt||{};  
	      setting=$.extend(setting,opt);
		  $container=waterfall.$container=$(this);
		  waterfall.$columns=creatColumn();
		  render($(this).find(setting.cell_selector).detach(),false); //重排已存在元素时强制不渐显
		  waterfall._scrollTimer2=null;
		  $(window).bind('scroll',function(){
		     clearTimeout(waterfall._scrollTimer2);
			 waterfall._scrollTimer2=setTimeout(onScroll,300);
		  });
		  waterfall._scrollTimer3=null;
		  $(window).bind('resize',function(){
		     clearTimeout(waterfall._scrollTimer3);
			 waterfall._scrollTimer3=setTimeout(onResize,300);
		  });
	   }
   });
   function creatColumn(){//创建列
      waterfall.column_num=calculateColumns();//列数
	  //循环创建列
	  var html='';
	  for(var i=0;i<waterfall.column_num;i++){
	     html+='<div class="'+setting.column_className+'" style="width:'+setting.column_width+'px; display:inline-block; *display:inline;zoom:1; margin-left:'+setting.column_space/2+'px;margin-right:'+setting.column_space/2+'px; vertical-align:top; overflow:hidden"></div>';
	  }
	  $container.prepend(html);//插入列
	  return $('.'+setting.column_className,$container);//列集合
   }
   function calculateColumns(){//计算需要的列数
      var num=Math.floor(($container.innerWidth())/(setting.column_width+setting.column_space));
	  if(num<1){ num=1; } //保证至少有一列
	  return num;
   }
   function render(elements,fadein){//渲染元素
      if(!$(elements).length) return;//没有元素
      var $columns = waterfall.$columns;
      $(elements).each(function(i){										
		  if(!setting.auto_imgHeight||setting.insert_type==2){//如果给出了图片高度，或者是按顺序插入，则不必等图片加载完就能计算列的高度了
		     if(setting.insert_type==1){ 
			    insert($(elements).eq(i),setting.fadein&&fadein);//插入元素
			 }else if(setting.insert_type==2){
			    insert2($(elements).eq(i),i,setting.fadein&&fadein);//插入元素	 
		     }
			 return true;//continue
		  }						
		  if($(this)[0].nodeName.toLowerCase()=='img'||$(this).find(setting.img_selector).length>0){//本身是图片或含有图片
		      var image=new Image;
			  var src=$(this)[0].nodeName.toLowerCase()=='img'?$(this).attr('src'):$(this).find(setting.img_selector).attr('src');
			  image.onload=function(){//图片加载后才能自动计算出尺寸
			      image.onreadystatechange=null;
				  if(setting.insert_type==1){ 
				     insert($(elements).eq(i),setting.fadein&&fadein);//插入元素
				  }else if(setting.insert_type==2){
					 insert2($(elements).eq(i),i,setting.fadein&&fadein);//插入元素	 
				  }
				  image=null;
			  }
			  image.onreadystatechange=function(){//处理IE等浏览器的缓存问题：图片缓存后不会再触发onload事件
			      if(image.readyState == "complete"){
					 image.onload=null;
					 if(setting.insert_type==1){ 
					    insert($(elements).eq(i),setting.fadein&&fadein);//插入元素
					 }else if(setting.insert_type==2){
					    insert2($(elements).eq(i),i,setting.fadein&&fadein);//插入元素	 
					 }
					 image=null;
				  }
			  }
			  image.src=src;
		  }else{//不用考虑图片加载
		      if(setting.insert_type==1){ 
				 insert($(elements).eq(i),setting.fadein&&fadein);//插入元素
			  }else if(setting.insert_type==2){
				 insert2($(elements).eq(i),i,setting.fadein&&fadein);//插入元素	 
			  }
		  }						
	  });
   }
   function public_render(elems){//ajax得到元素的渲染接口
   	  render(elems,true);	
   }
   function insert($element,fadein){//把元素插入最短列
      if(fadein){//渐显
	     $element.css('opacity',0).appendTo(waterfall.$columns.eq(calculateLowest())).fadeTo(setting.fadein_speed,1);
	  }else{//不渐显
         $element.appendTo(waterfall.$columns.eq(calculateLowest()));
	  }
   }
   function insert2($element,i,fadein){//按序轮流插入元素
      if(fadein){//渐显
	     $element.css('opacity',0).appendTo(waterfall.$columns.eq(i%waterfall.column_num)).fadeTo(setting.fadein_speed,1);
	  }else{//不渐显
         $element.appendTo(waterfall.$columns.eq(i%waterfall.column_num));
	  }
   }
   function calculateLowest(){//计算最短的那列的索引
      var min=waterfall.$columns.eq(0).outerHeight(),min_key=0;
	  waterfall.$columns.each(function(i){						   
		 if($(this).outerHeight()<min){
		    min=$(this).outerHeight();
			min_key=i;
		 }							   
	  });
	  return min_key;
   }
   function getElements(){//获取资源
      $.waterfall.load_index++;
      return setting.getResource($.waterfall.load_index,public_render);
   }
   waterfall._scrollTimer=null;//延迟滚动加载计时器
   function onScroll(){//滚动加载
      clearTimeout(waterfall._scrollTimer);
	  waterfall._scrollTimer=setTimeout(function(){
	      var $lowest_column=waterfall.$columns.eq(calculateLowest());//最短列
		  var bottom=$lowest_column.offset().top+$lowest_column.outerHeight();//最短列底部距离浏览器窗口顶部的距离
		  var scrollTop=document.documentElement.scrollTop||document.body.scrollTop||0;//滚动条距离
		  var windowHeight=document.documentElement.clientHeight||document.body.clientHeight||0;//窗口高度
		  if(scrollTop>=bottom-windowHeight){
			 render(getElements(),true);
		  }
	  },100);
   }
   function onResize(){//窗口缩放时重新排列
      if(calculateColumns()==waterfall.column_num) return; //列数未改变，不需要重排
      var $cells=waterfall.$container.find(setting.cell_selector);
	  waterfall.$columns.remove();
	  waterfall.$columns=creatColumn();
      render($cells,false); //重排已有元素时强制不渐显
   }
})(jQuery);
</script>
<!-------------------------------------------------------------------------------------------------------->
</head>
<body>
<div id="container">
    <div class="cell"><a href="#"><img src="<?php echo base_url()?>images/p0001.jpg" /></a><p>项目名称：社区型数字校园</p><p>语言：PHP+MYSQL</p></div>
    <div class="cell"><a href="#"><img src="<?php echo base_url()?>images/p0002.jpg" /></a><p>项目名称：组织部干部信息管理系统 </p><p>语言：.NET+SQL SERVER2000</p></div>
    <div class="cell"><a href="#"><img src="<?php echo base_url()?>images/p0003.jpg" /></a><p>项目名称：政府拆迁网上管理平台 </p><p>语言：.NET+SQL SERVER2000</p></div>
    <div class="cell"><a href="#"><img src="<?php echo base_url()?>images/p0004.jpg" /></a><p>项目名称：基层政府电子政务综合管理系统 </p><p>语言：.NET+SQL SERVER2000</p></div>
    <div class="cell"><a href="#"><img src="<?php echo base_url()?>images/p0005.jpg" /></a><p>项目名称：企业协同管理系统软件</p><p>语言：.NET+SQL SERVER2000</p></div>
    <div class="cell"><a href="#"><img src="<?php echo base_url()?>images/p0006.jpg" /></a><p>项目名称：多平台多数据库查询系统</p><p>语言：PHP+SQL SERVER2008</p></div>
    <div class="cell"><a href="#"><img src="<?php echo base_url()?>images/p022.jpg" /></a><p>网站名称：个人主页</p><p>语言：PHP(CI框架)</p></div>
</div>
<script>
var opt={
  getResource:function(index,render){
	  var html='';
	  $.ajax({
		    url:"<?php echo base_url()?>index.php/c_projects/redata/"+index,
		    dataType:"json", 
		    async:false,
		    success:function(req){
		    	  $.each(req,function(a,b){
			    		  html+='<div class="cell"><a href="'+b.weburl+'"><img src="<?php echo base_url()?>images/'+b.picurl+'"/></a><p>网站名称：'+b.title+'</p><p>语言：'+b.language+'</p></div>';
			    	  });
		    }
		});
	  return $(html);
  },
  auto_imgHeight:true,
  insert_type:1
}
$('#container').waterfall(opt);
</script>

</body> 
</html>