import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private dbPath = '/users';

  data = null;

  constructor(
    private firestore: AngularFirestore,
    private db: AngularFireDatabase
  ) {
    this.data = db.list(this.dbPath);
  }

  newUser(username) {
    return this.data.push(username);
  }
}
