$(document).ready(function(){
    $.post('http://localhost:3000/visual', function(ret) {
        
    })


    var webctx = $("#webpages").get(0).getContext("2d");
    var playctx = $("#playsteps").get(0).getContext("2d");
    var neckctx = $("#neckMaxAngle").get(0).getContext("2d");

    var playData = {
        labels : ["1","2","3","4","5","6","7"],
        datasets : [
            {
                fillColor : "rgba(204, 102, 0,0.5)",
                strokeColor : "rgba(204, 153, 0,1)",
                pointColor : "rgba(208 ,133, 4,1)",
                pointStrokeColor : "#fff",
                data : [8,64,27,99,51,42,16]
            },
        ]
    }

    var neckAngleData = {
        labels : ["1","2","3","4","5","6","7"],
        datasets : [

            {
                fillColor : "rgba(151,187,205,0.5)",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                data : [28,48,40,19,96,27,100]
            }
        ]
    }

    var webPageData = [
        {
            value: 30,
            color:"#F7464A"
        },
        {
            value : 50,
            color : "#E2EAE9"
        },
        {
            value : 100,
            color : "#D4CCC5"
        },
        {
            value : 40,
            color : "#949FB1"
        },
        {
            value : 120,
            color : "#4D5360"
        }

    ]
    new Chart(webctx).Doughnut(webPageData)
    new Chart(playctx).Line(playData)
    new Chart(neckctx).Bar(neckAngleData)

})
    
