class ToastIt {
    static mensaje = 'Mensaje predeterminado'
    static tono = 'toast-generic'
    static pause = false
    static closeButton = ''
    static now({estilo, mensaje, timer, close}) {
        if (!close) {
            this.closeButton = false
        }
        if (!timer || timer > 10000) {
            timer = 3500
        }
        switch (estilo) {
            case 'info':
                this.tono = 'toast-info'
                break
            case 'exito':
                this.tono = 'toast-success'
                break
            case 'alerta':
                this.tono = 'toast-warning'
                break
            case 'error':
                this.tono = 'toast-error'
                break
            default:
                this.tono = 'toast-generic'
                break
        }
        close ? this.closeButton = true : this.closeButton = false
        const divToast = document.createElement('div')
              divToast.classList.add('toast-div')
              divToast.classList.add('toast-generic')
              divToast.classList.replace('toast-generic', this.tono)
              divToast.innerHTML = mensaje || 'Mensaje predeterminado' 
              divToast.style.opacity = 0
              if (this.closeButton) {
                  const spanClose = document.createElement('span')
                  spanClose.classList.add('toast-span-close')
                  spanClose.textContent = ' Ⓧ '
                  spanClose.addEventListener('click', ()=> divToast.remove())
                  divToast.appendChild(spanClose)
              }
              document.querySelector('body').insertAdjacentElement('beforebegin', divToast)
        let i = 0
        const si = setInterval(()=> {
            i++
            divToast.style.opacity = (i / 130).toFixed(1)
                i >= 130 && clearInterval(si)
            }, 0.1)
            if (!this.pause) {
                setTimeout(()=> {
                    let i = 110
                    const si = setInterval(()=> {
                        i--
                        divToast.style.opacity = (i / 110).toFixed(1)
                        i <= 0 && clearInterval(si)
                    }, 0.1)
                }, timer || 3500)
            }
    }
    #hideToast() {
        console.warn('A coming feature for pausing the toast message putting the mouse over it.')
    }
}