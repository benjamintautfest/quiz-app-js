console.log('Hallo, du da ')

const homeNav = document.querySelector('[data-js=home-nav]')
const bookMarkNav = document.querySelector('[data-js=bookmarks-nav]')
const createNav = document.querySelector('[data-js=create-nav]')
const profileNav = document.querySelector('[data-js=profile-nav]')

const homeHeader = document.querySelector('[data-js=home-header]')
const bookmarksHeader = document.querySelector('[data-js=bookmarks-header]')
const createHeader = document.querySelector('[data-js=create-header]')
const profileHeader = document.querySelector('[data-js=profile-header]')

const home = document.querySelector('[data-js=home]')
const bookmarks = document.querySelector('[data-js=bookmarks]')
const create = document.querySelector('[data-js=create]')
const profile = document.querySelector('[data-js=profile]')

homeNav.addEventListener('click', () => {
  bookmarks.classList.add('d-none')
  home.classList.remove('d-none')
  create.classList.add('d-none')
  profile.classList.add('d-none')

  homeHeader.classList.remove('d-none')
  bookmarksHeader.classList.add('d-none')
  createHeader.classList.add('d-none')
  profileHeader.classList.add('d-none')
})

bookMarkNav.addEventListener('click', () => {
  bookmarks.classList.remove('d-none')
  home.classList.add('d-none')
  create.classList.add('d-none')
  profile.classList.add('d-none')

  homeHeader.classList.add('d-none')
  bookmarksHeader.classList.remove('d-none')
  createHeader.classList.add('d-none')
  profileHeader.classList.add('d-none')
})

createNav.addEventListener('click', () => {
  create.classList.remove('d-none')
  bookmarks.classList.add('d-none')
  home.classList.add('d-none')
  profile.classList.add('d-none')

  homeHeader.classList.add('d-none')
  bookmarksHeader.classList.add('d-none')
  createHeader.classList.remove('d-none')
  profileHeader.classList.add('d-none')
})

profileNav.addEventListener('click', () => {
  create.classList.add('d-none')
  bookmarks.classList.add('d-none')
  home.classList.add('d-none')
  profile.classList.remove('d-none')

  homeHeader.classList.add('d-none')
  bookmarksHeader.classList.add('d-none')
  createHeader.classList.add('d-none')
  profileHeader.classList.remove('d-none')
})
