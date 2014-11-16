var url

function postDate() {
    $.post('http://localhost:3000/', {
        url : url
    }, function(ret) {
        console.log(ret)
    })

}

function openRelaxTab() {
    chrome.tabs.create(
        {
            url: 'http://localhost:3000/'
        },
        function(tab) { 
            console.log ('open')
        }
    )
}


function getCurrentTab() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var urls = tabs[0].url.split('\/')
        url = urls[0] + '//' + urls[2]
        console.log(url);
    });
}


$(document).ready(function() {
    // var d = new Date().getTime() / 1000.0

    setInterval( postDate, 3000 )
    setInterval( openRelaxTab, 10000000000 )
    setInterval( getCurrentTab, 3000 )
})

