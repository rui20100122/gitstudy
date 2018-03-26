<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class am_manage extends CI_Model{

	public function __construct()
	{
		parent::__construct();
	}

	public function manage()
	{
		$this->db->limit($this->input->post('pageSize'),($this->input->post('pageNumber')-1)*$this->input->post('pageSize'));
		$this->db->order_by("U_id", "desc");
		$query = $this->db->get('db_users');
		return $query->result_array();
	}

	function get_books($num,$offset)
	{
		$query = $this->db->get('db_p',$num,$offset);//从数据库中去数据，$num表示取得的数目，$offset表示从什么地方开始取
		
		return $query;
	}


}