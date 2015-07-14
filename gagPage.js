try{mode}catch(err){mode=3}

function Append(source,append,pos)
{
	return source.substring(0,pos) + append+ source.substring(pos);
}
function createTitle(title)
{
	p = document.createElement('p');
	p.innerHTML = title;
	return p;
}
function appendImage(post,url)
{
	img = document.createElement('img');
	img.src = url;
	img.style.width = "470px";
	
	temp = post.getElementsByClassName('userContent')[0]
	temp.appendChild(img);
	
	code = img.parentNode.childNodes[1];
	code.parentNode.removeChild(code);
}
function appendVideo(post,url)
{
	video = document.createElement('video');
	video.preload = 'auto';
	video.loop = 'true';
	video.muted = '';
	video.style.width = "470px";
	video.autoplay = 'autoplay';
	source = document.createElement('source');
	source.src = url;
	video.appendChild(source)
	
	temp = post.getElementsByClassName('userContent')[0]
	temp.appendChild(video);
	
	code = video.parentNode.childNodes[1];
	code.parentNode.removeChild(code);
}
function ChangeGagPost(post){
	start = post.innerHTML.indexOf('@@');
	end = post.innerHTML.indexOf('%%')
	if(start === -1 || end === -1)
	{
		post.className = 'checked';
		DisplayMode(post);
		return;
	}
	var code = post.innerHTML.substring(start+2,end);
	var outercode = '@@'+code+'%%';
	var url = 'http://img-9gag-fun.9cache.com/photo/';
	var html;
	if(code.indexOf('.mp4') > -1)
	{
		appendVideo(post,url+code)
	}
	else
	{
		appendImage(post,url+code);
	}
	
	post.className = 'checked9gag';
	DisplayMode(post);
}
function toggle(displayState){
    var elements = document.getElementsByClassName('float_form')

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = displayState;
    }
}
function main(){
	var Posts = document.getElementsByClassName('userContentWrapper');
	if(Posts.length === 0) return;
	for (i = 0; i < Posts.length; i++) { 
		ChangeGagPost(Posts[i]);
	}
}
function DisplayMode(post){
	if(post.className === 'checked9gag'){
		if(mode === 1){
			post.parentNode.style.display = "none";
		}
		if(mode === 2 || mode === 3){
			post.parentNode.style.display = "block";
		}
	}
	else{
		if(mode === 1 || mode === 3){
			post.parentNode.style.display = "block";
		}
		if(mode === 2 ){
			post.parentNode.style.display = "none";
		}
	}
}
main();
