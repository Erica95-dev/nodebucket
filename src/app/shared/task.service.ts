import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item.interface';




@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
}

/**
*
* @param empId string for the employees
* @returns an observable of type any
*/

findAllTasks(empId: string): Observable<any> {
  return this.http.get('/api/employees/' + empId'/tasks')
}

/**
*
* @param empId
* @param task
* @returns
* /

createTask(empId: string, task: string): Oberservable<any> {
 return this.http.post('/api/employees/' + empId + '/tasks',{
 text: task
  })
 }
 
 /**
 * @param empId
 * @param todo
 * @param done
 * @returns
 */

updateTask(empId: string, todo: Item[], done: Item[]): Observable<any> {
  return this.http.put('/api/employees/' + empId + '/tasks', {
  todo,
  done
 })
}


*
