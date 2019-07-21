import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.sass']
})
export class PostDialogComponent {
  blogPost = {
    id: 0,
    title: '',
    body: '',
    isPublished: false,
    userId: 0
  };
  public event: EventEmitter<any> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<PostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataService: DataService
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.blogPost.id = this.dataService.dataLength();
    this.blogPost.isPublished = true;
    this.event.emit({data: this.blogPost});
    this.dialogRef.close();
  }

}
