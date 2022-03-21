const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('consentimientopaciente', {
		idConcentimientoPaciente: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Ruta: {
			type: DataTypes.STRING(500),
			allowNull: true
		},
		Paciente_idPaciente: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'paciente',
				key: 'idPaciente'
			}
		}
	}, {
		sequelize,
		tableName: 'consentimientopaciente',
		timestamps: false,
		indexes: [
			{
				name: "PRIMARY",
				unique: true,
				using: "BTREE",
				fields: [
					{ name: "idConcentimientoPaciente" },
					{ name: "Paciente_idPaciente" },
				]
			},
			{
				name: "fk_ConsentimientoPaciente_Paciente1_idx",
				using: "BTREE",
				fields: [
					{ name: "Paciente_idPaciente" },
				]
			},
		]
	});
};
