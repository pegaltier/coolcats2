import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// project
import { Favourite } from '@core/models';
import { FavouriteService } from '@store/services/entities/favourite.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  loading$: Observable<boolean>;
  favourites$: Observable<Favourite[]>;
  favourite1 = {};
  favourite2 = {};
  favourite3 = {};

  constructor(private favouriteService: FavouriteService) {
    this.favourites$ = favouriteService.entities$;
    this.loading$ = favouriteService.loading$;
  }
 
  ngOnInit() { }
  
  getAll() {
    this.favouriteService.getAll();
  }

  add(favourite: Favourite) {
    this.favouriteService.add(favourite);
  }

  getById(favourite: Favourite) {
    this.favouriteService.getByKey(favourite.id);
  }

  getWithQuery(favourite: Favourite) {
    this.favouriteService.getWithQuery(favourite as any);
  }

}
