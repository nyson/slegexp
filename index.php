<html>
<head>
	<script type="text/javascript" src="./regexp.js"></script>
	<script type="text/javascript" src="./base.js"></script>
	<title>SlegExp - A JavaScript RegExp visualiser!</title>
	<link rel="stylesheet" href="./sleg.css" />
</head>
<body>

global 
<input type="checkbox" checked="checked" id="regG" onchange="void(0);" />
<br />case-insensitive 
<input type="checkbox" checked="checked" id="regI" onchange="void(0);" />
<br />multiline 
<input type="checkbox" id="regM" onchange="void(0);" />

<br />Your RegExp:
<br /><input type="text" id="expression" value="" onkeyup="void(0);" />

<br />Your Text to replace matches:
<br /><input type="text" id="matchReplace" value="" onkeyup="void(0);" />


<br />Your text:
<br /><textarea id="regText" onkeyup="void(0);"></textarea>
<input type="button" onclick="regUpdate();" /> 
<div id="regOutput"></div>
<div id="diag"></div>

</body>
</html>
