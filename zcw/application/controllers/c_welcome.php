<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class C_welcome extends CI_Controller{
	
	public function __construct()
	{
		parent::__construct();
		$this->load->helper('url');
		$this->load->model('m_weather');
	}

	public function index()
	{
		$this->load->view("v_index");
	}
	
	public function weather()
	{
		echo $this->m_weather->Weather();
	}
}