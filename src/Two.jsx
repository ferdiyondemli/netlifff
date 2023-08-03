import { useState } from 'react';
import { CopyBlock, dracula } from "react-code-blocks";

export const Two=()=>{
    const [apple, setApple] = useState(0)
    const [orange, setOrange] = useState(0)
    const handleOnclick2 = () => {
      setApple(apple => apple + 1)
      setApple(apple => apple + 1)
  
  
    }
return  <><h2>example 2</h2>
<p>apple count: {apple}</p>
<p>orange count: {orange}</p>
<button onClick={handleOnclick2}>let's see</button>
<br></br>
<br></br>
<CopyBlock
  language={"jsx"}
  text={`const handleOnclick2 = () => {
          setApple(apple => apple + 1)
          setApple(apple => apple + 1)
         }`}
  showLineNumbers={false}
  theme={dracula}
  wrapLines={true}
  codeBlock
/>
</> 
}