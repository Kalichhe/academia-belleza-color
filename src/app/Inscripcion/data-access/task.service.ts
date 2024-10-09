import { inject, Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

export interface Task {
  id: string;
  name: string;
  lastName: string;
  phone: string;
  municipio: string;
  curso: string
}

export type TaskCreate = Omit<Task, 'id'>;

const PATH = 'matriculas';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _firestore = inject(Firestore);

  private _collection = collection(this._firestore, PATH);

  create(task: TaskCreate){
    return addDoc(this._collection, task)
  }

}
