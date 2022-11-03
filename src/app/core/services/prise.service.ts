import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { PRISES } from 'src/app/shared/models/mock.prise-list';
import { SENSOR_TEMPERATURE } from 'src/app/shared/models/mock.sensortemperature-list';
import { Prise } from 'src/app/shared/models/prise';
import { SensorTemperature } from 'src/app/shared/models/sensor';

@Injectable({
  providedIn: 'root'
})
export class PriseService{

  data: string = "priseIndex:[0],enableState:[1]";
  listPrise = PRISES

  constructor(private http: HttpClient) { }

  getNomFonctionSensor():Array<{intitule:string, valeur: string}> {
    return [{intitule:'Actif si supérieur à', valeur: 'actifSup'},
            {intitule:'Actif si inférieur à', valeur: 'actifInf'},
            {intitule:'Actif entre Min', valeur: 'actifEntreMin'},
            
            {intitule:'Inactif entre Min', valeur: 'inactifEntreMin'}
            ]
  }

  getSensorList(): SensorTemperature[] {
    return SENSOR_TEMPERATURE;
  }

  setPrise(prise: Prise) {
    
    
    //list = this.listPrise.filter((elmt) => {return elmt.id != prise.id})
    //list.push(prise)
    this.listPrise.splice(prise.id,1)
    this.listPrise.splice(prise.id,0,prise)
     
  }

  getPriseList(): Prise[]{
    return this.listPrise;
  }

  getPriseById(id: number): Prise{
   return this.listPrise.filter((prise) => {return prise.id == id})[0]
  }

  getType():Array<string>{
    return ['date' , 'cycle', 'temperature', 'humidite'];
  }

  getUnicode(type: string):string{
    const arrayCode =  [{name: 'temperature', code:'&#127777;'},
            {name: 'humidite', code:'&#128167;'},
            {name: 'cycle', code:'&#128260;'},
            {name: 'date', code:'&#128197;'}];

    return Object.values(arrayCode.filter((unicode) => {return unicode.name.includes(type)}))[0].code

            
  }

  sendValue(adresse: string, data: string):Observable<Prise>{
    console.log(`sendValue:`, data);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
    return this.http.post<Prise>(adresse,data, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }
  private log(response: any) {
    console.table(response);
  }


  private handleError(error: Error, errorValue: any) {
    console.error(error); //En rouge
    return of(errorValue);
  }
}
