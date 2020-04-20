import { Component, OnInit } from '@angular/core';
import { MusicService } from './../music.service';
import {Router} from '@angular/router';
import { Music } from './../music.model';

@Component({
  selector: 'app-music-create',
  templateUrl: './music-create.component.html',
  styleUrls: ['./music-create.component.css']
})
export class MusicCreateComponent implements OnInit {

  music: Music = {
    name: '',
    price: null
  }

  constructor(
    private musicService: MusicService,
    private router: Router
    ) { }

  ngOnInit(): void {}

  createMusic(): void{
    this.musicService.create(this.music).subscribe(() =>{
      this.musicService.showMessage('Music saved :) ') 
      this.router.navigate(['/musics'])
    })
    
  }

  cancel(): void{
    this.router.navigate(['/musics'])
  }

}
