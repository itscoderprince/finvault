import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: {
        values: ["KYC", "INVESTMENT", "PAYMENT", "SECURITY", "WITHDRAWAL"],
        message: "{VALUE} is not a valid notification type",
      },
      required: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

notificationSchema.index({ userId: 1, isRead: 1 });

const Notification = mongoose.models.Notification || mongoose.model("Notification", notificationSchema);

export default Notification;
