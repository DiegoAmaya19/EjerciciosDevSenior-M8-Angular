import { Component, OnInit, signal, computed, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly properties = signal<Property[]>([]);

  protected readonly total = computed(() => {
    return this.properties().length;
  });

  ngOnInit(): void {
    this.properties.set([
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
      },
    ]);
  }

  actualizarPropiedadesAdicionar() {
    const nuevaPropiedad = {
      id: 3,
      address: 'Calle 10 # 45 - 20',
      description: 'Casa campestre con amplio jardín',
      price: 2800,
      city: 'Envigado',
      bathrooms: 3,
      bedrooms: 4,
      image: 'https://example.com/image3.jpg',
    };

    this.properties.update(c => [...c, nuevaPropiedad]);
  }

  actualizarPropiedad() {
    this.properties.update((c) => {
      return c.map((item) => {
        if (item.id == 1) {
          console.log(`Entro en el true`);
          return { ...item, address: 'Calle 14 # 55 - 20' };
        } else {
          return item;
        }
      });
    });
  }
}
