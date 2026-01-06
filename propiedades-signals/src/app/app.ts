import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  ngOnInit(): void {
    this.properties.set([
    {
      id: 1,
      address: "Cra 1 # 2 - 03",
      description: "Una casa bien ubicada",
      price: 2000,
      city: "Pereira",
      bathrooms: 2,
      bedrooms: 3,
      image: "https://example.com/image1.jpg"
    },

    {
      id: 2,
      address: "Cra 5 # 10 - 15",
      description: "Apartamento moderno en el centro",
      price: 1500,
      city: "Medellín",
      bathrooms: 1,
      bedrooms: 2,
      image: "https://example.com/image2.jpg"
    }
  ]);
  }
  protected readonly properties = signal<Property[]>([]);

  // protected propertiesOld: Property[] = [
  //   {
  //     id: 1,
  //     address: "Cra 1 # 2 - 03",
  //     description: "Una casa bien ubicada",
  //     price: 2000,
  //     city: "Pereira",
  //     bathrooms: 2,
  //     bedrooms: 3,
  //     image: "https://example.com/image1.jpg"
  //   },

  //   {
  //     id: 2,
  //     address: "Cra 5 # 10 - 15",
  //     description: "Apartamento moderno en el centro",
  //     price: 1500,
  //     city: "Medellín",
  //     bathrooms: 1,
  //     bedrooms: 2,
  //     image: "https://example.com/image2.jpg"
  //   }
  // ]

}