import Vue from 'vue'
class Toast {
  static addStyle() {
    const s = document.createElement('style')
    s.innerText = `
      .__toast__container {
        position: fixed;
        width: 300px;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
      .__toast__container .__toast {
        width: 100%;
        padding: 20px;
        color: #333;
        margin-bottom: 10px;
        box-shadow: 0 0 3px rgba(30,30,30,0.3);
        background-color: white;
        z-index: 2999878343;
        text-align: center;
      }
      .__toast__container .__toast button {
        padding: 10px;
        display: block;
        margin: auto;
        border-radius: 2px;
        border: solid 2px gray;
      }
    `
    document.head.appendChild(s)
  }
  static get container() {
    let container = document.querySelector('#__toast__container')
    if (!container) {
      container = document.createElement('div')
      container.id = '__toast__container'
      document.body.appendChild(container)
      container.classList.add('__toast__container')
      // container.style.position = 'absolute'
      // container.style.width = '200px'
    }
    return container
  }
  static config = { duration: 3000 }
  static config({ duration }) {
    Toast.config.duration = duration
  }
  static present({ message, action  }) {
    const toast = document.createElement('div')
    toast.classList.add('__toast')
    toast.innerHTML = message
    if (action) {
      const {fn, title} = action
      const button = document.createElement('button')
      button.innerText = title
      button.onclick = fn()
      toast.appendChild(button)
    }
    Toast.container.appendChild(toast)
    setTimeout(() => {
      Toast.container.removeChild(toast)
    }, Toast.config.duration)
  }
}
const plugin = {
  install: function() {
    Toast.addStyle()
    Vue.prototype.$toast = Toast
  },
}
export default plugin
