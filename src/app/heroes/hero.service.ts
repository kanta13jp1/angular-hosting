import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getAllHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.heroesUrl}`)
      .pipe(
        tap(x => x.length ?
          this.log(`found heroes`) :
          this.log(`no heroes found`)),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.heroesUrl}/?congressman=true`)
      .pipe(
        tap(x => x.length ?
          this.log(`found heroes matching candidate=true`) :
          this.log(`no heroes matching candidate=true`)),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  /** GET heroes from the server */
  getGroupHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.heroesUrl}/?group=true`)
      .pipe(
        tap(x => x.length ?
          this.log(`found heroes matching group=true`) :
          this.log(`no heroes matching group=true`)),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  /** GET heroes from the server */
  getLocalCandidates(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.heroesUrl}/?localcandidate=true`).pipe(
      tap(x => x.length ?
        this.log(`found candidates matching candidate=true`) :
        this.log(`no candidates matching candidate=true`)),
      catchError(this.handleError<Hero[]>('getLocalCandidates', []))
    );
  }

  searchLocalCandidatesByLisence(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?license=${term}&localcandidate=true`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"&congressman=true`) :
        this.log(`no heroes matching "${term}"&congressman=true`)),
      catchError(this.handleError<Hero[]>('searchLocalCandidatesByLisence', []))
    );
  }

  searchLocalCandidatesByLisenceAndNewcomer(license: string, newcomer: string): Observable<Hero[]> {
    if (!license.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?license=${license}&newcomer=${newcomer}&localcandidate=true`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching license="${license}"&localcandidate=true`) :
        this.log(`no heroes matching license="${license}"&localcandidate=true`)),
      catchError(this.handleError<Hero[]>('searchLocalCandidatesByLisenceAndNewcomer', []))
    );
  }

  searchLocalCandidatesByLisenceAndNewcomerAndDistrictBlock(license: string, newcomer: string, districtblock): Observable<Hero[]> {
    if (!license.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?license=${license}&newcomer=${newcomer}&candidatedistrictblock=${districtblock}&localcandidate=true`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching license="${license}"&localcandidate=true`) :
        this.log(`no heroes matching license="${license}"&localcandidate=true`)),
      catchError(this.handleError<Hero[]>('searchLocalCandidatesByLisenceAndNewcomer', []))
    );
  }

  /** GET heroes from the server */
  getCandidates(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.heroesUrl}/?candidate=true`).pipe(
      tap(x => x.length ?
        this.log(`found candidates matching candidate=true`) :
        this.log(`no candidates matching candidate=true`)),
      catchError(this.handleError<Hero[]>('getCandidates', []))
    );
  }

  /** GET heroes from the server */
  getCandidatesNoEntry(term: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}&candidate=true`).pipe(
      tap(x => x.length ?
        this.log(`found candidates matching candidate=true`) :
        this.log(`no candidates matching candidate=true`)),
      catchError(this.handleError<Hero[]>('getCandidates', []))
    );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Hero[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number | string): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    console.log(url)
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      // return of([]);
      return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  /* GET heroes whose name contains search term */
  searchGroupHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      // return of([]);
      return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?group=true&name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  searchHeroesByBelongs(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?belongs=${term}&congressman=true`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"&congressman=true`) :
        this.log(`no heroes matching "${term}"&congressman=true`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  searchGroupHeroesByBelongs(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?group=true&belongs=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"&congressman=true`) :
        this.log(`no heroes matching "${term}"&congressman=true`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  searchCandidatesByBelongs(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?belongs=${term}&candidate=true`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"&candidate=true`) :
        this.log(`no heroes matching "${term}"&candidate=true`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  searchLocalCandidatesByCandidateDistrictBlock(term: string): Observable<Hero[]> {
    console.log("searchLocalCandidatesByCandidateDistrictBlock()" + term);
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?candidatedistrictblock=${term}&localcandidate=true`).pipe(
      tap(x => x.length ?
        this.log(`found candidates matching "${term}"&candidate=true`) :
        this.log(`no candidates matching "${term}"&candidate=true`)),
      catchError(this.handleError<Hero[]>('searchCandidatesByCandidateDistrictBlock', []))
    );
  }

  searchRecommendLocalCandidatesByCandidateDistrictBlock(term: string, license: string): Observable<Hero[]> {
    console.log("searchRecommendLocalCandidatesByCandidateDistrictBlock()" + term);
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?candidatedistrictblock=${term}&localcandidate=true&license=${license}`).pipe(
      tap(x => x.length ?
        this.log(`found candidates matching "${term}"&candidate=true`) :
        this.log(`no candidates matching "${term}"&candidate=true`)),
      catchError(this.handleError<Hero[]>('searchRecommendLocalCandidatesByCandidateDistrictBlock', []))
    );
  }

  searchCandidatesByCandidateDistrictBlock(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?candidatedistrictblock=${term}&candidate=true`).pipe(
      tap(x => x.length ?
        this.log(`found candidates matching "${term}"&candidate=true`) :
        this.log(`no candidates matching "${term}"&candidate=true`)),
      catchError(this.handleError<Hero[]>('searchCandidatesByCandidateDistrictBlock', []))
    );
  }

  searchCandidatesByCandidateDistrictBlockNoEntory(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    let noentory = '未定';
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${noentory}&candidatedistrictblock=${term}&candidate=true`).pipe(
      tap(x => x.length ?
        this.log(`found candidates matching "${term}"&candidate=true`) :
        this.log(`no candidates matching "${term}"&candidate=true`)),
      catchError(this.handleError<Hero[]>('searchCandidatesByCandidateDistrictBlock', []))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
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
