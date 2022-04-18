import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };

  constructor(private route : Router,private fileService: UploadService) { }

  ngOnInit(): void {
  }
  onUploadFiles(files: File[]): void {
    const formData = new FormData();
    for (const file of files) { formData.append('file', file, file.name); }
    this.fileService.upload(formData).subscribe(
      event => {
        console.log(event);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

 

}
