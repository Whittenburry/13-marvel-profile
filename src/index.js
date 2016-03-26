'use strict';
import SidebarView from 'series-info-view';
export default function () {
  const id = 9790;

  fetch(`http://gateway.marvel.com:80/v1/public/series/9790?apikey=5c152b717c03cf5b31580de2bddc49fa`)
    .then((res) => res.json())
    .then((data) => {
      const series = data.data.results[0];
      const sidebar = document.querySelector(`.sidebar`);

      const seriesView = new SidebarView(sidebar, series);
    });
};
