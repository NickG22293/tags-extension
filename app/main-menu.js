let mainMenu = document.getElementById('main-menu');

chrome.storage.sync.get('color', (data) => {
    mainMenu.style.backgroundColor = data.color;
    mainMenu.setAttribute('value', data.color);
});

mainMenu.onclick = (element) => {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
};