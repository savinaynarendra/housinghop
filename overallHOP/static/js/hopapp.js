$(function() {
    $('#submit-request').click(function(event) {
        console.log("inside submit request");
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "/app/sendemail/",
            data: {
                'message': $('#request').val()
            },
            success: function() {
                console.log("Success");
            },
            error: function(err) {
                console.log("error: ", err);
            }
        })
    });
    var donutChart = c3.generate({
        bindto: '#donutChart',
        data: {
            columns: [
                ['data3', 30],
                ['data4', 120],
            ],
            type: 'donut',
            onclick: function(d, i) {
                console.log("onclick", d, i);
            },
            onmouseover: function(d, i) {
                console.log("onmouseover", d, i);
            },
            onmouseout: function(d, i) {
                console.log("onmouseout", d, i);
            }
        },
        donut: {
            title: "Iris Petal Width"
        }
    });
    setTimeout(function() {
        donutChart.load({
            columns: [
                ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
            ]
        });
    }, 1500);
    // setTimeout(function () {
    //     donutChart.unload({
    //         ids: 'data3'
    //     });
    //     donutChart.unload({
    //         ids: 'data4'
    //     });
    // }, 2500);
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            columns: [
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 50, 20, 10, 40, 15, 25]
            ]
        }
    });
    // setTimeout(function () {
    //     chart.load({
    //         columns: [
    //             ['data1', 230, 190, 300, 500, 300, 400]
    //         ]
    //     });
    // }, 1000);
    // setTimeout(function () {
    //     chart.load({
    //         columns: [
    //             ['data2', 130, 150, 200, 300, 200, 100]
    //         ]
    //     });
    // }, 1500);
    // setTimeout(function () {
    //     chart.unload({
    //         ids: 'data1'
    //     });
    // }, 2000);
    // $("#dp3").datepicker().on('show', function(ev) {
    //     var today = new Date();
    //     var t = today.getDate() + "-" + today.getMonth() + "-" + today.getFullYear();
    //     $('#dp3').data({
    //         date: t
    //     }).datepicker('update');
    // });

    var today = new Date();
    today = today.getDate() + '/' + (today.getMonth() + 1) + '/' +  today.getFullYear()
    console.log(today);
    $('#dp3').datepicker();

    // $('#dp3').datepicker({
    //     'setDate': new Date()
    // });
    $('#dp5').datepicker();

    $('#show-query').on('click', function() {
        var fromDate = $('#dp3').val();
        var toDate = $('#dp5').val();
        console.log(fromDate, toDate);
        $.ajax({
            type: "POST",
            url: "/app/",
            data: {
                'fromDate': fromDate,
                'toDate': toDate
            },
            success: function(data) {
                console.log("Success in getting active users: ", data);
                
                
            },
            error: function(err) {
                console.log("error: ", err);
            }
        })

    })

});