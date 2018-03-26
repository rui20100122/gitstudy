<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
	<title>ZCW Web</title>
	<link rel="stylesheet" type="text/css" href="<?php echo base_url()?>css/base.css" />
	<link rel="stylesheet" type="text/css" href="<?php echo base_url()?>css/main.css" />
	<script type="text/javascript" src="<?php echo base_url()?>js/jquery-1.8.0.min.js"></script>
	<script type="text/javascript" src="<?php echo base_url()?>js/jquery.dbRotate2D.js"></script>
</head>
<body>
	<div class="top"></div>
	<div class="con">
		<div class="bak"></div>
		<div class="l">
			<ul>
				<li><a href="#">首页</a></li>
				<li><a href="#">自我介绍</a></li>
				<li><a href="#">作品欣赏</a></li>
				<li><a href="#">JS整合插件</a></li>
				<li><a href="#">联系我</a></li>
			</ul>
		</div>
		<div class="r">
			<div class="content">
				<ul id="dbRoWrap">
					<li class="dbRo1"><a href="#"><img src="<?php echo base_url()?>images/001.jpg" alt="<?php echo base_url()?>images/f001.jpg"/></a></li>
					<li class="dbRo1"><a href="#"><img src="<?php echo base_url()?>images/005.jpg" alt="<?php echo base_url()?>images/f005.jpg"/></a></li>
					<li class="dbRo3 bg01" id="weather">
						<div class="d01">image</div>
						<div class="d1">
							<div class="d02">38℃</div>
							<div class="d03"><p>无锡，星期五</p><p>2013年07月28日</p></div>
							<div class="clear"></div>
						</div>
						<div class="clear"></div>
					</li>
					<li class="dbRo4"><img src="<?php echo base_url()?>images/3.jpg"/></li>
					<li class="dbRo4"><img src="<?php echo base_url()?>images/2.jpg"/></li>
					<li class="dbRo2"><img src="<?php echo base_url()?>images/1.jpg"/></li>
				</ul>
			</div>
			<div class="ne">
				<div class="lleft">
					<div class="title">作品欣赏</div>
					<div class="desc">可选的作品：《江山如此多娇》、《转战陕北》、《洪荒风雪》、《灵岩涧一角》、《蛙声十里出山泉》、《群马图》、《大丽菊》、《红岩》、《万山红遍层林尽染》。题目：1、作品表现了什么？（从画面内容和意境）2、与传统图画比较在技法上，题材上，构图等方面有和创意与发展，如何显现？    将青蛙入画，大多属于小品，并不十分起眼，却是耐人寻味。<br><br><a href="#" class="rde">查看详情</a></div>
				</div>
				<div class="lright">
					<div class="title">JS插件整合</div>
					<div class="desc">这种诗情的意会和灵感的迸现，既体现了文人画追寻的至高境界，又是艺术家童心的率真流露。齐白石老人画“蛙声十里出山泉”这个命题时还上运用了这种特殊的联想手法。恰到好处。在该图中，画面上没有蛙，而观众有如闻蛙声之感。而这蛙声也非是即时可“听”见的，而是在数周后的，十里山泉出山的溪水中。这是绝妙之至的构思。<br><br><a href="#" class="rde">查看详情</a></div>
				</div>
			</div>
		</div>
		<div class="clear"></div>
	</div>
	<div class="footer">coryright&copy;2013-2015&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">http://www.0510bl.com/zcw</a></div>
	<script type="text/javascript">
	$('.dbRo1').dbRotate2D();
	</script>
</body>
</html>