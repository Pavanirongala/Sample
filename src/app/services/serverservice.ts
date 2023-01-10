import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Subject, throwError, BehaviorSubject } from 'rxjs';
// import 'rxjs/add/operator/toPromise';


@Injectable({
    providedIn: 'root'
})

export class ServerService {
    s1 = new BehaviorSubject("PAVANI");
    s2 = new Subject();
    constructor(private http: HttpClient) {
        // this.s2.next('Pavani');
        this.s1.next('PAVANI1')
    }
    mobiles = ['redmi', 'nokia', 'samsung'];
    email!: string;
    password!: string;

    url = 'https://fakestoreapi.com/products';
    get() {
        return this.http.get(this.url).pipe(catchError(this.handleError))
    }
    handleError(error: any) {
        return throwError(error.message || "Server Error");
    }

    saveData(data: any) {
        return this.http.post(this.url, data);
    }
    updateData() {
        const data = {
            id: 1,
            price: 109
        }
        return this.http.put('https://fakestoreapi.com/products/1', data).subscribe(data => {
            console.log(data);
        });
    }
    deleteData(id: any) {
        const endpoint = 'https://fakestoreapi.com/products/' + id;
        return this.http.delete(endpoint).subscribe(data => {
            console.log(data);
        })
    }
    getData(): Promise<any> {
        return this.http.get(this.url).toPromise().catch(this.handlePromiseError);

    }
    handlePromiseError(error: Response) {
        console.error(error);
        throw (error);
    }
}

    // login(email: string, password: string) {
    //     return this.http.post('./app/student.json', { email, password });
    // }
