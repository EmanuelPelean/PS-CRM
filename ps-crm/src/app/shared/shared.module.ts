import { NgModule } from '@angular/core';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material';

// store-services
// import * as fromServices from './store-services';

@NgModule({
  imports: [FormsModule, CommonModule, MatToolbarModule],
  declarations: [...fromComponents.components, ...fromContainers.containers],
  exports: [...fromComponents.components, ...fromContainers.containers]
  // providers: [...fromServices.store-services]
})
export class SharedModule {}
