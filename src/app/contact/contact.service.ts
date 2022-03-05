import { Injectable } from '@angular/core';
import {Contact} from './model/contact';
import ContatcsJson from '../../assets/contacts.json';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [];
  addContact(contact: Contact){
    this.contacts.push(contact)
  }
  getContacts() {
    if (this.contacts.length === 0){
      this.contacts = ContatcsJson;
    }
    return this.contacts;
  }
  updateContactVipStatus(id:string, isVip:boolean){
    const contact = this.contacts.find(contact => contact._id === id);
    if (contact){
      contact.isVip = isVip
    }
  }
  updateContactRank(id:string, rank:number){
    const contact = this.contacts.find(contact => contact._id === id);
    if (contact){
      contact.rank = rank
    }
  }
}
