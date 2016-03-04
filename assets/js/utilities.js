var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function loadQuakeData(features) {
	var quakeData = [];
	
	features.forEach(function (feature) {
		var props = feature.properties;
		var coords = feature.geometry.coordinates;
		var tsunami = props["tsunami"];
		
		quakeData.push({
			"place":props["place"],
			"title":props["title"],
			"magnitude":props["mag"],
			"url":props["url"],
			"latitude":coords[1],
			"longitude":coords[0],
			"tsunami": (tsunami && tsunami == 1) ? "yes" : "no",
			"date":formatDate(props["time"] / 1000)
		});
	});
	
	return quakeData;
}

// takes a long integer representing epoch time;
function formatDate(longValue) {
	var d = new Date(0);
	d.setUTCSeconds(longValue);
	
	var day = d.getDay() + 1;
	var tmp = day < 10 ? '0' + day : day;
	var date = tmp + '-' + MONTHS[d.getMonth()] + '-' + (d.getYear() + 1900);
	var time = formatTime(d);
	return date + ' at ' + time;
}

function formatTime(d) {
	var h = d.getHours();
	var hh = h < 10 ? '0' + h : h;
	
	var m = d.getMinutes();
	var mm = m < 10 ? '0' + m : m;
	
	return hh + ':' + mm;
}