<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class c_tel extends CI_Controller{
	
	public function __construct()
	{
		parent::__construct();
		$this->load->helper('url');
	}
	
	public function tel()
	{
		$this->load->view('v_tel');
	}
}