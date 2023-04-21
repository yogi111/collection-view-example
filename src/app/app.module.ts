import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core'
import {NativeScriptModule, registerElement} from '@nativescript/angular'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {ItemsComponent} from './item/items.component'
import {ItemDetailComponent} from './item/item-detail.component'
import {CollectionViewModule} from "@nativescript-community/ui-collectionview/angular";
import {SwipeMenuModule} from "@nativescript-community/ui-collectionview-swipemenu/angular";
import {GestureRootView} from "@nativescript-community/gesturehandler";
registerElement('GestureRootView', () =>  GestureRootView);
@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, CollectionViewModule, AppRoutingModule, SwipeMenuModule],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
