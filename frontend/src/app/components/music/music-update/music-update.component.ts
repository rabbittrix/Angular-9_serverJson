import { Music } from './../music.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MusicService } from './../music.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-update',
  templateUrl: './music-update.component.html',
  styleUrls: ['./music-update.component.css']
})
export class MusicUpdateComponent implements OnInit {
  music: Music;

  constructor(
    private musicService: MusicService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.musicService.readById(id).subscribe(music => {
      this.music = music
    });
  }

  updateMusic(): void {
    this.musicService.update(this.music).subscribe(() => {
      this.musicService.showMessage('Music updated !!! :) ')
      this.router.navigate(["/musics"]);
    })
  }

  cancel(): void {
    this.router.navigate(["/musics"]);
  }

}
