import { getDataJs } from './lib'
import { getAllDataJs } from './lib'

export default function setupBookmarks () {

    const bookmarkIcon = getAllDataJs('bookmark-icon')

    bookmarkIcon.forEach(getBookmark)

    function getBookmark(icon) {
        icon.addEventListener('click', toggleBookmarkIcon)
    }

    function toggleBookmarkIcon(event){
        event.target.classList.toggle('card__bookmark-icon--active')
    }

   
}
