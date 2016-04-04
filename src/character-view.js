'use strict';

export default class CharacterView {
  constructor(charItem) {
    this.charItem = charItem;
    this.element = document.createElement(`li`);
    this.element.classList.add(`characters-item`);

    this.element.innerHTML = `
    <div class="characters-item__img">
      <img src="${charItem.thumbnail.path}.${charItem.thumbnail.extension}" alt="" class="characters-item__img__pic">
    </div>
    <h3 class="characters-item__info">${charItem.name}</h3>`;

  }
}
