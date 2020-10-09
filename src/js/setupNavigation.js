import { getDataJs } from './lib'
import { getAllDataJs } from './lib'


export default function setupNavigation(){

const homeNav = getDataJs('home-nav')
const bookMarkNav = getDataJs('bookmarks-nav')
const createNav = getDataJs('create-nav')
const profileNav = getDataJs('profile-nav')

const homeHeader = getDataJs('home-header')
const bookmarksHeader = getDataJs('bookmarks-header')
const createHeader = getDataJs('create-header')
const profileHeader = getDataJs('profile-header')

const home = getDataJs('home')
const bookmarks = getDataJs('bookmarks')
const create = getDataJs('create')
const profile = getDataJs('profile')

const homeIcon = getDataJs('home-icon')
const bookmarksIcon = getDataJs('bookmarks-icon')
const createIcon = getDataJs('create-icon')
const profileIcon = getDataJs('profile-icon')

const bookmarkIcon = getDataJs('bookmark-icon')

const answer = getDataJs('answer')

const formField = getDataJs('textarea')

const showButton = getDataJs('show-button')
const hideButton = getDataJs('hide-button')

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
}
