import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Usuario} from '../Models/Usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioList: AngularFireList<any>;
  selectedUsuario: Usuario = new Usuario();
  constructor(private firebase: AngularFireDatabase) { }

  getUsuarios()
  {
    return this.usuarioList = this.firebase.list('usuarios');

  }

  insertUsuario(usuario: Usuario)
  {
    this.usuarioList.push({
      nombre: usuario.nombre,
      direccion: usuario.direccion,
      telefono: usuario.telefono,
      cargo: usuario.cargo,
      username: usuario.username,
      password: usuario.password
    });
  }

  updateUsuario(usuario: Usuario)
  {
    this.usuarioList.update(usuario.$key,
      {
        nombre: usuario.nombre,
      direccion: usuario.direccion,
      telefono: usuario.telefono,
      cargo: usuario.cargo,
      username: usuario.username,
      password: usuario.password
      });
  }

  deleteUsuario($key: string)
  {
    this.usuarioList.remove($key);
  }
}
