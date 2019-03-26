/*
* Nick Gordon - 2018
*/

const popup = function(word) {
    console.log('popup');
};

const init = function() {
    console.log('init');
    chrome.contextMenus.create({
        title: 'Create Tag',
        type: 'normal',
        contexts: ['all'],
        // onclick: popup,
        id: "tag-create"
    });
}

chrome.runtime.onInstalled.addListener(function() {
  // When the app gets installed, perform setup
  init();
});

chrome.contextMenus.onClicked.addListener(function(itemData) {
  if (itemData.menuItemId == "tag-create")
    console.log('event for cntxt menu');
});
