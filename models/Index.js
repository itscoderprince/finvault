import mongoose from "mongoose";

const indexSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Index name is required"],
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    thumbnail: {
      type: String,
      required: [true, "Thumbnail image is required"],
    },
    riskLevel: {
      type: String,
      enum: {
        values: ["LOW", "MEDIUM", "HIGH"],
        message: "{VALUE} is not a valid risk level",
      },
      default: "MEDIUM",
    },
    minimumInvestment: {
      type: Number,
      required: [true, "Minimum investment amount is required"],
      min: [0, "Minimum investment cannot be negative"],
    },
    maximumInvestment: {
      type: Number,
      required: [true, "Maximum investment amount is required"],
    },
    weeklyReturnPercent: {
      type: Number,
      required: [true, "Weekly return percentage is required"],
      min: 0,
    },
    lockDurations: [
      {
        months: { type: Number, required: true },
        returnPercent: { type: Number, required: true }, // Bonus return if locked
      },
    ],
    totalInvestors: {
      type: Number,
      default: 0,
    },
    totalInvestedAmount: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

indexSchema.index({ slug: 1 });
indexSchema.index({ isActive: 1 });

const Index = mongoose.models.Index || mongoose.model("Index", indexSchema);

export default Index;
