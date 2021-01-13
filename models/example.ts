import mongoose, { Document, Schema } from "mongoose";

const exampleSchema: Schema = new Schema(
  {
    name: String,
    updateTime: Date,
    createTime: Date,
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        delete ret._id;
        delete ret.__v;
      },
    },
    toObject: {
      transform: (doc, ret) => {
        delete ret.__v;
      },
    },
  },
);

export interface ExampleModelIf extends Document {
  name: string;
  updateTime: number | string;
  createTime: number | string;
  toJSON: any;
  toObject: any;
}
export default mongoose.model<ExampleModelIf>("example", exampleSchema);
