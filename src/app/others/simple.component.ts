import { Component, Input, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'simple',
    template: 'Text:{{input}}'
})
export class SimpleComponent implements OnChanges, OnInit, OnDestroy {
    @Input() input!: string;
    constructor() {
        console.log("Constructor");
    }
    ngOnInit() {
        console.log("Init");
    }
    ngOnChanges(changes: SimpleChanges) {
        for (let property in changes) {
            let change = changes[property];
            let currentchange = JSON.stringify(change.currentValue);
            let previouschange = JSON.stringify(change.previousValue);
            console.log(property + ":currentValue=" + currentchange + ",previousValue=" + previouschange);
        }
    }
    ngOnDestroy() {
        {
            console.log("On Destroy");
        }
    }
}
