import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/toPromise';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth
  ){}

 
  get authenticated():boolean{
    return this.afAuth.authState !== null;
  }
 
  get currentUserObservable(): any 
  {
    return this.afAuth.auth
  }
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
 
   doRegister(email, password){
    this.loggedIn.next(true);
     return new Promise<any>((resolve, reject) => {
       firebase.auth().createUserWithEmailAndPassword(email, password)
       .then(res => {
         resolve(res);
       }, err => reject(err))
     })
   }
 
   doDelelte(email,password)
   {
     
     firebase.auth().signInWithEmailAndPassword(email,password).then(function(info)
     {
       var user = firebase.auth().currentUser;
       user.delete();
     })
   }
 
     logForUpdate(email, password){
     return new Promise<any>((resolve, reject) => {
       firebase.auth().signInWithEmailAndPassword(email,password).then(function(info)
       {
         
           console.log("logged");
           var user = firebase.auth().currentUser;
           console.log(user);
       });
       
     });
   }
 
   updateCurrentUser(email,password)
   {
     var user = firebase.auth().currentUser;
       user.updateEmail(email).then(function() {
         // Update successful.
       }).catch(function(error) {
         // An error happened.
       });
 
       user.updatePassword(password).then(function() {
         // Update successful.
       }).catch(function(error) {
         // An error happened.
       });
 
   }
 
   doLogin(email,password){
     return new Promise<any>((resolve, reject) => {
       console.log(email,password);
       firebase.auth().signInWithEmailAndPassword(email,password)
       .then(res => {
         resolve(res);
         console.log(res);
       }, err => reject(err))
     })
   }
 
   doLogout(){
     return new Promise((resolve, reject) => {
       if(firebase.auth().currentUser){
         this.afAuth.auth.signOut();
         resolve();
       }
       else{
         reject();
       }
     });
   }
 
 
 }
 