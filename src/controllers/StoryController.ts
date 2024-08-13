import { Request, Response } from "express";
import { StoryService } from "../services/StoryService";

export class StoryController {
  private storyService: StoryService;

  constructor() {
    this.storyService = new StoryService();
  }

  async createStory(req: Request, res: Response) {
    try {
      const story = await this.storyService.createStory(req.body);
      res.status(201).json(story);
    } catch (error) {
      res.status(400).json({ message: "Invalid story data" });
    }
  }

  async editStory(req: Request, res: Response) {
    try {
      const story = await this.storyService.editStory(req.body);
      res.status(200).json(story);
    } catch (error) {
      res.status(400).json({ message: "Invalid story data" });
    }
  }

  async deleteStory(req: Request, res: Response) {
    try {
      const story = await this.storyService.deleteStory(req.body);
      res.status(200).json(story);
    } catch (error) {
      res.status(400).json({ message: "Invalid story data" });
    }
  }

  async getStoriesByUserId(req: Request, res: Response) {
    try {
      const stories = await this.storyService.getStoriesByUserId(
        req.body.userId
      );
      res.status(200).json(stories);
    } catch (error) {
      res.status(400).json({ message: "Invalid user ID for Search Histories" });
    }
  }

  async getStoriesByStoryId(req: Request, res: Response) {
    try {
      const stories = await this.storyService.getStoriesByStoryId(
        req.body.userId,
        req.body._id
      );
      res.status(200).json(stories);
    } catch (error) {
      res.status(400).json({ message: "Invalid user ID for Search Histories" });
    }
  }

  // Otros métodos de controlador...
}
