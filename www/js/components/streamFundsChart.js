var charts = {};

$(document).ready(function() {

    charts.stream_funds_week = new CanvasJS.Chart('stream_funds_week',
        {
            zoomEnabled: true,
            interactivityEnabled: true,
            culture: 'ru',
            animationEnabled: true,
            animationDuration: 2000,
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
                interval: '1',
                valueFormatString: "DDDD",
                gridThickness: 1,
                gridColor: "#d8d8d8",
                lineThickness: 1,
                lineColor: "#d8d8d8",
                labelFontColor: '#333',
                labelFontSize: 18,
                labelFontWeight: "lighter"
            },
            toolTip: {
                content: "{y}",
                fontSize: 25,
                fontColor: "#55b1ff",
                fontStyle: "normal",
                fontWeight: "bold",
                backgroundColor: "transparent",
                animationEnabled: true,
                borderThickness: 0,
                borderColor: "transparent",
            },
            legend: {
                horizontalAlign: "center",
                verticalAlign: "bottom",
                maxWidth: 190,
                fontSize: 16,
                fontColor: "#111",
                markerMargin: 15

            },
            data: [
                {
                    type: "splineArea",
                    legendText: "Внесено денег пользоватилями",
                    showInLegend: true,
                    legendMarkerType: "circle",
                    markerType: "circle",
                    lineThickness: 0,
                    markerSize: 8,
                    markerColor: "transparent",
                    legendMarkerColor: "#c8faff",
                    color: "#c8faff",
                    markerBorderColor: "transparent",
                    markerBorderThickness: 0,
                    cursor: "pointer",
                    fillOpacity: 1,
                    dataPoints: [
                        {x: new Date(2017, 06, 30), y: 7000},
                        {x: new Date(2017, 07, 01), y: 8000},
                        {x: new Date(2017, 07, 02), y: 6500},
                        {x: new Date(2017, 07, 03), y: 7500},
                        {x: new Date(2017, 07, 04), y: 5000},
                        {x: new Date(2017, 07, 05), y: 6500},
                        {x: new Date(2017, 07, 06), y: 5000}
                    ]
                },
                {
                    type: "splineArea",
                    showInLegend: true,
                    legendText: "Потрачено на выплаты",
                    legendMarkerType: "circle",
                    lineThickness: 0,
                    markerSize: 8,
                    markerColor: "transparent",
                    legendMarkerColor: "#6575fc",
                    color: "#6575fc",
                    markerBorderColor: "transparent",
                    markerBorderThickness: 0,
                    cursor: "pointer",
                    fillOpacity: 1,
                    dataPoints: [
                        {x: new Date(2017, 06, 30), y: 5000},
                        {x: new Date(2017, 07, 01), y: 6000},
                        {x: new Date(2017, 07, 02), y: 4500},
                        {x: new Date(2017, 07, 03), y: 5500},
                        {x: new Date(2017, 07, 04), y: 3000},
                        {x: new Date(2017, 07, 05), y: 4500},
                        {x: new Date(2017, 07, 06), y: 3000}
                    ]
                },
                {
                    type: "splineArea",
                    showInLegend: true,
                    legendText: "Потрачено + остаток на кошельках пользователей",
                    legendMarkerType: "circle",
                    lineThickness: 0,
                    markerSize: 8,
                    markerColor: "transparent",
                    legendMarkerColor: "#fa62e5",
                    color: "#fa62e5",
                    markerBorderColor: "transparent",
                    markerBorderThickness: 0,
                    cursor: "pointer",
                    fillOpacity: 1,
                    dataPoints: [
                        {x: new Date(2017, 06, 30), y: 2000},
                        {x: new Date(2017, 07, 01), y: 3000},
                        {x: new Date(2017, 07, 02), y: 3500},
                        {x: new Date(2017, 07, 03), y: 3000},
                        {x: new Date(2017, 07, 04), y: 3000},
                        {x: new Date(2017, 07, 05), y: 2700},
                        {x: new Date(2017, 07, 06), y: 2000}
                    ]
                }

            ],
            backgroundColor: "transparent"
        }
    );

    charts.stream_funds_month = new CanvasJS.Chart('stream_funds_month',
        {
            zoomEnabled: true,
            interactivityEnabled: true,
            culture: 'ru',
            animationEnabled: true,
            animationDuration: 2000,
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
                interval: '4',
                valueFormatString: "D.MM",
                gridThickness: 1,
                gridColor: "#d8d8d8",
                lineThickness: 1,
                lineColor: "#d8d8d8",
                labelFontColor: '#333',
                labelFontSize: 18,
                labelFontWeight: "lighter"
            },
            toolTip: {
                content: "{y}",
                fontSize: 25,
                fontColor: "#55b1ff",
                fontStyle: "normal",
                fontWeight: "bold",
                backgroundColor: "transparent",
                animationEnabled: true,
                borderThickness: 0,
                borderColor: "transparent",
            },
            legend: {
                horizontalAlign: "center",
                verticalAlign: "bottom",
                maxWidth: 190,
                fontSize: 16,
                fontColor: "#111",
                markerMargin: 15

            },
            data: [
                {
                    type: "splineArea",
                    legendText: "Внесено денег пользоватилями",
                    showInLegend: true,
                    legendMarkerType: "circle",
                    markerType: "circle",
                    lineThickness: 0,
                    markerSize: 8,
                    markerColor: "transparent",
                    legendMarkerColor: "#c8faff",
                    color: "#c8faff",
                    markerBorderColor: "transparent",
                    markerBorderThickness: 0,
                    cursor: "pointer",
                    fillOpacity: 1,
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
                },
                {
                    type: "splineArea",
                    showInLegend: true,
                    legendText: "Потрачено на выплаты",
                    legendMarkerType: "circle",
                    lineThickness: 0,
                    markerSize: 8,
                    markerColor: "transparent",
                    legendMarkerColor: "#6575fc",
                    color: "#6575fc",
                    markerBorderColor: "transparent",
                    markerBorderThickness: 0,
                    cursor: "pointer",
                    fillOpacity: 1,
                    dataPoints: [
                        {x: new Date(2017, 06, 05), y: 3500},
                        {x: new Date(2017, 06, 10), y: 4000},
                        {x: new Date(2017, 06, 15), y: 4500},
                        {x: new Date(2017, 06, 18), y: 4000},
                        {x: new Date(2017, 06, 23), y: 4500},
                        {x: new Date(2017, 06, 25), y: 4000},
                        {x: new Date(2017, 06, 28), y: 3500},
                        {x: new Date(2017, 06, 29), y: 3000},
                        {x: new Date(2017, 06, 30), y: 4000},
                        {x: new Date(2017, 07, 01), y: 3500},
                        {x: new Date(2017, 07, 05), y: 2000}
                    ]
                },
                {
                    type: "splineArea",
                    showInLegend: true,
                    legendText: "Потрачено + остаток на кошельках пользователей",
                    legendMarkerType: "circle",
                    lineThickness: 0,
                    markerSize: 8,
                    markerColor: "transparent",
                    legendMarkerColor: "#fa62e5",
                    color: "#fa62e5",
                    markerBorderColor: "transparent",
                    markerBorderThickness: 0,
                    cursor: "pointer",
                    fillOpacity: 1,
                    dataPoints: [
                        {x: new Date(2017, 06, 05), y: 2000},
                        {x: new Date(2017, 06, 10), y: 3000},
                        {x: new Date(2017, 06, 15), y: 3500},
                        {x: new Date(2017, 06, 18), y: 3000},
                        {x: new Date(2017, 06, 23), y: 2500},
                        {x: new Date(2017, 06, 25), y: 3000},
                        {x: new Date(2017, 06, 28), y: 2800},
                        {x: new Date(2017, 06, 29), y: 2500},
                        {x: new Date(2017, 06, 30), y: 2000},
                        {x: new Date(2017, 07, 01), y: 1500},
                        {x: new Date(2017, 07, 05), y: 500}
                    ]
                }

            ],
            backgroundColor: "transparent"
        }
    );


    charts.stream_funds_year = new CanvasJS.Chart('stream_funds_year',
        {
            zoomEnabled: true,
            interactivityEnabled: true,
            culture: 'ru',
            animationEnabled: true,
            animationDuration: 2000,
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
                interval: '1',
                valueFormatString: "D.MM.YYYY",
                gridThickness: 1,
                gridColor: "#d8d8d8",
                lineThickness: 1,
                lineColor: "#d8d8d8",
                labelFontColor: '#333',
                labelFontSize: 18,
                labelFontWeight: "lighter"
            },
            toolTip: {
                content: "{y}",
                fontSize: 25,
                fontColor: "#55b1ff",
                fontStyle: "normal",
                fontWeight: "bold",
                backgroundColor: "transparent",
                animationEnabled: true,
                borderThickness: 0,
                borderColor: "transparent",
            },
            legend: {
                horizontalAlign: "center",
                verticalAlign: "bottom",
                maxWidth: 190,
                fontSize: 16,
                fontColor: "#111",
                markerMargin: 15

            },
            data: [
                {
                    type: "splineArea",
                    legendText: "Внесено денег пользоватилями",
                    showInLegend: true,
                    legendMarkerType: "circle",
                    markerType: "circle",
                    lineThickness: 0,
                    markerSize: 8,
                    markerColor: "transparent",
                    legendMarkerColor: "#c8faff",
                    color: "#c8faff",
                    markerBorderColor: "transparent",
                    markerBorderThickness: 0,
                    cursor: "pointer",
                    fillOpacity: 1,
                    dataPoints: [
                        {x: new Date(2016, 09, 05), y: 6200},
                        {x: new Date(2016, 10, 10), y: 6300},
                        {x: new Date(2016, 11, 05), y: 5000},
                        {x: new Date(2016, 12, 10), y: 5000},
                        {x: new Date(2017, 01, 05), y: 5500},
                        {x: new Date(2017, 02, 10), y: 6000},
                        {x: new Date(2017, 03, 05), y: 6500},
                        {x: new Date(2017, 04, 10), y: 6000},
                        {x: new Date(2017, 05, 05), y: 7500},
                        {x: new Date(2017, 06, 10), y: 6000}
                    ]
                },
                {
                    type: "splineArea",
                    showInLegend: true,
                    legendText: "Потрачено на выплаты",
                    legendMarkerType: "circle",
                    lineThickness: 0,
                    markerSize: 8,
                    markerColor: "transparent",
                    legendMarkerColor: "#6575fc",
                    color: "#6575fc",
                    markerBorderColor: "transparent",
                    markerBorderThickness: 0,
                    cursor: "pointer",
                    fillOpacity: 1,
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
                },
                {
                    type: "splineArea",
                    showInLegend: true,
                    legendText: "Потрачено + остаток на кошельках пользователей",
                    legendMarkerType: "circle",
                    lineThickness: 0,
                    markerSize: 8,
                    markerColor: "transparent",
                    legendMarkerColor: "#fa62e5",
                    color: "#fa62e5",
                    markerBorderColor: "transparent",
                    markerBorderThickness: 0,
                    cursor: "pointer",
                    fillOpacity: 1,
                    dataPoints: [
                        {x: new Date(2016, 09, 05), y: 3200},
                        {x: new Date(2016, 10, 10), y: 3300},
                        {x: new Date(2016, 11, 05), y: 3000},
                        {x: new Date(2016, 12, 10), y: 2000},
                        {x: new Date(2017, 01, 05), y: 2500},
                        {x: new Date(2017, 02, 10), y: 3000},
                        {x: new Date(2017, 03, 05), y: 3500},
                        {x: new Date(2017, 04, 10), y: 3000},
                        {x: new Date(2017, 05, 05), y: 4500},
                        {x: new Date(2017, 06, 10), y: 5000}
                    ]
                }

            ],
            backgroundColor: "transparent"
        }
    );


    charts.stream_funds_all = new CanvasJS.Chart('stream_funds_all',
        {
            zoomEnabled: true,
            interactivityEnabled: true,
            culture: 'ru',
            animationEnabled: true,
            animationDuration: 2000,
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
                interval: '1',
                valueFormatString: "YYYY",
                gridThickness: 1,
                gridColor: "#d8d8d8",
                lineThickness: 1,
                lineColor: "#d8d8d8",
                labelFontColor: '#333',
                labelFontSize: 18,
                labelFontWeight: "lighter"
            },
            toolTip: {
                content: "{y}",
                fontSize: 25,
                fontColor: "#55b1ff",
                fontStyle: "normal",
                fontWeight: "bold",
                backgroundColor: "transparent",
                animationEnabled: true,
                borderThickness: 0,
                borderColor: "transparent",
            },
            legend: {
                horizontalAlign: "center",
                verticalAlign: "bottom",
                maxWidth: 190,
                fontSize: 16,
                fontColor: "#111",
                markerMargin: 15

            },
            data: [
                {
                    type: "splineArea",
                    legendText: "Внесено денег пользоватилями",
                    showInLegend: true,
                    legendMarkerType: "circle",
                    markerType: "circle",
                    lineThickness: 0,
                    markerSize: 8,
                    markerColor: "transparent",
                    legendMarkerColor: "#c8faff",
                    color: "#c8faff",
                    markerBorderColor: "transparent",
                    markerBorderThickness: 0,
                    cursor: "pointer",
                    fillOpacity: 1,
                    dataPoints: [
                        {x: new Date(2008, 09, 05), y: 200},
                        {x: new Date(2009, 10, 10), y: 2300},
                        {x: new Date(2010, 11, 05), y: 4000},
                        {x: new Date(2011, 12, 10), y: 3000},
                        {x: new Date(2012, 01, 05), y: 4000},
                        {x: new Date(2013, 02, 10), y: 5000},
                        {x: new Date(2014, 03, 05), y: 5500},
                        {x: new Date(2015, 04, 10), y: 5000},
                        {x: new Date(2016, 05, 05), y: 6500},
                        {x: new Date(2017, 06, 10), y: 6000}
                    ]
                },
                {
                    type: "splineArea",
                    showInLegend: true,
                    legendText: "Потрачено на выплаты",
                    legendMarkerType: "circle",
                    lineThickness: 0,
                    markerSize: 8,
                    markerColor: "transparent",
                    legendMarkerColor: "#6575fc",
                    color: "#6575fc",
                    markerBorderColor: "transparent",
                    markerBorderThickness: 0,
                    cursor: "pointer",
                    fillOpacity: 1,
                    dataPoints: [
                        {x: new Date(2008, 09, 05), y: 200},
                        {x: new Date(2009, 10, 10), y: 1800},
                        {x: new Date(2010, 11, 05), y: 2200},
                        {x: new Date(2011, 12, 10), y: 2000},
                        {x: new Date(2012, 01, 05), y: 3000},
                        {x: new Date(2013, 02, 10), y: 4000},
                        {x: new Date(2014, 03, 05), y: 4200},
                        {x: new Date(2015, 04, 10), y: 4300},
                        {x: new Date(2016, 05, 05), y: 4800},
                        {x: new Date(2017, 06, 10), y: 5000}
                    ]
                },
                {
                    type: "splineArea",
                    showInLegend: true,
                    legendText: "Потрачено + остаток на кошельках пользователей",
                    legendMarkerType: "circle",
                    lineThickness: 0,
                    markerSize: 8,
                    markerColor: "transparent",
                    legendMarkerColor: "#fa62e5",
                    color: "#fa62e5",
                    markerBorderColor: "transparent",
                    markerBorderThickness: 0,
                    cursor: "pointer",
                    fillOpacity: 1,
                    dataPoints: [
                        {x: new Date(2008, 09, 05), y: 200},
                        {x: new Date(2009, 10, 10), y: 500},
                        {x: new Date(2010, 11, 05), y: 700},
                        {x: new Date(2011, 12, 10), y: 800},
                        {x: new Date(2012, 01, 05), y: 1200},
                        {x: new Date(2013, 02, 10), y: 2000},
                        {x: new Date(2014, 03, 05), y: 2500},
                        {x: new Date(2015, 04, 10), y: 2000},
                        {x: new Date(2016, 05, 05), y: 2500},
                        {x: new Date(2017, 06, 10), y: 3000}
                    ]
                }

            ],
            backgroundColor: "transparent"

        });


    createCharts();

});


function createCharts() {
    if (window.innerWidth < 800) {
        for (key in charts) {
            charts[key].options.axisX.labelFontSize = 14;
            charts[key].options.axisY.labelFontSize = 14;

            charts[key].options.axisX.valueFormatString = "DDD";

            charts[key].options.legend.fontSize = 13;
            charts[key].options.legend.maxWidth = 400;

            if(window.innerWidth < 450) {
                charts[key].options.legend.maxWidth = 250;
            }

            charts[key].render();
        }

    }  else if (window.innerWidth < 1400){
        for(key in charts) {
            charts[key].options.legend.fontSize = 16;
            charts[key].options.legend.maxWidth = 400;

            charts[key].options.axisX.valueFormatString = "DDD";
            charts[key].render();
        }
    } else {
        for (key in charts) {
            charts[key].options.axisX.labelFontSize = 18;
            charts[key].options.axisY.labelFontSize = 18;

            charts[key].options.legend.fontSize = 16;
            charts[key].options.legend.maxWidth = 690;


            charts[key].render();
        }
    }
}


