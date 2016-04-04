'use strict';

import SidebarView from 'series-info-view';
import CharacterView from 'character-view';
import CharacterListView from 'character-list-view';

export default function () {
  const id = 354;

  fetch(`http://gateway.marvel.com:80/v1/public/series/${id}?apikey=5c152b717c03cf5b31580de2bddc49fa`)
    .then((response) => response.json())
    .then((data) => {
      const series = data.data.results[0];
      const sidebar = document.querySelector(`.sidebar`);

      const seriesView = new SidebarView(sidebar, series);
    });

  fetch(`http://gateway.marvel.com:80/v1/public/series/${id}/characters?apikey=5c152b717c03cf5b31580de2bddc49fa`)
    .then((response) => response.json())
    .then((data) => {
      const characters = data.data.results;
      const characterEl = document.querySelector(`.characters-container`);

      const characterView = new CharacterListView(characterEl, characters);
    });
}
