import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product/product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  product: Product = new Product();
  preview: string;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  cancel():void{
    this.router.navigate(['/products']);
  }

  saveProduct(): void{
    if(!this.product.name || !this.product.description 
      || !this.product.price || !this.product.image ){
        this.toastr.warning("Preencha todos os campos!")
    }else{
      this.httpClient.post(environment.api+'/product', this.product).subscribe(
        result => {
          this.toastr.success("PRODUTO SALVO!")
          this.router.navigate(['/products'])
        }, erro => {
          this.toastr.error("ERRO: "+erro.message)
        }
      );
    }
  }

  onFileChange(event: any) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.preview = reader.result as string
        let array = this.preview.split(',')
        this.product.image = array[1];
      };
    }
  }

}
