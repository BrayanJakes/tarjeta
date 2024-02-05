import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TarjetaComponent } from '../../components/tarjeta/tarjeta.component';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorModule } from 'primeng/paginator';



@Component({
    selector: 'app-home',
    standalone: true,
    providers: [ApiService],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        InputTextModule,
        DropdownModule,
        TarjetaComponent,
        HttpClientModule,
        PaginatorModule
    ]
})
export class HomeComponent implements OnInit{

  charactersTemp: any = [];
  characters: any = [];
  totalRecords = 0;
  page = 0;
  rows = 5;
  filter = ''

  status: any = [];
  gender: any = [];

  constructor(private apiServices: ApiService ){}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.apiServices.getCharacters().subscribe({
      next: (resp: any) => {
        if(resp){
          this.charactersTemp = resp.results;
          this.characters = [];

          for (let index = 0; index < this.charactersTemp.length; index++) {

          

            if(!this.status.includes(this.charactersTemp[index].status)){
              this.status.push(this.charactersTemp[index].status)
            }
            if(!this.gender.includes(this.charactersTemp[index].gender)){
              this.gender.push(this.charactersTemp[index].gender)
            }

            if(index < this.rows){
              this.characters.push(this.charactersTemp[index]);
            }
          }
          
          
          this.totalRecords = this.charactersTemp.length;
        }
      }
    })
  }

  

  onPageChange(e: any){
    this.page = e.page;
    this.rows = e.rows;

    this.characters = [];

    for (let index = 0; index <= this.charactersTemp.length; index++) {

      if(index < this.rows && this.page > 0){
        if(this.charactersTemp[e.first + index]){
          this.characters.push(this.charactersTemp[e.first + index]);
        }
       
      }
      if(index < this.rows && this.page === 0){
        this.characters.push(this.charactersTemp[index]);
      }
    }

  }


  statusEdit(value: string){
    this.characters = this.charactersTemp.filter((x: any) => x.status === value);
  }


  genderEdit(value: string){
    this.characters = this.charactersTemp.filter((x: any) => x.gender === value);
  }


  filterEditValue(value: string){
    if(value === ''){
      return
    }else{
      return this.characters = this.charactersTemp.filter((x: any) => x.name.toUpperCase().includes(value.toUpperCase()));
    }
  }

  

}
