// viestit.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Viesti {
  nimi: string;
  terveiset: string;
}

@Component({
  selector: 'app-viestit',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Viestit / Messages</h2>
    <ul *ngIf="viestit$ | async as viestit">
      <li *ngFor="let viesti of viestit">
        <strong>{{ viesti.nimi }}</strong>: {{ viesti.terveiset }}
      </li>
    </ul>
  `
})
export class Viestit {
  viestit$: Observable<Viesti[]>;

  constructor(private firestore: Firestore) {
    const viestitCollection = collection(this.firestore, 'viestit');
    this.viestit$ = collectionData(viestitCollection, { idField: 'id' }) as Observable<Viesti[]>;
  }
}
