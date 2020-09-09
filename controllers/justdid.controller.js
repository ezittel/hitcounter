// Create and Save a new Todo
var path = require('path')
const JustdidModel = require('../models/justdid.model.js')

// Create a base record
exports.create = (req, res) => {
    const justdid = new JustdidModel({
        name: "NameSignifier",
        hitcounter: 0,
        lhitcounter: 0,
        rhitcounter: 0
    })
    justdid.save()
    .then(data => {
        res.redirect('/')
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating data."
        })
    })
}

exports.getCount = (req, res) => {
    JustdidModel.findOne({name:'NameSignifier'})
    .then(justdid => {
				res.render('index', {list: justdid})
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving data."
        })
    })
}
exports.addOne = (req, res) => {
	var currentCount = req.body.hitcounter
  var iCurrentCount = parseInt(currentCount)+1

    JustdidModel.findOneAndUpdate(
			{ name: 'NameSignifier' },
			{
				$set: {
					hitcounter: iCurrentCount
				}
						},
			{
				upsert: true,
        useFindAndModify: false
			}
		)
    .then(justdid => {
        res.redirect('/')
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving data."
        })
    })
}
exports.laddOne = (req, res) => {
	var currentCount = req.body.lhitcounter
  var iCurrentCount = parseInt(currentCount)+1

    JustdidModel.findOneAndUpdate(
			{ name: 'NameSignifier' },
			{
				$set: {
					lhitcounter: iCurrentCount
				}
						},
			{
				upsert: true,
        useFindAndModify: false
			}
		)
    .then(justdid => {
        res.redirect('/')
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving data."
        })
    })
}
exports.raddOne = (req, res) => {
	var currentCount = req.body.rhitcounter
  var iCurrentCount = parseInt(currentCount)+1

    JustdidModel.findOneAndUpdate(
			{ name: 'NameSignifier' },
			{
				$set: {
					rhitcounter: iCurrentCount
				}
						},
			{
				upsert: true,
        useFindAndModify: false
			}
		)
    .then(justdid => {
        res.redirect('/')
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving data."
        })
    })
}
exports.reset = (req, res) => {

    JustdidModel.findOneAndUpdate(
			{ name: 'NameSignifier' },
			{
				$set: {
					hitcounter: 0,
          lhitcounter: 0,
          rhitcounter: 0
				}
						},
			{
				upsert: true,
        useFindAndModify: false
			}
		)
    .then(justdid => {
        res.redirect('/')
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving data."
        })
    })
}
// Delete the extra with the specified id in the request
exports.delete = (req, res) => {
	console.log('in delete')
    JustdidModel.findByIdAndRemove('0')//use mongoshell and add an id here to remove it
    .then(justdid => {
        if(!justdid) {
            return res.status(404).send({
                message: "Record not found with id " + req.params.id
            })
        }
        res.send({message: "Deleted successfully!"})
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Record not found with id " + req.params.todo
            })
        }
        return res.status(500).send({
            message: "Could not delete record with id " + req.params.id
        })
    })
}
