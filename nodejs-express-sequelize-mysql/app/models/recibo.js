const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('recibo', {
		idRecibo: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		FechaFactura: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		Total: {
			type: DataTypes.FLOAT,
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
		tableName: 'recibo',
		timestamps: false,
		indexes: [
			{
				name: "PRIMARY",
				unique: true,
				using: "BTREE",
				fields: [
					{ name: "idRecibo" },
					{ name: "Paciente_idPaciente" },
				]
			},
			{
				name: "fk_Recibo_Paciente1_idx",
				using: "BTREE",
				fields: [
					{ name: "Paciente_idPaciente" },
				]
			},
		]
	});
};
