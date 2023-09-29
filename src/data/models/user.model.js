import { Schema, model } from "mongoose";

import { GENDER, MARITAL_STATUS } from "../../utils/helpers/index.js";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    gender: {
      type: String,
      required: true,
      enum: GENDER,
    },

    maritalStatus: {
      type: String,
      required: true,
      enum: MARITAL_STATUS,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    registeredAt: {
      type: Date,
      required: true,
    },

    accessCode: {
      type: String,
      required: true,
    },

    isCheckedIn: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export const User = model("User", userSchema);
