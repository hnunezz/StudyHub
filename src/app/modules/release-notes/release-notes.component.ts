import { Component, Input } from '@angular/core';
import { releaseNotesData } from '../../../assets/data/release-notes';

@Component({
  selector: 'app-release-notes',
  standalone: true,
  imports: [],
  templateUrl: './release-notes.component.html',
  styleUrl: './release-notes.component.scss'
})
export class ReleaseNotesComponent {
    @Input() home: boolean = false;

    releaseNotesData = releaseNotesData;  //? MOCK!
}
