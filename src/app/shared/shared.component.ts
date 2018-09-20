import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'validate-container',
  templateUrl: './shared.component.html'
})
export class SharedComponent implements OnInit {

  @Input() label: string;
  @Input() errorMessage: string;

  input: any
  textarea: any

  @ContentChild(NgModel) model: NgModel

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.model;
    this.textarea = this.model;
    if(this.input || this.textarea === undefined)
    throw new Error('Esse componente precisa ser usado com uma diretiva NgModel');
    
  }

  hasSuccess(){
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(){
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }




}
