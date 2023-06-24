import ToastIt from "../src/developer/toastitv1.0.js";
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
btnGeneric.addEventListener('click', ()=> mostrarToast('', 'Este es un mensaje algo + extenso de lo normal, para ver cómo se comporta Toast-It.', 5500, true) )
btnNotification.addEventListener('click', ()=> mostrarToast('info', 'Esta es una notificación simple.', 10000, true) )
btnSuccess.addEventListener('click', ()=> mostrarToast('success', 'Este es un mensaje exitoso! (sin btn cerrar)', 5500, false) )
btnWarning.addEventListener('click', ()=> mostrarToast('alert', 'Esta es una notificación de advertencia', 5500, true) )
btnError.addEventListener('click', ()=> mostrarToast('ERROR', 'Houston, tenemos un problema.', 9900, true) )
emojiSun.addEventListener('click', ()=> {
    document.documentElement.style.setProperty('color-scheme', 'Light')
    localStorage.setItem('themePicked', 'Light')
})
emojiMoon.addEventListener('click', ()=> {
    document.documentElement.style.setProperty('color-scheme', 'Dark')
    localStorage.setItem('themePicked', 'Dark')
})