import { NgModule } from '@angular/core';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';
import {FormsModule} from '@angular/forms';

// services
// import * as fromServices from './services';

@NgModule({
  imports: [
    FormsModule,
  ],
  declarations: [...fromComponents.components, ...fromContainers.containers],
  exports: [...fromComponents.components, ...fromContainers.containers]
})
export class AuthModule {}
