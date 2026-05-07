import mongoose from "mongoose";

const weeklyReturnSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    investmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Investment",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    weekNumber: {
      type: Number,
      required: true,
    },
    creditedAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["PENDING", "SUCCESS"],
      default: "SUCCESS",
    },
  },
  {
    timestamps: true,
  }
);

weeklyReturnSchema.index({ userId: 1, investmentId: 1 });
weeklyReturnSchema.index({ creditedAt: 1 });

const WeeklyReturn = mongoose.models.WeeklyReturn || mongoose.model("WeeklyReturn", weeklyReturnSchema);

export default WeeklyReturn;
