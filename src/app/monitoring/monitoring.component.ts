import {Component, OnInit} from '@angular/core';
import {WebSocketService} from "../shared/services/ws/web-socket.service";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Data} from "../shared/model/data.model";

@Component({
    selector: 'app-monitoring',
    templateUrl: './monitoring.component.html',
    styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent implements OnInit {

    public etatPompes$!: Observable<{pisicne: boolean, chauffage: boolean}>;

    constructor(private readonly dataService: WebSocketService) {
    }

    ngOnInit(): void {
        this.etatPompes$ = this.dataService.data$
            .pipe(
                map(({isPompePiscineEnMarche,isPompeChauffageEnMarche}: Data) => {
                    return {
                        pisicne: isPompePiscineEnMarche,
                        chauffage: isPompeChauffageEnMarche
                    }
                })
            );
    }
}
