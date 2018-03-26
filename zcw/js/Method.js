$(document).ready(function(){
    //size();
   // getWeather();

    //$(window).resize(function(){
      //  size();
    //});

});

function size(){
    var _sh=getPageSize();
    if(_sh>700){
        var _jj=parseInt((_sh-125-600)/2);
        $(".content").css({'height':_sh-200,'margin-top':_jj});
        $(".footer").css({'position':'absolute','bottom':0,'left':'50%','width':'980px','margin-left':'-490px'})
    }else{
        $(".content").css({'margin-top':'0','height':'600px'});
        $(".footer").removeClass();
        $(".footer").css({'height':'60px'});
    }
}

function getPageSize(){
	var body = (document.compatMode&&document.compatMode.toLowerCase() == "css1compat")?document.documentElement:document.body;
    var bodyOffsetHeight = 0;
    var bodyScrollHeight = 0;
    var pageDimensions = 0;
       
    pageDimensions=body.clientHeight;
    bodyOffsetHeight=body.offsetHeight;
    bodyScrollHeight=body.scrollHeight;
    if(bodyOffsetHeight > pageDimensions){
        pageDimensions=bodyOffsetHeight;
    }    
       
    if(bodyScrollHeight > pageDimensions){
       pageDimensions=bodyScrollHeight; 
    }     
 
    return pageDimensions; 
}
