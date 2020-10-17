import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Burger Jawns';

  menuItems =[{
    id: 1,
    name: 'French Fries',
    description: 'Oily, salty and hot',
    price: 50,
    amount: 0
  },
  {
  id: 2,
  name: 'Burger',
  description: 'Beefy, fresh and hot',
  price: 10,
amount: 0},
  {
    id: 3,
    name: 'Soda',
    description: 'Sweeter than water',
    price: 2,
    amount: 0
  }]
}
