'use strict'
const moment = require('moment')
/*
|--------------------------------------------------------------------------
| BukuSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class BukuSeeder {
  async run() {
    // const buku = await Database.table('buku')
    //   .insert([{
    //       judul: 'mario bros avenger',
    //       tahun_terbit: '2006',
    //       deskripsi: 'dummy data',
    //       created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    //       updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
    //     },
    //     {
    //       judul: 'barack obama ngompol',
    //       tahun_terbit: '2007',
    //       deskripsi: 'dara damang',
    //       created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    //       updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
    //     }
    //   ])
    //   console.log(buku)

    await Factory.get('buku').createMany(5)

  }
}

module.exports = BukuSeeder
