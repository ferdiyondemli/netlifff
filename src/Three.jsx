import { useState } from 'react';
import { CopyBlock, dracula } from "react-code-blocks";

export const Three=()=>{
    const [apple, setApple] = useState(0)
    const [orange, setOrange] = useState(0)
    const handleOnclick3 = () => {
      setApple(apple => apple + 1)
      setApple(apple => apple + 1)
      setOrange(apple + 1)
    }
return  <> <h2>example 3</h2>
<p>apple count: {apple}</p>
<p>orange count: {orange}</p>
<button onClick={handleOnclick3}>let's see</button>
<br></br>
<br></br>
<CopyBlock
  language={"js"}
  text={` 
const handleOnclick3 = () => {
setApple(apple => apple + 1)
setApple(apple => apple + 1)
setOrange(apple + 1)
}
  `}
  showLineNumbers={false}

   theme={dracula}
   codeBlock
/>
</> 
}