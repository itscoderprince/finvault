import mongoose from "mongoose";

const kycSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
      unique: true, // One KYC per user
    },
    panNumber: {
      type: String,
      required: [true, "PAN number is required"],
      unique: true,
      trim: true,
      uppercase: true,
      match: [/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Please provide a valid PAN number"],
    },
    aadhaarNumber: {
      type: String,
      required: [true, "Aadhaar number is required"],
      unique: true,
      trim: true,
      match: [/^[2-9]{1}[0-9]{11}$/, "Please provide a valid 12-digit Aadhaar number"],
    },
    bankDetails: {
      accountHolderName: { type: String, required: true, trim: true },
      accountNumber: { type: String, required: true, trim: true },
      ifscCode: { 
        type: String, 
        required: true, 
        trim: true, 
        uppercase: true,
        match: [/^[A-Z]{4}0[A-Z0-9]{6}$/, "Please provide a valid IFSC code"]
      },
      bankName: { type: String, required: true, trim: true },
    },
    documents: {
      panCardFront: { type: String, required: true },
      aadhaarFront: { type: String, required: true },
      aadhaarBack: { type: String, required: true },
      selfieImage: { type: String, required: true },
      bankProof: { type: String, required: true },
    },
    status: {
      type: String,
      enum: {
        values: ["PENDING", "UNDER_REVIEW", "VERIFIED", "REJECTED", "RESUBMIT_REQUIRED"],
        message: "{VALUE} is not a valid KYC status",
      },
      default: "PENDING",
    },
    rejectionReason: {
      type: String,
      trim: true,
    },
    verifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    verifiedAt: {
      type: Date,
    },
    submittedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

kycSchema.index({ userId: 1 });
kycSchema.index({ status: 1 });

const KYC = mongoose.models.KYC || mongoose.model("KYC", kycSchema);

export default KYC;
