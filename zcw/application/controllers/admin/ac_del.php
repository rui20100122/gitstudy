<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class ac_del extends CI_Controller{

	public function __construct()
	{
		parent::__construct();
		$this->load->helper(array('form', 'url'));
		$this->load->model('admin/am_del');
	}
	
	public function del($pid)
	{
		 $this->am_del->del($pid);
		$this->load->view('admin/av_manage');
	}
}