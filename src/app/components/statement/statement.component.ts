import { Component, OnInit } from '@angular/core';
import { Statement } from 'src/app/models/statement.model';
import { StatementService } from 'src/app/services/statement.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {

  statement!:Statement[];

  constructor(private statementService: StatementService) { }

  ngOnInit(): void {
    this.getAllStatement();
  }

  getAllStatement(){
    this.statementService
    .getAllStatement()
    .subscribe(data=>this.statement=data);
  }
}
