import { Injectable } from '@angular/core';
import {User} from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public usuarios:User[] = [];
  public usuarioOnline:User={
    username:'',
    password:'',
    photo:''
  };
  constructor() { 
    this.usuarios.push({
      username:'dlopez',
      password:'2711',
      photo:'https://picsum.photos/500/300?random'
    });
    this.usuarios.push({
      username:'smedina',
      password:'2711',
      photo:'https://picsum.photos/500/300?random'
    });
    this.usuarios.push({
      username:'vpacheco',
      password:'2711',
      photo:'https://picsum.photos/500/300?random'
    });
  }
  public getUser(name:string):User{
    let pos= this.usuarios.findIndex(element=>element.username===name);
    let user= this.usuarios.find(element=>element.username===name);
    console.log(pos);
    console.table(user);
    
    return this.usuarios[pos];
  }

  public getUsers():User[]{
    return this.usuarios;
  }

}