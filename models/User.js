import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";

/**
 * User Schema
 * Production-ready schema for InvestSmart platform.
 * Includes validation, password hashing, and sensitive data protection.
 */
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please provide your full name"],
      trim: true,
      minlength: [3, "Full name must be at least 3 characters"],
      maxlength: [50, "Full name cannot exceed 50 characters"],
    },
    username: {
      type: String,
      required: [true, "Please provide a username"],
      unique: true,
      trim: true,
      lowercase: true,
      minlength: [3, "Username must be at least 3 characters"],
      match: [
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores",
      ],
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      trim: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    phoneNumber: {
      type: String,
      trim: true,
      validate: {
        validator: function (v) {
          return v ? validator.isMobilePhone(v) : true;
        },
        message: "Please provide a valid phone number",
      },
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: [8, "Password must be at least 8 characters"],
      select: false, // Security: Don't return password by default in queries
    },
    role: {
      type: String,
      enum: {
        values: ["user", "admin", "moderator"],
        message: "{VALUE} is not a valid role",
      },
      default: "user",
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    accountStatus: {
      type: String,
      enum: {
        values: [
          "PENDING_KYC",
          "UNDER_REVIEW",
          "ACTIVE",
          "SUSPENDED",
          "REJECTED",
        ],
        message: "{VALUE} is not a valid account status",
      },
      default: "PENDING_KYC",
    },
    kycStatus: {
      type: String,
      enum: {
        values: [
          "NOT_SUBMITTED",
          "PENDING",
          "UNDER_REVIEW",
          "VERIFIED",
          "REJECTED",
          "RESUBMIT_REQUIRED",
        ],
        message: "{VALUE} is not a valid KYC status",
      },
      default: "NOT_SUBMITTED",
    },
    walletId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Wallet",
    },
    lastLogin: {
      type: Date,
    },
    loginAttempts: {
      type: Number,
      default: 0,
    },
    profileImage: {
      type: String,
      default: "",
    },
    referredBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    referralCode: {
      type: String,
      unique: true,
      sparse: true, // Allow unique indexing while allowing nulls
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        delete ret.password;
        delete ret.__v;
        return ret;
      },
    },
    toObject: { virtuals: true },
  },
);

/**
 * Middleware: Hash password before saving
 * Only hashes if the password field is new or modified.
 */
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

/**
 * Method: Compare candidate password with hashed password in DB
 */
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Optimization: Explicit Indexes
userSchema.index({ email: 1 });
userSchema.index({ username: 1 });
userSchema.index({ referralCode: 1 });

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
