<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
	<title>ZCW Web</title>
</head>
<body >
<?php 
$this->table->generate($results);
foreach($results->result() as $row){
?>
<table width="500" border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td width="80"><?php echo $row->P_id;?></td>
    <td><?php echo $row->P_title;?></td>
    <td width="120">
    <a href="#">edit</a>     
    <a href="<?php echo base_url()?>index.php/admin/ac_del/del/<?php echo $row->P_id;?>">del</a>
    </td>
  </tr>
</table>
<?php }?>
<?php echo $this->pagination->create_links();?> 
</body>
</html>