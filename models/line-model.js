import mongoose from "mongoose";

const lineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Lütfen bir hat ismi giriniz."],
      unique: [true, "Bu hat zaten var."],
      trim: true,
    },
    lineCode: {
      type: String,
      required: [true, "Lütfen bir hat kodu giriniz. ÖR=T4,M1A"],
      maxlength: [3, "Hat kodu 3 karakterden az veya eşit olmalıdır."],
      unique: [true, "Bu hat zaten var."],
      trim: true,
    },
    type: {
      type: String,
      required: [
        true,
        "Lütfen örnekte verilen tipte bir tür giriniz. ÖR=tram,metro,cable-car,funicular,suburban,bus-rapid",
      ],
      enum: {
        values: [
          "tram",
          "metro",
          "cable-car",
          "funicular",
          "suburban",
          "bus-rapid",
          "bus",
        ],
      },
    },
    stops: {
      type: {},
      required: true,
    },
    thumbnail: {
      type: String,
      required: [true, "Lütfen hatta ait bir küçük resim ekleyiniz."],
    },
    searchQuery: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true, collection: "AllLines" }
);

const Line = mongoose.model("AllLines", lineSchema);

export default Line;
