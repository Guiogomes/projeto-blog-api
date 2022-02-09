const update = (DataTypes) => ({
  type: DataTypes.DATE, field: 'updated', defaultValue: DataTypes.CURRENT_TIMESTEMP,
});

const create = (DataTypes) => ({
  type: DataTypes.DATE, field: 'published', defaultValue: DataTypes.CURRENT_TIMESTEMP,
});

module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING({ length: 10000 }),
    createdAt: create(DataTypes),
    updatedAt: update(DataTypes),
  },
  { tableName: 'BlogPosts', timestamps: false });

  Posts.associate = (models) => {
    Posts.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Posts.hasMany(models.PostsCategories, { foreignKey: 'postId', as: 'posts' });
  };

  return Posts;
};