<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');

class m_weather extends CI_Model{

	public function Weather()
	{
		$url = 'http://m.weather.com.cn/data/101190201.html';
		$fp = fopen($url, 'r');
		$content = '';
		while(!feof($fp)){
			$buffer = trim(fgets($fp, 4096));
			$content .= $buffer;
		}
		return json_encode(json_decode($content));
	}
}