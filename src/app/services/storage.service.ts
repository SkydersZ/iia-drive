import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { File } from '../models/file/file';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private firestore: AngularFirestore) { }

  /*
   * Créer une collection de fichier
   */
  public createCollection(): void {
    // TODO: Creer la fonction d'ajout de fichier/dossier
    this.firestore.collection('files').add({
      name: 'bob.md',
      format: 'markdown'
    })
    .then(docRef => {
        console.log('Document written with ID: ', docRef.id);
    })
    .catch(error => {
      console.error('Error adding document', error);
    });
  }

  /*
   * Affiche la collection de fichier
   */
  public async readCollection(): Promise<File[]> {
    // TODO: supprimer le toPromise() pour gérer directement l'observable et rafraîchir la
    // vue en temps réel
    const filesFromDataBase = await this.firestore.collection('files')
    .get()
    .toPromise()
    .then(querySnapshot => querySnapshot.docs.map(x => {
      const data = x.data();
      const id = x.id;
      return {id, ...data};
    }));

     const files: object[] =  filesFromDataBase;

     return files as File[];
  }

  /*
   * Supprime un document de la base de donnée
   */
  public deleteDocument(docPath: string): void {
    this.firestore.collection('files')
    .doc(docPath)
    .delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch(err => {
      console.error('Error removing document: ', err);
    });
  }
}
