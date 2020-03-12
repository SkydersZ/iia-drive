import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private firestore: AngularFirestore) { }

  //  public createFile(data: any): Promise<any> {
  //    return new Promise<any>((resolve, reject) => {
  //      this.firestore
  //          .collection('files')
  //          .add(data)
  //          .then(res => {}, err => reject(err));
  //    });

  /*
   * Créer une collection de fichier
   */
  public createCollection(): void {
    this.firestore.collection('files').add({
      id: 1,
      name: 'doc_1.md',
      format: 'markdown'
    })
    .then(docRef => {
        console.log('Document written with ID: ', docRef.id);
    })
    .catch(error => {
      console.error('Error adding document', error);
    });
  }
}
