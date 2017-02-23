import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import  'rxjs/add/operator/map';
import { Business } from '../business';
import { Category } from '../categoery';

@Injectable()
export class FirebaseService {
    businesses : FirebaseListObservable<Business[]>;
    categories : FirebaseListObservable<Category[]>;

    constructor(private _af : AngularFire) {}

    getBusinesses(categoery:string = null) {
        if(categoery !=null && categoery != "0"){
            this.businesses = this._af.database.list('/business',{
                query: {
                    orderByChild: 'category',
                    equalTo: categoery
                }
            }) as
            FirebaseListObservable<Business[]>  
        }else {
            this.businesses = this._af.database.list('/business') as
            FirebaseListObservable<Business[]>
        }
        
            return this.businesses;
    }


    getCategories() {
        this.categories = this._af.database.list('/categories') as
            FirebaseListObservable<Category[]>
            return this.categories;
    }

    addBusiness(newBusiness) {
        return this.businesses.push(newBusiness);
    }
    addCatogry(new1) {
         return this.categories.push(new1);
    }
    updateBusiness(key,update) {
        return this.businesses.update(key,update);
    }
    deleteBusiness(key) {
        return this.businesses.remove(key);
    }
}
  