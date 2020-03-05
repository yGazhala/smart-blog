import {Component, OnInit } from '@angular/core';


@Component({
  selector: 'smb-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit {
  public joditContent: string | null = null;

  constructor() { }

  ngOnInit(): void {
    this.joditContent = 'hello world';
  }

  editorHandler($event: string) {
    console.log($event);
  }
}
