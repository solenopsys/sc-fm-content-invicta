import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';
import {BootstrapComponent, GridState,} from '@solenopsys/uimatrix-templates';
import {APP_BASE_HREF} from '@angular/common';
import {DECLARATION, IMPORTS_CONF, PROVIDERS_CONF, ROUTES_DEV} from "./conf";
import {ContentGroupState, ContentNodeState, ContentState, FragmentState,} from "@solenopsys/uimatrix-editor-content";
import {ClusterState} from "@solenopsys/lib-clusters";
import {createNgxs} from "@solenopsys/lib-storage";
import {RowsState} from "@solenopsys/uimatrix-lists";
import {environment} from "../environments/environment";
import {HStreamService, HStreamsState, StreamsPool, WsPool} from "@solenopsys/lib-hyperstreams";
import { FuiEditorModule } from "@solenopsys/uimatrix-editor-content";

@NgModule({
  declarations: [
    // ...DECLARATION
  ],
  imports: [
    RouterModule.forRoot(ROUTES_DEV),
    ...IMPORTS_CONF,
    ...createNgxs(!environment.production, [
      ClusterState,
      FragmentState,
      FuiEditorModule,
      ContentState,
      ContentGroupState,
      ContentNodeState,
      RowsState,
      GridState,
      HStreamsState
    ], true),
  ],
  providers: [...PROVIDERS_CONF, WsPool,HStreamService,StreamsPool,
    {provide: 'assets_dir', useValue: ''},
    {provide: 'single_start', useValue: true},
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [BootstrapComponent],
})
export class AppModule {
}


