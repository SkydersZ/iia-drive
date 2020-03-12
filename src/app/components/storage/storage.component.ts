import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { File } from '../../models/file/file';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {

  // Tableau contenant les fichiers
  private files: File[];

  constructor(private storageService: StorageService) {
  }

  ngOnInit() {
    this.storageService.createCollection();
    this.getCollectionFromFirebase();
  }

  /*
   * Récupère l'ensemble des fichiers de la base de données firebase
   */
  private async getCollectionFromFirebase() {
    this.files = await this.storageService.readCollection();
  }

  /*
   * Supprime un document en fonction de son nom
   */
  public deleteDocumentFromFirebase(docPath) {
    this.storageService.deleteDocument(docPath);
  }
}
