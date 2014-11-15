
$(document).ready(function(){
// $('button').click(function(){
//         $.post('http://localhost:3000/',{},function(data){
//             // alert('hehe')
//             console.log(data)
//         })    
//     })

$('button').click(function(){
    $.post('http://localhost:3000/',{},function(data){
        // alert('hehe')
        console.log('click')
    })
        // $('#text').text('click')
})

// $.post('http://localhost:3000/',{},function(data){
//         // alert('hehe')
//     console.log(data)
// })

})
