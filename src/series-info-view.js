'use strict';

export default class SidebarView {
  constructor (element, data) {
    this.element = element;
    this.data = data;

    this.element.querySelector(`.sidebar-info__hero-name`).innerText = data.title;

    this.element.querySelector(`.sidebar-info__year`).innerText = data.endYear;

  }
}
