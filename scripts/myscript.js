   if (navigator.onLine == false) {
   	document.getElementById('netStat').innerHTML = "NETWORK ERROR, LATEST GST UPDATE NOT UNAVAILABLE.........";
   }

   //checking if phone supports storage
   if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    document.getElementById('netStat').innerHTML = "OFFLINE NEWS UNAVAILABLE FOR THIS DEVICE";
    fromNet();
}else{
	fromLocal();
}

	var countAll = Object.keys(all).length;

function fromNet(){	
for (data in all) {

		var divContainer = document.createElement("div");
			var Ndisplay = document.createElement("h4");
			var likesContainerAlt = document.createElement("i");
			var dislikesContainerAlt = document.createElement("i");
			var likesContainer = document.createElement("img");
			var dislikesContainer = document.createElement("img");
			var btn = document.createElement("button");
			var p = document.createElement("p");

			var Cbody = document.createTextNode(all[data].gst_body);
			var Clikes = document.createTextNode(all[data].gst_likes);
			 var Cdislikes = document.createTextNode(all[data].gst_dislikes);
			 var Cbtn = document.createTextNode("READ MORE");
			 

			
			 Ndisplay.appendChild(Cbody);
			 likesContainerAlt.appendChild(Clikes);
			 dislikesContainerAlt.appendChild(Cdislikes);
			 btn.appendChild(Cbtn);

			 divContainer.setAttribute("class", "list-group-item");
			 likesContainer.setAttribute("class", "pull-left");
			 likesContainer.setAttribute("src", "style/img/likes.jpg");
			 likesContainer.setAttribute("onclick", "available('"+data+"')");
			 dislikesContainer.setAttribute("onclick", "available('"+data+"')");
			 dislikesContainer.setAttribute("class", "pull-right");
			 dislikesContainer.setAttribute("src", "style/img/dislikes.jpg");
			 btn.setAttribute("class", "btn btn-primary");
			 btn.setAttribute("onclick", "window.location = 'show.html?q=" + data + "'");
			 likesContainerAlt.setAttribute("class", "pull-left");
			 p.setAttribute("id", data);
			 dislikesContainerAlt.setAttribute("class", "pull-right");

			 divContainer.appendChild(Ndisplay);

			 divContainer.appendChild(likesContainer);
			 divContainer.appendChild(likesContainerAlt);
			 divContainer.appendChild(dislikesContainer);
			 divContainer.appendChild(dislikesContainerAlt);
			 divContainer.appendChild(p);
			 divContainer.appendChild(btn);
			 divContainer.appendChild(p);

	
			 var element = document.getElementById("contents");
			 element.appendChild(divContainer);

		}
}

function fromLocal(){
	if (typeof(all) == 'object') {
		var getAll = {all2 : all};
		localStorage.setItem("localStore", JSON.stringify(getAll));	
		}else{
		var all2 = localStorage.getItem("localStore");
		var turnToObj = JSON.parse(all2);
		all = turnToObj.all2;
	}

for (data in all) {

	if (counter == stopper ) {
		break;
	}


		var divContainer = document.createElement("div");
			var Ndisplay = document.createElement("h4");
			var likesContainerAlt = document.createElement("i");
			var dislikesContainerAlt = document.createElement("i");
			var likesContainer = document.createElement("img");
			var dislikesContainer = document.createElement("img");
			var btn = document.createElement("button");
			var p = document.createElement("p");

			var Cbody = document.createTextNode(all["id" + counter].gst_body);
			var Clikes = document.createTextNode(all["id" + counter].gst_likes);
			 var Cdislikes = document.createTextNode(all["id" + counter].gst_dislikes);
			 var Cbtn = document.createTextNode("READ MORE");
			 

			
			 Ndisplay.appendChild(Cbody);
			 likesContainerAlt.appendChild(Clikes);
			 dislikesContainerAlt.appendChild(Cdislikes);
			 btn.appendChild(Cbtn);

			 divContainer.setAttribute("class", "list-group-item");
			 likesContainer.setAttribute("class", "pull-left");
			 likesContainer.setAttribute("src", "style/img/likes.jpg");
			 likesContainer.setAttribute("onclick", "available('id"+counter+"')");
			 dislikesContainer.setAttribute("onclick", "available('id"+counter+"')");
			 dislikesContainer.setAttribute("class", "pull-right");
			 dislikesContainer.setAttribute("src", "style/img/dislikes.jpg");
			 btn.setAttribute("class", "btn btn-primary");
			 btn.setAttribute("onclick", "window.location = 'show.html?q=id" + counter+ "'");
			 likesContainerAlt.setAttribute("class", "pull-left");
			 p.setAttribute("id", "id" + counter);
			 dislikesContainerAlt.setAttribute("class", "pull-right");

			 divContainer.appendChild(Ndisplay);

			 divContainer.appendChild(likesContainer);
			 divContainer.appendChild(likesContainerAlt);
			 divContainer.appendChild(dislikesContainer);
			 divContainer.appendChild(dislikesContainerAlt);
			 divContainer.appendChild(p);
			 divContainer.appendChild(btn);
			 divContainer.appendChild(p);

	
			 var element = document.getElementById("contents");
			 element.appendChild(divContainer);

			  counter++;

		}
/*		if ((all["id" + counter]) == undefined) {
		//when it finishes	
		}*/
}


function available(data){
	document.getElementById(data).setAttribute("class", "alert alert-info");
	document.getElementById(data).innerHTML = 'Sorry, feature not available now!!';
}