function postDate() {
    $.post('http://localhost:3000/', {date:new Date()}, function(ret) {
        console.log(ret)
    })

}

$(document).ready(function() {
    setInterval( postDate, 2000 )
})