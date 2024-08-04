const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], required: true }
});

module.exports = mongoose.model('User', UserSchema);


// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   password: { type: String, required: true },
//   role: { type: String, required: true }
// });

// // Hash password before saving
// userSchema.pre('save', async function(next) {
//   if (this.isModified('password') || this.isNew) {
//     this.password = await bcrypt.hash(this.password, 8);
//   }
//   next();
// });

// module.exports = mongoose.model('User', userSchema);
