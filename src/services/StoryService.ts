import { StoryRepository } from "../repositories/StoryRepository";

export class StoryService {
  private storyRepository: StoryRepository;

  constructor() {
    this.storyRepository = new StoryRepository();
  }

  async createStory(story: any) {
    return await this.storyRepository.create(story);
  }

  async getStoriesByUserId(userId: string) {
    return await this.storyRepository.findByUserId(userId);
  }

  async getStoriesByStoryId(userId: string, _id: string) {
    return await this.storyRepository.findByStoryId(userId, _id);
  }

  async editStory(story: any) {
    return await this.storyRepository.editStory(story);
  }

  async deleteStory(story: any) {
    return await this.storyRepository.deleteStory(story);
  }

  // Otros métodos de negocio...
}
