import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Music } from './music.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  baseUrl = "http://localhost:3000/musics"

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
    ) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(music: Music): Observable<Music>{
    return this.http.post<Music>(this.baseUrl, music).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  read(): Observable<Music[]>{
    return this.http.get<Music[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  readById(id: number): Observable<Music>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Music>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  update(music: Music): Observable<Music>{
    const url = `${this.baseUrl}/${music.id}`
    return this.http.put<Music>(url, music).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<Music>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Music>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }
  
  errorHandler(e: any): Observable<any>{
    this.showMessage("Have a error !! :(", true)
    return EMPTY
  }

}
