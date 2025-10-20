export default {
  register(username, password) {
    return User.create({ email, password });
  },
};
