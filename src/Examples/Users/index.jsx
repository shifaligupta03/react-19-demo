import { use, Suspense } from "react";
import './style.css'

// For Promise reject https://react.dev/reference/react/use#displaying-an-error-to-users-with-error-boundary




const fetchPosts = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    await new Promise((resolve)=> setTimeout(resolve, 1000))
    return  res.json();
  };
  
  const PostItems = () => {
    const users = use(fetchPosts());
  
    return (
      <div className="users-parentContainer">
        <h3> use(Promise) hook</h3>
      <ul>
        {users.map((user) => (
          <div key={user.id} className='users-container'>
            <h2 className='users-header'>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </ul>
      </div>
    );
  }; 


  const Posts = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <PostItems />
      </Suspense>
    );
  };

export default Posts;