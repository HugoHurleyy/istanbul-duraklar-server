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
    },
    searchQuery: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true, collection: "AllLinesCopy" }
);

const Line = mongoose.model("AllLinesCopy", lineSchema);

export default Line;

const stops = {
  type: {
    dynamicStopName: {
      type: [
        {
          name: {
            type: String,
            required: true,
          },

          transfers: {
            type: [
              {
                name: {
                  type: String,
                  required: true,
                },
                lineCode: {
                  type: String,
                  required: true,
                },
              },
            ],
            required: true,
          },
        },
      ],
      required: true,
    },
  },
  required: true,
};
