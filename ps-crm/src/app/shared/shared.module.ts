import { NgModule } from '@angular/core';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// services
// import * as fromServices from './services';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [...fromComponents.components, ...fromContainers.containers],
  exports: [...fromComponents.components, ...fromContainers.containers]
  // providers: [...fromServices.services]
})
export class SharedModule {}
