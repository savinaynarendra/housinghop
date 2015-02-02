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
    $('.c3-chart-arcs-title').click(function(event) {
        event.preventDefault();
        var clickedValue = $(this).val();
        console.log("clickedValue: ", clickedValue);
    });
    var generateActiveUsersLineChart = function(data) {
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
            axis: {
                y: {
                    max: 40000
                },
            },
    
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }

    

    var generateActiveUsersLineChartDirect = function(data) {
        console.log("inside direct activeusers linechart");
        var num_users_array = [];
        num_users_array.push('Active Users');
        var num;
        for (var i = data.length - 1; i >= 0; i--) {
            console.log(data[i].channels.direct);
            num = data[i].channels.direct;
            num_users_array.push(num);
        };
        console.log(num_users_array);
        var chart = c3.generate({
            bindto: '#chart',
            axis: {
                y: {
                    max: 40000
                },
            },
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }
    var generateActiveUsersLineChartAffiliate = function(data) {
        console.log("inside affiliate activeusers linechart");
        var num_users_array = [];
        num_users_array.push('Active Users');
        var num;
        for (var i = data.length - 1; i >= 0; i--) {
            console.log(data[i].channels.affiliate);
            num = data[i].channels.affiliate;
            num_users_array.push(num);
        };
        console.log(num_users_array);
        var chart = c3.generate({
            bindto: '#chart',
            axis: {
                y: {
                    max: 40000
                },
            },
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }
    var generateActiveUsersLineChartEmail = function(data) {
        console.log("inside email activeusers linechart");
        var num_users_array = [];
        num_users_array.push('Active Users');
        var num;
        for (var i = data.length - 1; i >= 0; i--) {
            console.log(data[i].channels.email);
            num = data[i].channels.email;
            num_users_array.push(num);
        };
        console.log(num_users_array);
        var chart = c3.generate({
            bindto: '#chart',
            axis: {
                y: {
                    max: 40000
                },
            },
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }
    var generateActiveUsersLineChartOrganic = function(data) {
        console.log("inside organic activeusers linechart");
        var num_users_array = [];
        num_users_array.push('Active Users');
        var num;
        for (var i = data.length - 1; i >= 0; i--) {
            console.log(data[i].channels.organic);
            num = data[i].channels.organic;
            num_users_array.push(num);
        };
        console.log(num_users_array);
        var chart = c3.generate({
            bindto: '#chart',
            axis: {
                y: {
                    max: 40000
                },
            },
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }
    var generateActiveUsersLineChartOther = function(data) {
        console.log("inside other activeusers linechart");
        var num_users_array = [];
        num_users_array.push('Active Users');
        var num;
        for (var i = data.length - 1; i >= 0; i--) {
            console.log(data[i].channels.other);
            num = data[i].channels.other;
            num_users_array.push(num);
        };
        console.log(num_users_array);
        var chart = c3.generate({
            bindto: '#chart',
            axis: {
                y: {
                    max: 40000
                },
            },
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }
    var generateActiveUsersLineChartPaid = function(data) {
        console.log("inside paid activeusers linechart");
        var num_users_array = [];
        num_users_array.push('Active Users');
        var num;
        for (var i = data.length - 1; i >= 0; i--) {
            console.log(data[i].channels.paid);
            num = data[i].channels.paid;
            num_users_array.push(num);
        };
        console.log(num_users_array);
        var chart = c3.generate({
            bindto: '#chart',
            axis: {
                y: {
                    max: 40000
                },
            },
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }
    var generateConversionLineChart = function(data) {
        var num_users_array = [];
        num_users_array.push('Conversion');
        var num;
        console.log("data", data);
        for (var i = data.conversion.length - 1; i >= 0; i--) {
            console.log(data.conversion[i].num_users);
            num = parseInt(data.conversion[i].num_users, 10);
            perc = num / parseInt(data.activeusers[i].num_users, 10)
            num_users_array.push(perc * 100);
        };
        var chartConversion = c3.generate({
            bindto: '#chartConversion',
            axis: {
                y: {
                    max: 15
                },
            },
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }

    var generateConversionLineChartDirect = function(data) {
        console.log("inside direct activeusers linechart");
        var num_users_array = [];
        num_users_array.push('Conversion');
        var num;
        for (var i = data.conversion.length - 1; i >= 0; i--) {
            // console.log(data[i].channels.direct);
            num = parseInt(data.conversion[i].channels.direct, 10);
            perc = num / parseInt(data.activeusers[i].num_users, 10)
            num_users_array.push(perc * 100);
        };
        console.log(num_users_array);
        var chartConversion = c3.generate({
            bindto: '#chartConversion',
            axis: {
                y: {
                    max: 15
                },
            },
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }
    var generateConversionLineChartAffiliate = function(data) {
        console.log("inside affiliate activeusers linechart");
        var num_users_array = [];
        num_users_array.push('Conversion');
        var num;
        for (var i = data.conversion.length - 1; i >= 0; i--) {
            // console.log(data[i].channels.affiliate);
            num = parseInt(data.conversion[i].channels.affiliate, 10);
            perc = num / parseInt(data.activeusers[i].num_users, 10)
            num_users_array.push(perc * 100);
        };
        console.log(num_users_array);
        var chartConversion = c3.generate({
            bindto: '#chartConversion',
            axis: {
                y: {
                    max: 15
                },
            },
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }
    var generateConversionLineChartEmail = function(data) {
        console.log("inside email activeusers linechart");
        var num_users_array = [];
        num_users_array.push('Conversion');
        var num;
        for (var i = data.conversion.length - 1; i >= 0; i--) {
            // console.log(data[i].channels.email);
            num = parseInt(data.conversion[i].channels.email, 10);
            perc = num / parseInt(data.activeusers[i].num_users, 10)
            num_users_array.push(perc * 100);
        };
        console.log(num_users_array);
        var chartConversion = c3.generate({
            bindto: '#chartConversion',
            axis: {
                y: {
                    max: 15
                },
            },
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }
    var generateConversionLineChartOrganic = function(data) {
        console.log("inside organic activeusers linechart");
        var num_users_array = [];
        num_users_array.push('Conversion');
        var num;
        for (var i = data.conversion.length - 1; i >= 0; i--) {
            // console.log(data[i].channels.organic);
            num = parseInt(data.conversion[i].channels.organic, 10);
            perc = num / parseInt(data.activeusers[i].num_users, 10)
            num_users_array.push(perc * 100);
        };
        console.log(num_users_array);
        var chartConversion = c3.generate({
            bindto: '#chartConversion',
            axis: {
                y: {
                    max: 15
                },
            },
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }
    var generateConversionLineChartOther = function(data) {
        console.log("inside other activeusers linechart");
        var num_users_array = [];
        num_users_array.push('Conversion');
        var num;
        for (var i = data.conversion.length - 1; i >= 0; i--) {
            // console.log(data[i].channels.other);
            num = parseInt(data.conversion[i].channels.other, 10);
            perc = num / parseInt(data.activeusers[i].num_users, 10)
            num_users_array.push(perc * 100);
        };
        console.log(num_users_array);
        var chartConversion = c3.generate({
            bindto: '#chartConversion',
            axis: {
                y: {
                    max: 15
                },
            },
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }
    var generateConversionLineChartPaid = function(data) {
        console.log("inside paid activeusers linechart");
        var num_users_array = [];
        num_users_array.push('Conversion');
        var num;
        for (var i = data.conversion.length - 1; i >= 0; i--) {
            // console.log(data[i].channels.paid);
            num = parseInt(data.conversion[i].channels.paid, 10);
            perc = num / parseInt(data.activeusers[i].num_users, 10)
            num_users_array.push(perc * 100);
        };
        console.log(num_users_array);
        var chartConversion = c3.generate({
            bindto: '#chartConversion',
            axis: {
                y: {
                    max: 15
                },
            },
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }

    var generateContactRequestsLineChart = function(data) {
        var num_users_array = [];
        num_users_array.push('Contact Requests');
        var num;
        for (var i = data.length - 1; i >= 0; i--) {
            // console.log(data[i].num_users);
            num = parseInt(data[i].num_users, 10);
            num_users_array.push(num);
        };
        var chart = c3.generate({
            bindto: '#chartContactRequests',
            axis: {
                y: {
                    max: 5000
                },
            },
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }

    var generateContactRequestsLineChartDirect = function(data) {
        // console.log("inside direct activeusers linechart");
        var num_users_array = [];
        num_users_array.push('Contact Requests');
        var num;
        for (var i = data.length - 1; i >= 0; i--) {
            console.log(data[i].channels.direct);
            num = data[i].channels.direct;
            num_users_array.push(num);
        };
        console.log(num_users_array);
        var chart = c3.generate({
            bindto: '#chartContactRequests',
            axis: {
                y: {
                    max: 5000
                },
            },
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }
    var generateContactRequestsLineChartAffiliate = function(data) {
        // console.log("inside affiliate activeusers linechart");
        var num_users_array = [];
        num_users_array.push('Contact Requests');
        var num;
        for (var i = data.length - 1; i >= 0; i--) {
            console.log(data[i].channels.affiliate);
            num = data[i].channels.affiliate;
            num_users_array.push(num);
        };
        console.log(num_users_array);
        var chart = c3.generate({
            bindto: '#chartContactRequests',
            axis: {
                y: {
                    max: 5000
                },
            },
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }
    var generateContactRequestsLineChartEmail = function(data) {
        console.log("inside email activeusers linechart");
        var num_users_array = [];
        num_users_array.push('Active Users');
        var num;
        for (var i = data.length - 1; i >= 0; i--) {
            console.log(data[i].channels.email);
            num = data[i].channels.email;
            num_users_array.push(num);
        };
        console.log(num_users_array);
        var chart = c3.generate({
            bindto: '#chartContactRequests',
            axis: {
                y: {
                    max: 5000
                },
            },
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }
    var generateContactRequestsLineChartOrganic = function(data) {
        console.log("inside organic activeusers linechart");
        var num_users_array = [];
        num_users_array.push('Active Users');
        var num;
        for (var i = data.length - 1; i >= 0; i--) {
            console.log(data[i].channels.organic);
            num = data[i].channels.organic;
            num_users_array.push(num);
        };
        console.log(num_users_array);
        var chart = c3.generate({
            bindto: '#chartContactRequests',
            axis: {
                y: {
                    max: 5000
                },
            },
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }
    var generateContactRequestsLineChartOther = function(data) {
        console.log("inside other activeusers linechart");
        var num_users_array = [];
        num_users_array.push('Active Users');
        var num;
        for (var i = data.length - 1; i >= 0; i--) {
            console.log(data[i].channels.other);
            num = data[i].channels.other;
            num_users_array.push(num);
        };
        console.log(num_users_array);
        var chart = c3.generate({
            bindto: '#chartContactRequests',
            axis: {
                y: {
                    max: 5000
                },
            },
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }
    var generateContactRequestsLineChartPaid = function(data) {
        console.log("inside paid activeusers linechart");
        var num_users_array = [];
        num_users_array.push('Active Users');
        var num;
        for (var i = data.length - 1; i >= 0; i--) {
            console.log(data[i].channels.paid);
            num = data[i].channels.paid;
            num_users_array.push(num);
        };
        console.log(num_users_array);
        var chart = c3.generate({
            bindto: '#chartContactRequests',
            axis: {
                y: {
                    max: 5000
                },
            },
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }

    var generateUserEngagementBarChart = function(data) {
        var num_users_array = [];
        num_users_array.push('User Engagement');
        var num;
        var chartUserEngagement = c3.generate({
            bindto: '#chartUserEngagement',
            data: {
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 130, 100, 140, 200, 150, 50]
                ],
                type: 'bar'
            },
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                }
            }
        });
    }
    var generateActiveUsersDonutChart = function(data) {
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
                    console.log("onclick", d);
                    if (d.id == 'direct') {
                        donutChart.focus('direct');
                        generateActiveUsersLineChartDirect(data);
                    }
                    if (d.id == 'affiliate') {
                        generateActiveUsersLineChartAffiliate(data);
                    }
                    if (d.id == 'other') {
                        generateActiveUsersLineChartOther(data);
                    }
                    if (d.id == 'email') {
                        generateActiveUsersLineChartEmail(data);
                    }
                    if (d.id == 'social') {
                        generateActiveUsersLineChartSocial(data);
                    }
                    if (d.id == 'paid') {
                        generateActiveUsersLineChartPaid(data);
                    }
                    if (d.id == 'organic') {
                        generateActiveUsersLineChartOrganic(data);
                    }
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
    var generateConversionDonutChart = function(data) {
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
                    if (d.id == 'direct') {
                        console.log("direct conversion");
                        donutChart.focus('direct');
                        console.log(window.backendData);
                        generateConversionLineChartDirect(window.backendData);
                    }
                    if (d.id == 'affiliate') {
                        generateConversionLineChartAffiliate(window.backendData);
                    }
                    if (d.id == 'other') {
                        generateConversionLineChartOther(window.backendData);
                    }
                    if (d.id == 'email') {
                        generateConversionLineChartEmail(window.backendData);
                    }
                    if (d.id == 'social') {
                        generateConversionLineChartSocial(window.backendData);
                    }
                    if (d.id == 'paid') {
                        generateConversionLineChartPaid(window.backendData);
                    }
                    if (d.id == 'organic') {
                        generateConversionLineChartOrganic(window.backendData);
                    }
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
    var generateContactRequestsDonutChart = function(data) {
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
            bindto: '#donutChartContactRequests',
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
                    if (d.id == 'direct') {
                        donutChart.focus('direct');
                        generateContactRequestsLineChartDirect(data);
                    }
                    if (d.id == 'affiliate') {
                        generateContactRequestsLineChartAffiliate(data);
                    }
                    if (d.id == 'other') {
                        generateContactRequestsLineChartOther(data);
                    }
                    if (d.id == 'email') {
                        generateContactRequestsLineChartEmail(data);
                    }
                    if (d.id == 'social') {
                        generateContactRequestsLineChartSocial(data);
                    }
                    if (d.id == 'paid') {
                        generateContactRequestsLineChartPaid(data);
                    }
                    if (d.id == 'organic') {
                        generateContactRequestsLineChartOrganic(data);
                    }
                },
                onmouseover: function(d, i) {
                    console.log("onmouseover", d, i);
                },
                onmouseout: function(d, i) {
                    console.log("onmouseout", d, i);
                }
            },
            donut: {
                title: "Channel-wise Contact Requests"
            }
        });
    }
    var today = new Date();
    today = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
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
                window.backendData = data
                console.log("Success in getting active users: ", data);
                generateActiveUsersLineChart(data.activeusers);
                generateActiveUsersDonutChart(data.activeusers);
                generateConversionLineChart(data);
                generateConversionDonutChart(data.conversion);
                generateContactRequestsLineChart(data.contact_requests);
                generateContactRequestsDonutChart(data.contact_requests);
                generateUserEngagementBarChart(data.user_engagement);
            },
            error: function(err) {
                console.log("error: ", err);
            }
        })
    })

    $('.reset').click(function(event) {
        event.preventDefault();
        console.log(window.backendData);
        generateActiveUsersLineChart(window.backendData.activeusers);
        generateConversionLineChart(window.backendData);
        generateContactRequestsLineChart(window.backendData.contact_requests);
    });

});