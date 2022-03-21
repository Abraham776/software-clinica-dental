const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('tratamientos', {
		idTratamientos: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		NombreTratamiento: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		PrecioTratamiento: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Doctor_idDoctor: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'doctor',
				key: 'idDoctor'
			}
		}
	}, {
		sequelize,
		tableName: 'tratamientos',
		timestamps: false,
		indexes: [
			{
				name: "PRIMARY",
				unique: true,
				using: "BTREE",
				fields: [
					{ name: "idTratamientos" },
					{ name: "Doctor_idDoctor" },
				]
			},
			{
				name: "fk_Tratamientos_Doctor_idx",
				using: "BTREE",
				fields: [
					{ name: "Doctor_idDoctor" },
				]
			},
		]
	});
};
