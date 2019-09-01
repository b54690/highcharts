import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartComponent} from '../components/chart';
import {RouterModule, Routes} from '@angular/router';
import {HighchartsChartModule} from 'highcharts-angular';

const routes: Routes = [
    { path: '', component: ChartComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HighchartsChartModule
    ],
    declarations: [
        ChartComponent
    ],
    exports: [
        ChartComponent
    ]
})
export class ChartModule {
}
