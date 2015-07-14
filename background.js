
chrome.tabs.onCreated.addListener(function() {
	console.log('tabs.onCreated');
});
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	console.log('tabs.onUpdated');
});

chrome.runtime.onStartup.addListener(function () {
    window.alarm_suffix = Date.now();
});
chrome.alarms.create('myAlarm' + window.alarm_suffix, {
    delayInMinutes : 0.1, periodInMinutes: 0.05
});

chrome.alarms.onAlarm.addListener(function() {
  chrome.tabs.executeScript(null, {
    file: "gagPage.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.extension.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.extension.lastError.message;
    }
  });
});



