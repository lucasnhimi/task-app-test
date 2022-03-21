import type { GetStaticProps, NextPage } from "next";
import { json } from "stream/consumers";
import { getAllTasks } from "../lib/db";

import styles from "../styles/Home.module.css";

export async function getStaticProps<GetStaticProps>() {
  const data = await getAllTasks();
  const tasks = data.map((item) => ({ description: item.description }));
  return {
    props: {
      tasks,
    },
  };
}

const Home: NextPage = ({ tasks }) => {
  return (
    <div className={styles.container}>
      <ul>
        {tasks?.map((item) => (
          <li>{item.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
