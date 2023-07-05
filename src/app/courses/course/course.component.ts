import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private service: CoursesService, private route: ActivatedRoute, private router: Router) { }

  course;
  courseId;
RouteParamObs;
editMode: boolean=false;
  ngOnInit(): void {
    // this.courseId = this.route.snapshot.params['id'];
    // //this.courseId = this.route.snapshot.params['name'];
    // this.course = this.service.courses.find(x => x.id == this.courseId);

this.RouteParamObs=this.route.paramMap.subscribe((param)=>{
   this.courseId= param.get('id');
    this.course = this.service.courses.find(x => x.id == this.courseId);

})

//snapshot
// ActivatedRoute.snapshot
// this.editMode=Boolean(this.route.snapshot.queryParamMap.get('edit'))

//observable
this.route.queryParamMap.subscribe((param)=>{
  this.editMode=Boolean(param.get('edit'));
})
console.log(this.editMode);  
}
  

  ngOnDestroy(){
this.RouteParamObs.unsubscribe();
  }

  editBtnClicked(){
    
    this.editMode=true;
  }
doneBtnClicked(){
  this.editMode=false;
}
appendQuery(){
this.router.navigate(['/Courses/Course',this.courseId],{queryParams: {edit: true}})
}
}
