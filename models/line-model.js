import mongoose from 'mongoose';

const lineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A line must have a name'],
      unique: [true, 'This line already exist'],
      trim: true,
    },
    lineCode: {
      type: String,
      required: [true, 'A line must have a line code'],
      maxlength: [3, 'Line must be less or equal than a 3 characters'],
      unique: [true, 'This line already exist'],
      trim: true,
    },
    type: {
      type: String,
      required: [true, 'A line must have type'],
      enum: {
        values: [
          'tram',
          'metro',
          'cable-car',
          'funicular',
          'suburban',
          'bus-rapid',
        ],
      },
    },
    stops: {
      type: [Object],
      required: true,
    },
    thumbnail: {
      type: String,
      required: [true, 'A line must have a thumbnail'],
    },
    stopCount: {
      type: Number,
      default: 0,
    },
    searchQuery: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true },
);

lineSchema.pre('save', function (next) {
  this.stopCount = this.stops.length;
  next();
});

const Line = mongoose.model('Line', lineSchema);

export default Line;
