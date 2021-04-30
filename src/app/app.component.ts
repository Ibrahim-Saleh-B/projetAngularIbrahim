import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Utilisateur } from './utilisateur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  formulaire: FormGroup;
  listeUtilisateurs: Array<Utilisateur> = [];
  users: Utilisateur;

  constructor(private fb: FormBuilder) {

    this.formulaire = this.fb.group({

      nom : [null,  [Validators.required, Validators.pattern('[A-Z][a-z]+')]],
      prenom : [null, [Validators.required, Validators.pattern('[A-Z][a-z]+')]],
      age : [null, [Validators.required, Validators.pattern('[0-9]+')]],
      email :  [null, [Validators.email, Validators.required]]
    })
   }

  get nom(){

    return this.formulaire.get('nom');
  }

  get prenom(){

    return this.formulaire.get('prenom');
  }

  get age(){

    return this.formulaire.get('age');
  }

  get email(){

    return this.formulaire.get('email');
  }

  submit() {

    if(this.formulaire.valid) {

      this.users = new Utilisateur(this.nom.value, this.prenom.value, this.age.value, this.email.value);
      this.listeUtilisateurs.push(this.users);
    }
  }
}
