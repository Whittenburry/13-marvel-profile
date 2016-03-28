'use strict';

export default class SidebarView {
  constructor(element, data) {
    this.element = element;
    this.data = data;

    this.element.querySelector(`.sidebar-info__hero-name`).innerText = data.title;

    this.element.querySelector(`.sidebar-info__year`).innerText = data.endYear;
  }

  // creatorList() {
  //   this.data.creators.items.forEach((creator) => {
  //     const creatorsListItems = document.querySelector(`.creators__list-items`);
  //     const creatorsElement = document.createElement(`li`);
  //     creatorsElement.innerText = creator[0].name;
  //     creatorsListItems.appendChild(creatorsElement);
  //   });
  // }
}
