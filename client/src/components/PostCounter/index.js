import React from "react";
import { Badge, Avatar } from "antd";
import styles from "./styles.module.css";
import { POST_COUNT_SUBSCRIPTION } from "./queries";
import { useSubscription } from "@apollo/client";

function Counter() {
  const { loading, data } = useSubscription(POST_COUNT_SUBSCRIPTION);
  const postCount = data?.posts_aggregate?.aggregate?.count;
  return (
    <div className={styles.state}>
      <Badge count={loading ? "?" : postCount}>
        <Avatar shape="square" size="large">
          <span className={styles.counterTitle}>posts </span>
        </Avatar>
      </Badge>
    </div>
  );
}

export default Counter;
