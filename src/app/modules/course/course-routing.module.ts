import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { ExamModeComponent } from './components/exam-mode/exam-mode.component';
import { StudyModeComponent } from './components/study-mode/study-mode.component';
import { PracticeModeComponent } from './components/practice-mode/practice-mode.component';
import { PracticeStatsComponent } from './components/practice-stats/practice-stats.component';
import { PracticeResultComponent } from './components/practice-result/practice-result.component';

const routes: Routes = [
  { path: 'list', component: CourseListComponent },
  { path: 'detail/:id', component: CourseDetailComponent },
  { path: 'detail/:id/study', component: StudyModeComponent },
  { path: 'detail/:id/practic-stats', component: PracticeStatsComponent },
  { path: 'detail/:id/examen', component: ExamModeComponent },
  { path: 'detail/:id/practic-stats/practice-result/:idPractice', component: PracticeResultComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '**', redirectTo: 'list' },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
