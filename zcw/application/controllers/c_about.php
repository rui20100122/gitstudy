<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class c_about extends CI_Controller{
	
	public function __construct()
	{
		parent::__construct();
		$this->load->helper('url');
	}
	
	public function about()
	{
		$this->load->view('v_about');
	}
}