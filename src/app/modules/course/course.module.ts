import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StudyModeComponent } from './components/study-mode/study-mode.component';
import { PracticeModeComponent } from './components/practice-mode/practice-mode.component';
import { ExamModeComponent } from './components/exam-mode/exam-mode.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { PracticeStatsComponent } from './components/practice-stats/practice-stats.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartPieComponent } from './components/chart-pie/chart-pie.component';
import { PracticeResultComponent } from './components/practice-result/practice-result.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    CourseDetailComponent,
    CourseListComponent,
    StudyModeComponent,
    PracticeModeComponent,
    ExamModeComponent,
    PracticeStatsComponent,
    ChartPieComponent,
    PracticeResultComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    NgChartsModule,
    MatDividerModule
  ]
})
export class CourseModule { }
