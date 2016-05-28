/*eslint-disable */
function GuidPlaceholder() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}


function mystringify(obj) {
	var hash = {};
	return JSON.stringify(obj, function (key, value) {
		if (Array.isArray(value))
			return value;
		if (value && typeof value === 'object') {
			if (!value.id)
				value.id = GuidPlaceholder();
			if (!hash[value.id]) {
				hash[value.id] = true;

			} else {
				return { id: value.id }
			}
		}
		return value;
	})
}

function myparse(str) {
	var hash = {};
	return JSON.parse(str, function (key, value) {
		if (value && value.id) {
			if (!hash[value.id]) {
				hash[value.id] = value;
			} else {
				var ret = hash[value.id];
				for (var k in value) ret[k] = value[k];
				return ret;
			}
		}
		return value;
	})
}

function loadjscssfile(filename, filetype) {
	if (filetype == "js") { //if filename is a external JavaScript file
		var fileref = document.createElement('script')
		fileref.setAttribute("type", "text/javascript")
		fileref.setAttribute("src", filename)

	}
	else if (filetype == "css") { //if filename is an external CSS file
		var fileref = document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", filename)

	}
	if (typeof fileref != "undefined")
		document.getElementsByTagName("head")[0].appendChild(fileref)
}

loadjscssfile("https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js", "js");

function databoom_db(site, dbname) {
	var db = this;
	db.site = site;
	db.name = dbname;
	db.url = site + '/api1/' + dbname;

	db.save = function (col, savedata) {
		var jsonstr = mystringify(savedata);

		var ret = $.ajax({
			type: "POST",
			url: db.url + '/collections/' + col,
			xhrFields: { withCredentials: true },
			processData: false,
			contentType: 'application/json',
			data: jsonstr
		});
		return ret;
	}

	db.del = function (id) {
		if (Array.isArray(id)) {
			var jsonstr = mystringify(id);
			$.ajax({
				type: "DELETE",
				url: db.url + '/collections/allobjects',
				processData: false,
				xhrFields: { withCredentials: true },
				contentType: 'application/json',
				data: jsonstr
			});
		} else {
			return $.ajax({
				type: "DELETE",
				url: db.url + '/collections/allobjects(' + id + ')',
				xhrFields: { withCredentials: true }
			});
		}
	}

	db.load = function (path, options) {
		var d = $.Deferred();
		var url = options ? "?" + queryUrl(options) : "";
		$.ajax({
			type: "GET",
			url: db.url + '/collections/' + path + url,
			xhrFields: { withCredentials: true },
			dataType: 'json',
			success: function (data) {
				d.resolve(data.d.results);
			},
			error: function (error) {
				d.reject(error);
			}
		});
		return d.promise();
	}

	db.loadTo = function (path, options, loadTo)
	{
		//path loadTo
		//path options loadTo

		var options2, loadTo2;
		if(!loadTo)
		{
			loadTo = options;
			options = null;
		}
		var d = $.Deferred();
		var queryUrl = options ? "?" + db.queryUrl(options) : "";
		$.ajax({
			type: "GET",
			url: db.url + '/collections/' + path + queryUrl,
			xhrFields: { withCredentials: true },
			dataType: 'json',
			success: function (data) {
				if(loadTo)
				{
					loadTo = data.d.results;
				}
				d.resolve(data.d.results);
			},
			error: function (error) {
				d.reject(error);
			}
		});
		return d.promise();
	}

	db.login = function (username, password) {
		var d = $.Deferred();
		if (username) {
			$.ajax({
				type: "POST",
				xhrFields: { withCredentials: true },
				url: db.url + '/sesslogin',
				dataType: 'json',
				data: { username: username, password: password },
				success: function (data) {
					$.ajaxSetup({
						headers: { Authorization: "NBBasic " + data.token }
					});
					d.resolve(true);
				},
				error: function (error) {
					d.reject(error);
				}
			});
		} else {
			$.ajax({
				type: "POST",
				xhrFields: { withCredentials: true },
				url: db.url + '/sesslogin',
				dataType: 'json',
				success: function (data) {
					$.ajaxSetup({
						headers: { Authorization: "NBBasic " + data.token }
					});
					d.resolve(true);
				},
				error: function (error) {
					d.reject(error);
				}
			});
		}
		return d.promise();
	}

	db.loadObj = function (id)
	{
		var d = $.Deferred();
		$.ajax({
			type: "GET",
			url: db.url + '/collections/allobjects(' + id + ')',
			xhrFields: { withCredentials: true },
			dataType: 'json',
			success: function (data) {
				d.resolve(data.d.results);
			},
			error: function (error) {
				d.reject(error);
			}
		});
		return d.promise();
	}

	db.upload = function (file)
	{
		var d = $.Deferred();
		var data;
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function (ev) {
			if (ev.currentTarget.readyState == 4) {
				if (ev.currentTarget.status == 200) {
					var responseJson = ev.currentTarget.response;
					if (responseJson)
					{
						var response = JSON.parse(responseJson);
						d.resolve(response.file_id);
					}

				} else {
					d.reject(ev.currentTarget.statusText);
				}
			}
		};
		xhr.open('POST', db.url + '/files', true);
		var data = new FormData();
		data.append('file',file);
		xhr.send(data);

		return d.promise();
	}

	function queryUrl(obj) {
		var str = [];
		for (var p in obj)
			if (obj.hasOwnProperty(p)) {
				str.push('$' + encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
			}
		return str.join("&");
	}
}



function databoom(site, dbname) {
	//insert search created
	var db = new databoom_db(site, dbname);
	return db;
};

/*eslint-enable */