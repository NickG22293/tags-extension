/*
* Nick Gordon - 2018
*/
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

let x, y;
let getCoords = (event) => {
    console.log(event);
    event = event || window.event;
    switch (event.which) {
        case 3:
            console.log('setting coords to: ' + event.clientX + ' ' + event.clientY);
            x = event.clientX;
            y = event.clientY;
            break;
    }
};

document.onclick = (event) => {
    console.log(event);
};

// document.body.onload = () => {
//     console.log('Body loading. Assigning MouseDown event');
//     console.log(document.onmousedown);
// };

chrome.runtime.onInstalled.addListener(() => {
  // When the app gets installed, perform setup
  init();
});

chrome.onClicked.addListener((event) => {
    console.log('THE WINDOW HAS BEEN CLIIIIICKED');
    console.log(event);
});

chrome.contextMenus.onClicked.addListener((info) => {
    console.log(info);
    if (info.menuItemId == "tag-create") {
            console.log('Creating a Tag');
            var tag = document.createElement('div');
            tag.type = 'text';
            tag.setAttribute('style', 'position: fixed; display: none; width: 100%; height: 100%; \
                top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.5); z-index: 2; cursor: pointer;');
            // tag.classList.add('tag');
            // const elements = document.querySelectorAll(':hover');
            // elements[0].appendChild(tag);
    }
});
