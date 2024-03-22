import React from 'react'
import { useState, useCallback, useMemo } from 'react';
import './App.css';
import ChildArea from './ChildArea';

const BasicHooks = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };

  // useCallback: 関数のメモ化 = onClickCloseを子コンポーネントに渡していて、親がレンダリングされても子はレンダリングされないようにする
  const onClickClose = useCallback(() => {
    setOpen(false);
  }, []);

  // useMemo: 変数自体のメモ化、[]空配列にしているので最初にレンダリングされた時だけ1+3を計算する(レンダリングされるたびに計算しない)
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);
  return (
    <div>
      <header className="App-header">
        <p>{count}</p>
        <button onClick={onClickCountUp}>カウントアップ</button>
        <br />
        <br />
        <input value={text} onChange={onChangeText}/>
        <br />
        <br />
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open} onClickClose={onClickClose} />
      </header>
    </div>
  )
}

export default BasicHooks
