import {Component, Input, OnInit} from '@angular/core';

import { Mail } from '../../models/mail.interface';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {pluck} from 'rxjs/operators';

@Component({
  selector: 'mail-view',
  styleUrls: ['mail-view.component.scss'],
  template: `
    <div class="mail-view">
      <h2>{{ (message | async).from }}</h2>
      <p>{{ (message | async).full }}</p>
    </div>
    <div class="mail-reply">
      <textarea
        (change)="updateReply($event.target.value)"
        placeholder="Type your reply..."
        [value]="reply">
      </textarea>
      <button type="button" (click)="sendReply()">
        Send
      </button>
    </div>
  `
})
export class MailViewComponent implements OnInit{
  reply = '';
  message: Observable<Mail> = this.route.data
    .pipe(
      pluck('message')
    );

  constructor(private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.reply = '';
    });
  }

  updateReply(value: string): void {
    this.reply = value;
  }

  sendReply(): void{
    console.log('Sent!', this.reply);
  }

}
