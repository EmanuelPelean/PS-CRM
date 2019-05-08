import { StudentsStoreService } from './students-store.service';
import { StorageStoreService } from './storage-store-service';

export const storeServices: any[] = [StudentsStoreService, StorageStoreService];

export * from './students-store.service';
export * from './storage-store-service';
