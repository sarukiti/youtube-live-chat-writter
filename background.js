browser.tabs.onUpdated.addListener(function(tabId, info, tab) {
    if (info.status === 'complete' && tab.url.indexOf('youtube.com/watch') !== -1) {
        browser.tabs.executeScript(null, { file: 'callPopup.js' }, () => {});
        browser.tabs.query({"active":true,"currentWindow":false}).then(element=>{
            browser.tabs.remove(element[0].id);
        });
    }
});

browser.runtime.onMessage.addListener((obj) => {
    if(obj.messageId !== "popup") return;
    var createData = {
        type: "popup",
        url: `https://www.youtube.com/live_chat?v=${obj.watchID}`,
        width: 600,
        height: 150
    };
    window = browser.windows.create(createData).then(element=>{
        browser.windows.update(element.id,{top: parseInt(screen.height)-150})
    })
});