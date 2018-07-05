import { NgModule } from '@angular/core';

import { MicroserGatewayDemo1SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MicroserGatewayDemo1SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MicroserGatewayDemo1SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MicroserGatewayDemo1SharedCommonModule {}
