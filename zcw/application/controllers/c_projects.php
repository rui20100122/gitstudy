<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class c_projects extends CI_Controller{

	public function __construct()
	{
		parent::__construct();
		$this->load->helper('url');
		//$this->load->database();
		//$this->load->model('admin/am_manage');
	}

	public function projects()
	{
		$this->load->view('v_projects');
	}

	public function redata($offset)
	{
		/*		$date=  $this->am_manage->get_books(5,$offset*5==0?1:$offset*5);
		 foreach($date->result() as $row)
		 {
			$da[]=array(
			"P_id"=>$row->P_id,
			"P_title"=>$row->P_title,
			"P_language"=>$row->P_language,
			"P_weburl"=>$row->P_weburl,
			"P_picurl"=>$row->P_picurl,
			"P_desc"=>$row->P_desc
			);
			}*/

		$da=array();

		$da[3]=array("P_title"=>"江溪太一社区","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"#","P_picurl"=>"p001.jpg");
		$da[4]=array("P_title"=>"无锡旅游商贸学校精品课程","P_language"=>"ASP+ACCESS","P_weburl"=>"#","P_picurl"=>"p002.jpg");
		$da[5]=array("P_title"=>"艺术与人文","P_language"=>"ASP+ACCESS","P_weburl"=>"#","P_picurl"=>"p003.jpg");
		$da[6]=array("P_title"=>"前厅服务与管理精品课程","P_language"=>"ASP+ACCESS","P_weburl"=>"#","P_picurl"=>"p004.jpg");
		$da[7]=array("P_title"=>"中式烹调工艺学","P_language"=>"ASP+ACCESS","P_weburl"=>"#","P_picurl"=>"p005.jpg");
		$da[8]=array("P_title"=>"无锡新区万裕苑第一社区","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"#","P_picurl"=>"p006.jpg");
		$da[9]=array("P_title"=>"无锡金日传媒","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"http://www.wxjrcm.com/","P_picurl"=>"p007.jpg");
		$da[10]=array("P_title"=>"英雄之路","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"http://www.17heroroad.com/","P_picurl"=>"p008.jpg");
		$da[11]=array("P_title"=>"我爱三国志","P_language"=>"PHP+SQL SERVER 2008","P_weburl"=>"#","P_picurl"=>"p009.jpg");
		$da[12]=array("P_title"=>"新余威奥","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"http://www.well-forging.com/","P_picurl"=>"p010.jpg");
		$da[13]=array("P_title"=>"无锡市喜丝玛贸易有限公司","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"http://www.sisma.cn/","P_picurl"=>"p011.jpg");
		$da[14]=array("P_title"=>"无锡微研有限公司","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"http://www.wxmr.com/","P_picurl"=>"p012.jpg");
		$da[15]=array("P_title"=>"兰桂联放医疗装备厂","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"http://www.lglf.com.cn/","P_picurl"=>"p013.jpg");
		$da[16]=array("P_title"=>"无锡太湖一社区","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"#","P_picurl"=>"null.jpg");
		$da[17]=array("P_title"=>"江溪叙丰里社区","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"#","P_picurl"=>"null.jpg");
		$da[18]=array("P_title"=>"无锡新江南花园社区","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"#","P_picurl"=>"null.jpg");
		$da[19]=array("P_title"=>"常州豪键","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"#","P_picurl"=>"null.jpg");
		$da[20]=array("P_title"=>"新丰苑二社区","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"#","P_picurl"=>"null.jpg");
		$da[20]=array("P_title"=>"无锡如元玻璃公司","P_language"=>"HTML","P_weburl"=>"#","P_picurl"=>"p014.jpg");
		$da[21]=array("P_title"=>"新安花苑第一社区","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"http://www.xahydysq.com/","P_picurl"=>"p015.jpg");
		$da[22]=array("P_title"=>"新安花苑第二社区","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"http://www.xahy2.com/","P_picurl"=>"p016.jpg");
		$da[23]=array("P_title"=>"无锡扬名街道金星社区","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"http://www.jinxingsq.com/","P_picurl"=>"p017.jpg");
		$da[24]=array("P_title"=>"百桥商务中心","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"#","P_picurl"=>"null.jpg");
		$da[25]=array("P_title"=>"科鸿环保","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"#","P_picurl"=>"null.jpg");
		$da[26]=array("P_title"=>"百桥","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"#","P_picurl"=>"null.jpg");
		$da[27]=array("P_title"=>"龙诺商务门户网站","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"#","P_picurl"=>"null.jpg");
		$da[28]=array("P_title"=>"中华名品城","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"#","P_picurl"=>"null.jpg");
		$da[29]=array("P_title"=>"龙诺商务门户网站","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"#","P_picurl"=>"null.jpg");
		$da[30]=array("P_title"=>"张家港科悦精细化工有限公司","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"http://www.keyuepvp.com/","P_picurl"=>"p018.jpg");
		$da[31]=array("P_title"=>"叙丰家园","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"http://www.xfjysq.com/","P_picurl"=>"p019.jpg");
		$da[32]=array("P_title"=>"无锡跨度数据","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"http://www.kuado.com.cn/","P_picurl"=>"p020.jpg");
		$da[33]=array("P_title"=>"扬名街道清二社区","P_language"=>"ASP.NET+ACCESS","P_weburl"=>"http://www.ymqinger.cn/","P_picurl"=>"p021.jpg");






		$data=array();
		for($i=$offset*3;$i<$offset*3+3;$i++){
			if(isset($da[$i])){
				$data[]=array("title"=>$da[$i]["P_title"],"language"=>$da[$i]["P_language"],"weburl"=>$da[$i]["P_weburl"],"picurl"=>$da[$i]["P_picurl"]);
			}
		}
		if(!empty($data)){
			echo json_encode($data);
		}
		else{
			echo "{\"msg\":\"0\"}";
		}

	}
}