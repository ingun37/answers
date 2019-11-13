import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  rootId: string;
  constructor(
    private answerService: AnswerService
  ) { }

  ngOnInit() {
    this.answerService.getRootId().subscribe(id => {
      console.log(`root id : ${id}`);
      this.rootId = id;
    })
  }

}
