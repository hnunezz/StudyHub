import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderActionsComponent } from './header-actions/header-actions.component';
import { PrincipalFormComponent } from './principal-form/principal-form.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';



@NgModule({
  declarations: [
    HeaderActionsComponent,
    PrincipalFormComponent,
  ],
  imports: [
  ],
  exports: [
    HeaderActionsComponent,
    PrincipalFormComponent
  ]
})
export class CommonsUserModule { }
