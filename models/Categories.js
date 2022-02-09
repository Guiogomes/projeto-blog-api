module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: { allowNull: false, type: DataTypes.STRING },
  },
  {
    tableName: 'Categories',
    timestamps: false,

  });
  
  return Categories;
};