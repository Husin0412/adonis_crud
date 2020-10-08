'use strict'

class HalloController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }
}

module.exports = HalloController
