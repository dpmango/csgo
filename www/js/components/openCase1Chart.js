var charts = {};

$(document).ready(function() {

    charts.open_case1_week = new CanvasJS.Chart('open_case1_week',
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
                interval: 1,
                valueFormatString: "DDDD",
                gridThickness: 1,
                gridColor: "#d8d8d8",
                lineThickness: 1,
                lineColor: "#d8d8d8",
                tickThickness: 0,
                labelFontColor: '#333',
                labelFontSize: 18,
                labelFontWeight: "lighter"
            },
            toolTip: {
                content: "{y}",
                fontSize: 25,
                fontColor: "#111111",
                fontStyle: "normal",
                fontWeight: "bold",
                backgroundColor: "transparent",
                animationEnabled: true,
                borderThickness: 0,
                borderColor: "transparent",
            },
            data: [
                {
                    type: "column",
                    lineThickness: 4,
                    markerSize: 0,
                    markerColor: "#d605ff",
                    markerBorderColor: "white",
                    markerBorderThickness: 15,
                    cursor: "pointer",
                    dataPoints: [
                        {x: 1, y: -3000, label: "Автомат", color: "#0027ff"},
                        {x: 2, y: 3000, label: "Пистолет", color: "#174dff"},
                        {x: 3, y: 4500, label: "Граната", color: "#3c70fa"},
                        {x: 4, y: 5000, label: "Взрывчатка", color: "#6794fa"},
                        {x: 5, y: 3000, label: "Мина", color: "#7ba5fa"},
                        {x: 6, y: 6500, label: "Нож", color: "#93b9f5"}
                    ]
                }

            ],
            backgroundColor: "transparent"
        }
    );



    charts.open_case1_month = new CanvasJS.Chart('open_case1_month',
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
                fontColor: "#111111",
                fontStyle: "normal",
                fontWeight: "bold",
                backgroundColor: "transparent",
                animationEnabled: true,
                borderThickness: 0,
                borderColor: "transparent",

            },
            data: [
                {
                    type: "column",
                    lineThickness: 4,
                    markerSize: 0,
                    markerColor: "#d605ff",
                    markerBorderColor: "white",
                    markerBorderThickness: 15,
                    cursor: "pointer",
                    dataPoints: [
                        {x: 1, y: -3000, label: "Автомат", color: "#0027ff"},
                        {x: 2, y: 3000, label: "Пистолет", color: "#174dff"},
                        {x: 3, y: 4500, label: "Граната", color: "#3c70fa"},
                        {x: 4, y: 5300, label: "Взрывчатка", color: "#6794fa"},
                        {x: 5, y: 3000, label: "Мина", color: "#7ba5fa"},
                        {x: 6, y: 8500, label: "Нож", color: "#93b9f5"}
                    ]
                }
            ],
            backgroundColor: "transparent"
        }
    );


    charts.open_case1_year = new CanvasJS.Chart('open_case1_year',
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
                interval: 1,
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
                fontColor: "#111111",
                fontStyle: "normal",
                fontWeight: "bold",
                backgroundColor: "transparent",
                animationEnabled: true,
                borderThickness: 0,
                borderColor: "transparent",

            },
            data: [
                {
                    type: "column",
                    lineThickness: 4,
                    markerSize: 0,
                    markerColor: "#d605ff",
                    markerBorderColor: "white",
                    markerBorderThickness: 15,
                    cursor: "pointer",
                    dataPoints: [
                        {x: 1, y: -2000, label: "Автомат", color: "#0027ff"},
                        {x: 2, y: 7000, label: "Пистолет", color: "#174dff"},
                        {x: 3, y: 3500, label: "Граната", color: "#3c70fa"},
                        {x: 4, y: 5300, label: "Взрывчатка", color: "#6794fa"},
                        {x: 5, y: 3000, label: "Мина", color: "#7ba5fa"},
                        {x: 6, y: 4500, label: "Нож", color: "#93b9f5"}
                    ]
                }
            ],
            backgroundColor: "transparent"
        }
    );


    charts.open_case1_all = new CanvasJS.Chart('open_case1_all',
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
                labelFontWeight: "lighter"
            },
            axisX: {
                intervalType: "year",
                interval: 1,
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
                fontColor: "#111111",
                fontStyle: "normal",
                fontWeight: "bold",
                backgroundColor: "transparent",
                animationEnabled: true,
                borderThickness: 0,
                borderColor: "transparent"
            },
            data: [
                {
                    type: "column",
                    lineThickness: 4,
                    markerSize: 0,
                    markerColor: "#d605ff",
                    markerBorderColor: "white",
                    markerBorderThickness: 15,
                    cursor: "pointer",
                    dataPoints: [
                        {x: 1, y: -1000, label: "Автомат", color: "#0027ff"},
                        {x: 2, y: 5000, label: "Пистолет", color: "#174dff"},
                        {x: 3, y: 3500, label: "Граната", color: "#3c70fa"},
                        {x: 4, y: 5300, label: "Взрывчатка", color: "#6794fa"},
                        {x: 5, y: 6000, label: "Мина", color: "#7ba5fa"},
                        {x: 6, y: 7500, label: "Нож", color: "#93b9f5"}
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


