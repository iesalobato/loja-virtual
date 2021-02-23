import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { Product } from '../../models/product/product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/components/modal/confirm/confirm.component';
import { ToastrService } from 'ngx-toastr';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'price', 'actions'];
  dataSource = new MatTableDataSource<Product>();

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private dialog: MatDialog, 
    private toastr: ToastrService
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(){
    this.loadProducts();
  }

  loadProducts(): void{
    this.httpClient.get(environment.api+"/product").subscribe(
      (result:any) => {
        this.dataSource.data = result;
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  goToNewProduct():void{
    this.router.navigate(['/products/new']);
  }

  openEditModal(product: Product):void{
    const dialogRef = this.dialog.open(EditComponent, {
      width: '500px',
      height: '500px',
      data: product
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadProducts()
    });
  }

  openDeleteModal(id:number):void{

    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '250px',
      height: '250px',
      data: {title: 'Atenção!', message: 'Você confirma a exclusão deste produto?'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.deleteProduct(id)
      }
    });
  }

  deleteProduct(id:number): void{
    this.httpClient.delete(environment.api+'/product/'+id).subscribe(
      result => {
        this.toastr.success("PRODUTO EXCLUÍDO!")
        this.loadProducts();
      }, erro => {
        this.toastr.error("ERRO: "+erro.message)
      }
    )
  }
}
