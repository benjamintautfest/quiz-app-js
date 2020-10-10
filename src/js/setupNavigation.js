import { getDataJs } from './lib'
import { getAllDataJs } from './lib'


export default function setupNavigation() {

const navButtons = getAllDataJs('nav-button')
const pages = getAllDataJs('page')
const header = getDataJs('header')

navButtons.forEach(getNavButton)

function getNavButton(navBtn) {
    navBtn.addEventListener('click', changePage)
}

function changePage(event) {
    const clickedNavButton = event.currentTarget
    const targetPage = clickedNavButton.dataset.name

    pages.forEach(page => {
        const pageName = page.dataset.name
        page.classList.toggle('d-none',  pageName !== targetPage)
    })

    navButtons.forEach(navBtn => {
        navBtn.classList.toggle('.navigation__icon--active', navBtn === clickedNavButton)
    })

    header.textContent = targetPage

    console.log('löpt')

}
}
