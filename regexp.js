
/**
 * Updates our regular expression
 */
function regUpdate() {
	var mods = new Array();
	mods['g'] = document.getElementById("regG").checked;
	mods['i'] = document.getElementById("regG").checked;
	mods['m'] = document.getElementById("regG").checked;
	
	// get modifiers from our checkboxes
	var mod = (true ? "g" : "")
		+ (document.getElementById("regI").checked ? "i" : "")
		+ (document.getElementById("regM").checked ? "m" : "");

	// output and input DOMs
	var out = document.getElementById("regOutput");
	var inp = document.getElementById("regText").value;

	// our expression
	var expr = new RegExp(
		document.getElementById("expression").value.replace(/^\s*|\s*$/g, '')
		, mod);

	// our matches, higlighted
	var matchedText = markMatchedText(inp, expr, "mark");
	
	// replace matches
	var rep = document.getElementById("matchReplace").value;
	var rep = inp.replace(expr, rep == null || rep == "" 
		? "(match!)" : rep);

	// output it
	out.innerHTML = "expr: " + expr 
		+ "<br />found: " + matchedText 
		+ "<br />replaced: " + rep;
		
	
}

function reMatch(pos, res) {
	this.result = new String(res);
	this.pos = pos;
	return this;
}

function markMatchedText(text, expression, className) {
	if(className == null)
		className = "mark";
	// temporary result storage
	var r; 	
	// array containing the positions where we have matches
	var results = new Array(); 

	// populate the match array
	while(validExpressionExec(r = expression.exec(text))) {
		results.push(new reMatch(
			(expression.lastIndex-r.toString().length)
			, r));
	}
	
	// create a string from the match array
	while(r = results.pop()) {
		text = text.substr(0, parseInt(r.pos))
			 +"<span class='"+className+"'>"+r.result+"</span>"
			 +text.substr(parseInt(r.pos) + r.result.length);
	}
	
	return text;
}

function validExpressionExec(exResp) {
	return exResp != null && exResp != "";
}

