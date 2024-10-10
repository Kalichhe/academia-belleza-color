
import { inject, Injectable, signal } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { catchError, Observable, tap, throwError} from 'rxjs';
import { toSignal} from '@angular/core/rxjs-interop';
import { AuthStateService } from '../../shared/data-access/auth-state.service';
import { doc, updateDoc, query, where, getDoc} from 'firebase/firestore';

export interface Task {
  id: string;
  name: string;
  lastName: string;
  phone: string;
  municipio: string;
  curso: string;
}

export type TaskCreate = Omit<Task, 'id'>;

const PATH = 'matriculas';

@Injectable()
export class TaskService {
  private _firestore = inject(Firestore);
  private _authState = inject(AuthStateService)

  private _collection = collection(this._firestore, PATH);
  private _query = query(
    this._collection,
    where('userId','==', this._authState.currentUser?.uid)
  )

  loading = signal<boolean>(true);

  constructor(){
    this._authState.currentUser;
  }

  getTasks = toSignal((collectionData(this._query,{idField:'id'})as Observable<Task[]>).pipe(
    tap(()=>{
      this.loading.set(false)
    }),
    catchError(error =>{
      this.loading.set(false);
      return throwError(()=> error)
    })
  ), {initialValue:[]});

  create(task: TaskCreate){
    return addDoc(this._collection, {
      ...task,
      userId: this._authState.currentUser?.uid,
    })
  }

  getTask(id: string){
    const docRef = doc(this._collection, id);
    return getDoc(docRef);
  }

  update(task: TaskCreate, id: string){
    const docRef = doc(this._collection,id);
    return updateDoc(docRef,{
      ...task,
      userId: this._authState.currentUser?.uid,
    });
  }

}
