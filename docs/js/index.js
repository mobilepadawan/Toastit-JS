import ToastIt from "../../src/toastitv1.0-min.js"
//Dom connected HTML elements
const btnGeneric = document.querySelector('button.button-generic')
const btnNotification = document.querySelector('button.button-notification')
const btnSuccess = document.querySelector('button.button-success')
const btnWarning = document.querySelector('button.button-warning')
const btnError = document.querySelector('button.button-error')
const emojiSun = document.querySelector('div.emoji.sun')
const emojiMoon = document.querySelector('div.emoji.moon')
//General functions for the web
const mostrarToast = (e, m, t, c)=> ToastIt.now({close: c, style: e, timer: t, message: m })
const applyThemePicked = ()=> localStorage.getItem('themePicked') || 'auto'

//Setting up the user's theme saved previously at Localstorage
document.documentElement.style.setProperty('color-scheme', applyThemePicked())
//General events used in the webapp
btnGeneric.addEventListener('click', ()=> mostrarToast('', 'This is a generic Toast-It message.', 3500, true) )
btnNotification.addEventListener('click', ()=> mostrarToast('info', 'This is a simple notification.', 3000, true) )
btnSuccess.addEventListener('click', ()=> mostrarToast('success', 'A successful message w/o close button!', 4500, false) )
btnWarning.addEventListener('click', ()=> mostrarToast('alert', 'This is a warning message', 5500, true) )
btnError.addEventListener('click', ()=> mostrarToast('error', 'An error message: Houston, we have a problem.', 4900, true) )
emojiSun.addEventListener('click', ()=> {
    document.documentElement.style.setProperty('color-scheme', 'Light')
    localStorage.setItem('themePicked', 'Light')
})
emojiMoon.addEventListener('click', ()=> {
    document.documentElement.style.setProperty('color-scheme', 'Dark')
    localStorage.setItem('themePicked', 'Dark')
})