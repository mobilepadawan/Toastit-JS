import ToastIt from "../Minified/toastitv1.0-min.js";

const mostrarToast = (e, m, t, c)=> ToastIt.now({close: c, style: e, timer: t, message: m })

const btnGeneric = document.querySelector('button.button-generic')
const btnNotification = document.querySelector('button.button-notification')
const btnSuccess = document.querySelector('button.button-success')
const btnWarning = document.querySelector('button.button-warning')
const btnError = document.querySelector('button.button-error')

btnGeneric.addEventListener('click', ()=> mostrarToast('', 'Este es un mensaje genérico.', 5500, true) )
btnNotification.addEventListener('click', ()=> mostrarToast('info', 'Esta es una notificación.', 10000, true) )
btnSuccess.addEventListener('click', ()=> mostrarToast('success', 'Este es un mensaje exitoso! ', 5500, true) )
btnWarning.addEventListener('click', ()=> mostrarToast('alert', 'Esta es una advertencia', 5500, true) )
btnError.addEventListener('click', ()=> mostrarToast('ERROR', 'Houston, tenemos un problema.', 9900, false) )

// ToastIt.now({close: false, style: 's', timer: 0, message: ''})