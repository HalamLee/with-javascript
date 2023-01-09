(function () {
  'use strict';

  const get = (target) => {
    return document.querySelector(target);
  };

  let page = 1;
  const limit = 10;
  const $posts = get('.posts');
  const end = 100;
  let total = 10;

  const getPost = async () => {
    const API_URL = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`;
    const response = await fetch(API_URL); // await을 이용하면 변수에 담을 수 있다.

    if (!response.ok) {
      throw new Error('에러가 발생했습니다.');
    }
    return await response.json();
  };

  const showPosts = (posts) => {
    posts.forEach((post) => {
      const $post = document.createElement('div');
      $post.classList.add('post');
      $post.innerHTML = `
      <div class="header">
        <div class="id">${post.id}</div>
        <div class="title">${post.title}</div>
      </div>
      <div class="body">${post.body}</div>
      `;

      $posts.appendChild($post);
    });
  };

  const loadPost = async () => {
    const response = await getPost();
    showPosts(response);
  };

  const onScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (total === end) {
      window.removeEventListener('scroll', onScroll);
      return;
    }

    if (scrollTop + clientHeight >= scrollHeight - 5) {
      page++;
      total += 10;
      loadPost();
    }
  };

  window.addEventListener('DOMContentLoaded', () => {
    loadPost();
    window.addEventListener('scroll', onScroll);
  });
})();
