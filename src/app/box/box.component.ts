import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-box",
  template: `
    <div
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

  color: string;

  constructor() {}

  ngOnInit() {
    this.color = `rgba(${this.getRandValue()},${this.getRandValue()},${this.getRandValue()}, 0.5)`;
  }

  getRandValue() {
    return Math.floor(Math.random() * 255 + 1);
  }
}
