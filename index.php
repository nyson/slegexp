 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
	<script type="text/javascript" src="./regexp.js"></script>
	<script type="text/javascript" src="./base.js"></script>
	<title>SlegExp - A JavaScript RegExp visualiser!</title>
	<link rel="stylesheet" href="./sleg.css" />
</head>
<body>
<div>
	global:
	<input type="checkbox" checked="checked" disabled="disabled" id="regG" onchange="void(0);" /> <i>(matching loops forever if this is unchecked, will work for a workaround)</i>
	<br />case-insensitive 
	<input type="checkbox" checked="checked" id="regI" onchange="void(0);" />
	<br />multiline 
	<input type="checkbox" id="regM" onchange="void(0);" />

	<br />Your RegExp:
	<br /><input type="text" id="expression" value="" onkeyup="void(0);" />

	<br />Your Text to replace matches:
	<br /><input type="text" id="matchReplace" value="(match!)" onkeyup="void(0);" />


	<br />Your text:
	<br /><textarea id="regText" cols="80" rows="40" onkeyup="void(0);"></textarea>
	<br /><input type="button" value="Validate my regexp!" onclick="regUpdate();" /> 
	<div id="regOutput"></div>
	<pre id="diag"></pre>
</div>
</body>
</html>
