import { Injectable, NotFoundException } from '@nestjs/common';
import { IPost } from './types';

@Injectable()
export class PostsService {
  private posts:IPost[] = [
      {
        id: 1,
        title:'Title',
        text: 'text'
      },
      {
        id: 2,
        title:'Title2',
        text: 'text2'
      }
    ]

  set setPosts(posts:IPost[]) {
    this.posts = posts
  }
  findAll() {
    return this.posts
  }

  findById(id:string) {
    const targetPost = this.posts.find((p)=>p.id === +id);
    if(!targetPost) throw new NotFoundException(`No post whith id = ${id}`)
    return targetPost
  }

  createPost() {
    const id:number = this.posts[this.posts.length - 1]?.id + 1;
    const newPost:IPost = {
      id: id,
      title: `Title ${id}`,
      text: `Title ${id}`
    }
    this.setPosts = [...this.posts, newPost];
    return this.posts
  }

  deletePost(id:string) {
    this.setPosts = [...this.posts.filter(p=>p.id!==+id)];
    return this.posts
  }
}
