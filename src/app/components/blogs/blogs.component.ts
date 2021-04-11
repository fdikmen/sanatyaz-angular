import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogs: Blog[] | undefined;
  
  constructor(

    private blogService: BlogService
    
  ) { }

  ngOnInit(): void {
    this.getBlog();
  }

  getBlog(){
    this.blogService
    .getBlog()
    .subscribe(data=>this.blogs=data);
  }
}
