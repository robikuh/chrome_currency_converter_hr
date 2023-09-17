const exchangeRate = 7.53450;

function convertEURtoKuna(tabId, selectedText) {
    // return if selected text greater than 10 characters
    if (selectedText.length > 15) return;

    //show warming if selected text contains a hrk, HRK or kn
    if (selectedText.includes('kn') || selectedText.includes('HRK') || selectedText.includes('hrk')) {
        chrome.scripting.executeScript({
            target: { tabId },
            function: () => {
                alert('Selected text contains a HRK, hrk or kn. Please select only the amount in €.');
            }
        }).catch(err => console.error(err));
        return;
    }

    // show warming if selected text is not a number
    const amount = parseFloat(selectedText.replace(',', '.').replace(' €', '').replace('€', '').replace(' kn', '').replace('kn', '').replace(' HRK', '').replace('HRK', ''));
    if (isNaN(amount)) {
        chrome.scripting.executeScript({
            target: { tabId },
            function: () => {
                alert('Selected text is not a number. Please select only the amount in €.');
            }
        }).catch(err => console.error(err));
        return;
    }

    const converted = (amount * exchangeRate).toLocaleString('hr-HR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' kn';

    chrome.scripting.executeScript({
        target: { tabId },
        function: (convertedVal) => {
            alert(`Converted: ${convertedVal}`);
        },
        args: [converted]
    }).catch(err => console.error(err));
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "convertToKuna",
        title: "Convert € to kn",
        contexts: ["selection"],
        documentUrlPatterns: ["*://*/*"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "convertToKuna") {
        convertEURtoKuna(tab.id, info.selectionText);
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'convertSelection') {
        convertEURtoKuna(sender.tab.id, message.selection);
    }
});
