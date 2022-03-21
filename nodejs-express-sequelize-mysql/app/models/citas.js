const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('citas', {
		idCitas: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		TelefonoCitas: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		'AnotaciónCitas': {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		NombreDelPacienteCitas: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		FechaCitas: {
			type: DataTypes.DATEONLY,
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
		tableName: 'citas',
		timestamps: false,
		indexes: [
			{
				name: "PRIMARY",
				unique: true,
				using: "BTREE",
				fields: [
					{ name: "idCitas" },
					{ name: "Doctor_idDoctor" },
				]
			},
			{
				name: "fk_Citas_Doctor1_idx",
				using: "BTREE",
				fields: [
					{ name: "Doctor_idDoctor" },
				]
			},
		]
	});
};
