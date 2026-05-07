import mongoose from "mongoose";

const investmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },
    indexId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Index",
      required: [true, "Index ID is required"],
    },
    investmentSnapshot: {
      indexName: String,
      weeklyReturnPercent: Number,
      lockDurationMonths: Number,
      riskLevel: String,
    },
    investedAmount: {
      type: Number,
      required: [true, "Invested amount is required"],
      min: 0,
    },
    lockedAmount: {
      type: Number,
      default: 0,
    },
    expectedWeeklyReturn: {
      type: Number,
      required: true,
    },
    totalProfitEarned: {
      type: Number,
      default: 0,
    },
    maturityDate: {
      type: Date,
    },
    startDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: {
        values: [
          "PENDING_PAYMENT",
          "PAYMENT_VERIFICATION",
          "ACTIVE",
          "COMPLETED",
          "REJECTED",
          "CANCELLED",
        ],
        message: "{VALUE} is not a valid investment status",
      },
      default: "PENDING_PAYMENT",
    },
    paymentProof: {
      type: String, // URL to receipt/screenshot
    },
    paymentTransactionId: {
      type: String,
      trim: true,
    },
    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    approvedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

investmentSchema.index({ userId: 1 });
investmentSchema.index({ status: 1 });
investmentSchema.index({ maturityDate: 1 });

const Investment = mongoose.models.Investment || mongoose.model("Investment", investmentSchema);

export default Investment;
