import Button from "./components/button";

const flexStyle: React.CSSProperties = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const variants = ["primary", "success", "warning", "error"] as const;

const App = () => {
  return (
    <div style={flexStyle}>
      <div style={{ display: "flex", gap: "1rem" }}>
        {variants.map((variants) => (
          <Button color={variants}>{variants}</Button>
        ))}
      </div>
    </div>
  );
};

export default App;
