import {Component, Input, OnInit} from '@angular/core';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {PompeService} from "../../shared/services/pompe/pompe.service";
import {Pompes} from "../../shared/enum/pompes";
import {WebSocketService} from "../../shared/services/ws/web-socket.service";
import {Data} from "../../shared/model/data.model";
import {map, tap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-gestion-etat-pompe',
  templateUrl: './gestion-etat-pompe.component.html',
  styleUrls: ['./gestion-etat-pompe.component.scss']
})
export class GestionEtatPompeComponent implements OnInit {

  @Input() set pompe(pompe: Pompes) {
    this._pompe = pompe;
    this.libelle = pompe === Pompes.PISCINE ? 'Piscine' : 'Chauffage'
  };

  public etatPompe$!: Observable<boolean>;
  public libelle!: string;

  private _pompe!: Pompes;

  constructor(private readonly pompeService: PompeService,
              private readonly dataService: WebSocketService) {
  }

  ngOnInit(): void {
    this.etatPompe$ = this.dataService.data$.pipe(
      map((data: Data) => {
        console.log(data);
        return this._pompe === Pompes.PISCINE
          ? data.isPompePiscineEnMarche
          : data.isPompeChauffageEnMarche
      }),
      tap((data => {console.log(data)}))
    );
  }

  activerPompe({checked}: MatSlideToggleChange) {
    this.pompeService.changerEtatPompe(this._pompe, checked);
  }

}
