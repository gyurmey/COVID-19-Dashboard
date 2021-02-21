import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';

const Material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatCardModule,
  MatGridListModule,
  MatTableModule,
  MatSortModule,
  MatProgressBarModule,
  MatSliderModule,
  MatExpansionModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
