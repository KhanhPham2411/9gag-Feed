
function onWindowLoad() {

  var message = document.querySelector('#message');

  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.extension.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.extension.lastError.message;
    }
  });

}
document.addEventListener('DOMContentLoaded', function() {
	//Init
	var BGPage = chrome.extension.getBackgroundPage();
	parent = 'elements[i].parentNode.style.display';
	codeHideChecked = "var elements = document.getElementsByClassName(\"checked\");for (var i = 0; i < elements.length; i++){"+parent+" = \"none\";}"
	codeShowChecked = "var elements = document.getElementsByClassName(\"checked\");for (var i = 0; i < elements.length; i++){"+parent+" = \"block\";}"
	codeHideCheck9gag = "var elements = document.getElementsByClassName(\"checked9gag\");for (var i = 0; i < elements.length; i++){"+parent+" = \"none\";}"
	codeShowCheck9gag = "var elements = document.getElementsByClassName(\"checked9gag\");for (var i = 0; i < elements.length; i++){"+parent+" = \"block\";}"
	// btnFanpage
    var btnFanpage = document.getElementById('btnFanpage');
    btnFanpage.addEventListener('click', function() {
		chrome.tabs.executeScript( null, {code:"window.open(\"https://www.facebook.com/pages/9GAG-Feed/909938539049281\",\"_self\")"},
	   function(results){ console.log(results); } );
    });
	// btnDefault
	var btnDefault = document.getElementById('btnDefault');
    btnDefault.addEventListener('click', function() {
		chrome.tabs.executeScript( null, {code: "mode=3;"+codeShowCheck9gag+codeShowChecked},
	   function(results){ console.log(results); } );
    });
	// btnShow
	var btnShow = document.getElementById('btnShow');
    btnShow.addEventListener('click', function() {
		chrome.tabs.executeScript( null, {code: "mode=2;"+codeShowCheck9gag+codeHideChecked},
	   function(results){ console.log(results); } );
    });
	// btnHide
	var btnHide = document.getElementById('btnHide');
    btnHide.addEventListener('click', function() {
		chrome.tabs.executeScript( null, {code: "mode=1;"+codeHideCheck9gag+codeShowChecked},
	   function(results){ console.log(results); } );
    });
});


