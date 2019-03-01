import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'cdk-drag-drop-connected-sorting-example',
  templateUrl: 'cdk-drag-drop-connected-sorting-example.html',
  styleUrls: ['cdk-drag-drop-connected-sorting-example.css'],
})
export class CdkDragDropConnectedSortingExample {

  number = Math.floor((Math.random() * 10) + 1);

  todo = [
    'assets/images/acorn.png'
  ];

  done = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.container.id === 'cdk-drop-list-1') {
        this.todo.push('assets/images/acorn.png');
      } else {
        this.todo = [];
        this.todo.push('assets/images/acorn.png');
      }
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  check() {
    if (this.done.length === this.number) {
      alert('Great work!!');
    } else {
      alert('Not quite!');
    }
  }

  resetNumber() {
    this.number = Math.floor((Math.random() * 10) + 1);
  }

  playAgain() {
    this.done = [];
    this.resetNumber();
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
