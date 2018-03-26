<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
	</head>
	<body>
	<?php echo form_open_multipart('admin/ac_add/add');?>
	<p>名称：<input type="text" name="title"></p>
<p>语言：<input type="text" name="language"></p>
<p>URL：<input type="text" name="weburl"></p>
<p>图片URL：<input type="file" name="picurl"></p>
<p>介绍：<textarea name="desc" rows="10"></textarea></p>
<p><input type="submit" name="ok" value="提交"></p>
</form>
	</body>
</html>