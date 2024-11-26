import data from '/public/data.json';

const basePath = import.meta.env.BASE_URL || '';
export const projectSection = document.querySelector('.project-list');

export function generationContentList(first = 0, second = 2) {
  const projectsForAdd = [];
  for (let i = first; i <= second; i++) {
    const {
      image: { '1x': image1x, '2x': image2x },
      name,
    } = data.projects[i];

    projectsForAdd.push(`
      <li class="item not-visible">
        <picture>
          <source
            srcset="
              ${basePath + image1x} 1x,
              ${basePath + image2x} 2x
            "
          />
          <img
            src="${basePath + image1x}"
            width="320"
            alt="${name}"
          />
        </picture>
        <p class="item-subtext">React, JavaScript, Node JS, Git</p>
        <div class="container-txt-btn">
          <p class="item-text">${name}</p>
          <a class="item-btn-grey" href="https://github.com/oykss/team-landing-portfolio" target="_blank" rel="noopener noreferrer">
            VISIT
            <svg class="btn-grey-icon" width="24" height="24">
              <use href="${basePath}/icon.svg#icon-arrow-up-right"></use>
            </svg>
          </a>
        </div>
      </li>`);
  }
  projectSection.innerHTML += projectsForAdd.join('');
  addVisible();
}

function addVisible() {
  const projectsNotVisible = document.querySelectorAll(
    '.project-list .not-visible'
  );
  projectsNotVisible.forEach((elm, index) => {
    setTimeout(() => {
      elm.classList.remove('not-visible');
    }, index * 300);
  });
}
