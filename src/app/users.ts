import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
//import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [NgFor],
    standalone:true,
    template: `<h1>The familly</h1>
<p>
<ol>
<li *ngFor="let resource of resources; let i = index">
        {{ resource }}
</li>
</ol>
`,
})
export class Users {
    resources = [
        'Jouni',
        'Reetta',
        'Laura',
        'Aleksi',
        'Ymmi',
        'Miisu',
        'Homer',
    ];
}
