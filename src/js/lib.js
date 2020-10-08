export function getDataJs(name) {
  const selector = document.querySelector(`[data-js=${name}]`)
  return selector
}
