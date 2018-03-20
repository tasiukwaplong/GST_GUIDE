   if (navigator.onLine == false) {
   	document.getElementById('netStat').innerHTML = "NETWORK ERROR, LATEST GST UPDATE NOT UNAVAILABLE.........";
   }
		var first = getUrlVars()["q"];
		if(first == "undefined" || first == '' || !first){
			window.location = 'index.html';
		}else{
			
			   //checking if phone supports storage
			   if (typeof(Storage) == "undefined") {
			   // Code for localStorage/sessionStorage.
			   document.getElementById('netStat').innerHTML = "OFFLINE NEWS UNAVAILABLE FOR THIS DEVICE";
			   fromNet(first);
			}else{
				fromLocal(first);
			}

		}

		function getUrlVars() {
			var vars = {};
			var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
				vars[key] = value;

			});

			return vars;
		}

		function fromNet(data){
			document.getElementById('contents').innerHTML = all[data].gst_body;
			document.getElementById('likesBtn').setAttribute("onclick", "like('"+ data + "')");
			document.getElementById('dislikesBtn').setAttribute("onclick", "bookmark('"+ data + "')");
			document.getElementById('bookmarkBtn').setAttribute("onclick", "dislike('"+ data + "')");
		}

		function fromLocal(data){
			if (typeof(all) == 'object') {
				var getAll = {all2 : all};
				localStorage.setItem("localStore", JSON.stringify(getAll));	
			}else{
				var all2 = localStorage.getItem("localStore");
				var turnToObj = JSON.parse(all2);
				all = turnToObj.all2;
			}

			document.getElementById('contents').innerHTML = all[data].gst_body;
			document.getElementById('likesBtn').setAttribute("onclick", "like('"+ data + "')");
			document.getElementById('dislikesBtn').setAttribute("onclick", "dislike('"+ data + "')");
			document.getElementById('bookmarkBtn').setAttribute("onclick", "bookmark('"+ data + "')");
	}



	function bookmark(data) {
		//function to update bookmarks
		if ((typeof(Storage) == "undefined") || (data == '')) {
			//checking if device accept localstorage
			document.getElementById("msg").setAttribute("class", "alert alert-danger");
			document.getElementById("msg").innerHTML = "ERROR: Bookmarking failed";
		}else{
			//if device accepts localstorage
			if (localStorage.getItem("bookmarkStorage") == null) {
				//do stuffs when there is no data in the storage
				
				var all2 = new Object();
				all2[data] = all[data]; 
				var getAll = new Object;
				getAll.all2 = all2;
				var r = JSON.stringify(getAll);
				localStorage.setItem("bookmarkStorage", r);	
			}else{
				//if boomarks already exists
				var all2 = localStorage.getItem("bookmarkStorage");
				var turnToObj = JSON.parse(all2);
				var existObj = turnToObj.all2;

				if (typeof(existObj[data]) == 'object')  {
					//chceking if already bookmarked
					document.getElementById("msg").setAttribute("class", "alert alert-warning");
					document.getElementById("msg").innerHTML = "Bookmark already added";
					return;
				}

				existObj[data] = all[data];
				var getAll = new Object;
				getAll.all2 = existObj;
				var r = JSON.stringify(getAll);
				localStorage.setItem("bookmarkStorage", r);
				document.getElementById("msg").setAttribute("class", "alert alert-success");
				document.getElementById("msg").innerHTML = "Bookmark added Successfully";
				return;
			}
	

		}

	}


	function dislike(data){
		//function to update dislikes
		document.getElementById("msg").setAttribute("class", "alert alert-info");
		document.getElementById("msg").innerHTML = "Feature coming soon...!!";
		return;
	}

		function like(data){
		//function to update likes
		document.getElementById("msg").setAttribute("class", "alert alert-info");
		document.getElementById("msg").innerHTML = "Feature coming soon...!!";
		return;
	}