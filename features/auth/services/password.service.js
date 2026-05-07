import bcrypt from "bcryptjs";

export const PasswordService = {
  /**
   * Hash a plain text password
   */
  hash: async (password) => {
    const salt = await bcrypt.genSalt(12);
    return bcrypt.hash(password, salt);
  },

  /**
   * Compare a plain text password with a hash
   */
  compare: async (password, hashed) => {
    return bcrypt.compare(password, hashed);
  },
};
