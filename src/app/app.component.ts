import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
    ngOnInit(): void {
        //запуск генератора
        setInterval(() => {
            console.log(Math.random());
        },5000)
    }
}
