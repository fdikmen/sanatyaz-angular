import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import{ActivatedRoute}from '@angular/router';
import { Blog } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
  providers:[BlogService]
})
export class BlogDetailComponent implements OnInit {

  blogDetail!:Blog;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService:BlogService,
    private sanitizer:DomSanitizer

  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getBlogById(params["id"]);
    })
  }

  // getBlogById(id){
  //   this.blogService.getBlogById(id).subscribe(data=>this.blogDetail=data);
  // }
  getBlogById(id){
    this.blogService.getBlogById(id).subscribe(data=>{
      this.blogDetail=data;
      this.blogDetail.safeContent=this.sanitizer.bypassSecurityTrustHtml(this.blogDetail.content);
    });
  }
}
