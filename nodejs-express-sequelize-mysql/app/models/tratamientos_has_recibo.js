const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('tratamientos_has_recibo', {
		Tratamientos_idTratamientos: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'tratamientos',
				key: 'idTratamientos'
			}
		},
		Recibo_idRecibo: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'recibo',
				key: 'idRecibo'
			}
		}
	}, {
		sequelize,
		tableName: 'tratamientos_has_recibo',
		timestamps: false,
		indexes: [
			{
				name: "PRIMARY",
				unique: true,
				using: "BTREE",
				fields: [
					{ name: "Tratamientos_idTratamientos" },
					{ name: "Recibo_idRecibo" },
				]
			},
			{
				name: "fk_Tratamientos_has_Recibo_Recibo1_idx",
				using: "BTREE",
				fields: [
					{ name: "Recibo_idRecibo" },
				]
			},
			{
				name: "fk_Tratamientos_has_Recibo_Tratamientos1_idx",
				using: "BTREE",
				fields: [
					{ name: "Tratamientos_idTratamientos" },
				]
			},
		]
	});
};
