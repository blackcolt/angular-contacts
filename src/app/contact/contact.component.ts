import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() rank: number = 0
  @Input() id?: string = ""
  @Input() title: string= ""
  @Input() phone: string= ""
  @Input() isVip: Boolean = false
  @Input() tags: Array<string> = []
  @Output() changeVipStatus = new EventEmitter<Object>()
  @Output() changeRankStatus = new EventEmitter<Object>()
  @Output() changeComment = new EventEmitter<Object>()

  showBestTag = false;
  ngOnInit(): void {
    this.showBestTag = this.tags.length > 5
  }
  changedVipStatus(state:boolean){
    this.isVip = !this.isVip
    this.changeVipStatus.emit({
      isVip: this.isVip,
      _id: this.id,
    })
  }
  changedRating(rank: number){
    this.rank = rank
    this.changeRankStatus.emit({
      _id: this.id,
      rank,
    })
  }
  commentChange(comment: string){
    this.changeComment.emit({
      _id: this.id,
      comment,
    })
  }
}
