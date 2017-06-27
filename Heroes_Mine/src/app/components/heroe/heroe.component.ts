import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';
import {Heroe} from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  private heroeForm:FormGroup;
  private heroe:Heroe = {
    id:"",
    nombre:"",
  	poder:"",
  	casa:"",
    imagen:""
  }
  private param:string;
  private resultadoOperacion:boolean;
  private abrirAlert:boolean = false;
  private imagenString:string = "";

  constructor(
    private _router:Router,
    private _aRoute:ActivatedRoute,
    private _heroeService:HeroesService
  ) {
    this.heroeForm = new FormGroup({
      'id':new FormControl('',[]),
      'nombre':new FormControl('',[
                                    Validators.required,
                                    Validators.minLength(1)
                                  ]),
      'poder':new FormControl('',[
                                    Validators.required,
                                    Validators.minLength(1)
                                  ]),
      'casa':new FormControl('',[Validators.required]),
      'imagen':new FormControl('',[]),
    })
  }

  ngOnInit() {
    this._aRoute.params.subscribe(
      params => {
        this.param =params['id'];
      })

    if(this.param !== 'nuevo'){
      this._heroeService.findHeroe(this.param)
        .subscribe((response) => {
          this.heroe = response[0];
        },
        ((error) => console.log(error))
      )
    }
  };

  guardarHeroe(){
    if(this.imagenString !== ""){
      this.heroeForm.value.imagen = this.imagenString;
    }
    this._heroeService.addHeroe(this.heroeForm.value)
      .subscribe((response) => {
        this.abrirAlert = true;
        this.resultadoOperacion = response;
        this._router.navigate(['heroe','nuevo']);
        this.heroeForm.reset({
          "casa":""
        });
      },
      (error) => {
        console.log(error);
        this.abrirAlert = true;
        this.resultadoOperacion = false;
      }
    )
  };

  actualizarHeroe(){
    if(this.imagenString == ""){
      this.heroeForm.value.imagen = this.heroe.imagen;
    }else{
      this.heroeForm.value.imagen = this.imagenString;
    }

    this._heroeService.updateHeroe(this.heroeForm.value)
      .subscribe((response) => {
        this.abrirAlert = true;
        this.resultadoOperacion = response;
      },
      (error) => {
        console.log(error);
        this.abrirAlert = true;
        this.resultadoOperacion = false;
      }
    )
  };

  cargarImagen(event:any){
    const files = event.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();
      reader.onload = this.transformImagen.bind(this);
      reader.readAsBinaryString(file);
      }
    };

  transformImagen(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.imagenString = btoa(binaryString);
};


}
