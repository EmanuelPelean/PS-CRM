import { StudentsService } from './students.service';
import { StorageService } from './storage.service';

export const services: any[] = [StudentsService, StorageService];

export * from './students.service';
export * from './storage.service';
