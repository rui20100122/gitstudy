(function($){  
	$.fn.dbRotate2D=function(options){
		var opt={
			rotateSpeed:300,
			w:185,
			h:185
		}
		$.extend(opt,options);
		return this.each(function(){
			var $this=$(this);
			var $img=$this.find('img');
			var imgWidth=opt.w;
			var imgHeight=opt.h;
			var mOver=false;
			init();

			function init(){
				setCss();
				setMouseEvent();
			}
			
			function setCss(){				
				$this.css({'width':imgWidth,'height':imgHeight});
				$img.data({'out':$img.attr('src'),'over':$img.attr('alt')});
			}
			
			function setMouseEvent(){
				$this.bind('mouseenter',function(){
					mOver=true;
					setAnimation();
					
				}).bind('mouseleave',function(){
					mOver=false;
					setAnimation();
				})
			}
						
			function setAnimation(){
				if(mOver==true){
					$img.stop(true)
						.animate({'left':imgWidth/2,'width':0},opt.rotateSpeed,function(){
							$(this).attr({'src':$(this).data('over')});
						})
						.animate({'left':0,'width':imgWidth},opt.rotateSpeed)
					
				}else{
					$img.stop()
						.animate({'left':imgWidth/2,'width':0},opt.rotateSpeed,function(){						
							$(this).attr({'src':$(this).data('out')});
						})
						.animate({'left':0,'width':imgWidth},opt.rotateSpeed)
				}
			}	
			
		})			
				
	}			
})(jQuery)