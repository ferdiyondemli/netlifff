import { useState } from 'react';
import { CopyBlock, dracula } from "react-code-blocks";

export const One=()=>{
    const [apple, setApple] = useState(0)
    const [orange, setOrange] = useState(0)
    const handleOnclick1 = () => {
      setApple(apple + 1)
      setApple(apple + 1)
    }
return  <><h2>example 1</h2>
<p>apple count: {apple}</p>
<p>orange count: {orange}</p>
<button onClick={handleOnclick1}>let's see</button>
<br></br>
<br></br>
<CopyBlock
  language={"jsx"}
  text={`  const handleOnclick1 = () => {
    setApple(apple + 1)
    setApple(apple + 1)
  }`}
  showLineNumbers={false}
  theme={dracula}
  wrapLines={true}
  codeBlock
/>
</> 
}