   if (navigator.onLine == false) {
   	document.getElementById('netStat').innerHTML = "NETWORK ERROR, LATEST GST UPDATE NOT AVAILABLE.........";
   }

   //checking if phone supports storage
   if (typeof(Storage) == "undefined") {
    // Code for localStorage/sessionStorage.
    document.getElementById('netStat').innerHTML = "BOOKMARKING UNAVAILABLE FOR THIS DEVICE";
}else{
	fromLocal();
}

function fromLocal(){
		var all2 = localStorage.getItem("bookmarkStorage");
		var turnToObj = JSON.parse(all2);
		all = turnToObj.all2;


for (data in all) {

		var divContainer = document.createElement("div");
			var Ndisplay = document.createElement("h4");
			var unbookmarkContainer = document.createElement("img");
			var btn = document.createElement("button");
			var p = document.createElement("p");

			var Cbody = document.createTextNode(all[data].gst_body);
			 var Cbtn = document.createTextNode("READ MORE");
			 

			
			 Ndisplay.appendChild(Cbody);
			 btn.appendChild(Cbtn);

			 divContainer.setAttribute("class", "list-group-item");
			 unbookmarkContainer.setAttribute("class", "pull-left");
			 unbookmarkContainer.setAttribute("src", "style/img/unbookmark.jpg");
			 unbookmarkContainer.setAttribute("onclick", "unbookmark('" + data + "')");
			 btn.setAttribute("class", "btn btn-primary");
			 btn.setAttribute("onclick", "window.location = 'show.html?q=" + data + "'");

			 divContainer.appendChild(Ndisplay);

			 divContainer.appendChild(unbookmarkContainer);
			 divContainer.appendChild(p);
			 divContainer.appendChild(btn);

	
			 var element = document.getElementById("contents");
			 element.appendChild(divContainer);

	

		}
		var all2 = localStorage.getItem("bookmarkStorage");
		var turnToObj = JSON.parse(all2);
		var existObj = turnToObj.all2;
		var countAll = Object.keys(existObj).length;

		if (countAll <= 0) {
			document.getElementById("contents").innerHTML = "NO BOOKMARKS ADDED YET";
		}
}


function unbookmark(data){
	//this function unbookmarks a bookmarked article
				var all2 = localStorage.getItem("bookmarkStorage");
				var turnToObj = JSON.parse(all2);
				var existObj = turnToObj.all2;

				if (typeof(existObj[data]) == 'object')  {
					delete existObj[data];
					var getAll = new Object;
					getAll.all2 = existObj;
					var r = JSON.stringify(getAll);
					localStorage.setItem("bookmarkStorage", r);
					//toast ("unbookmark successful")

				}
				window.location = "bookmark.html";
				
			}