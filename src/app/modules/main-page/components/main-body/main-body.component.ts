import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  items: Observable<any[]>;
  
  constructor(
    firestore: AngularFirestore
  ) { 
    this.items = firestore.collection('items').valueChanges();
  }

  ngOnInit(): void {
  }

}
