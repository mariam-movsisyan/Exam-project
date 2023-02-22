import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalDetailsComponent {

  public form!: FormGroup
  constructor(private _fb: FormBuilder){
    this.form = this._fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

}
