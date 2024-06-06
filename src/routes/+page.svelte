<script lang="ts">
  import type { PageData } from './$types';

  import { page } from '$app/stores';

  export let data: PageData;

  const users = data.users;
  // const posts = data.posts;
</script>

<form method="POST">
  <input type="text" name="username" autocomplete="given-name" required />
  <input type="radio" id="optFalse" name="admin" value={false}  />
  <label for="optFalse">False</label>
  <input type="radio" id="optTrue" name="admin" value={true} />
  <label for="optTrue">True</label>
  <input type="submit" value="Add user" style="display: none" />
</form>

{#each users as user}
  <div>
    <h1>Username: {user.username} (id {user.id})</h1>
    <p>Admin: {user.admin}</p>
    <h2>Posts</h2>
      {#each user.posts as post, index}
        <div>
          <h3>Post {post.id}: {post.body}</h3>
        </div>
      {/each}
  </div>
{/each}


<!-- {#each user.posts as post, index} -->
<!--   <div> -->
<!--     <h3>Post {post.id}: {post.body}</h3> -->
<!--   </div> -->
<!-- {/each} -->
