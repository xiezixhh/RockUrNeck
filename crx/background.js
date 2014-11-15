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

$(document).ready(function() {
    setInterval( postDate, 8000 )

})

