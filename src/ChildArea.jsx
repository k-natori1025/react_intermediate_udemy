import React from 'react'
import { memo } from 'react';

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
}

// memo: propsが変更しない限りレンダリングしない
const ChildArea = memo((props) => {
  const {open, onClickClose} = props;
  console.log("ChildAreaがレンダリングされました")
  // const data = [...Array(2000).keys()];
  // data.forEach(() => {
  //   console.log("....")
  // })
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  )
});

export default ChildArea
