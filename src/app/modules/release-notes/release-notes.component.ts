import { Component, Input } from '@angular/core';
import { releaseNotesData } from '../../../assets/data/release-notes';
import { SearchInputComponent } from "../../shared/components/search-input/search-input.component";

@Component({
  selector: 'app-release-notes',
  standalone: true,
  imports: [SearchInputComponent],
  templateUrl: './release-notes.component.html',
  styleUrl: './release-notes.component.scss'
})
export class ReleaseNotesComponent {
    @Input() home: boolean = false;

    releaseNotesData = releaseNotesData;  //? MOCK!
}
