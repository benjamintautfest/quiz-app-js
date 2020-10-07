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

const homeIcon = document.querySelector('[data-js=home-icon]')
const bookmarksIcon = document.querySelector('[data-js=bookmarks-icon]')
const createIcon = document.querySelector('[data-js=create-icon]')
const profileIcon = document.querySelector('[data-js=profile-icon]')

const bookmarkIcon = document.querySelector('[data-js=bookmark-icon')

const answer = document.querySelector('[data-js=answer]')
const answerButton = document.querySelector('[data-js=answer-button]')

homeNav.addEventListener('click', () => {
  bookmarks.classList.add('d-none')
  home.classList.remove('d-none')
  create.classList.add('d-none')
  profile.classList.add('d-none')

  homeHeader.classList.remove('d-none')
  bookmarksHeader.classList.add('d-none')
  createHeader.classList.add('d-none')
  profileHeader.classList.add('d-none')

  homeIcon.classList.add('navigation__icon--active')
  bookmarksIcon.classList.remove('navigation__icon--active')
  createIcon.classList.remove('navigation__icon--active')
  profileIcon.classList.remove('navigation__icon--active')
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

  homeIcon.classList.remove('navigation__icon--active')
  bookmarksIcon.classList.add('navigation__icon--active')
  createIcon.classList.remove('navigation__icon--active')
  profileIcon.classList.remove('navigation__icon--active')
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

  homeIcon.classList.remove('navigation__icon--active')
  bookmarksIcon.classList.remove('navigation__icon--active')
  createIcon.classList.add('navigation__icon--active')
  profileIcon.classList.remove('navigation__icon--active')
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

  homeIcon.classList.remove('navigation__icon--active')
  bookmarksIcon.classList.remove('navigation__icon--active')
  createIcon.classList.remove('navigation__icon--active')
  profileIcon.classList.add('navigation__icon--active')
})

bookmarkIcon.addEventListener('click', () => {
  bookmarkIcon.classList.toggle('card__bookmark-icon--active')
})

answerButton.addEventListener('click', () => {
  answer.classList.toggle('d-none')
})
