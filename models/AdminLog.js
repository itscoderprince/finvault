import mongoose from "mongoose";

const adminLogSchema = new mongoose.Schema(
  {
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    action: {
      type: String,
      required: true,
      trim: true,
    },
    targetUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed, // For flexible logging of changed data
    },
    ipAddress: {
      type: String,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

adminLogSchema.index({ adminId: 1 });
adminLogSchema.index({ createdAt: 1 });

const AdminLog = mongoose.models.AdminLog || mongoose.model("AdminLog", adminLogSchema);

export default AdminLog;
