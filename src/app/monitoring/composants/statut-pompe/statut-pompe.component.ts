import {Component, Input, OnInit} from '@angular/core';
import {Pompes} from "../../../shared/enum/pompes";
import {Observable} from "rxjs";
import {PompeService} from "../../../shared/services/pompe/pompe.service";
import {WebSocketService} from "../../../shared/services/ws/web-socket.service";
import {map} from "rxjs/operators";
import {Data} from "../../../shared/model/data.model";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-statut-pompe',
  templateUrl: './statut-pompe.component.html',
  styleUrls: ['./statut-pompe.component.scss']
})
export class StatutPompeComponent implements OnInit {

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
        return this._pompe === Pompes.PISCINE
          ? data.isPompePiscineEnMarche
          : data.isPompeChauffageEnMarche
      })
    );
  }

  activerPompe({checked}: MatSlideToggleChange) {
    this.pompeService.changerEtatPompe(this._pompe, checked);
  }

}
