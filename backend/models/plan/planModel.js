const { mongoose } = require("mongoose");

const planSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    goal: {
      type: String,
      enums: ["gain", "loose", "maintain"],
      required: true,
    },
    prefrence: {
      type: "String",
      enums: ["vegiterian", "non-vegiterian", "vegan"],
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Plan", planSchema);
