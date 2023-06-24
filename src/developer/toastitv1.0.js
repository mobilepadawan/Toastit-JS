/*  Copyright 2023-06-16: Fernando Omar Luna (just another old JS coder)
    This library is free of use and modify, but, please, don't remove this message
    Send me an email to: ferproonline_at_gmail.com, or DMme by Twitter: @mobilepadawan
    You can write me in (english, español, oppure l'italiano) */
export default class ToastIt {
    static message = this.getLang()
    static style = 'toast-generic'
    static pause = false
    static closeButton = false
    static now({style, message, timer, close}) {
        this.closeButton = !close && false || close
        this.timer = timer > 10000 && 3500 || timer
        switch (style.toLowerCase() || '') {
            case 'info':
                this.style = 'toast-info'
                break
            case 'success':
                this.style = 'toast-success'
                break
            case 'alert':
                this.style = 'toast-warning'
                break
            case 'error':
                this.style = 'toast-error'
                break
            default:
                this.style = 'toast-generic'
                break
        }
        this.closeButton = close ? true : false
        const divToast = document.createElement('div')
              divToast.classList.add('toast-div')
              divToast.classList.add('toast-generic')
              divToast.classList.replace('toast-generic', this.style)
              divToast.style.fontSize = 'larger !important'
              divToast.innerHTML = `${message}` || this.getLang()
              divToast.style.opacity = 0
              if (this.closeButton) {
                  const spanClose = document.createElement('span')
                        spanClose.classList.add('toast-span-close')
                        spanClose.style.fontSize = 'larger !important'
                        spanClose.textContent = ' ⓧ'
                        spanClose.addEventListener('click', ()=> divToast.remove())
                        divToast.appendChild(spanClose)
              }
              document.querySelector('body').insertAdjacentElement('beforebegin', divToast)
            //   document.querySelector('body').insertAdjacentHTML('afterbegin', divToast)
              if (parseInt(((window.innerWidth - divToast.clientWidth) / window.innerWidth) * 100) < 50) {
                  divToast.style.textAlign = 'justify !important'
                  divToast.style.width = document.body.clientWidth.toString() + 'px'
              }
        let i = 0
        const si = setInterval(()=> {
            i++
            divToast.style.opacity = (i / 130).toFixed(1)
                i >= 130 && clearInterval(si)
            }, 0.1)
            if (!this.pause) {
                setTimeout(()=> {
                    let i = 150
                    const si = setInterval(()=> {
                        i--
                        divToast.style.opacity = (i / 150).toFixed(1)
                        i <= 0 && clearInterval(si)
                    }, 0.1)
                    setTimeout(()=> divToast.remove(), 200)
                }, this.timer || 3500)
            }
    }
    static getLang() {
        switch (navigator.language.includes) {
            case 'es':
                return 'Mensaje predeterminado'
                break;
            case 'en':
                return 'Default text message'
                break;
            case 'it':
                return 'Messaggio predefinito'
                break;        
            default:
                return 'Default text message'
                break;
        }
    }
}