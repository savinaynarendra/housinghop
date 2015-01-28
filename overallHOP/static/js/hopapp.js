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


    var generateActiveUsersLineChart = function (data) {
        var num_users_array = [];
        num_users_array.push('Active Users');
        var num;
        for (var i = data.length - 1; i >= 0; i--) {
            console.log(data[i].num_users);
            num = parseInt(data[i].num_users, 10);
            num_users_array.push(num);
        };

        var chart = c3.generate({
            bindto: '#chart',
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }


    var generateConversionLineChart = function (data) {
        var num_users_array = [];
        num_users_array.push('Conversion');
        var num;
        for (var i = data.conversion.length - 1; i >= 0; i--) {
            console.log(data.conversion[i].num_users);
            num = parseInt(data.conversion[i].num_users, 10);
            perc = num/parseInt(data.activeusers[i].num_users, 10)
            num_users_array.push(perc*100);
        };

        var chartConversion = c3.generate({
            bindto: '#chartConversion',
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }

    var generateActiveUsersDonutChart = function (data) {
        var organicChannel = [];
        var socialChannel = [];
        var emailChannel = [];
        var directChannel = [];
        var paidChannel = [];
        var organic = 0;
        var social = 0;
        var email = 0;
        var direct = 0;
        var paid = 0;

        organicChannel.push('organic');
        socialChannel.push('social');
        emailChannel.push('email');
        directChannel.push('direct');
        paidChannel.push('paid');

        for (var i = data.length - 1; i >= 0; i--) {
            organic = organic + data[i].channels.organic;
            social = social + data[i].channels.social;
            email = email + data[i].channels.email;
            direct = direct + data[i].channels.direct;
            paid = paid + data[i].channels.paid;
        };

        console.log(organic, social, email, direct, paid);

        organicChannel.push(organic);
        socialChannel.push(social);
        emailChannel.push(email);
        directChannel.push(direct);
        paidChannel.push(paid);

        var donutChart = c3.generate({
            bindto: '#donutChart',
            data: {
                columns: [
                    organicChannel,
                    socialChannel,
                    emailChannel,
                    directChannel,
                    paidChannel,
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
                title: "Channel-wise Active Users"
            }
        });
    }



    var generateConversionDonutChart = function (data) {
        var organicChannel = [];
        var socialChannel = [];
        var emailChannel = [];
        var directChannel = [];
        var paidChannel = [];
        var organic = 0;
        var social = 0;
        var email = 0;
        var direct = 0;
        var paid = 0;

        organicChannel.push('organic');
        socialChannel.push('social');
        emailChannel.push('email');
        directChannel.push('direct');
        paidChannel.push('paid');

        for (var i = data.length - 1; i >= 0; i--) {
            organic = organic + data[i].channels.organic;
            social = social + data[i].channels.social;
            email = email + data[i].channels.email;
            direct = direct + data[i].channels.direct;
            paid = paid + data[i].channels.paid;
        };

        console.log(organic, social, email, direct, paid);

        organicChannel.push(organic);
        socialChannel.push(social);
        emailChannel.push(email);
        directChannel.push(direct);
        paidChannel.push(paid);

        var donutChartConversion = c3.generate({
            bindto: '#donutChartConversion',
            data: {
                columns: [
                    organicChannel,
                    socialChannel,
                    emailChannel,
                    directChannel,
                    paidChannel,
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
                title: "Channel-wise Conversion"
            }
        });
    }


    var today = new Date();
    today = today.getDate() + '/' + (today.getMonth() + 1) + '/' +  today.getFullYear()
    console.log(today);
    $('#dp3').datepicker();

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
                generateActiveUsersLineChart(data.activeusers);
                generateActiveUsersDonutChart(data.activeusers);
                generateConversionLineChart(data);
                generateConversionDonutChart(data.conversion)
            },
            error: function(err) {
                console.log("error: ", err);
            }
        })

    })

});