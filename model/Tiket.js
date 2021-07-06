const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PemesananTiketSchema = new Schema({
    namaStasiun: {
        type: String
    },
    tanggalBerangkat: {
        type: String
    },
    tujuan: {
        type: String
    },
    jenisKereta: {
        type: String
    },
    harga: {
        type: Number
    },
    rating: {
        type: Number,
        default: 0
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('tiket', PemesananTiketSchema)
