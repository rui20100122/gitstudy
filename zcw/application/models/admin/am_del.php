<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class am_del extends CI_Model{

	public function __construct()
	{
		$this->load->database();
	}

	public function del($pid)
	{
		$this->db->where_in('P_id',explode(',',$pid));
		return $this->db->delete('db_p');
	}
}