import { mvpList } from "../database/mvpList.js";

//! content to show when page loads
window.addEventListener("DOMContentLoaded", function () {
  displayMVPs(mvpList);
});

//! MVPs list
const mvpCntr = document.querySelector(".mvp-list");

function displayMVPs(mvpList) {
  //* individual card
  for (let mvp of mvpList) {
    mvpCntr.innerHTML += `
      		<li class="mvp">
              <a
                href=${mvp.link}
                target="_blank"
                rel="noopener noreferrer"
                >${mvp.name}</a
              >
            </li>`;
  }
}
