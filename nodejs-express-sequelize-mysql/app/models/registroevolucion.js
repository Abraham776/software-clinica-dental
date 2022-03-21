const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('registroevolucion', {
		idRegistroEvolucion: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		ObservacionesRegistro: {
			type: DataTypes.STRING(2000),
			allowNull: true
		},
		FechaRegistro: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		Tratamiento: {
			type: DataTypes.STRING(300),
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
		tableName: 'registroevolucion',
		timestamps: false,
		indexes: [
			{
				name: "PRIMARY",
				unique: true,
				using: "BTREE",
				fields: [
					{ name: "idRegistroEvolucion" },
					{ name: "Paciente_idPaciente" },
				]
			},
			{
				name: "fk_RegistroEvolucion_Paciente1_idx",
				using: "BTREE",
				fields: [
					{ name: "Paciente_idPaciente" },
				]
			},
		]
	});
};
