function postDate() {
    $.post('http://localhost:3000/', {date:new Date()}, function(ret) {
        console.log(ret)
    })

}

function openRelaxTab() {
    chrome.tabs.create(
        {
            url: 'http://localhost:3000/relax'
        },
        function(tab) { 
            console.log ('open')
        }
    )
}


function getCurrentTab() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      var urls = tabs[0].url.split('\/')
      var url = urls[0] + '//' + urls[2]
      console.log(url);

    });
}

$(document).ready(function() {
    // setInterval( postDate, 8000 )
    setInterval(getCurrentTab, 3000)
})

