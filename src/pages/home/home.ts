import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { RegisterPage } from '../register/register';
// import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../../pages/popover/popover';
import { Events } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';


import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
//import { Observable } from '@firebase/util';
declare var google;

export interface Item { name: string; }

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  curlatlong;
  status;// = "track me";
  track_me = true;
  track_status = false;
  _subscribe;
  track;
  loc;
  watch : any
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<any[]>;
  
  myDate;
  
  color;

  constructor(public navCtrl: NavController, public geolocation: Geolocation,public popoverCtrl: PopoverController,public events: Events, public afAuth: AngularFireAuth, public db: AngularFireDatabase, ) {
    this.color = "primary";
    const listRef = db.list('data');
   // this.items = db.list('/geotracker_np').valueChanges();
  // let u="dhgs@gbbh.bjnn";
  
   //this.items= this.db.list('/geotracker_np', ref => ref.orderByChild('username').equalTo(u)).valueChanges();
    
  

    events.subscribe('addmarker', () => {
      console.log('Welcome');
      this.addMarker();
    });


    events.subscribe('tracker', () => {
      console.log('Welcome');
      this.tracker();
    });

    events.subscribe('trace', () => {
      console.log('Welcome');
      this.trace();

    });

    events.subscribe('logout', () => {
      console.log('Welcome');
      this.logout();
    });
  }

  ionViewDidLeave() {
    this.map = null;
    this.mapElement = null;
  }

  ionViewDidLoad() {
    this.loadMap();
  }



  loadMap() {

    this.geolocation.getCurrentPosition().then((position) => {

      console.log('position', position)
      if (position) {
        this.curlatlong = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        let mapOptions = {
          center: this.curlatlong,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        let marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: this.curlatlong
        });
        let content = "<h4> " + this.curlatlong + "</h4>";
        this.addInfoWindow(marker, content);
      } else {
        let mapOptions = {
          center: new google.maps.LatLng(12, 72),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        let marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: this.curlatlong
        });
        let content = "<h4> " + this.curlatlong + "</h4>";
        this.addInfoWindow(marker, content);
      }
    }, (err) => {
      console.log(err);
    });
  }

 

  show(myEvent){
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  logout() {

    this.navCtrl.setRoot(RegisterPage)
    window.localStorage.removeItem('isuser');
    this.afAuth.auth.signOut();
  }

  addMarker() {

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);


  }

  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  tracker() {

    if (this.track_me) {

     // this.status = "stop tracking me";
      this.track_me = false;
      this.track_status = true;
      this.color = "danger";
    } else {

     // this.status = "track me";
      this.track_me = true;
      this.track_status = false;
      this.color = "primary";
    }

  if (this.track_status) {

    

      let username = window.localStorage.getItem('isuser');
      //places to write watch
      this.watch = this.geolocation.watchPosition();
      
      this.watch.subscribe((data) => {
        console.log('watch', data)
        // data can be a set of coordinates, or an error (if an error occurred).
        // data.coords.latitude
        // data.coords.longitude

        if (data) {
          this.curlatlong = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);

          let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.curlatlong
          });
          let content = "<h4> " + this.curlatlong + "</h4>";
          this.addInfoWindow(marker, content);
          let coor=data["coords"];
          let latitude=coor["latitude"];
          let longitude=coor["longitude"];

          // NEW ADDED CODE
          let user = { username, latitude ,longitude};
          console.log(user);
          this.db.list('/geotracker_np').push(user).then(saved => {
            console.log('saved', saved)
          }, error => {
            console.log('error', error)
          })
          //watch.delay(9000);
        }

        else {
          console.log("not getting loc");
          let mapOptions = {
            center: new google.maps.LatLng(12, 72),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
          let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.curlatlong
          });
          let content = "<h4> " + this.curlatlong + "</h4>";
          this.addInfoWindow(marker, content);
        }

      }, (err) => {
        console.log("something went wrong in loc");
        console.log(err);
      });
    
    }else{
    //  this.watch = this.geolocation.watchPosition();
     // this.watch.unsubscribe();
     console.log("stoped")
     
    }

  }

  trace()
 {
    
    let username = window.localStorage.getItem('isuser');
  // let username="dhgs@gbbh.bjnn";//took this bec i wanted a user whose data was stored in firebase
   this._subscribe= this.db.list('/geotracker_np', ref => ref.orderByChild('username').equalTo(username)).valueChanges().subscribe(loc=>{
    for(let item in loc)
     {
       console.log("hi");

       let sing_loc=loc[item];

       this.curlatlong = new google.maps.LatLng(sing_loc["latitude"], sing_loc["longitude"]);
       
                 let marker = new google.maps.Marker({
                   map: this.map,
                   animation: google.maps.Animation.DROP,
                   position: this.curlatlong
                 });
                 let content = "<h4> " + this.curlatlong + "</h4>";
                 this.addInfoWindow(marker, content);

      // console.log(sing_loc["latitude"]);
      // let lat=item[]
       /* let a=loc[item];
     let dat= a["data"];
     let timestamp=dat["timestamp"];
     let date: Date = new Date(timestamp);
     let day=new Date(Date.UTC(date.getFullYear(), date.getMonth(),date.getDay()));
     console.log(day)
     let d: Date=new Date();
     let compar=new Date(Date.UTC(d.setDate(2018),d.setMonth(2),d.setDate(23)));
     console.log(compar);
     if(day ===this.myDate){
     let coor=dat["coords"];
     let lat=coor["latitude"];
     console.log(lat);
     console.log("hi");
     let latat=a["data"["coords"["latitude"]]];
     console.log(latat);
     let longi=coor["longitude"];
     
     let ionicDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
     
     console.log(ionicDate);
     let locat = new google.maps.LatLng(lat,longi);
     let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: locat
    });
    let content = item;

    this.addInfoWindow(marker, content);
     }*/
//
}
   });
  
   //  for(let item in this.items)
  //  console.log(item["data"["coords"["latitude"]]]);
   

   // this._subscribe=this.db.list('/geotracker_np').valueChanges().subscribe(data =>{
    //  this.track = data.filter( messageItem =>messageItem["username"] == username);
     // console.log(this.track.filter(this.track["data"]));
 // loc=this.track.filter(loc1=>loc1["data"]);
//console.log(this.track.ViewChild("coords"));
   //   console.log(loc);
   
   //console.log(this.db.collection('data').valueChanges())
  // console.log(this.track);
      

    //  this.track.snapshotChanges(['data']).subscribe(action=>{
    //    action.forEach(action=>{
    //      console.log(action.coords)
     //  })
  //   })
   
   //console.log(this.db.list(['data']).valueChanges());


   
  

    //})
   
  }


}

///Not here

