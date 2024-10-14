import { Routes } from '@angular/router';
import { BroadcasterComponent } from './routes/broadcaster/broadcaster.component';

export const routes: Routes = [{ path: '**', component: BroadcasterComponent }];
