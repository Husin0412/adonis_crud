'use strict'

class BelajarAdoniController {
 
    index({request, response}) {
        const data = request.get();
        console.log(data)
        return true
    }

    create({request, response}) {
        // const data = request.post()
        // const data = request.only(['nama', 'jurusan'])
        // const data = request.except(['nama', 'jurusan'])
        const data = request.input('nama')
        console.log(data)
        return true
    }

    update({request, response}) {
        return 'ini adalah update'
    }
    
}

module.exports = BelajarAdoniController
