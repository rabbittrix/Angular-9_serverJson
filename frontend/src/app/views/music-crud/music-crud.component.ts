import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-music-crud',
  templateUrl: './music-crud.component.html',
  styleUrls: ['./music-crud.component.css']
})
export class MusicCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Add Music',
      icon: 'storefront',
      routeUrl: '/musics'
    }
   }

  ngOnInit(): void {    
  }
  navigateToMusicCreate(): void{
      this.router.navigate(['/musics/music-create'])
  }

}
