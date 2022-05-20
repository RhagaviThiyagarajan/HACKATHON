//Create functionality to Retrieve channel information

async function foo()
{
var button=document.createElement("button");
button.setAttribute("type","submit");
button.setAttribute("id","channel");
button.setAttribute("required",true);
button.innerHTML="channel information";
//<button type=button id="playlist">click here for playlist</button>
//<br>
var br=document.createElement("br");

var button1=document.createElement("button");
button1.setAttribute("type","submit");
button1.setAttribute("id","PlaylistItemListResponse");
button1.innerHTML="playlist";
var br1=document.createElement("br");

var subsbutton=document.createElement("button");
subsbutton.setAttribute("type","submit");
subsbutton.setAttribute("id","SubscriptionContentDetails");
subsbutton.innerHTML="subscription details";
var br2=document.createElement("br");

var  checkchannel=document.createElement("input");
checkchannel.setAttribute("type","checkbox");
checkchannel.setAttribute("id","PlaylistSnippet");
checkchannel.innerHTML="new playlist";

var br3=document.createElement("br");


var update=document.createElement("input");
update.setAttribute("type","checkbox");
update.setAttribute("id","update");
// subsbutton.append(update,br3,checkchannel,br2);
// button1.append(subsbutton,br1);

document.body.append(update,br3,checkchannel,br2,subsbutton,button1,br,button);



var channel=document.getElementById("channel");
channel.addEventListener("submit",(event)=>
{
    event.preventDefault();
})

var playlist=document.getElementById("PlaylistItemListResponse");
PlaylistItemListResponse.addEventListener("onload",(event)=>
{
    event.data();
})

var subscription=document.getElementById("SubscriptionContentDetails");
SubscriptionContentDetails.addEventListener("onclick",(event)=>
{
    event.data();
})

var playlistnew=document.getElementById("PlaylistSnippet");
PlaylistSnippet.addEventListener("onload",(event)=>
{
    event.data();
})

var update=document.getElementById("update");
update.addEventListener("onload",(event)=>
{
    event.preventDefault();
})
var url=`https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest`;
console.log(url);
bar(url);

 async function bar(url)
 {
     let response=await fetch(url);
 console.log(response);
     var data=await response.json();
     console.log(data);
 
channel.append(`${data.ChannelProfileDetails}`);
playlist.append(`${data.PlaylistItemSnippet}`);
subscription.append(`${data.SubscriptionContentDetails}`);
playlistnew.append(`PlaylistNew${data.PlaylistSnippet}`);
update.append(`update${data.update}`);


document.body.append(channel,playlist,subscription,playlistnew,update);
 }
// 
}
foo();


//Create functionality to Uploaded videos and system-generated playlists
