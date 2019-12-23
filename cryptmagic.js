javascript: (function sentiment_count() {
	const rows = document.getElementsByTagName('tr');
	let today = new Date(new Date().setHours(0,0,0,0));

	let long_count = 0;
	let short_count = 0;
	let no_position_count = 0;

	function range(start, end, step) {
	    var ans = [];
	    for (let i = start; i <= end; i+=step) {
	        ans.push(i);
	    }
	    return ans;
	};

	for (var i of range(8, 56, 2)) {
	    var r = rows[i].children;
	    if (new Date(Date.parse(r[6].innerText)) > today){
	        console.log(r[1].innerText);
	        console.log(new Date(Date.parse(r[6].innerText)));
	        if (r[2].innerText == 'LONG') { long_count++; }
	        else if (r[2].innerText == 'SHORT') { short_count++; }
	        else { no_position_count++; };
	    };
	};

	document.getElementById('vm_long').innerText = Math.round(100 * long_count / (long_count + short_count + no_position_count)).toString() + ' %';
	document.getElementById('vm_short').innerText = Math.round(100 * short_count / (long_count + short_count + no_position_count)).toString() + ' %';

})();

