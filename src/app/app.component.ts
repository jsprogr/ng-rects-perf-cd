import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div
      (mousemove)="onMouseMove($event)"
      (mouseup)="onMouseUp($event)"
      (mousedown)="onMouseDown($event)"
    >
      <app-box
        *ngFor="let box of boxes"
        [box]="box"
        [selected]="box.num == currentId"
      ></app-box>
    </div>
  `,
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  currentId: number = null;
  offsetY: number;
  offsetX: number;
  boxes = [];
  size = 5000;

  ngOnInit() {
    for (let i = 0; i < this.size; i++) {
      let randX = Math.floor(Math.random() * 1000 + 1);
      let randY = Math.floor(Math.random() * 1000 + 1);
      this.boxes[i] = { x: randX, y: randY, num: i };
    }
  }

  onMouseMove(event) {
    event.preventDefault();
    if (this.currentId !== null) {
      this.updateBox(
        this.currentId,
        event.clientX + this.offsetX,
        event.clientY + this.offsetY
      );
    }
  }

  onMouseUp(event) {
    this.currentId = null;
  }

  onMouseDown(event) {
    const id = Number(event.target.getAttribute("data-my-id"));
    const box = this.boxes[id];
    this.offsetX = box.x - event.clientX;
    this.offsetY = box.y - event.clientY;
    this.currentId = id;
  }

  updateBox(id: number, x: number, y: number) {
    this.boxes[id] = { x, y, num: id };
  }
}
