<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class am_add extends CI_Model{

	public function __construct()
	{
		$this->load->database();
	}

	public function add($picurl)
	{
		$data = array(
    		'P_title' => $this->input->post('title'),
			'P_language' =>	$this->input->post('language'),
			'P_weburl' => $this->input->post('weburl'),
			'P_picurl' => $picurl,
			'P_desc'=>$this->input->post('desc')
		);

		return $this->db->insert('db_p', $data);
	}
}