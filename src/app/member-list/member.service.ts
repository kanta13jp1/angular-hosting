import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Member } from './member';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class MemberService {

  private heroesUrl = 'api/heroes';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getAllMemberes(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.heroesUrl}`)
      .pipe(
        tap(x => x.length ?
          this.log(`found heroes`) :
          this.log(`no heroes found`)),
        catchError(this.handleError<Member[]>('getMemberes', []))
      );
  }

  /** GET heroes from the server */
  getMemberes(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.heroesUrl}/?congressman=true`)
      .pipe(
        tap(x => x.length ?
          this.log(`found heroes matching candidate=true`) :
          this.log(`no heroes matching candidate=true`)),
        catchError(this.handleError<Member[]>('getMemberes', []))
      );
  }

  /** GET heroes from the server */
  getGroupMemberes(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.heroesUrl}/?group=true`)
      .pipe(
        tap(x => x.length ?
          this.log(`found heroes matching group=true`) :
          this.log(`no heroes matching group=true`)),
        catchError(this.handleError<Member[]>('getMemberes', []))
      );
  }

  /** GET heroes from the server */
  getCandidates(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.heroesUrl}/?candidate=true`).pipe(
      tap(x => x.length ?
        this.log(`found candidates matching candidate=true`) :
        this.log(`no candidates matching candidate=true`)),
      catchError(this.handleError<Member[]>('getCandidates', []))
    );
  }

  /** GET heroes from the server */
  getCandidatesNoEntry(term: string): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.heroesUrl}/?name=${term}&candidate=true`).pipe(
      tap(x => x.length ?
        this.log(`found candidates matching candidate=true`) :
        this.log(`no candidates matching candidate=true`)),
      catchError(this.handleError<Member[]>('getCandidates', []))
    );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getMemberNo404<Data>(id: number): Observable<Member> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Member[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Member>(`getMember id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getMember(id: number | string): Observable<Member> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Member>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Member>(`getMember id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateMember(hero: Member): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateMember'))
    );
  }

  /** POST: add a new hero to the server */
  addMember(hero: Member): Observable<Member> {
    return this.http.post<Member>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newMember: Member) => this.log(`added hero w/ id=${newMember.id}`)),
      catchError(this.handleError<Member>('addMember'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteMember(hero: Member | number): Observable<Member> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Member>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Member>('deleteMember'))
    );
  }

  /* GET heroes whose name contains search term */
  searchMemberes(term: string): Observable<Member[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      // return of([]);
      return this.http.get<Member[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Member[]>('getMemberes', []))
      );
    }
    return this.http.get<Member[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Member[]>('searchMemberes', []))
    );
  }

  /* GET heroes whose name contains search term */
  searchGroupMemberes(term: string): Observable<Member[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      // return of([]);
      return this.http.get<Member[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Member[]>('getMemberes', []))
      );
    }
    return this.http.get<Member[]>(`${this.heroesUrl}/?group=true&name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Member[]>('searchMemberes', []))
    );
  }

  searchMemberesByBelongs(term: string): Observable<Member[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Member[]>(`${this.heroesUrl}/?belongs=${term}&congressman=true`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"&congressman=true`) :
        this.log(`no heroes matching "${term}"&congressman=true`)),
      catchError(this.handleError<Member[]>('searchMemberes', []))
    );
  }

  searchGroupMemberesByBelongs(term: string): Observable<Member[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Member[]>(`${this.heroesUrl}/?group=true&belongs=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"&congressman=true`) :
        this.log(`no heroes matching "${term}"&congressman=true`)),
      catchError(this.handleError<Member[]>('searchMemberes', []))
    );
  }

  searchCandidatesByBelongs(term: string): Observable<Member[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Member[]>(`${this.heroesUrl}/?belongs=${term}&candidate=true`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"&candidate=true`) :
        this.log(`no heroes matching "${term}"&candidate=true`)),
      catchError(this.handleError<Member[]>('searchMemberes', []))
    );
  }

  searchCandidatesByCandidateDistrictBlock(term: string): Observable<Member[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Member[]>(`${this.heroesUrl}/?candidatedistrictblock=${term}&candidate=true`).pipe(
      tap(x => x.length ?
        this.log(`found candidates matching "${term}"&candidate=true`) :
        this.log(`no candidates matching "${term}"&candidate=true`)),
      catchError(this.handleError<Member[]>('searchCandidatesByCandidateDistrictBlock', []))
    );
  }

  searchCandidatesByCandidateDistrictBlockNoEntory(term: string): Observable<Member[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    let noentory = '未定';
    return this.http.get<Member[]>(`${this.heroesUrl}/?name=${noentory}&candidatedistrictblock=${term}&candidate=true`).pipe(
      tap(x => x.length ?
        this.log(`found candidates matching "${term}"&candidate=true`) :
        this.log(`no candidates matching "${term}"&candidate=true`)),
      catchError(this.handleError<Member[]>('searchCandidatesByCandidateDistrictBlock', []))
    );
  }

  /** Log a MemberService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`MemberService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
