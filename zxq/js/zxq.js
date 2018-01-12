(function () {

	chrome.browserAction.onClicked.addListener(function (tab) {
		chrome.tabs.create({url: "../newTab.html"});
	});

})();