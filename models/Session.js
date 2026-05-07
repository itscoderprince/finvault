import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ipAddress: {
      type: String,
    },
    deviceInfo: {
      type: String,
    },
    browser: {
      type: String,
    },
    location: {
      type: String,
    },
    refreshToken: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

sessionSchema.index({ userId: 1 });
sessionSchema.index({ refreshToken: 1 });
sessionSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 }); // TTL Index

const Session = mongoose.models.Session || mongoose.model("Session", sessionSchema);

export default Session;
