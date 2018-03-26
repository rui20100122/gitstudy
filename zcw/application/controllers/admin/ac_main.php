<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class ac_main extends CI_Controller{
	
	public function __construct()
	{
		parent::__construct();
		$this->load->helper('url');
	}
	
	public function view()
	{
		$this->load->view('admin/av_main');
	}
	
	public function left()
	{
		$this->load->view('admin/av_left');
	}
	
	public function right()
	{
		$this->load->view('admin/av_right');
	}
	
	public function top()
	{
		$this->load->view('admin/av_top');
	}
}