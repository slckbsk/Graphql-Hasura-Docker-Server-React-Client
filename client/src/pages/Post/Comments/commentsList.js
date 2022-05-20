import { Divider } from "antd";
import { useSubscription } from "@apollo/client";
import { COMMENTS_SUBSCRIPTION } from "./queries";
import { Comment, List } from "antd";
import NewCommentForm from "./newCommentForm";
import Loading from "components/loading";

function CommentsList({ post_id }) {

  const { loading, error, data } = useSubscription(COMMENTS_SUBSCRIPTION, {
    variables: {post_id},
  });

  if (loading) return <Loading />;
  if (error) return <div> Error!: {error.message}</div>;

  return (
    <div>
      <Divider orientation="center"></Divider>

      {!loading && data && (
        <div>
          <List
            className="comment-list"
            itemLayout="horizontal"
            dataSource={data.comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.user.fullName}
                  avatar={item.user.profile_photo}
                  content={item.text}
                />
              </li>
            )}
          />

          <Divider orientation="center">New Comments</Divider>

          <NewCommentForm post_id={post_id} />
        </div>
      )}
    </div>
  );
}

export default CommentsList;
