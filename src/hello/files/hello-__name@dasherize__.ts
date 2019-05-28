import {Component, OnInit} from '@angular/core' 

@Component({
    selector: 'hello-<%= dasherize(name) %>'
})
export class Hello<%= classify(name) %>Component implements OnInit {
    constructor() {
        
    }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }
}