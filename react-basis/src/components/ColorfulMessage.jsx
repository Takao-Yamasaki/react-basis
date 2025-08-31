export const ColorfulMessage = ({ color, children }) => {
  // 分割代入
  // const { color, children } = props;
  const contentStyleA = {
    // 省略記法
    color,
    fontSize: "18px",
  };

  return <p style={contentStyleA}>{children}</p>;
  // return <p style={contentStyleA}>{props.message}</p>;
};
