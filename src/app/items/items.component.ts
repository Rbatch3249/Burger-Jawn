import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menuItems =[{
    id: 1,
    name: 'French Fries',
    description: 'Oily, salty and hot',
    price: 50,
    amount: 0,
    featured: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFjRhTOCHal8Gc_1xz0kQTaToHbHQ4phTkDw&usqp=CAU',

  },
  {
  id: 2,
  name: 'Burger',
  description: 'Beefy, fresh and hot',
  price: 10,
amount: 0,
featured: true,
image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRp83mfgtogOu4TpNeXJKvkjnkczVB-IapY9A&usqp=CAU',

},
  {
    id: 3,
    name: 'Soda',
    description: 'Sweeter than water',
    price: 2,
    amount: 0,
    featured: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwsvIOpS5CCs5_8U2aML6MaI0K7OsjrTbVZw&usqp=CAU',
  
  
  }]
  cart=0;
  total=0;
  upAmount(menuItem){
    menuItem.amount++;
    this.cart++;
    this.total += menuItem.price;
  }
  downAmount(menuItem){
    if(menuItem.amount > 0){
      menuItem.amount--;
      this.cart--;
      this.total -= menuItem.price;
    }
  }
}
