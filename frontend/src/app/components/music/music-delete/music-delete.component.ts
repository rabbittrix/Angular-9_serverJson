import { Router, ActivatedRoute } from '@angular/router';
import { MusicService } from './../music.service';
import { Music } from './../music.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-delete',
  templateUrl: './music-delete.component.html',
  styleUrls: ['./music-delete.component.css']
})
export class MusicDeleteComponent implements OnInit {
  music: Music

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

  deleteMusic(): void{
    this.musicService.delete(this.music.id).subscribe(()=>{
      this.musicService.showMessage('Music deteted ... :(')
      this.router.navigate(["/musics"])
    })
    
  }

  cancel(): void{
    this.router.navigate(["/musics"]);
  }

}
