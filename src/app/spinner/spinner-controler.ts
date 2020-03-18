import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { count } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class SpinnerController
{
    
    countActive: number = 0;
    private subject = new Subject<number>();

    public start(): void {
        this.countActive++;        
        this.subject.next(this.countActive);
    }

    public stop() : void {
        this.countActive--;
        this.subject.next(this.countActive);
    }

    public getMessage(): Observable<number> {
        return this.subject.asObservable();
    }

}
