import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-marina-mb',
  imports: [MatExpansionModule],
  standalone: true,
  templateUrl: './marina-mb.html',
  styleUrl: './marina-mb.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class MarinaMb {

}
