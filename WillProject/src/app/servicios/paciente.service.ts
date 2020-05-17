import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Paciente } from '../Models/Paciente';
@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  pacienteList: AngularFireList<any>;
  selectedPaciente: Paciente = new Paciente();

  constructor(private firebase: AngularFireDatabase) 
  {}

  getPaciente(){
    return this.pacienteList = this.firebase.list('pacientes');
  }
  insertPaciente(paciente: Paciente)
  {
    this.pacienteList.push({
      name: paciente.name,
      ci: paciente.ci,
      adress: paciente.adress,
      phone : paciente.phone,
      code: paciente.code
    });
  }

  updatePaciente(paciente: Paciente)
  {
    this.pacienteList.update(paciente.$key, {
      name: paciente.name,
      ci: paciente.ci,
      adress: paciente.adress,
      phone : paciente.phone,
      code: paciente.code
    });
  }

  deletePaciente($key: string)
  {
    this.pacienteList.remove($key);
  }
}
