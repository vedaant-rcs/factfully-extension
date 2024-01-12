chrome.contextMenus.removeAll(() => {
  chrome.contextMenus.create({
    id: "Site_blocker_4",
    title: "Run fact check",
    contexts: ["all", "page", "selection"],
  });
});


async function check_fr(text) {
  let url = "http://factfully.riverdale.edu:5000/?text="+text;
  chrome.windows.create({
    url: url,
    type: "popup",
    top: 0,
    left: 1000,
    width: 250,
    height: 400,
});

}

function clickHandler(info, tab) {
  check_fr(info.selectionText);
}

chrome.runtime.onInstalled.addListener(function() {
  //create context menus
})

chrome.contextMenus.onClicked.addListener(clickHandler);

