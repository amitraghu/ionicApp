import { AddRecipeService } from 'src/app/services/add-recipe.service';
import { LoggingService } from './services/logging.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  // providers: [LoggingService]
})
export class AppComponent {

  selectedComponent = 'recipe';
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    // private logging: LoggingService
  ) {
    this.initializeApp();
    // this.logging.log();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  onSelect(feature){
this.selectedComponent = feature;
// this.logging.log();
  }

}
