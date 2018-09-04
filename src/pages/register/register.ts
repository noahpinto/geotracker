import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  isuser: boolean;
  username;
  password;
  page_name="Login";

  is_login;


  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, public db: AngularFireDatabase, public afAuth: AngularFireAuth,public loadingCtrl: LoadingController) {
    this.is_login = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');

    if (window.localStorage.getItem('isuser')) {

      this.navCtrl.setRoot(HomePage)

    }

  }

  reg() {

    
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
     // duration: 3000
    });
    loader.present();
    
    this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(this.username, this.password).then(result => {
      console.log('result', result)
      window.localStorage.setItem('isuser', this.username)
      this.db.list('/geotracker_np').push(this.username).then(saved => {
        console.log('saved', saved)
      }, error => {
        console.log('error', error)
      })
      loader.dismiss();
      this.navCtrl.setRoot(HomePage)

    }, error => {
      console.log('error', error)
      let alert = this.alertCtrl.create({
        title: error,
        buttons: ['OK']
      });
      alert.present();
  
      loader.dismiss();
    })

    // let user = {
    //   name : this.username,
    //   password : this.password
    // }
    // this.db.list('/username').push(user).then( saved => {
    //   console.log('saved', saved)
    // }, error=>{
    //   console.log('error', error)
    // })

    // this.navCtrl.setRoot(HomePage)
    // this.db.list('/username').valueChanges();


  }

  onLogin(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
     // duration: 3000
    });
    loader.present();
    

    this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(this.username,this.password).then(result=> {
      console.log('result', result)
      window.localStorage.setItem('isuser', this.username)
      loader.dismiss();
      this.navCtrl.setRoot(HomePage)

    }, error => {
      console.log('error', error)
      let alert = this.alertCtrl.create({
        title: error,
        buttons: ['OK']
      });
      alert.present();
      loader.dismiss();
    })
  }
  change_sign(){
    this.page_name="Register";
    this.is_login=false;
  }
  change_login(){
    this.page_name="Login";
    this.is_login=true;
  }
}
