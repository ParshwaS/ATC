import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

export interface tokenDetails {
	_id: any,
	email: any,
	name: any,
	exp: any,
	iat: any
}

interface tokenResponse {
	token: any
}



export interface TokenPayload {
	// _id: any,
	email: any,
	password: any,
  mobile: any
}

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private token: any = ""
	loginStatus: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
	constructor(private http: HttpClient, private router: Router,) { }

	private saveToken(token: any): void {
		localStorage.setItem('userToken', token)
		this.token = token
	}

	public getToken(): any {
		if (this.token === "") {
			this.token = localStorage.getItem('userToken') || ""
		}
		return this.token
	}

	public getTokenDetails(): any {
		const token = this.getToken()
		let payload
		if (token) {
			payload = token.split('.')[1]
			payload = window.atob(payload)
			return JSON.parse(payload)
		} else {
			return null
		}
	}

	public isLoggedIn(): any {
		if(this.token==''){
			this.loginStatus.next(false);
		}
		const user = this.getTokenDetails()
		if (user) {
			this.loginStatus.next(true);
		} else {
			this.loginStatus.next(false);
		}
	}

	public login(user: any): Observable<any> {
		const base = this.http.post('/api/auth/login', user)
		const request = base.pipe(
			map((data: any) => {
				if (data.token) {
					// this.toastr.clear()
					this.saveToken(data.token);
					this.loginStatus.next(true);
				}
				return data
			})
		)
		return request
	}

	public register(user: any): Observable<any> {
		const base = this.http.post('/api/auth/register', user)
		const request = base.pipe(
			map((data: any) => {
				if (data.token) {
					this.loginStatus.next(true);
				}
				return data
			})
		)
		return request
	}

	public logout(): any {
		// this.toastr.clear()
		this.token = ''
		window.localStorage.removeItem('userToken')
		this.router.navigateByUrl('/')
		this.loginStatus.next(false);
	}

	public setToken(token: any){
		this.saveToken(token)
	}

}
