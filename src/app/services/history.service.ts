import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HistoryServices {

    private originData = new BehaviorSubject<string>('');
    datos$ = this.originData.asObservable();

    sendHistory(history: string){
        this.originData.next(history);
    }

}


