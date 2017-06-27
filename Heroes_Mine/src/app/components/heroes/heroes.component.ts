import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';
import {Heroe} from '../../interfaces/heroe.interface';

declare var $:any;

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  private heroesList:Heroe[] = [];
  private resultadoOperacion:boolean;
  private abrirAlert:boolean = false;
  private idHeroe:string = "";
  private paramBuscar:string = "";

  constructor(
    private _router:Router,
    private _heroesService:HeroesService
  ) { }

  ngOnInit() {
    this.getAllHeroes();
  };

  getAllHeroes(){
    this._heroesService.findAllHeroes()
      .subscribe((response) => {
        this.heroesList = response;
      },
      (error) => {console.log(error)}
    )
  };

  buscarHeroe(){
  };

  agregarHeroe(){
    this._router.navigate(['heroe','nuevo']);
  };

  editarHeroe(id:string){
    this._router.navigate(['heroe',id]);
  };

  openDeleteModal(id:string){
    this.idHeroe = id;
    $('#deleteModal').modal();
  };

  closeDeleteModal(){
    $('#deleteModal').modal('hide');
    this.idHeroe = "";
  };

  eliminarHeroe(){
    if(this.idHeroe !== ""){

      this._heroesService.deleteHeroe(this.idHeroe)
        .subscribe((response) => {
          this.abrirAlert = true;
          this.resultadoOperacion = response;
          console.log(this.resultadoOperacion);
          this.getAllHeroes();
        },
        (error) => {
          console.log(error);
          this.abrirAlert = true;
          this.resultadoOperacion = false;
          console.log(this.resultadoOperacion);
          this.getAllHeroes();
        }
      )
      this.closeDeleteModal();
    }else{
      console.error("-- No se obtuvo id del Heroe a eliminar --");
      return;
    }
  };

}
