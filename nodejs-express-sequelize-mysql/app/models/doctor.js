const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('doctor', {
		idDoctor: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Estatus: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		'Contraseña': {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		NombreDoctor: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		UsuarioDoctor: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		Apellidos: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'doctor',
		timestamps: false,
		indexes: [
			{
				name: "PRIMARY",
				unique: true,
				using: "BTREE",
				fields: [
					{ name: "idDoctor" },
				]
			},
		]
	});
};
