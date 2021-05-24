import { Component, OnInit, Input, ChangeDetectorRef, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-box",
  template: `
    <div
      #div
      [ngStyle]="{
        position: 'absolute',
        left: x + 'px',
        top: y + 'px',
        'background-color': color
      }"
      [attr.data-my-id]="num"
      [class.selected]="selected"
    ></div>
  `,
  styleUrls: ["./box.component.scss"],
})
export class BoxComponent implements OnInit {
  @Input() public x: number;
  @Input() public y: number;
  @Input() public num: number;
  @Input() public selected: boolean;

  @ViewChild("div", {static: false})
  set div(value: ElementRef) {
    if (value) {
      value.nativeElement["BoxComponent"] = this;
    }
  }

  color: string;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.color = `rgba(${this.getRandValue()},${this.getRandValue()},${this.getRandValue()}, 0.5)`;
  }

  ngAfterViewInit() {
    this.cdr.detach();
  }

  getRandValue() {
    return Math.floor(Math.random() * 255 + 1);
  }

  update() {
    this.cdr.detectChanges();
  }
}
