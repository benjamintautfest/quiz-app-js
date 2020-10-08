const homeNav = getModule('home-nav')
const bookMarkNav = getModule('bookmarks-nav')
const createNav = getModule('create-nav')
const profileNav = getModule('profile-nav')

const homeHeader = getModule('home-header')
const bookmarksHeader = getModule('bookmarks-header')
const createHeader = getModule('create-header')
const profileHeader = getModule('profile-header')

const home = getModule('home')
const bookmarks = getModule('bookmarks')
const create = getModule('create')
const profile = getModule('profile')

const homeIcon = getModule('home-icon')
const bookmarksIcon = getModule('bookmarks-icon')
const createIcon = getModule('create-icon')
const profileIcon = getModule('profile-icon')

const bookmarkIcon = getModule('bookmark-icon')

const answer = getModule('answer')

const formField = getModule('textarea')

const showButton = getModule('show-button')
const hideButton = getModule('hide-button')

homeNav.addEventListener('click', () => {
  hideAll()
  showItems(home, homeHeader, homeIcon)
})

bookMarkNav.addEventListener('click', () => {
  hideAll()
  showItems(bookmarks, bookmarksHeader, bookmarksIcon)
})

createNav.addEventListener('click', () => {
  hideAll()
  showItems(create, createHeader, createIcon)
})

profileNav.addEventListener('click', () => {
  hideAll()
  showItems(profile, profileHeader, profileIcon)
})

bookmarkIcon.addEventListener('click', () => {
  bookmarkIcon.classList.toggle('card__bookmark-icon--active')
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

function getModule(name) {
  const selector = document.querySelector(`[data-js=${name}]`)
  return selector
}
