import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { toDo, toDoAddtion } from "../model/Student";
import { APIResponse } from "../ViewModel/Apiresult";

@Injectable(
    {
        providedIn: "root"
    }
)
export class StudentService {
    constructor(private http: HttpClient) {
    }
    getAll(): Observable<APIResponse<toDo[]>> {
        //    return this.http.get<APIResponse>("https://api.mohamed-sadek.com/Job/Get")
        return this.http.get<APIResponse<toDo[]>>(environment.APIURl + "/Task/Get")
        /// return this.http.get("https://api.mohamed-sadek.com/todo/get") not recommended

    }
    Delete(id: number) {
        return this.http.delete(environment.APIURl + "/task/Delete?id=" + id)
    }
    GetOne(id: number): Observable<APIResponse<toDo>> {
        return this.http.get<APIResponse<toDo>>(environment.APIURl + "/Task/GetByID?id=" + id)
    }
    add(std: toDoAddtion) {
        console.log(std)
        return this.http.post(environment.APIURl + "/Task/POST", std)
    }
}