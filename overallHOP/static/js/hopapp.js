$(function() {
    
    $('#questionMark').tooltip();
    
    $('#submit-request').click(function(event) {
        console.log("inside submit request");
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "/app/sendemail/",
            data: {
                'from_email': $('#from_email').val(),
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
    var generateActiveUsersLineChart = function(data) {
        var num_users_array = [];
        num_users_array.push('Active Users');
        var num;
        var maximum;
        var avg;
        var sum = 0;
        maximum = data[0].num_users;
        for (var i = data.length - 1; i >= 0; i--) {
            console.log(data[i].num_users);
            num = parseInt(data[i].num_users, 10);
            num_users_array.push(num);
            if (maximum < num) {
                maximum = num
            }
            sum = sum + data[i].num_users;
        };
        avg = sum / data.length;
        if (2.5 * avg < maximum) {
            window.maxYAxisActiveUsers = 2.5 * avg;
        } else {
            window.maxYAxisActiveUsers = maximum;
        }
        var chart = c3.generate({
            bindto: '#chart',
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                },
                y: {
                    min: 0
                }
            },
            data: {
                columns: [
                    num_users_array
                ]
            },
            tooltip: {
                format: {
                    title: function(d) {
                        return 'Data ' + d;
                    }
                }
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
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                },
                y: {
                    // max: window.maxYAxisActiveUsers
                    min: 0
                }
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
            // axis: {
            //     y: {
            //         max: 40000
            //     },
            // },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                },
                y: {
                    // max: window.maxYAxisActiveUsers
                    min: 0
                }
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
            // axis: {
            //     y: {
            //         max: 40000
            //     },
            // },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                },
                y: {
                    // max: window.maxYAxisActiveUsers
                    min: 0
                }
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
            // axis: {
            //     y: {
            //         max: 40000
            //     },
            // },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                },
                y: {
                    // max: window.maxYAxisActiveUsers
                    min: 0
                }
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
            // axis: {
            //     y: {
            //         max: 40000
            //     },
            // },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                },
                y: {
                    // max: window.maxYAxisActiveUsers
                    min: 0
                }
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
            // axis: {
            //     y: {
            //         max: 40000
            //     },
            // },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                },
                y: {
                    // max: window.maxYAxisActiveUsers
                    min: 0
                }
            },
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }

    var generateActiveUsersLineChartReferral = function(data) {
        console.log("inside paid activeusers linechart");
        var num_users_array = [];
        num_users_array.push('Active Users');
        var num;
        for (var i = data.length - 1; i >= 0; i--) {
            console.log(data[i].channels.referral);
            num = data[i].channels.referral;
            num_users_array.push(num);
        };
        console.log(num_users_array);
        var chart = c3.generate({
            bindto: '#chart',
            // axis: {
            //     y: {
            //         max: 40000
            //     },
            // },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                },
                y: {
                    // max: window.maxYAxisActiveUsers
                    min: 0
                }
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
            percentage = Math.round(perc * 10000)/10000;
            num_users_array.push(percentage * 100);
        };
        var chartConversion = c3.generate({
            bindto: '#chartConversion',
            // axis: {
            //     y: {
            //         max: 15
            //     },
            // },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                },
                y: {
                    min: 0,
                    label: 'Percentage'
                }
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
            perc = num / parseInt(data.activeusers[i].channels.direct, 10)
            percentage = Math.round(perc * 10000)/10000;
            num_users_array.push(percentage * 100);
        };
        console.log(num_users_array);
        var chartConversion = c3.generate({
            bindto: '#chartConversion',
            // axis: {
            //     y: {
            //         max: 15
            //     },
            // },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                },
                y: {
                    min: 0,
                    label: 'Percentage'
                }
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
            perc = num / parseInt(data.activeusers[i].channels.affiliate, 10)
            percentage = Math.round(perc * 10000)/10000;
            num_users_array.push(percentage * 100);
        };
        console.log(num_users_array);
        var chartConversion = c3.generate({
            bindto: '#chartConversion',
            // axis: {
            //     y: {
            //         max: 15
            //     },
            // },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                },
                y: {
                    min: 0,
                    label: 'Percentage'
                }
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
            perc = num / parseInt(data.activeusers[i].channels.email, 10)
            percentage = Math.round(perc * 10000)/10000;
            num_users_array.push(percentage * 100);
        };
        console.log(num_users_array);
        var chartConversion = c3.generate({
            bindto: '#chartConversion',
            // axis: {
            //     y: {
            //         max: 15
            //     },
            // },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                },
                y: {
                    min: 0,
                    label: 'Percentage'
                }
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
            perc = num / parseInt(data.activeusers[i].channels.organic, 10)
            percentage = Math.round(perc * 10000)/10000;
            num_users_array.push(percentage * 100);
        };
        console.log(num_users_array);
        var chartConversion = c3.generate({
            bindto: '#chartConversion',
            // axis: {
            //     y: {
            //         max: 15
            //     },
            // },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                },
                y: {
                    min: 0,
                    label: 'Percentage'
                }
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
            perc = num / parseInt(data.activeusers[i].channels.other, 10)
            percentage = Math.round(perc * 10000)/10000;
            num_users_array.push(percentage * 100);
        };
        console.log(num_users_array);
        var chartConversion = c3.generate({
            bindto: '#chartConversion',
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                },
                y: {
                    min: 0,
                    label: 'Percentage'
                }
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
            perc = num / parseInt(data.activeusers[i].channels.paid, 10)
            percentage = Math.round(perc * 10000)/10000;
            num_users_array.push(percentage * 100);
        };
        console.log(num_users_array);
        var chartConversion = c3.generate({
            bindto: '#chartConversion',
            // axis: {
            //     y: {
            //         max: 15
            //     },
            // },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                },
                y: {
                    min: 0,
                    label: 'Percentage'
                }
            },
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }

    var generateConversionLineChartReferral = function(data) {
        console.log("inside paid activeusers linechart");
        var num_users_array = [];
        num_users_array.push('Conversion');
        var num;
        for (var i = data.conversion.length - 1; i >= 0; i--) {
            // console.log(data[i].channels.paid);
            num = parseInt(data.conversion[i].channels.referral, 10);
            perc = num / parseInt(data.activeusers[i].channels.referral, 10)
            percentage = Math.round(perc * 10000)/10000;
            num_users_array.push(percentage * 100);
        };
        console.log(num_users_array);
        var chartConversion = c3.generate({
            bindto: '#chartConversion',
            // axis: {
            //     y: {
            //         max: 15
            //     },
            // },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                },
                y: {
                    min: 0,
                    label: 'Percentage'
                }
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
            // axis: {
            //     y: {
            //         max: 5000
            //     },
            // },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                },
                y: {
                    min: 0
                }
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
            data[i].channels.direct ? num = data[i].channels.direct : num = 0;
            num_users_array.push(num);
        };
        console.log(num_users_array);
        var chart = c3.generate({
            bindto: '#chartContactRequests',
            // axis: {
            //     y: {
            //         max: 5000
            //     },
            // },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                },
                y: {
                    min: 0
                }
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
            data[i].channels.affiliate ? num = data[i].channels.affiliate : num = 0;
            // num = data[i].channels.affiliate;
            num_users_array.push(num);
        };
        console.log(num_users_array);
        var chart = c3.generate({
            bindto: '#chartContactRequests',
            // axis: {
            //     y: {
            //         max: 5000
            //     },
            // },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                },
                y: {
                    min: 0
                }
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
            data[i].channels.email ? num = data[i].channels.email : num = 0;
            // num = data[i].channels.email;
            num_users_array.push(num);
        };
        console.log(num_users_array);
        var chart = c3.generate({
            bindto: '#chartContactRequests',
            // axis: {
            //     y: {
            //         max: 5000
            //     },
            // },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                },
                y: {
                    min: 0
                }
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
            data[i].channels.organic ? num = data[i].channels.organic : num = 0;
            // num = data[i].channels.organic;
            num_users_array.push(num);
        };
        console.log(num_users_array);
        var chart = c3.generate({
            bindto: '#chartContactRequests',
            // axis: {
            //     y: {
            //         max: 5000
            //     },
            // },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                },
                y: {
                    min: 0
                }
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
            data[i].channels.other ? num = data[i].channels.other : num = 0;
            // num = data[i].channels.other;
            num_users_array.push(num);
        };
        console.log(num_users_array);
        var chart = c3.generate({
            bindto: '#chartContactRequests',
            // axis: {
            //     y: {
            //         max: 5000
            //     },
            // },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                },
                y: {
                    min: 0
                }
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
            data[i].channels.paid ? num = data[i].channels.paid : num = 0;
            // num = data[i].channels.paid;
            num_users_array.push(num);
        };
        console.log(num_users_array);
        var chart = c3.generate({
            bindto: '#chartContactRequests',
            // axis: {
            //     y: {
            //         max: 5000
            //     },
            // },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                },
                y: {
                    min: 0
                }
            },
            data: {
                columns: [
                    num_users_array
                ]
            }
        });
    }

    var generateContactRequestsLineChartReferral = function(data) {
        console.log("inside paid activeusers linechart");
        var num_users_array = [];
        num_users_array.push('Active Users');
        var num;
        for (var i = data.length - 1; i >= 0; i--) {
            console.log(data[i].channels.referral);
            data[i].channels.paid ? num = data[i].channels.referral : num = 0;
            // num = data[i].channels.paid;
            num_users_array.push(num);
        };
        console.log(num_users_array);
        var chart = c3.generate({
            bindto: '#chartContactRequests',
            // axis: {
            //     y: {
            //         max: 5000
            //     },
            // },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                },
                y: {
                    min: 0
                }
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
        var levels_0 = [];
        levels_0.push('level 0');
        var levels_1 = [];
        levels_1.push('level 1');
        var levels_2 = [];
        levels_2.push('level 2');
        var levels_3 = [];
        levels_3.push('level 3');
        for (var i = data.length - 1; i >= 0; i--) {
            for (var key in data[i].levels) {
                if (key == 'level_0') {
                    levels_0.push(data[i].levels[key]);
                }
                if (key == 'level_1') {
                    levels_1.push(data[i].levels[key]);
                }
                if (key == 'level_2') {
                    levels_2.push(data[i].levels[key]);
                }
                if (key == 'level_3') {
                    levels_3.push(data[i].levels[key]);
                }
            };
            // num = data[i].levels.level_0
        };
        a = [];
        a.push(levels_0);
        a.push(levels_1);
        a.push(levels_2);
        a.push(levels_3);
        console.log("bar chart data: ", a);
        var chartUserEngagement = c3.generate({
            bindto: '#chartUserEngagement',
            data: {
                columns: a,
                type: 'bar'
            },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                }
            },
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                }
            }
        });
    }
    var generateUserEngagementBarChartDirect = function(data) {
        var num_users_array = [];
        num_users_array.push('User Engagement');
        var num;
        var levels_0 = [];
        levels_0.push('level 0');
        var levels_1 = [];
        levels_1.push('level 1');
        var levels_2 = [];
        levels_2.push('level 2');
        var levels_3 = [];
        levels_3.push('level 3');
        for (var i = data.length - 1; i >= 0; i--) {
            for (var key in data[i].level_channels.level_0) {
                if (key == 'direct') {
                    console.log(data[i].level_channels.level_0[key])
                    data[i].level_channels.level_0[key] ? levels_0.push(data[i].level_channels.level_0[key]) : 0
                }
            };
            for (var key in data[i].level_channels.level_1) {
                if (key == 'direct') {
                    console.log(data[i].level_channels.level_1[key])
                    data[i].level_channels.level_1[key] ? levels_1.push(data[i].level_channels.level_1[key]) : 0
                }
            };
            for (var key in data[i].level_channels.level_2) {
                if (key == 'direct') {
                    console.log(data[i].level_channels.level_2[key])
                    data[i].level_channels.level_2[key] ? levels_2.push(data[i].level_channels.level_2[key]) : 0
                }
            };
            for (var key in data[i].level_channels.level_3) {
                if (key == 'direct') {
                    console.log(data[i].level_channels.level_3[key])
                    data[i].level_channels.level_3[key] ? levels_3.push(data[i].level_channels.level_3[key]) : 0
                }
            };
            // num = data[i].levels.level_0
        };
        a = [];
        a.push(levels_0);
        a.push(levels_1);
        a.push(levels_2);
        a.push(levels_3);
        console.log("bar chart data: ", a);
        var chartUserEngagement = c3.generate({
            bindto: '#chartUserEngagement',
            data: {
                columns: a,
                type: 'bar'
            },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                }
            },
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                }
            }
        });
    }
    var generateUserEngagementBarChartOrganic = function(data) {
        var num_users_array = [];
        num_users_array.push('User Engagement');
        var num;
        var levels_0 = [];
        levels_0.push('level 0');
        var levels_1 = [];
        levels_1.push('level 1');
        var levels_2 = [];
        levels_2.push('level 2');
        var levels_3 = [];
        levels_3.push('level 3');
        for (var i = data.length - 1; i >= 0; i--) {
            for (var key in data[i].level_channels.level_0) {
                if (key == 'organic') {
                    console.log(data[i].level_channels.level_0[key])
                    data[i].level_channels.level_0[key] ? levels_0.push(data[i].level_channels.level_0[key]) : 0
                }
            };
            for (var key in data[i].level_channels.level_1) {
                if (key == 'organic') {
                    console.log(data[i].level_channels.level_1[key])
                    data[i].level_channels.level_1[key] ? levels_1.push(data[i].level_channels.level_1[key]) : 0
                }
            };
            for (var key in data[i].level_channels.level_2) {
                if (key == 'organic') {
                    console.log(data[i].level_channels.level_2[key])
                    data[i].level_channels.level_2[key] ? levels_2.push(data[i].level_channels.level_2[key]) : 0
                }
            };
            for (var key in data[i].level_channels.level_3) {
                if (key == 'organic') {
                    console.log(data[i].level_channels.level_3[key])
                    data[i].level_channels.level_3[key] ? levels_3.push(data[i].level_channels.level_3[key]) : 0
                }
            };
            // num = data[i].levels.level_0
        };
        a = [];
        a.push(levels_0);
        a.push(levels_1);
        a.push(levels_2);
        a.push(levels_3);
        console.log("bar chart data: ", a);
        var chartUserEngagement = c3.generate({
            bindto: '#chartUserEngagement',
            data: {
                columns: a,
                type: 'bar'
            },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                }
            },
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                }
            }
        });
    }
    var generateUserEngagementBarChartSocial = function(data) {
        var num_users_array = [];
        num_users_array.push('User Engagement');
        var num;
        var levels_0 = [];
        levels_0.push('level 0');
        var levels_1 = [];
        levels_1.push('level 1');
        var levels_2 = [];
        levels_2.push('level 2');
        var levels_3 = [];
        levels_3.push('level 3');
        for (var i = data.length - 1; i >= 0; i--) {
            for (var key in data[i].level_channels.level_0) {
                if (key == 'social') {
                    console.log(data[i].level_channels.level_0[key])
                    data[i].level_channels.level_0[key] ? levels_0.push(data[i].level_channels.level_0[key]) : 0
                }
            };
            for (var key in data[i].level_channels.level_1) {
                if (key == 'social') {
                    console.log(data[i].level_channels.level_1[key])
                    data[i].level_channels.level_1[key] ? levels_1.push(data[i].level_channels.level_1[key]) : 0
                }
            };
            for (var key in data[i].level_channels.level_2) {
                if (key == 'social') {
                    console.log(data[i].level_channels.level_2[key])
                    data[i].level_channels.level_2[key] ? levels_2.push(data[i].level_channels.level_2[key]) : 0
                }
            };
            for (var key in data[i].level_channels.level_3) {
                if (key == 'social') {
                    console.log(data[i].level_channels.level_3[key])
                    data[i].level_channels.level_3[key] ? levels_3.push(data[i].level_channels.level_3[key]) : 0
                }
            };
            // num = data[i].levels.level_0
        };
        a = [];
        a.push(levels_0);
        a.push(levels_1);
        a.push(levels_2);
        a.push(levels_3);
        console.log("bar chart data: ", a);
        var chartUserEngagement = c3.generate({
            bindto: '#chartUserEngagement',
            data: {
                columns: a,
                type: 'bar'
            },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                }
            },
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                }
            }
        });
    }
    var generateUserEngagementBarChartAffiliate = function(data) {
        var num_users_array = [];
        num_users_array.push('User Engagement');
        var num;
        var levels_0 = [];
        levels_0.push('level 0');
        var levels_1 = [];
        levels_1.push('level 1');
        var levels_2 = [];
        levels_2.push('level 2');
        var levels_3 = [];
        levels_3.push('level 3');
        for (var i = data.length - 1; i >= 0; i--) {
            for (var key in data[i].level_channels.level_0) {
                if (key == 'affiliate') {
                    console.log(data[i].level_channels.level_0[key])
                    data[i].level_channels.level_0[key] ? levels_0.push(data[i].level_channels.level_0[key]) : 0
                }
            };
            for (var key in data[i].level_channels.level_1) {
                if (key == 'affiliate') {
                    console.log(data[i].level_channels.level_1[key])
                    data[i].level_channels.level_1[key] ? levels_1.push(data[i].level_channels.level_1[key]) : 0
                }
            };
            for (var key in data[i].level_channels.level_2) {
                if (key == 'affiliate') {
                    console.log(data[i].level_channels.level_2[key])
                    data[i].level_channels.level_2[key] ? levels_2.push(data[i].level_channels.level_2[key]) : 0
                }
            };
            for (var key in data[i].level_channels.level_3) {
                if (key == 'affiliate') {
                    console.log(data[i].level_channels.level_3[key])
                    data[i].level_channels.level_3[key] ? levels_3.push(data[i].level_channels.level_3[key]) : 0
                }
            };
            // num = data[i].levels.level_0
        };
        a = [];
        a.push(levels_0);
        a.push(levels_1);
        a.push(levels_2);
        a.push(levels_3);
        console.log("bar chart data: ", a);
        var chartUserEngagement = c3.generate({
            bindto: '#chartUserEngagement',
            data: {
                columns: a,
                type: 'bar'
            },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                }
            },
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                }
            }
        });
    }
    var generateUserEngagementBarChartEmail = function(data) {
        var num_users_array = [];
        num_users_array.push('User Engagement');
        var num;
        var levels_0 = [];
        levels_0.push('level 0');
        var levels_1 = [];
        levels_1.push('level 1');
        var levels_2 = [];
        levels_2.push('level 2');
        var levels_3 = [];
        levels_3.push('level 3');
        for (var i = data.length - 1; i >= 0; i--) {
            for (var key in data[i].level_channels.level_0) {
                if (key == 'email') {
                    console.log(data[i].level_channels.level_0[key], "key is email");
                    data[i].level_channels.level_0[key] ? levels_0.push(data[i].level_channels.level_0[key]) : 0
                }
            };
            for (var key in data[i].level_channels.level_1) {
                if (key == 'email') {
                    console.log(data[i].level_channels.level_1[key])
                    data[i].level_channels.level_1[key] ? levels_1.push(data[i].level_channels.level_1[key]) : 0
                }
            };
            for (var key in data[i].level_channels.level_2) {
                if (key == 'email') {
                    console.log(data[i].level_channels.level_2[key])
                    data[i].level_channels.level_2[key] ? levels_2.push(data[i].level_channels.level_2[key]) : 0
                }
            };
            for (var key in data[i].level_channels.level_3) {
                if (key == 'email') {
                    console.log(data[i].level_channels.level_3[key])
                    data[i].level_channels.level_3[key] ? levels_3.push(data[i].level_channels.level_3[key]) : 0
                }
            };
            // num = data[i].levels.level_0
        };
        a = [];
        a.push(levels_0);
        a.push(levels_1);
        a.push(levels_2);
        a.push(levels_3);
        console.log("bar chart data: ", a);
        var chartUserEngagement = c3.generate({
            bindto: '#chartUserEngagement',
            data: {
                columns: a,
                type: 'bar'
            },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                }
            },
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                }
            }
        });
    }
    var generateUserEngagementBarChartPaid = function(data) {
        var num_users_array = [];
        num_users_array.push('User Engagement');
        var num;
        var levels_0 = [];
        levels_0.push('level 0');
        var levels_1 = [];
        levels_1.push('level 1');
        var levels_2 = [];
        levels_2.push('level 2');
        var levels_3 = [];
        levels_3.push('level 3');
        for (var i = data.length - 1; i >= 0; i--) {
            for (var key in data[i].level_channels.level_0) {
                if (key == 'paid') {
                    console.log(data[i].level_channels.level_0[key])
                    data[i].level_channels.level_0[key] ? levels_0.push(data[i].level_channels.level_0[key]) : 0
                }
            };
            for (var key in data[i].level_channels.level_1) {
                if (key == 'paid') {
                    console.log(data[i].level_channels.level_1[key])
                    data[i].level_channels.level_1[key] ? levels_1.push(data[i].level_channels.level_1[key]) : 0
                }
            };
            for (var key in data[i].level_channels.level_2) {
                if (key == 'paid') {
                    console.log(data[i].level_channels.level_2[key])
                    data[i].level_channels.level_2[key] ? levels_2.push(data[i].level_channels.level_2[key]) : 0
                }
            };
            for (var key in data[i].level_channels.level_3) {
                if (key == 'paid') {
                    console.log(data[i].level_channels.level_3[key])
                    data[i].level_channels.level_3[key] ? levels_3.push(data[i].level_channels.level_3[key]) : 0
                }
            };
            // num = data[i].levels.level_0
        };
        a = [];
        a.push(levels_0);
        a.push(levels_1);
        a.push(levels_2);
        a.push(levels_3);
        console.log("bar chart data: ", a);
        var chartUserEngagement = c3.generate({
            bindto: '#chartUserEngagement',
            data: {
                columns: a,
                type: 'bar'
            },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                }
            },
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                }
            }
        });
    }
    var generateUserEngagementBarChartOther = function(data) {
        var num_users_array = [];
        num_users_array.push('User Engagement');
        var num;
        var levels_0 = [];
        levels_0.push('level 0');
        var levels_1 = [];
        levels_1.push('level 1');
        var levels_2 = [];
        levels_2.push('level 2');
        var levels_3 = [];
        levels_3.push('level 3');
        for (var i = data.length - 1; i >= 0; i--) {
            for (var key in data[i].level_channels.level_0) {
                if (key == 'paid') {
                    console.log(data[i].level_channels.level_0[key])
                    data[i].level_channels.level_0[key] ? levels_0.push(data[i].level_channels.level_0[key]) : 0
                }
            };
            for (var key in data[i].level_channels.level_1) {
                if (key == 'paid') {
                    console.log(data[i].level_channels.level_1[key])
                    data[i].level_channels.level_1[key] ? levels_1.push(data[i].level_channels.level_1[key]) : 0
                }
            };
            for (var key in data[i].level_channels.level_2) {
                if (key == 'paid') {
                    console.log(data[i].level_channels.level_2[key])
                    data[i].level_channels.level_2[key] ? levels_2.push(data[i].level_channels.level_2[key]) : 0
                }
            };
            for (var key in data[i].level_channels.level_3) {
                if (key == 'paid') {
                    console.log(data[i].level_channels.level_3[key])
                    data[i].level_channels.level_3[key] ? levels_3.push(data[i].level_channels.level_3[key]) : 0
                }
            };
            // num = data[i].levels.level_0
        };
        a = [];
        a.push(levels_0);
        a.push(levels_1);
        a.push(levels_2);
        a.push(levels_3);
        console.log("bar chart data: ", a);
        var chartUserEngagement = c3.generate({
            bindto: '#chartUserEngagement',
            data: {
                columns: a,
                type: 'bar'
            },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                }
            },
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                }
            }
        });
    }

    var generateUserEngagementBarChartReferral = function(data) {
        var num_users_array = [];
        num_users_array.push('User Engagement');
        var num;
        var levels_0 = [];
        levels_0.push('level 0');
        var levels_1 = [];
        levels_1.push('level 1');
        var levels_2 = [];
        levels_2.push('level 2');
        var levels_3 = [];
        levels_3.push('level 3');
        for (var i = data.length - 1; i >= 0; i--) {
            for (var key in data[i].level_channels.level_0) {
                if (key == 'referral') {
                    console.log(data[i].level_channels.level_0[key])
                    data[i].level_channels.level_0[key] ? levels_0.push(data[i].level_channels.level_0[key]) : 0
                }
            };
            for (var key in data[i].level_channels.level_1) {
                if (key == 'referral') {
                    console.log(data[i].level_channels.level_1[key])
                    data[i].level_channels.level_1[key] ? levels_1.push(data[i].level_channels.level_1[key]) : 0
                }
            };
            for (var key in data[i].level_channels.level_2) {
                if (key == 'referral') {
                    console.log(data[i].level_channels.level_2[key])
                    data[i].level_channels.level_2[key] ? levels_2.push(data[i].level_channels.level_2[key]) : 0
                }
            };
            for (var key in data[i].level_channels.level_3) {
                if (key == 'referral') {
                    console.log(data[i].level_channels.level_3[key])
                    data[i].level_channels.level_3[key] ? levels_3.push(data[i].level_channels.level_3[key]) : 0
                }
            };
            // num = data[i].levels.level_0
        };
        a = [];
        a.push(levels_0);
        a.push(levels_1);
        a.push(levels_2);
        a.push(levels_3);
        console.log("bar chart data: ", a);
        var chartUserEngagement = c3.generate({
            bindto: '#chartUserEngagement',
            data: {
                columns: a,
                type: 'bar'
            },
            axis: {
                x: {
                    tick: {
                        format: function(x) {
                            var from_date = $("#dp3").val();
                            var to_date = $("#dp5").val();
                            var date_object_from_date = new Date(from_date);
                            var date_object_to_date = new Date(to_date);
                            var timeDiff = date_object_to_date - date_object_from_date;
                            var diffDays = timeDiff / (1000 * 3600 * 24);
                            console.log(timeDiff, diffDays);
                            if (x == 0) {
                                return from_date;
                            } else if (x == diffDays) {
                                return to_date;
                            } else {
                                var date = new Date(new Date(from_date).getTime() + x * 1000 * 3600 * 24);
                                var dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
                                return dateString;
                            }
                        }
                    }
                }
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
        var affiliateChannel = [];
        var otherChannel = [];
        var referralChannel = [];
        var organic = 0;
        var social = 0;
        var email = 0;
        var direct = 0;
        var paid = 0;
        var affiliate = 0;
        var other = 0;
        var referral = 0;
        organicChannel.push('organic');
        socialChannel.push('social');
        emailChannel.push('email');
        directChannel.push('direct');
        paidChannel.push('paid');
        affiliateChannel.push('affiliate');
        otherChannel.push('other');
        referralChannel.push('referral');
        for (var i = data.length - 1; i >= 0; i--) {
            data[i].channels.organic ? organic = organic + data[i].channels.organic : organic = organic
            data[i].channels.social ? social = social + data[i].channels.social : social = social
            data[i].channels.email ? email = email + data[i].channels.email : email = email
            data[i].channels.direct ? direct = direct + data[i].channels.direct : direct = direct
            data[i].channels.paid ? paid = paid + data[i].channels.paid : paid = paid
            data[i].channels.affiliate ? affiliate = affiliate + data[i].channels.affiliate : affiliate = affiliate;
            data[i].channels.other ? other = other + data[i].channels.other : other = other;
            data[i].channels.referral ? referral = referral + data[i].channels.referral : referral = referral;
            // social = social + data[i].channels.social;
            // email = email + data[i].channels.email;
            // direct = direct + data[i].channels.direct;
            // paid = paid + data[i].channels.paid;
        };
        console.log(organic, social, email, direct, paid);
        organicChannel.push(organic);
        socialChannel.push(social);
        emailChannel.push(email);
        directChannel.push(direct);
        paidChannel.push(paid);
        affiliateChannel.push(affiliate);
        otherChannel.push(other);
        referralChannel.push(referral);
        var donutChart = c3.generate({
            bindto: '#donutChart',
            data: {
                columns: [
                    organicChannel,
                    socialChannel,
                    emailChannel,
                    directChannel,
                    paidChannel,
                    affiliateChannel,
                    otherChannel,
                    referralChannel,
                ],
                type: 'donut',
                onclick: function(d, i) {
                    console.log("onclick", d);
                    if (d.id == 'direct') {
                        donutChart.focus('direct');
                        generateActiveUsersLineChartDirect(data);
                        $('#channelActive').text("(Direct)");
                    }
                    if (d.id == 'affiliate') {
                        generateActiveUsersLineChartAffiliate(data);
                        $('#channelActive').text("(Affiliate)");
                    }
                    if (d.id == 'other') {
                        generateActiveUsersLineChartOther(data);
                        $('#channelActive').text("(Others)");
                    }
                    if (d.id == 'email') {
                        generateActiveUsersLineChartEmail(data);
                        $('#channelActive').text("(Email)");
                    }
                    if (d.id == 'social') {
                        generateActiveUsersLineChartSocial(data);
                        $('#channelActive').text("(Social)");
                    }
                    if (d.id == 'paid') {
                        generateActiveUsersLineChartPaid(data);
                        $('#channelActive').text("(Paid)");
                    }
                    if (d.id == 'organic') {
                        generateActiveUsersLineChartOrganic(data);
                        $('#channelActive').text("(Organic)");
                    }
                    if(d.id == 'referral') {
                        generateActiveUsersLineChartReferral(data);
                        $('#channelActive').text("(Referral)");
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
                title: "Active Users"
            }
        });
    }
    var generateConversionDonutChart = function(data) {
        var organicChannel = [];
        var socialChannel = [];
        var emailChannel = [];
        var directChannel = [];
        var paidChannel = [];
        var affiliateChannel = [];
        var otherChannel = [];
        var referralChannel = [];
        var organic = 0;
        var social = 0;
        var email = 0;
        var direct = 0;
        var paid = 0;
        var affiliate = 0;
        var other = 0;
        var referral = 0;
        organicChannel.push('organic');
        socialChannel.push('social');
        emailChannel.push('email');
        directChannel.push('direct');
        paidChannel.push('paid');
        affiliateChannel.push('affiliate');
        otherChannel.push('other');
        referralChannel.push('referral');
        for (var i = data.length - 1; i >= 0; i--) {
            data[i].channels.organic ? organic = organic + data[i].channels.organic : organic = organic
            data[i].channels.social ? social = social + data[i].channels.social : social = social
            data[i].channels.email ? email = email + data[i].channels.email : email = email
            data[i].channels.direct ? direct = direct + data[i].channels.direct : direct = direct
            data[i].channels.paid ? paid = paid + data[i].channels.paid : paid = paid
            data[i].channels.affiliate ? affiliate = affiliate + data[i].channels.affiliate : affiliate = affiliate;
            data[i].channels.other ? other = other + data[i].channels.other : other = other;
            data[i].channels.referral ? referral = referral + data[i].channels.referral : referral = referral;
        };
        console.log(organic, social, email, direct, paid);
        organicChannel.push(organic);
        socialChannel.push(social);
        emailChannel.push(email);
        directChannel.push(direct);
        paidChannel.push(paid);
        affiliateChannel.push(affiliate);
        otherChannel.push(other);
        referralChannel.push(referral);
        var donutChartConversion = c3.generate({
            bindto: '#donutChartConversion',
            data: {
                columns: [
                    organicChannel,
                    socialChannel,
                    emailChannel,
                    directChannel,
                    paidChannel,
                    affiliateChannel,
                    otherChannel,
                    referralChannel,
                ],
                type: 'donut',
                onclick: function(d, i) {
                    console.log("onclick", d, i);
                    if (d.id == 'direct') {
                        console.log("direct conversion");
                        donutChart.focus('direct');
                        console.log(window.backendData);
                        generateConversionLineChartDirect(window.backendData);
                        $('#channelConversion').text("(Direct)");
                    }
                    if (d.id == 'affiliate') {
                        generateConversionLineChartAffiliate(window.backendData);
                        $('#channelConversion').text("(Affiliate)");
                    }
                    if (d.id == 'other') {
                        generateConversionLineChartOther(window.backendData);
                        $('#channelConversion').text("(Other)");
                    }
                    if (d.id == 'email') {
                        generateConversionLineChartEmail(window.backendData);
                        $('#channelConversion').text("(Email)");
                    }
                    if (d.id == 'social') {
                        generateConversionLineChartSocial(window.backendData);
                        $('#channelConversion').text("(Social)");
                    }
                    if (d.id == 'paid') {
                        generateConversionLineChartPaid(window.backendData);
                        $('#channelConversion').text("(Paid)");
                    }
                    if (d.id == 'organic') {
                        generateConversionLineChartOrganic(window.backendData);
                        $('#channelConversion').text("(Organic)");
                    }
                    if(d.id == 'referral') {
                        generateConversionLineChartReferral(window.backendData);
                        $('#channelConversion').text("(Referral)");
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
        var affiliateChannel = [];
        var otherChannel = [];
        var referralChannel = [];
        var organic = 0;
        var social = 0;
        var email = 0;
        var direct = 0;
        var paid = 0;
        var affiliate = 0;
        var other = 0;
        var referral = 0;
        organicChannel.push('organic');
        socialChannel.push('social');
        emailChannel.push('email');
        directChannel.push('direct');
        paidChannel.push('paid');
        affiliateChannel.push('affiliate');
        otherChannel.push('other');
        referralChannel.push('referral');
        for (var i = data.length - 1; i >= 0; i--) {
            data[i].channels.organic ? organic = organic + data[i].channels.organic : organic = organic
            data[i].channels.social ? social = social + data[i].channels.social : social = social
            data[i].channels.email ? email = email + data[i].channels.email : email = email
            data[i].channels.direct ? direct = direct + data[i].channels.direct : direct = direct
            data[i].channels.paid ? paid = paid + data[i].channels.paid : paid = paid
            data[i].channels.affiliate ? affiliate = affiliate + data[i].channels.affiliate : affiliate = affiliate;
            data[i].channels.other ? other = other + data[i].channels.other : other = other;
            data[i].channels.referral ? referral = referral + data[i].channels.referral : referral = referral;
        };
        console.log(organic, social, email, direct, paid);
        organicChannel.push(organic);
        socialChannel.push(social);
        emailChannel.push(email);
        directChannel.push(direct);
        paidChannel.push(paid);
        affiliateChannel.push(affiliate);
        otherChannel.push(other);
        referralChannel.push(referral);
        var donutChartConversion = c3.generate({
            bindto: '#donutChartContactRequests',
            data: {
                columns: [
                    organicChannel,
                    socialChannel,
                    emailChannel,
                    directChannel,
                    paidChannel,
                    affiliateChannel,
                    otherChannel,
                    referralChannel,
                ],
                type: 'donut',
                onclick: function(d, i) {
                    console.log("onclick", d, i);
                    if (d.id == 'direct') {
                        donutChart.focus('direct');
                        generateContactRequestsLineChartDirect(data);
                        $('#channelContactRequests').text("(Direct)");
                    }
                    if (d.id == 'affiliate') {
                        generateContactRequestsLineChartAffiliate(data);
                        $('#channelContactRequests').text("(Affiliate)");
                    }
                    if (d.id == 'other') {
                        generateContactRequestsLineChartOther(data);
                        $('#channelContactRequests').text("(Other)");
                    }
                    if (d.id == 'email') {
                        generateContactRequestsLineChartEmail(data);
                        $('#channelContactRequests').text("(Email)");
                    }
                    if (d.id == 'social') {
                        generateContactRequestsLineChartSocial(data);
                        $('#channelContactRequests').text("(Social)");
                    }
                    if (d.id == 'paid') {
                        generateContactRequestsLineChartPaid(data);
                        $('#channelContactRequests').text("(Paid)");
                    }
                    if (d.id == 'organic') {
                        generateContactRequestsLineChartOrganic(data);
                        $('#channelContactRequests').text("(Organic)");
                    }
                    if (d.id == 'referral') {
                        generateContactRequestsLineChartReferral(data);
                        $('#channelContactRequests').text("(Referral)");
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
    var generateUserEngagementDonutChart = function(data) {
        var organicChannel = [];
        var socialChannel = [];
        var emailChannel = [];
        var directChannel = [];
        var paidChannel = [];
        var affiliateChannel = [];
        var otherChannel = [];
        var referralChannel = [];
        var organic = 0;
        var social = 0;
        var email = 0;
        var direct = 0;
        var paid = 0;
        var affiliate = 0;
        var other = 0;
        var referral = 0;
        organicChannel.push('organic');
        socialChannel.push('social');
        emailChannel.push('email');
        directChannel.push('direct');
        paidChannel.push('paid');
        affiliateChannel.push('affiliate');
        otherChannel.push('other');
        referralChannel.push('referral');
        for (var i = data.activeusers.length - 1; i >= 0; i--) {
            data.activeusers[i].channels.organic ? organic = organic + data.activeusers[i].channels.organic : organic = organic
            data.activeusers[i].channels.social ? social = social + data.activeusers[i].channels.social : social = social
            data.activeusers[i].channels.email ? email = email + data.activeusers[i].channels.email : email = email
            data.activeusers[i].channels.direct ? direct = direct + data.activeusers[i].channels.direct : direct = direct
            data.activeusers[i].channels.paid ? paid = paid + data.activeusers[i].channels.paid : paid = paid;
            data.activeusers[i].channels.affiliate ? affiliate = affiliate + data.activeusers[i].channels.affiliate : affiliate = affiliate;
            data.activeusers[i].channels.other ? other = other + data.activeusers[i].channels.other : other = other;
            data.activeusers[i].channels.referral ? referral = referral + data.activeusers[i].channels.referral : referral = referral;
        };
        console.log(organic, social, email, direct, paid);
        organicChannel.push(organic);
        socialChannel.push(social);
        emailChannel.push(email);
        directChannel.push(direct);
        paidChannel.push(paid);
        affiliateChannel.push(affiliate);
        otherChannel.push(other);
        referralChannel.push(referral);
        var donutChartConversion = c3.generate({
            bindto: '#donutChartUserEngagement',
            data: {
                columns: [
                    organicChannel,
                    socialChannel,
                    emailChannel,
                    directChannel,
                    paidChannel,
                    affiliateChannel,
                    otherChannel,
                    referralChannel,
                ],
                type: 'donut',
                onclick: function(d, i) {
                    console.log("onclick", d, i);
                    if (d.id == 'direct') {
                        donutChartUserEngagement.focus('direct');
                        generateUserEngagementBarChartDirect(data.user_engagement);
                        $('#channelUserEngagement').text("(Direct)");
                    }
                    if (d.id == 'affiliate') {
                        generateUserEngagementBarChartAffiliate(data.user_engagement);
                        $('#channelUserEngagement').text("(Affiliate)");
                    }
                    if (d.id == 'other') {
                        generateUserEngagementBarChartOther(data.user_engagement);
                        $('#channelUserEngagement').text("(Other)");
                    }
                    if (d.id == 'email') {
                        generateUserEngagementBarChartEmail(data.user_engagement);
                        $('#channelUserEngagement').text("(Email)");
                    }
                    if (d.id == 'social') {
                        generateUserEngagementBarChartSocial(data.user_engagement);
                        $('#channelUserEngagement').text("(Social)");
                    }
                    if (d.id == 'paid') {
                        generateUserEngagementBarChartPaid(data.user_engagement);
                        $('#channelUserEngagement').text("(Paid)");
                    }
                    if (d.id == 'organic') {
                        generateUserEngagementBarChartOrganic(data.user_engagement);
                        $('#channelUserEngagement').text("(Organic)");
                    }
                    if (d.id == 'referral') {
                        generateUserEngagementBarChartReferral(data.user_engagement);
                        $('#channelUserEngagement').text("(Referral)");
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
                title: "Channel-wise User Enagement"
            }
        });
    }
    var today = new Date();
    today = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
    console.log(today);
    // window.platforms = 'all';
    // window.service = 'all';
    $('.platformsBtnGroup').on('click', function(event) {
        var id = $(event.target).attr("id");
        console.log("clicking button group platforms");
        var allBtnElements = $('.platformsBtnGroup').map(function() {
            return this.id;
        }).get();
        console.log(allBtnElements);
        for (var i = allBtnElements.length - 1; i >= 0; i--) {
            if (allBtnElements[i] == id) {
                $('#' + id).addClass('btn-warning');
                $("#" + id).removeClass('btn-default');
            } else {
                if ($('#' + allBtnElements[i]).hasClass('btn-warning')) {
                    $('#' + allBtnElements[i]).removeClass('btn-warning');
                }
                $('#' + allBtnElements[i]).addClass('btn-default');
            }
        };
        // for (var i = allBtnElements.length - 1; i >= 0; i--) {
        //     console.log(allBtnElements[i].attr('id'));
        //     // ids.push(allBtnElements[i].attr('id'));
        // };
        // console.log(ids);
        // $('.platformsBtnGroup').hasClass('btn-danger') ? removeClass('btn-danger') : '';
        window.platforms = id;
        console.log(id);
    })
    // if(!$('.platformsBtnGroup').is('#'+window.platforms){
    //     $
    // })
    $('.servicesBtnGroup').on('click', function(event) {
        var id = $(event.target).attr("id");
        var allServicesBtnElements = $('.servicesBtnGroup').map(function() {
            return this.id;
        }).get();
        console.log(allServicesBtnElements);
        for (var i = allServicesBtnElements.length - 1; i >= 0; i--) {
            if (allServicesBtnElements[i] == id) {
                $('#' + id).addClass('btn-warning');
                $("#" + id).removeClass('btn-default');
            } else {
                if ($('#' + allServicesBtnElements[i]).hasClass('btn-warning')) {
                    $('#' + allServicesBtnElements[i]).removeClass('btn-warning');
                }
                $('#' + allServicesBtnElements[i]).addClass('btn-default');
            }
        };
        console.log("clicking button group services");
        window.service = id;
        console.log(id);
    })

    var start = new Date(2015, 02, 03);
    var today = new Date();

    $('#dp3').datepicker({
        minDate: start
    });
    $('#dp5').datepicker();
    $('#show-query').on('click', function() {
        var fromDate = $('#dp3').val();
        var toDate = $('#dp5').val();
        var platforms = window.platforms;
        var service = window.service;
        if (!fromDate || !toDate || !platforms || !service) {
            console.log("data not present");
            $('#error').css({
                'display': 'block'
            });
            var string = '';
            !fromDate ? string = string + 'From Date,' : string = string;
            !toDate ? string = string + ' To Date,' : string = string;
            !platforms ? string = string + ' Platform,' : string = string;
            !service ? string = string + ' Service,' : string = string;
            $('#addError').text(string);
            return;
        }
        console.log(fromDate, toDate, platforms);
        $.ajax({
            type: "POST",
            url: "/app/",
            data: {
                'fromDate': fromDate,
                'toDate': toDate,
                'service': service,
                'platform': platforms
            },
            success: function(data) {
                $('#allData').css({
                    'display': 'block'
                });
                $("#error").css({
                    'display': 'none'
                });
                window.backendData = data
                console.log("Success in getting active users: ", data);
                generateActiveUsersLineChart(data.activeusers);
                generateActiveUsersDonutChart(data.activeusers);
                generateConversionLineChart(data);
                generateConversionDonutChart(data.conversion);
                generateContactRequestsLineChart(data.contact_requests);
                generateContactRequestsDonutChart(data.contact_requests);
                generateUserEngagementBarChart(data.user_engagement);
                generateUserEngagementDonutChart(data);
                // generateRegisteredUsersLineChart(data.registered_users);
                // generateRegisteredUsersDonutChart(data.registered_users);
                // generateLiveListingsLineChart(data.live_listings);
            },
            error: function(err) {
                console.log("error: ", err);
            }
        })
    })
    $('.resetUniqueUsers').click(function(event) {
        event.preventDefault();
        // console.log(window.backendData);
        generateActiveUsersLineChart(window.backendData.activeusers);
        $("#channelActive").text('');
        // generateConversionLineChart(window.backendData);
        // generateContactRequestsLineChart(window.backendData.contact_requests);
    });
    $('.resetConversion').click(function(event) {
        event.preventDefault();
        generateConversionLineChart(window.backendData);
        $('#channelConversion').text('');
    })
    $('.resetContactRequests').click(function(event) {
        event.preventDefault();
        generateContactRequestsLineChart(window.backendData.contact_requests);
        $('#channelContactRequests').text('');
    })
    $('.resetUserEngagement').click(function(event) {
        event.preventDefault();
        generateUserEngagementBarChart(window.backendData.user_engagement);
        $('#channelUserEngagement').text('');
    })
    $('#dp3').on('changeDate', function(ev) {
        $(this).datepicker('hide');
    });
    $('#dp5').on('changeDate', function(ev) {
        $(this).datepicker('hide');
    });
});