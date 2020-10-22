export default {
    install(Vue, options) {
        Vue.prototype.$popup = function (title) {
            let popup = document.createElement('div')
            popup.classList.add('popup')
            popup.innerHTML = `<span>${title}</span>`
            document.body.appendChild(popup)
            const timeout = setTimeout(() => {
               document.body.removeChild(popup)
                clearTimeout(timeout)
            }, 2500)
        }
    }
}