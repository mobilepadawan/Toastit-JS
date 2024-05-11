import ToastIt from '../developer/toastitv1.0.js'
// import ToastIt from '../../developer/toastitv1.1-beta.js'

//Dom connected HTML elements
const btnGeneric = document.querySelector('button.button-generic')
const btnNotification = document.querySelector('button.button-notification')
const btnSuccess = document.querySelector('button.button-success')
const btnWarning = document.querySelector('button.button-warning')
const btnError = document.querySelector('button.button-error')
const emojiSun = document.querySelector('div.emoji.sun')
const emojiMoon = document.querySelector('div.emoji.moon')

//General functions for the web
const mostrarToast = (e, m, t, c, p)=> ToastIt.now({close: c, style: e, timer: t, message: m, position: p })
const applyThemePicked = ()=> localStorage.getItem('themePicked') || 'auto'

//Setting up the user's theme saved previously at Localstorage
document.documentElement.style.setProperty('color-scheme', applyThemePicked())

//Events
emojiSun.addEventListener('click', ()=> {
    document.documentElement.style.setProperty('color-scheme', 'Light')
    localStorage.setItem('themePicked', 'Light')
})
emojiMoon.addEventListener('click', ()=> {
    document.documentElement.style.setProperty('color-scheme', 'Dark')
    localStorage.setItem('themePicked', 'Dark')
})

//General events used in the webapp
btnGeneric.addEventListener('click', ()=> mostrarToast('', 'A generic Toast-It message.', 5000, true, 'left') )
btnNotification.addEventListener('click', ()=> mostrarToast('info', 'A simple notification.', 5000, true, 'center') )
btnSuccess.addEventListener('click', ()=> mostrarToast('success', 'Successful message.', 5000, true, 'right') )
btnWarning.addEventListener('click', ()=> mostrarToast('warning', 'A warning message.', 5000, true, 'left') )
btnError.addEventListener('click', ()=> mostrarToast('error', 'Houston: we have a problem.', 5000, true, 'center') )
