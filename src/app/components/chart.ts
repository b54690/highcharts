import {Component} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
    selector: 'app-chart',
    templateUrl: '../templates/components/chart.html'
})

export class ChartComponent {
    public highCharts = Highcharts;
    public chartOptions = {
        xAxis: {
            type: ''
        },
        series: [
            {
                name: '',
                data: []
            }
        ]
    };

    private static lastTenDays() {
        const result = [];
        for (let i = 0; i < 10; i++) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            result.push(date.getTime());
        }
        return result;
    }

    public query() {
        const chart = {
            xAxis: {
                type: 'datetime'
            },
            series: [{
                name: 'All the data',
                data: []
            }]
        };

        chart.series[0].data = ChartComponent.lastTenDays().map((date) => {
            return {date, value: Math.floor((Math.random() * 1000) + 1)};
        });
        this.chartOptions = chart;
        return this.chartOptions;
    }
}
