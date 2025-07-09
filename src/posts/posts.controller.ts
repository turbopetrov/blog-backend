import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { IPost } from './types';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll():IPost[] {
    return this.postsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id:string):IPost {
    return this.postsService.findById(id)
  }

  @Post()
  create():IPost[] {
    return this.postsService.createPost()
  }

  @Delete(':id')
  deletePost(@Param('id') id:string):IPost[] {
    return this.postsService.deletePost(id)
  }
}
