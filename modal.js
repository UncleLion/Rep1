function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', ` 
  <div class = "modal-overlay">
    <div class="modal-window">
      <div class="modal-header">
        <span class="modal-title">Modal title</span>
        <span class="modal-close">&times;</span>
      </div>
      <div class="modal-body">
        <p>That means using an HTML5.</p>
        <p>That means using an HTML5.</p>
      </div>
      <div class="modal-footer"></div>
        <button>Ok</button>
        <button>Cancel</button>
    </div>
  </div>
    `)
    document.body.appendChild(modal)
    return modal
}

$.modal = function (options) {
    const animationSpeed = 200
    const $modal = _createModal(options)
    let closing = false

    return {
        open() {
           !closing && $modal.classList.add('open')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout( () => {
                $modal.classList.remove('hide')
                closing = false
            }, animationSpeed)
        },
        destroy() {}
    }
}
