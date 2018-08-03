import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {
posts = [];
private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {
    http.get(this.url)
    .subscribe(response => {
     this.posts = response.json();
     console.log(this.posts);
    });
   }

   createPost(input: HTMLInputElement) {
     const post = {title: input.value};
     input.value = '';
    this.http.post(this.url, JSON.stringify(post))
    .subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
      console.log(response.json());
    });
   }
   updateData(post) {
      this.http.put(this.url + '/' + post.id, JSON.stringify({isRead: true}))
      .subscribe(response => {
        console.log(response.json());
      });
   }
   deleteData(post) {
    this.http.delete(this.url + '/' + post.id)
    .subscribe(response => {
     const index = this.posts.indexOf(post);
     this.posts.splice(index, 1);
    });
   }

}
