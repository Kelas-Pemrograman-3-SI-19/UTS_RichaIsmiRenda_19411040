const tiketModel = require ('../model/Tiket')
const { requestResponse } = require('../config')
const objectId = require('mongoose').Types.ObjectId

  exports.getAllTiket = () =>
    new Promise((resolve, reject) => {
        tiketModel.find({})
           .then(tiket => resolve(requestResponse.suksesWithData(tiket)))
           .catch(error => resolve(requestResponse.serverError))
    })

    exports.getbyId = (id) =>
      new Promise((resolve, reject) => {
        tiketModel.findOne({
              _id: objectId(id)
          }).then(tiket => resolve(requestResponse.suksesWithData(tiket)))
          .catch(error => reject(requestResponse.serverError))
      })

exports.editTiket = (data, id, changeImage) =>
  new Promise(async(resolve, reject) => {
    tiketModel.updateOne({
      _id: objectId(id)
    }, data)
      .then(() => {
        if (changeImage) {
          deleteImage(data.oldImage)
        }
        resolve(requestResponse.sukses('Berhasil Edit Daftar Tiket'))
      }).catch(() => reject(requestResponse.serverError))
  })

  exports.delete = (id) =>
    new Promise((resolve, reject) => {
        tiketModel.findOne({
        _id: objectId(id)
      }).then(tiket => {
        tiketModel.deleteOne({
          _id: objectId(id)
        }).then(() => {
          deleteImage(tiket.image)
          resolve(requestResponse.sukses('Berhasil Hapus Data Tiket'))
        }).catch(() => reject(requestResponse.serverError))
      })
    })
    