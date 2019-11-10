import { Injectable, NgZone } from '@angular/core';
import { FirebaseService } from "~/app/shared/services/firebase.service";

@Injectable({
    providedIn: 'root'
})
export class GroceryService {
    path: string = 'groceries';

    constructor(private ngZone: NgZone, private firebaseService: FirebaseService) { }

    getObservableList() {
        return this.firebaseService.getObservableList(this.path, this.handleSnapshot);
    }

    handleSnapshot(data: any) {
        return data
            ? Object.keys(data)
            .map(key => ({...{id: key}, ...data[key]}))
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            : [];
    }

    create(item) {
        this.firebaseService.createItem(this.path, item);
    }

    remove(id: string) {
        this.firebaseService.removeItem(this.path, id);
    }
}
