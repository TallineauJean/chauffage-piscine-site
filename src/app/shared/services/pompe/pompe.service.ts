import {Injectable} from '@angular/core';
import {Pompes} from "../../enum/pompes";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PompeService {

  constructor(private readonly http: HttpClient) {
  }

  changerEtatPompe(idPompe: Pompes, isPompeActive: boolean): void {
    this.http.post(`/api/pompe`, {idPompe, isPompeActive}).subscribe();
  }
}
