<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
	<title>ZCW Web</title>
	<link rel="stylesheet" type="text/css" href="<?php echo base_url()?>css/base.css" />
	<link rel="stylesheet" type="text/css" href="<?php echo base_url()?>css/main.css" />
	<script type="text/javascript" src="<?php echo base_url()?>js/jquery-1.8.0.min.js"></script>
	<script type="text/javascript" src="<?php echo base_url()?>js/jquery.dbRotate2D.js"></script>
	<script type="text/javascript" src="<?php echo base_url()?>js/Method.js"></script>
</head>
<body>
	<div class="top"></div>
	<div class="con">
		<div class="bak"></div>
		<div class="l">
			<ul>
				<li><a href="<?php echo base_url()?>index.php" >首页</a></li>
				<li><a href="#" onclick="strhref('<?php echo base_url()?>index.php/c_about/about');">自我介绍</a></li>
				<li><a href="#" onclick="strhref('<?php echo base_url()?>index.php/c_projects/projects');">作品欣赏</a></li>
				<li><a href="#" onclick="strhref('<?php echo base_url()?>index.php/c_plug/plug');">JS整合插件</a></li>
				<li><a href="#" onclick="strhref('<?php echo base_url()?>index.php/c_tel/tel');">联系我</a></li>
			</ul>
		</div>
		<div class="r" id="content">
			<div>
				<ul id="dbRoWrap">
					<li class="dbRo1"><a href="#" onclick="strhref('<?php echo base_url()?>index.php/c_about/about');"><img src="<?php echo base_url()?>images/001.jpg" alt="<?php echo base_url()?>images/f001.jpg"/></a></li>
					<li class="dbRo1"><a href="#" onclick="strhref('<?php echo base_url()?>index.php/c_tel/tel');"><img src="<?php echo base_url()?>images/005.jpg" alt="<?php echo base_url()?>images/f005.jpg"/></a></li>
					<li class="dbRo3 bg01" id="weather">
						<div class="d01" id="wimg"></div>
						<div class="d1">
							<div class="d02" id="wwd"></div>
							<div class="d03"><p id="wcity"></p><p id="wdate"></p></div>
							<div class="clear"></div>
						</div>
						<div class="clear"></div>
					</li>
					<li class="dbRo4" id="l01"><img src="<?php echo base_url()?>images/3.jpg"/></li>
					<li class="dbRo4" id="l02"><img src="<?php echo base_url()?>images/2.jpg"/></li>
					<li class="dbRo2" id="l03"><img src="<?php echo base_url()?>images/c1.jpg"/></li>
				</ul>
			</div>
			<div class="ne">
				<div class="lleft">
					<div class="title">作品欣赏</div>
					<div class="desc">此栏目为个人做过的网站、项目之类的展示。用到的技术有ASP.NET、PHP、ASP、JS、XHTML+CSS、MYSQL、MSSQL<br><br><br><br><br><br><a href="#" class="rde" onclick="strhref('<?php echo base_url()?>index.php/c_projects/projects');">查看详情</a></div>
				</div>
				<div class="lright">
					<div class="title">JS插件整合</div>
					<div class="desc">在做网站的时候，自己收集的按照自己的使用方式修改后的插件。也有一些网站比较好的，比较常用的JS效果<br><br><br><br><br><br><a href="#" class="rde" onclick="strhref('<?php echo base_url()?>index.php/c_plug/plug');">查看详情</a></div>
				</div>
			</div>
		</div>
		<div class="clear"></div>
	</div>
	<div class="footer">coryright&copy;2013-2015&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">http://www.0510bl.com/zcw</a></div>
	<script type="text/javascript">
	$('.dbRo1').dbRotate2D();

    $.ajax({
	    url:"<?php echo base_url()?>index.php/c_welcome/weather",
	    dataType:"json",
	    async:true,
	    beforeSend:function(){
	        $("#wimg").html("加载中......");
	    },
	    success:function(req){
	    	$.each(req,function(a,b){
	    		$.each(b,function(k,v){
	    			k=="city"?$("#wcity").html(v):'';
		    		k=="date_y"?$("#wdate").html(v):'';
		    		k=="week"?$("#wcity").append(","+v):'';
		    		k=="temp1"?$("#wwd").html(v.substring(0,3)):'';
		    		if(k=="weather1"){
		    			$("#wimg").html("");
		    			if(v=="晴"){
			    			$(".d01").css({'background':'url(<?php echo base_url()?>images/w.png) no-repeat -261px -222px'});
		    			}
		    			if(v=="多云"){
			    			$(".d01").css({'background':'url(<?php echo base_url()?>images/w.png) no-repeat -270px -3px'});
		    			}
		    			if(v=="雷阵雨"){
			    			$(".d01").css({'background':'url(<?php echo base_url()?>images/w.png) no-repeat -134px -223px'});
		    			}
		    			if(v=="多云转阵雨"){
		    				$(".d01").css({'background':'url(<?php echo base_url()?>images/w.png) no-repeat 0px -226px'});
		    			}
		    			if(v=="小雨转多云"){
		    				$(".d01").css({'background':'url(<?php echo base_url()?>images/w.png) no-repeat -268px -118px'});
		    			}
		    			if(v=="阴转多云"){
		    				$(".d01").css({'background':'url(<?php echo base_url()?>images/w.png) no-repeat -140px -114px'});
		    			}
		    			if(v=="雷阵雨转多云"){
		    				$(".d01").css({'background':'url(<?php echo base_url()?>images/w.png) no-repeat 0px -226px'});
				    	}
		    			if(v=="小雨"){
		    				$(".d01").css({'background':'url(<?php echo base_url()?>images/w.png) no-repeat -268px -118px'});
		    			}
			    	}		
		    	})
	    	})
	    },
	    error:function(){
			$(".d01").html("加载失败......");
	    }
	});

	function strhref(url){
	    $.ajax({
		    url:url,
		    dataType:"html",
		    async:true,
		    beforeSend:function(){
		        $("#content").html("加载中......");
		    },
		    success:function(req){
		    	$("#content").html(req);
		    },
		    error:function(){
		    	$("#content").html("加载失败......");
		    }
		});
	}

	function radpic(){
		rstr=Math.ceil(Math.random()*4);
		rpic=Math.ceil(Math.random()*7);
		rurl="<img src='<?php echo base_url()?>images/"+rpic+".jpg' />";
		switch (rstr) {
			case 1:
				break;
			case 2:
				$("#l01").fadeTo("slow", 0.5, function() {
					$("#l01").fadeTo("slow", 1, function() {
						$("#l01").html(rurl);
					});
				});
				break;
			case 3:
				$("#l02").fadeTo("slow", 0.5, function() {
					$("#l02").fadeTo("slow", 1, function() {
						$("#l02").html(rurl);
					});
				});
			break;
		}
	}

	setInterval("radpic()",10000);
	</script>
</body>
</html>