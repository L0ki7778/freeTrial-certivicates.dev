import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { SignalPresentationComponent } from './components/signal-presentation/signal-presentation.component';
import { DemoComponent } from './components/demo/demo.component';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'signals', component: SignalPresentationComponent },
  { path: 'demo', component: DemoComponent },
];
