import { List, Avatar } from "antd";
import { useSubscription } from "@apollo/client";
import Loading from "components/loading";
import {  POSTS_SUBSCRIPTION } from "./queries";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";


function Home() {
  const { loading, error, data } = useSubscription (POSTS_SUBSCRIPTION);

  if (loading) return <Loading />;
  if (error) return <div> Error!: {error.message}</div>;

  return (
    <List
      loading={false}
      itemLayout="horizontal"
      dataSource={data.posts}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.user.profile_photo} />}
            title={
              <Link to={`/post/${item.id}`} className={styles.title}>
                {item.title}
              </Link>
            }
            description={
              <Link to={`/post/${item.id}`} className={styles.description}>
                {item.description}
              </Link>
            }
          />
        </List.Item>
      )}
    />
  );
}

export default Home;
