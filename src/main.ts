import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';
import install from "@nativescript-community/ui-collectionview-waterfall";
import { install as swipeMenuInstall } from "@nativescript-community/ui-collectionview-swipemenu";
import { AppModule } from './app/app.module';
import { install as installGestures } from '@nativescript-community/gesturehandler';

installGestures(true);
install();
swipeMenuInstall();
runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});

