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

chrome.contextMenus.onClicked.addListener(function(info) {
    console.log(info);
    if (info.menuItemId == "tag-create") {
            console.log('Creating a Tag');
            var tag = document.createElement('tag');
            tag.type = 'text';
            tag.setAttribute('style', 'width: 120px; height: 20px;');
            const elements = document.querySelectorAll(':hover');
            elements[0].appendChild(tag);
    }
});
