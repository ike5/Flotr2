var wins = [[
    [2006, 13],
    [2007, 11],
    [2008, 15],
    [2009, 15],
    [2010, 18],
    [2011, 28]
]];

var years = [
    [0, "2006"],
    [1, "2007"],
    [2, "2008"],
    [3, "2009"],
    [4, "2010"],
    [5, "2011"]
];

Flotr 

window.onload = function () {
    // Add bar width
    // Fix horizontal axis
    Flotr.draw(document.getElementById("chart3"), wins, {
        bars: {
            show: true,
            barWidth: 0.5
        },
        yaxis: {
            min: 0,
            tickDecimals: 0
        },
        xaxis: {
            ticks: years
        }
    })

    // Fix vertical axis
    Flotr.draw(document.getElementById("chart2"), wins, {
        bars: {
            show: true
        },
        yaxis: {
            min: 0,
            tickDecimals: 0
        }
    })

    // Plain
    Flotr.draw(
        document.getElementById("chart1"),
        wins,
        {
            bars: {
                show: true
            }
        }
    )
}
