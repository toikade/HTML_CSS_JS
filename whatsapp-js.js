let classy=(i)=>document.getElementsByClassName(i); //shorthand for element class query
let idy=(i)=>document.getElementById(i);  //shorthand for id element query
//let hide_nav_on_scroll=outer(); //call outer for the first time to return the inner fxn
window.onload=()=>{chat_sec_func(); listeners(); };
/*set event listeners*/
function listeners(){
	idy("chat_sec").setAttribute("onclick", "chat_sec_func()"); //set chat_sec_func onclick from DOM
			idy("status_sec").setAttribute("onclick", "status_sec_func()"); //set status_sec_func onclick from DOM
			idy("calls_sec").setAttribute("onclick", "calls_sec_func()"); //set calls_sec_func onclick from DOM
			idy("menu_dots").setAttribute("onclick", "show_menu_bar()"); //set 3_dots menu drop function from DOM
			idy("glass_cont").setAttribute("onclick", "show_search_bar()"); //set the search icon event and event handler from DOM
			idy("search_bar_arrow").setAttribute("onclick", "hide_search_bar()");
			window.addEventListener("scroll", hide_nav_on_scroll);
			//window.addEventListener("DOMContentLoaded", ()=>{window.scroll(0,0)});
			
}
//message section under the green navbar
function makeMessage(){
		let messageBody=document.createDocumentFragment();
		let names=["hacker", "pentester", "CODER", "HaxOR", "pythoNer", "devConer", "Netmast3r", "Fuxher"];
		let nameMessages=["hello I need you to modify this code",
					  "my pen is not writing, please can you test it?",
					  "code!, code!, code! infinitely, that is the key to the top",
					  "Haxor! what a shadowy name. i don't trust you!",
					  "pythoner, I guess you deal with snakes. its not a good idea",
					  "Yeah I would like to book a place for next year",
					  "typing...",
					  "Judging by the quality of your work, I won't be wrong to replace the x in your name with a c."
					  ];
		let times=["12:26pm", "4:12am", "9:13pm", "Yesterday", "5:59pm", "04/08/2020", "8:56am", "9:06am"];
		let infoArr=[names, nameMessages, times];
		let con=0;
		let message=document.createElement("div");
			message.setAttribute("id", "message");
			for(let i=0;i<8;con++){
				let message=document.createElement("div");
				message.setAttribute("id", "message");
				for(let j in infoArr){
				//console.log(infoArr[j][con]);
				}
				message.innerHTML=`<span class="img1"><img src="penguins.jpg" width="50px" height="50px" alt=""></span><span class="name1">${infoArr[0][con]}</span><span class="msg1">${infoArr[1][con]}</span><span class="time1">${infoArr[2][con]}</span><hr>`;
				//console.log(infoArr[2][con]);
				if(infoArr[1][con]=="typing..."){
					console.log("true");
					message.getElementsByTagName("span")[2].setAttribute("style", "color:#075e54;");
				}
				message.getElementsByTagName("span")[2].setAttribute("style", "//border:2px solid #075e54;");
				messageBody.appendChild(message);
				i++;
				//break;
			}
			message_part.appendChild(messageBody);
		//for(var i=0; i<8; i++){	
			//message_part.appendChild(message.cloneNode(true)); /*TEST_CODE for node cloning*/ 
		//}
		//message_part.style.marginTop="3vh";
};
//show or hide the three_dots menu
function show_menu_bar(){
	idy("bottom_nav").style.zIndex="-1";	/*this makes the bottom_nav to stop hiding the menu*/
	classy("_3_dots_menu")[0].style.visibility="visible";
	document.addEventListener("click", function(){
			classy("_3_dots_menu")[0].style.visibility="hidden";
			idy("bottom_nav").style.zIndex="auto";  	/* sets the bottom_nav to default value*/
	}, true)
}

