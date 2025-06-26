import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgStyle } from '@angular/common';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  styleUrls: ['../styles.css'],
  standalone: true,
  imports: [ReactiveFormsModule, NgStyle],
  template: `
    <h1>Angular training project</h1>
    <form [formGroup]="profileForm" (ngSubmit)="handlesubmit()" class="formi">
      <label>Give Your Name
        <br>
        <input type="text" formControlName="nimi"/>
      </label>
      <label>The Message
        <br>
        <textarea
          [ngStyle]="{
            'background-color': isDarkMode ? '#333' : '#fff',
            color: isDarkMode ? 'white' : 'black'
          }"
          cols="50"
          rows="6"
          formControlName="terveiset"></textarea>
      </label>
      <button [ngStyle]="{ width: 'fit-content' }" type="submit">Submit</button>
    </form>
  `
})
export class Home {
  isDarkMode = false;
  profileForm = new FormGroup({
    nimi: new FormControl(''),
    terveiset: new FormControl('')
  });

  // Inject Firestore
  firestore: Firestore = inject(Firestore);

  async handlesubmit() {
    const { nimi, terveiset } = this.profileForm.value;

    if (!nimi || !terveiset) {
      alert('Please fill out both fields.');
      return;
    }

    try {
      const viestitRef = collection(this.firestore, 'viestit');
      await addDoc(viestitRef, { nimi, terveiset, timestamp: new Date() });
      alert('Saved to Firebase!');
      this.profileForm.reset();
    } catch (err) {
      console.error('Error saving to Firestore:', err);
      alert('Error saving message');
    }
  }
}
