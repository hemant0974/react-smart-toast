import Button from "./components/button";
import styles from "./app.module.scss";

const variants = ["primary", "success", "warning", "error"] as const;

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.btnContainer}>
        {variants.map((variants) => (
          <Button color={variants}>{variants}</Button>
        ))}
      </div>
    </div>
  );
};

export default App;
