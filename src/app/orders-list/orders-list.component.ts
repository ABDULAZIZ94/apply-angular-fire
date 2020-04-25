import { Component, OnInit } from '@angular/core';
import { OrdersService } from "../services/orders.service";

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

 constructor(private ordersService:OrdersService){}

  ngOnInit() {this.getCoffeeOrders();}

  coffeeOrders;

  getCoffeeOrders = () => this.ordersService.getCoffeeOrders().subscribe(res =>(this.coffeeOrders = res));

  markCompleted = data => this.ordersService.updateCoffeeOrder(data);

  deleteOrder = data => this.ordersService.deleteCoffeeOrder(data);
}
