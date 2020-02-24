import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

export const services: any[] = [AuthService, AuthGuard];

export * from './auth.service';
export * from './auth.guard';
