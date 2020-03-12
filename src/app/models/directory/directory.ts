import {File} from '../file/file';

/*
 * Classe Modele de dossier
 */
export class Directory {
  id: number;
  name: string;
  files: File[];
  directories: Directory[];
}
