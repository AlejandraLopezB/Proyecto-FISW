var Material = require('../models/').Material;

module.exports = {
	//Muestra todos los materiales
	index(req, res) {
		Material.findAll()
			.then(function (materiales) {
				res.status(200).json(materiales);
			})
			.catch(function (error) {
				res.status(500).json(error);
			});
	},

	//Devuelve un material segun su id
	show(req, res) {
		Material.findById(req.params.id_material)
		.then(function (material) {
			res.status(200).json(material);
		})
		.catch(function (error){
			res.status(500).json(error);
		});
	},

	//Crea un nuevo material
	create(req, res) {
		Material.create(req.body)
		.then(function (nuevoMaterial) {
			res.status(200).json(nuevoMaterial);
		})
		.catch(function (error){
			res.status(500).json(error);
		});
	},

	//Edita un material existente
	update(req, res) {
		Material.update(req.body, {
			where: {
				id_material: req.params.id_material
			}
		})
		.then(function (updatedRecords) {
			res.status(200).json(updatedRecords);
		})
		.catch(function (error){
			res.status(500).json(error);
		});
	},

	//Elimina un material segun su id_material
	delete(req, res) {
		Material.destroy({
			where: {
				id_material: req.params.id_material
			}
		})
		.then(function (deletedRecords) {
			res.status(200).json(deletedRecords);
		})
		.catch(function (error){
			res.status(500).json(error);
		});
	}

};