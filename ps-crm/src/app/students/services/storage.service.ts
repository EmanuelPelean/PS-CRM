import { Injectable } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask
} from '@angular/fire/storage';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public ref: AngularFireStorageReference;
  public taskPermit: AngularFireUploadTask;
  public taskMedical: AngularFireUploadTask;
  public permitProgress$: BehaviorSubject<number> = new BehaviorSubject<number>(
    null
  );
  public medicalProgress$: BehaviorSubject<number> = new BehaviorSubject<
    number
  >(null);

  constructor(private afStorage: AngularFireStorage) {}

  uploadDocToFireStorage(
    file: File,
    type: string,
    userId: string
  ): Observable<string> {
    this.ref = this.afStorage.ref(`${userId}_${type}`);
    switch (type) {
      case 'permit': {
        this.taskPermit = this.ref.put(file);
        this.taskPermit
          .percentageChanges()
          .pipe()
          .subscribe(progress => {
            this.permitProgress$.next(progress);
          });
        return of(`${userId}_${type}`);
      }
      case 'medical': {
        this.taskMedical = this.ref.put(file);
        this.taskMedical
          .percentageChanges()
          .pipe()
          .subscribe(progress => {
            this.medicalProgress$.next(progress);
          });
        return of(`${userId}_${type}`);
      }
    }
  }

  getPermitUploadProgress(): Observable<number> {
    return this.permitProgress$.asObservable();
  }

  getMedicalUploadProgress(): Observable<number> {
    return this.medicalProgress$.asObservable();
  }
}
