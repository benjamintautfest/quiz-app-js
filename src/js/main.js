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

const formField = document.querySelector('textarea')
const submitButton = document.querySelector('[data-js=submit-button]')

const showButton = document.querySelector('[data-js=show-button]')
const hideButton = document.querySelector('[data-js=hide-button]')

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
  hideAll()
  showItems(create, createHeader, createIcon)
})

function hideAll() {
  create.classList.add('d-none')
  bookmarks.classList.add('d-none')
  home.classList.add('d-none')
  profile.classList.add('d-none')

  homeHeader.classList.add('d-none')
  bookmarksHeader.classList.add('d-none')
  createHeader.classList.add('d-none')
  profileHeader.classList.add('d-none')

  homeIcon.classList.remove('navigation__icon--active')
  bookmarksIcon.classList.remove('navigation__icon--active')
  createIcon.classList.remove('navigation__icon--active')
  profileIcon.classList.remove('navigation__icon--active')
}

function showItems(content, header, icon) {
  content.classList.remove('d-none')
  header.classList.remove('d-none')
  icon.classList.add('navigation__icon--active')
}

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

submitButton.addEventListener('click', () => {
  formField.reset()
})

showButton.addEventListener('click', () => {
  hideButton.classList.remove('d-none')
  showButton.classList.add('d-none')
  answer.classList.remove('d-none')
})

hideButton.addEventListener('click', () => {
  hideButton.classList.add('d-none')
  showButton.classList.remove('d-none')
  answer.classList.add('d-none')
})
