<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class ac_add extends CI_Controller{

	public function __construct()
	{
		parent::__construct();
		$this->load->helper(array('form', 'url'));
		$this->load->model('admin/am_add');
	}

	public function view()
	{
		$this->load->view('admin/av_add');
	}

	public function add()
	{
		$config['upload_path'] = getcwd().'./uploads/';
		$config['allowed_types'] = 'gif|jpg|png';
		$config['encrypt_name']  = 'TRUE';
		$config['remove_spaces']  = 'TRUE';

		$this->load->library('upload', $config);

		if ( ! $this->upload->do_upload("picurl"))
		{
			$error = array('error' => $this->upload->display_errors());
			print_r($error);
			//	$this->load->view('admin/av_add', $error);
		}
		else
		{
			$data = array('upload_data' => $this->upload->data());

			$re=$this->am_add->add($data['upload_data']['file_name']);
			echo $re?"OK":"NO";
		}
	}
}