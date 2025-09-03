// named exportと呼ばれる
export const ColorfulMessage = ({ color, children }) => {
  console.log("--ColorfulMessage--");
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

// default exportの場合、1つのファイルに１つしか記述できない
// export default  ColorfulMessage;
