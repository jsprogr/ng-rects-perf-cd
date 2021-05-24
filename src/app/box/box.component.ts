import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-box",
  template: `
    <div
      [ngStyle]="{
        position: 'absolute',
        left: box.x + 'px',
        top: box.y + 'px',
        'background-color': color
      }"
      [attr.data-my-id]="box.num"
      [class.selected]="selected"
    ></div>
  `,
  styleUrls: ["./box.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxComponent implements OnInit {
  @Input() public box: any;
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
