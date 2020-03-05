import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoditEditorComponent } from './jodit-editor.component';

describe('JoditEditorComponent', () => {
  let component: JoditEditorComponent;
  let fixture: ComponentFixture<JoditEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoditEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoditEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
