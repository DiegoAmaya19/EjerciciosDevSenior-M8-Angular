import { Component, OnInit, signal, computed, OnChanges, SimpleChanges, effect, inject } from '@angular/core';
import { DemoSignal } from "./demo-signal/demo-signal/demo-signal";
import { ComponentCard } from "./component-card/component-card";
import { PropertyService } from './service/property-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [DemoSignal, ComponentCard],
})
export class App implements OnInit {

  private propertyService = inject(PropertyService);

  protected readonly isLoading = signal(true);

  protected readonly properties = signal<Property[]>([]);

  protected readonly total = computed(() => {
    return this.properties().length;
  });

  constructor() {
    effect(() => {
      console.log(`Ha Cambiado la informacion de las propiedades y ahora hay ${this.total}`)
    })
  }

  ngOnInit(): void {

    this.isLoading.set(true);
    
    this.propertyService.getAll()
    .subscribe({
      next: (data) => {
        this.properties.set(data);
        this.isLoading.set(false);
        },
        error: () => {
          console.error(`Ocurrio un problema con las propiedades`);
        }
      });
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
