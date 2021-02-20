import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableDataSource, TableItem } from './table-datasource';
import firebase from 'firebase';
import AsyncLock from 'Async-lock';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TableItem>;
  dataSource: TableDataSource;
  promiseSetByListArticle: any;
  articles: any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  async ngOnInit() {
    console.log("ngOnInit()")
    if (!firebase.apps.length) {
      const resp = await fetch('/__/firebase/init.json');
      const config = await resp.json();
      firebase.initializeApp(config);
    } else {
      firebase.app(); // if already initialized, use that one
    }
    await this.listArticle();
  }

  ngAfterViewInit() {
    this.dataSource = new TableDataSource();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  public async listArticle() {
    const lock = new AsyncLock();
    lock.acquire("listArticle", async () => {});
    console.log("table: listArticle()")
    this.promiseSetByListArticle = await firebase.functions().httpsCallable('listArticle')();
    let res = await this.promiseSetByListArticle;
    this.articles = res.data;
    console.log(this.articles)
  }
}
