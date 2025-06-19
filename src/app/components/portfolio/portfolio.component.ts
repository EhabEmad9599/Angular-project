import { Component } from '@angular/core';


interface Cards  {
  id:number,
  imgUrl:string

}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})



export class PortfolioComponent {
  
    cards: Cards[] = [
    {
      id: 1,
      imgUrl:
        'assets/poert1.png',
    },
    {
      id: 2,
      imgUrl:
        'assets/port2.png',
    },
    {
      id: 3,
      imgUrl:
        'assets/port3.png',
    },
    {
      id: 4,
      imgUrl:
        'assets/poert1.png',
    },
    {
      id: 5,
      imgUrl:
        'assets/port2.png',
    },
    {
      id: 6,
      imgUrl:
        'assets/port3.png',
    },
  ];

}
