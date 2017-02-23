import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.servic';
import { Business } from './business';
import { Category } from './categoery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  businesses : Business[];
  categories : Category[];
  appState : string;
  activeKey : number;
  activeCategory: string;

  ecompany:string;
  ecategory:string; 
  eyears_in_business:number;
  edescription:string;
  ephone:number;
  eemail:string;
  estreet_address:string;
  ecity:string;
  estate:string;
  ezipcode:number;

    constructor(private _firebaseService : FirebaseService) {
    }

    ngOnInit(){
        this._firebaseService.getBusinesses()
        .subscribe(businesses => {
         this.businesses = businesses;
        });
        this._firebaseService.getCategories()
        .subscribe(categories => {
         this.categories = categories;
        });
    }

    changeState(state,key) {
      console.log("state is changed :::-" + state);
      if(key){
        this.activeKey  = key;
        console.log("key is :" + key);
      }
      this.appState = state;
    }

    getFilteredCategory(category) {
     this._firebaseService.getBusinesses(category)
     .subscribe(businesses =>{
       this.businesses = businesses;
     });
    }

  addBusiness(
    company:string,
    category:string, 
    years_in_business:number,
    description:string,
    phone:number,
    email:string,
    street_address:string,
    city:string,
    state:string,
    zipcode:number){
      var created_at = new Date().toString();
      
      var newBusiness = {
        company: company,
        category: category,
        years_in_business:years_in_business,
        description:description,
        phone:phone,
        email:email,
        street_address: street_address,
        city: city,
        state: state,
        zipcode: zipcode,
        created_at:created_at
      }

      //console.log(newBusiness);
      this._firebaseService.addBusiness(newBusiness);
      this.changeState('default','');

        
    }

    showEdit(business){
        this.changeState('edit',business.$key);
        this.ecompany = business.company;
        this.ecategory = business.category; 
        this.eyears_in_business = business.years_in_business;
        this.edescription = business.description;
        this.ephone = business.phone;
        this.eemail = business.email;
        this.estreet_address = business.street_address;
        this.ecity = business.city;
        this.estate = business.state;
        this.ezipcode = business.zipcode;

    }

    updateBusiness() {
      var updata = {
        company: this.ecompany,
        category: this.ecategory,
        years_in_business:this.eyears_in_business,
        description:this.edescription,
        phone:this.ephone,
        email:this.eemail,
        street_address: this.estreet_address,
        city: this.ecity,
        state: this.estate,
        zipcode: this.ezipcode
      }

      this._firebaseService.updateBusiness(this.activeKey,updata);
      this.changeState('default','');
    }

    addCategory(newvalue) {
      var new1 = {
        name : newvalue
      }
      this._firebaseService.addCatogry(new1);
      this.changeState('default','');
    }

    deleteBusiness(key) {
      this._firebaseService.deleteBusiness(key);
      this.changeState('default','');
    }
}
