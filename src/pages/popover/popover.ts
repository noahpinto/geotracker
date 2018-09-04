import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  status="track_me";


 

  constructor(public navCtrl: NavController,public navParams: NavParams,public events: Events) {




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  addMarker(){

    this.events.publish('addmarker', '' );


  }

  tracker(){


    
    if(this.status=="track_me")
    {this.events.publish('tracker', status );
    this.status="stop_tracker";
  }
else
    this.status="track_me";



  }

  trace(){
    this.events.publish('trace','');
  }

  logout(){

    this.events.publish('logout', '' );


  }

}
