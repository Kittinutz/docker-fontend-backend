export default (sequelize, DataTypes) => {
  const Menus = sequelize.define('menus', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      autoIncrement: true,
      field: 'id',
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      field: 'name',
    },
    surname: {
      type: DataTypes.DECIMAL(10, 2),
      field: 'price',
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
      primaryKey: false,
      autoIncrement: false,
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
      primaryKey: false,
    },
  },
    {
      freezeTableName: true,
      instanceMethods: {
        generateHash(password) {
          return bcrypt.hash(password, bcrypt.genSaltSync(8));
        },
        validPassword(password) {
          return bcrypt.compare(password, this.password);
        }
      }
    });
  return User;
};