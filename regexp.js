function regUpdate() {

	// get modifiers from our checkboxes
	var mods = (document.getElementById("regG").checked ? "g" : "")
		+ (document.getElementById("regI").checked ? "i" : "")
		+ (document.getElementById("regM").checked ? "m" : "");

	// output and input DOMs
	var out = document.getElementById("regOutput");
	var inp = document.getElementById("regText").value;

	// our expression
	var expr = new RegExp(
		document.getElementById("expression").value.replace(/^\s*|\s*$/g, '')
		, mods);

	// our matches, higlighted
	var results = new Array();
	var r;
	var matchedText = inp;
	
	// populate the match array
	while((r = expr.exec(inp)) != null) {
		results.push(new reMatch((expr.lastIndex-r.toString().length), r));
	}
	
	// create a string from the match array
	while(r = results.pop()) {
		matchedText = matchedText.substr(0, parseInt(r.pos))
			 +"<span class='mark'>"+r.result+"</span>"
			 +matchedText.substr(parseInt(r.pos) + r.result.length);
	}
	
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
	this.p = function() {
		return "p: " + this.pos +", r: " + this.result;
	}
}
