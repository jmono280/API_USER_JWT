/**
 * Represents a repository for managing stories.
 */
import { Story } from "../models/Story";

export class StoryRepository {
  async create(story: any) {
    return await Story.create(story);
  }

  async findByUserId(userId: string) {
    return await Story.find({ userId });
  }

  async findByStoryId(userId: string, _id: string) {
    return await Story.find({ userId, _id });
  }

  async editStory(story: any) {
    return await Story.updateOne({ _id: story._id }, { $set: story });
  }

  async deleteStory(story: any) {
    return await Story.deleteOne({ _id: story._id });
  }

  // Otros métodos CRUD...
}
