
// let a = document.getElementsByTagName('script')
// console.log(a)

// a.map((ele, index) => {
// console.log(ele, index)
// });

// Array.from(a).forEach(elem=>{console.log(elem)})


// function removefile(filename, filetype) {



// }

// let btn =  document.getElementById("btn");
// // console.log(btn);
// btn.addEventListener('click', message());

// function message() {
//     console.log("message called")
//     let [tab] = 
// }
// const sendMessageButton = document.getElementById('sendMessage')
// sendMessageButton.onclick = async function(e) {
//     let queryOptions = { active: true, currentWindow: true };
//     let tab = await chrome.tabs.query(queryOptions);

//     chrome.tabs.sendMessage(tabs[0].id, {color: "#00FF00"}, function(response) {
//         console.log(response.status);
//     });
// }

console.log("this is console for index js")
const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: removejscssfile
    });
});


function removejscssfile(filename, filetype) {
    alert("this is alert0")
    console.log("this is console for message function ")
    var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none"
    var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none"
    var allsuspects = document.getElementsByTagName(targetelement)
    for (var i = allsuspects.length; i >= 0; i--) {
        if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1)
            allsuspects[i].parentNode.removeChild(allsuspects[i])
    }


}

removejscssfile("", "js");
