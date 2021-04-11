import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs!: Blog[];

  constructor(    

    private blogService: BlogService

  ) { }
  

  ngOnInit(): void {
    this.getHomepage();
  }
  
  getHomepage(){
    this.blogService
    .getHomepage()
    .subscribe(data=>this.blogs=data);
  }

  // getBlog(){
  //   this.blogService.getBlog().pipe(map(a=>{})).subscribe(res=>{      
  //     Object.keys({res}).forEach(key=>{
  //       this.data[key]=res[key];
  //     })
      
  //   });
  // }
}
