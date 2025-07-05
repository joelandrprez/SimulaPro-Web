import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})


export class CourseDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
  cursoId: number | undefined;
  ngOnInit(): void {
    this.cursoId = Number(this.route.snapshot.paramMap.get('id'));
  }

  MoveMode(type: string): void {
    const path = ['/courses/detail', this.cursoId, type];
    this.router.navigate(path);
  }
}
