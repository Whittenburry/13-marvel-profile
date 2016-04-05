'use strict';

export default class ComicView {
  constructor(comicItem) {
    this.comicItem = comicItem;
    this.element = document.createElement(`li`);
    this.element.classList.add(`comics-item`);

    this.element.innerHTML = `
      <div class="comics-item__img">
        <img class="comics-item__img__pic" src="${comicItem.thumbnail.path}.${comicItem.thumbnail.extension}" alt="" />
      </div>
      <div class="comics-item__issue">
        <h4 class="comics-item__issue-number">#${comicItem.issueNumber}</h4>
      </div>
      <div class="comics-item__info">
        <h4 class="comics-item__info__name">${comicItem.title}</h4>
      </div>
      <button class="comics-item__button">Read More</button>
      <div class="modal">
        <modal class="modal-card">
          <i class="fa fa-times modal-escape"></i>
        </modal>
      </div>`;
  }
}
