import { Fragment } from 'react';

import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <Fragment key={comment.id}>
        <CommentInfo comment={comment} />
      </Fragment>
    ))}
  </div>
);
