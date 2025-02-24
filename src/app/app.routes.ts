import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { SignalPresentationComponent } from './components/signal-presentation/signal-presentation.component';

export const routes: Routes = [
    {path: '', component:HeroComponent},
    {path:'signals', component:SignalPresentationComponent}
];
