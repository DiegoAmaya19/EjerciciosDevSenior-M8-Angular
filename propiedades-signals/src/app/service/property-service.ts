import { Injectable } from "@angular/core";
import { resolve } from "path";
import { delay, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private properties: Property[] = [];

  constructor() {
    this.properties = [
      {
        id: 1,
        address: 'Cra 1 # 2 - 03',
        description: 'Una casa bien ubicada',
        price: 2000,
        city: 'Pereira',
        bathrooms: 2,
        bedrooms: 3,
        image: 'https://example.com/image1.jpg',
      },

      {
        id: 2,
        address: 'Cra 5 # 10 - 15',
        description: 'Apartamento moderno en el centro',
        price: 1500,
        city: 'Medellín',
        bathrooms: 1,
        bedrooms: 2,
        image: 'https://example.com/image2.jpg',
      }
    ]
  }

  getAll(): Observable<Property[]> {
    return of(this.properties)
    .pipe(delay(3000));
  }
}