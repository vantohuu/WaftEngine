const mongoose = require('mongoose');
const schema = mongoose.Schema;

const settingSchema = new schema({
  key: { type: String },
  value: { type: schema.Types.Mixed },
  type: { type: String, required: true },
  sub_type: { type: String },
  description: { type: String },
  email_setting: { type: schema.Types.Mixed },
  is_active: { type: Boolean, default: true },
  is_deleted: { type: Boolean, default: false },
  added_by: { type: schema.Types.ObjectId, required: true, ref: 'users' },
  added_date: { type: Date, default: Date.now },
  updated_by: { type: schema.Types.ObjectId, ref: 'users' },
  updated_at: { type: Date, default: Date.now },
});
module.exports = Setting = mongoose.model('setting', settingSchema);
