'use strict';

export default class SidebarView {
  constructor(element, data) {
    this.element = element;
    this.data = data;

    this.creatorList();

    const imgUrl = `${data.thumbnail.path}.${data.thumbnail.extension}`;

    // `http://i.annihil.us/u/prod/marvel/i/mg/6/00/5130f06bd981b.jpg?apikey=5c152b717c03cf5b31580de2bddc49fa`

    this.element.querySelector(`.img-container__pic`).src = imgUrl;

    this.element.querySelector(`.sidebar-info__hero-name`).innerText = data.title;

    this.element.querySelector(`.sidebar-info__year`).innerText =
     `${data.startYear} - ${data.endYear}`;
  }

  creatorList() {
    this.data.creators.items.forEach((creator) => {
      const creatorsListItems = document.querySelector(`.creators`);
      const creatorsElement = document.createElement(`li`);
      creatorsElement.innerText = creator.name;
      creatorsListItems.appendChild(creatorsElement);
    });
  }
}
