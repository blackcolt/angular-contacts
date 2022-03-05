import { Component } from '@angular/core';
import { Contact } from './contact/model/contact';
import { ContactService } from './contact/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  contacts: Contact[] = []
  constructor(private contactService: ContactService){
    this.contacts = this.contactService.getContacts();
  }
  changeVipStatus(event:any){
    this.contactService.updateContactVipStatus(event._id,event.isVip)
  }
  changeRankStatus(event:any){
    this.contactService.updateContactRank(event._id,event.rank)
  }
  title = 'angular-contacts';
}
