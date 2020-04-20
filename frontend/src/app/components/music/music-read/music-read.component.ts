import { Component, OnInit } from '@angular/core';
import { Music } from '../music.model';
import { MusicService } from './../music.service';

@Component({
  selector: 'app-music-read',
  templateUrl: './music-read.component.html',
  styleUrls: ['./music-read.component.css']
})
export class MusicReadComponent implements OnInit {

  musics: Music[]
  displayedColumns = ['id', 'name', 'price', 'action']
  
  constructor(private musicService: MusicService) { }

  ngOnInit(): void {
    this.musicService.read().subscribe(musics =>{
      this.musics = musics
    })
  }

}
