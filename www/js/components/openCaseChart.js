var charts = {};

$(document).ready(function() {

    charts.open_case_week = new CanvasJS.Chart('open_case_week',
        {
            zoomEnabled: true,
            interactivityEnabled: true,
            animationEnabled: true,
            animationDuration: 2000,
            culture: 'ru',
            axisY: {
                interval: 1000,
                includeZero: false,
                gridThickness: 1,
                gridColor: "#d8d8d8",
                lineThickness: 1,
                lineColor: "#d8d8d8",
                tickThickness: 0,
                labelFontColor: '#333',
                labelFontSize: 18,
                labelFontWeight: "lighter",
            },
            axisX: {
                intervalType: "day",
                interval: "1",
                valueFormatString: "DDDD",
                gridThickness: 1,
                gridColor: "#d8d8d8",
                lineThickness: 0,
                tickThickness: 0,
                labelFontColor: '#333',
                labelFontSize: 18,
                labelFontWeight: "lighter"
            },
            toolTip: {
                content: "{y}",
                fontSize: 25,
                fontColor: "#d605ff",
                fontWeight: "bold",
                fontStyle: "normal",
                backgroundColor: "transparent",
                animationEnabled: true,
                borderThickness: 0,
                borderColor: "transparent",

            },
            data: [
                {
                    type: "spline",
                    lineThickness: 5,
                    markerSize: 0,
                    markerColor: "#d605ff",
                    color: "#d400ff",
                    markerBorderColor: "white",
                    markerBorderThickness: 15,
                    cursor: "pointer",
                    dataPoints: [
                        {x: new Date(2017, 06, 30), y: 7000},
                        {x: new Date(2017, 07, 01), y: 8000},
                        {x: new Date(2017, 07, 02), y: 6500},
                        {x: new Date(2017, 07, 03), y: 7500},
                        {x: new Date(2017, 07, 04), y: 5000},
                        {x: new Date(2017, 07, 05), y: 6500},
                        {x: new Date(2017, 07, 06), y: 5000}
                    ]
                }
            ],
            backgroundColor: "transparent"
        }
    );




    charts.open_case_month = new CanvasJS.Chart('open_case_month',
        {
            zoomEnabled: true,
            interactivityEnabled: true,
            animationEnabled: true,
            animationDuration: 2000,
            culture: 'ru',
            axisY: {
                interval: 1000,
                includeZero: false,
                gridThickness: 1,
                gridColor: "#d8d8d8",
                lineThickness: 1,
                lineColor: "#d8d8d8",
                tickThickness: 0,
                labelFontColor: '#333',
                labelFontSize: 18,
                labelFontWeight: "lighter",
            },
            axisX: {
                intervalType: "day",
                interval: 4,
                valueFormatString: "D.MM",
                gridThickness: 1,
                gridColor: "#d8d8d8",
                lineThickness: 0,
                tickThickness: 0,
                labelFontColor: '#333',
                labelFontSize: 18,
                labelFontWeight: "lighter"
            },
            toolTip: {
                content: "{y}",
                fontSize: 25,
                fontColor: "#d605ff",
                fontWeight: "bold",
                fontStyle: "normal",
                backgroundColor: "transparent",
                animationEnabled: true,
                borderThickness: 0,
                borderColor: "transparent",

            },
            data: [
                {
                    type: "spline",
                    lineThickness: 5,
                    markerSize: 0,
                    markerColor: "#d605ff",
                    color: "#d400ff",
                    markerBorderColor: "white",
                    markerBorderThickness: 15,
                    cursor: "pointer",
                    dataPoints: [
                        {x: new Date(2017, 06, 05), y: 5500},
                        {x: new Date(2017, 06, 10), y: 6000},
                        {x: new Date(2017, 06, 15), y: 6500},
                        {x: new Date(2017, 06, 18), y: 6000},
                        {x: new Date(2017, 06, 23), y: 6500},
                        {x: new Date(2017, 06, 25), y: 6000},
                        {x: new Date(2017, 06, 28), y: 6500},
                        {x: new Date(2017, 06, 29), y: 6000},
                        {x: new Date(2017, 06, 30), y: 6000},
                        {x: new Date(2017, 07, 01), y: 5500},
                        {x: new Date(2017, 07, 05), y: 5000}
                    ]
                }
            ],
            backgroundColor: "transparent"
        }
    );


    charts.open_case_year = new CanvasJS.Chart('open_case_year',
        {
            zoomEnabled: true,
            interactivityEnabled: true,
            animationEnabled: true,
            animationDuration: 2000,
            culture: 'ru',
            axisY: {
                interval: 1000,
                includeZero: false,
                gridThickness: 1,
                gridColor: "#d8d8d8",
                lineThickness: 1,
                lineColor: "#d8d8d8",
                tickThickness: 0,
                labelFontColor: '#333',
                labelFontSize: 18,
                labelFontWeight: "lighter",
            },
            axisX: {
                intervalType: "month",
                interval: "1",
                valueFormatString: "D.MM.YYYY",
                gridThickness: 1,
                gridColor: "#d8d8d8",
                lineThickness: 0,
                tickThickness: 0,
                labelFontColor: '#333',
                labelFontSize: 18,
                labelFontWeight: "lighter"
            },
            toolTip: {
                content: "{y}",
                fontSize: 25,
                fontColor: "#d605ff",
                fontWeight: "bold",
                fontStyle: "normal",
                backgroundColor: "transparent",
                animationEnabled: true,
                borderThickness: 0,
                borderColor: "transparent",

            },
            data: [
                {
                    type: "spline",
                    lineThickness: 5,
                    markerSize: 0,
                    markerColor: "#d605ff",
                    color: "#d400ff",
                    markerBorderColor: "white",
                    markerBorderThickness: 15,
                    cursor: "pointer",
                    dataPoints: [
                        {x: new Date(2016, 09, 05), y: 5200},
                        {x: new Date(2016, 10, 10), y: 5300},
                        {x: new Date(2016, 11, 05), y: 5000},
                        {x: new Date(2016, 12, 10), y: 4000},
                        {x: new Date(2017, 01, 05), y: 4500},
                        {x: new Date(2017, 02, 10), y: 5000},
                        {x: new Date(2017, 03, 05), y: 5500},
                        {x: new Date(2017, 04, 10), y: 5000},
                        {x: new Date(2017, 05, 05), y: 6500},
                        {x: new Date(2017, 06, 10), y: 7000}
                    ]
                }
            ],
            backgroundColor: "transparent"
        }
    );


    charts.open_case_all = new CanvasJS.Chart('open_case_all',
        {
            zoomEnabled: true,
            interactivityEnabled: true,
            animationEnabled: true,
            animationDuration: 2000,
            culture: 'ru',
            axisY: {
                interval: 1000,
                includeZero: false,
                gridThickness: 1,
                gridColor: "#d8d8d8",
                lineThickness: 1,
                lineColor: "#d8d8d8",
                tickThickness: 0,
                labelFontColor: '#333',
                labelFontSize: 18,
                labelFontWeight: "lighter",
            },
            axisX: {
                intervalType: "year",
                interval: "1",
                valueFormatString: "YYYY",
                gridThickness: 1,
                gridColor: "#d8d8d8",
                lineThickness: 0,
                tickThickness: 0,
                labelFontColor: '#333',
                labelFontSize: 18,
                labelFontWeight: "lighter"
            },
            toolTip: {
                content: "{y}",
                fontSize: 25,
                fontColor: "#d605ff",
                fontWeight: "bold",
                fontStyle: "normal",
                backgroundColor: "transparent",
                animationEnabled: true,
                borderThickness: 0,
                borderColor: "transparent",
            },
            data: [
                {
                    type: "spline",
                    lineThickness: 5,
                    markerSize: 0,
                    markerColor: "#d605ff",
                    color: "#d400ff",
                    markerBorderColor: "white",
                    markerBorderThickness: 15,
                    cursor: "pointer",
                    dataPoints: [
                        {x: new Date(2008, 09, 05), y: 200},
                        {x: new Date(2009, 10, 10), y: 2300},
                        {x: new Date(2010, 11, 05), y: 4000},
                        {x: new Date(2011, 12, 10), y: 3000},
                        {x: new Date(2012, 01, 05), y: 4500},
                        {x: new Date(2013, 02, 10), y: 5000},
                        {x: new Date(2014, 03, 05), y: 5500},
                        {x: new Date(2015, 04, 10), y: 5000},
                        {x: new Date(2016, 05, 05), y: 6500},
                        {x: new Date(2017, 06, 10), y: 6000}
                    ]
                }
            ],
            backgroundColor: "transparent"

        });

    createCharts();

});

function createCharts() {
    if (window.innerWidth < 1000){
        for(key in charts) {
            charts[key].options.axisX.labelFontSize = 14;
            charts[key].options.axisY.labelFontSize = 14;

            charts[key].options.axisX.valueFormatString = "DDD";

            charts[key].render();
        }

    } else if(window.innerWidth < 1400){
        for(key in charts) {
            charts[key].options.axisX.valueFormatString = "DDD";
            charts[key].render();
        }
    } else {
        for(key in charts) {
            charts[key].options.axisX.labelFontSize = 18;
            charts[key].options.axisY.labelFontSize = 18;
            charts[key].render();
        }
    }
}



