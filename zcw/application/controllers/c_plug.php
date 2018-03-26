<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class c_plug extends CI_Controller{
	
	public function __construct()
	{
		parent::__construct();
		//$this->load->helper('url');
	}
	
	public function plug()
	{
		$this->load->view('v_plug');
	}
}