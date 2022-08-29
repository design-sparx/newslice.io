import React from 'react';
import { useParams } from 'react-router-dom';

const Post = (): JSX.Element => {
  const { post } = useParams();

  console.log(post);

  return (
    <div>

    </div>
  );
};

export default Post;
