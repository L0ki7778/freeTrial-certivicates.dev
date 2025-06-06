import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { SignalPresentationComponent } from './components/signal-presentation/signal-presentation.component';
import { DirectivesPlaygroundComponent } from './components/directives-playground/directives-playground.component';
import { DemoComponent } from './components/demo/demo.component';
import { RouteInputsComponent } from './components/route-inputs/route-inputs.component';
import { ContainerComponentComponent } from './testing-practice/container-component/container-component.component';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'signals', component: SignalPresentationComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'directive', component: DirectivesPlaygroundComponent },
  { path: 'routing', component: RouteInputsComponent },
  { path: 'testing', component: ContainerComponentComponent }
];
