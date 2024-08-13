import { Schema, model } from "mongoose";

const storySchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export const Story = model("Story", storySchema);
