<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class ac_manage extends CI_Controller{

	public function __construct()
	{
		parent::__construct();
		$this->load->helper(array('form', 'url'));
		$this->load->database();
	}

	public function view()
	{
		$this->load->library('pagination');//加载分页类
		
		$config['base_url'] = base_url().'index.php/admin/ac_manage/view';//设置分页的url路径
		$config['total_rows'] =$this->db->count_all('db_p');//得到数据库中的记录的总条数
		$config['per_page'] = '5';//每页记录数
		$config['uri_segment'] = 4;
		$config['first_link'] = '首页';
		$config['last_link'] = '尾页';
		$config['num_links'] = 5;
		$this->pagination->initialize($config);//分页的初始化
		
		$this->load->model('admin/am_manage');
		$data['results']=  $this->am_manage->get_books($config['per_page'],$this->uri->segment(4));//得到数据库记录
		$this->load->library('table');//加载table函数
		$this->load->view('admin/av_manage',$data);//调用视图        
		
	}
}