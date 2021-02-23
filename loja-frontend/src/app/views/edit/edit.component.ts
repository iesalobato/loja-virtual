import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../../models/product/product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  imageSrc:string
  preview:string

  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product,
    private httpClient: HttpClient, 
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  saveProduct():void{
    this.httpClient.put(environment.api+'/product/'+this.product.id, this.product).subscribe(
      result => {
        this.toastr.success("PRODUTO ATUALIZADO!")
        this.dialogRef.close();
      }, erro => {
        this.toastr.error("ERRO: "+erro.message)
      }
    )
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
