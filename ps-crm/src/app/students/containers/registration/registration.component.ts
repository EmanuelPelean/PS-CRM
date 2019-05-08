import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  StorageStoreService,
  StudentsStoreService
} from '../../store/store-services';
import { RegistrationOneModel } from '../../models/registrationOne.model';
import { RegistrationTwoModel } from '../../models/registrationTwo.model';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';
import { StorageService } from '../../services';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<any> = new Subject<any>();
  private lastCreatedUserId: string;
  public permitUploadProgress$: Observable<number>;
  public medicalUploadProgress$: Observable<number>;

  constructor(
    private studentsStoreService: StudentsStoreService,
    private storageStoreService: StorageStoreService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.studentsStoreService
      .getLastCreatedUserId()
      .pipe(
        filter(userId => !!userId),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe(userId => (this.lastCreatedUserId = userId));

    this.permitUploadProgress$ = this.storageService.getPermitUploadProgress();
    this.medicalUploadProgress$ = this.storageService.getMedicalUploadProgress();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public onCreateUser(userData: {
    firstForm: RegistrationOneModel;
    secondForm: RegistrationTwoModel;
  }) {
    this.studentsStoreService.createUser(userData);
  }

  public uploadPermit(file: File) {
    this.storageStoreService.uploadDocument(
      file,
      'permit',
      this.lastCreatedUserId
    );
  }
  public uploadMedical(file: File) {
    this.storageStoreService.uploadDocument(
      file,
      'medical',
      this.lastCreatedUserId
    );
  }
}
