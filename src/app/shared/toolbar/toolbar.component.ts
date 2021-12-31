import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/model/model';
import { StoreService } from 'src/app/servive/store.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  menus!: any;
  id = 0;

  constructor(private service: StoreService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMenuByParentId(this.id);
  }


  getMenuByParentId(id: number): void{
    
      this.service.getItemsByParentIdOrderByPriorite('getMenuByParentIdOBASC', id)
    .subscribe(data => { this.menus = data })
    
  }



}