//show the chat subsection
let ids=["chat_sec", "status_sec", "calls_sec", "message_part"];
function chat_sec_func(){
	idy(ids[0]).style.borderBottom="4px solid #FFFFFF";
	idy(ids[1]).style.border="none";
	idy(ids[2]).style.border="none";
	makeMessage();
}
//show the status subsection
function status_sec_func(){
	idy(ids[0]).style.border="none";
	idy(ids[1]).style.borderBottom="4px solid #FFFFFF";
	idy(ids[2]).style.border="none";
	idy(ids[3]).innerHTML="";
}
//show the calls subsection
function calls_sec_func(){
	idy(ids[0]).style.border="none";
	idy(ids[1]).style.border="none";
	idy(ids[2]).style.borderBottom="4px solid #FFFFFF";
	idy(ids[3]).innerHTML="";
}
function show_search_bar(){
	idy("right_side_top_nav").style.width="100vw";
	classy("search_text_bar")[0].style.visibility="visible";
	idy("search_bar_arrow").style.visibility="visible";
	idy("bottom_nav").style.visibility="hidden";
	idy("message_part").style.top="50px";
	//idy("green_part").style.height="50px";
	focusMethod();
	
	/*document.body.addEventListener("click", function(){
			
			
	}, true);*/
}
function hide_search_bar(){
	classy("search_text_bar")[0].style.visibility="hidden";
	idy("right_side_top_nav").style.width="40%";
	idy("search_bar_arrow").style.visibility="hidden";
	idy("bottom_nav").style.visibility="visible";
	//idy("green_part").style.height="100px";
	idy("message_part").style.top="100px";
}
focusMethod= function getFocus(){   //focus directly on the search bar
	idy("search_box").focus();
}
/*function hide_nav_on_scroll(){
		let scrollVal=0;
		if(pageYOffset>scrollVal){
			idy("top_nav").style.visibility="hidden";
			idy("bottom_nav").style.position="fixed";
			//idy("bottom_nav").style.top=0;
			message_part.style.marginTop=`-${getComputedStyle(idy("top_nav")).height}`;
			
		}else {
			idy("top_nav").style.visibility="";
			idy("bottom_nav").style.position="";
			console.log(scrollVal+"up");
		}
		scrollVal=pageYOffset;
		console.log(scrollVal,pageYOffset);
}*/
 let hide_nav_on_scroll=(function outer(){
    //var maxim=document.body.scrollHeight-innerHeight;
	let scrollVal=10;
	console.log("init");
    //let scrollVal=maxim;
    function inner(){
		console.log(scrollVal, pageYOffset, "start");
        if(pageYOffset>scrollVal){				/*HIDE THE TOP NAV OR SCROLLING DOWN*/
          //idy("top_nav").style.top=`-${getComputedStyle(idy("top_nav")).top}`;
			idy("bottom_nav").style.position="fixed";
			idy("bottom_nav").style.top=0;
			//message_part.style.marginTop=`-${getComputedStyle(idy("top_nav")).height}`;
            scrollVal=pageYOffset;
			console.log(scrollVal + " down");
        }else if(pageYOffset<=scrollVal){
			idy("top_nav").style.position="fixed";
            //idy("bottom_nav").style.top=`${getComputedStyle(idy("bottom_nav")).height}`;
			idy("bottom_nav").style.position="fixed";
			//message_part.style.marginTop="-0.5vh";
			//message_part.style.marginTop=`${getComputedStyle(idy("top_nav")).height}`;
			idy("bottom_nav").style.top="50px";
			idy("bottom_nav").style.transition="top 0.25s";
			
			scrollVal=pageYOffset;
			console.log(scrollVal +" up");
        }
    }
    return inner;
})();
/*message_part.firstChild.textContent=scrollTop;
			idy("top_nav").style.position="relative";
			idy("bottom_nav").style.top="0";
			message_part.style.marginTop=`-${getComputedStyle(idy("top_nav")).height}`;
			//document.body.onscroll=scrollCheck;
		}else if(getScroll<scrollVal){
			document.write("hello");
		}
/*}*/	