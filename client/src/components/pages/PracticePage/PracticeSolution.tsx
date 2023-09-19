import { javascript } from '@codemirror/lang-javascript'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import ReactCodeMirror from '@uiw/react-codemirror'
import React from 'react'
import Split from 'react-split'
import '../../../css/PracticePage.css';

export default function PracticeSolution(): JSX.Element {
  return (
    <div className="flex flex-col bg-[#161717] relative h-[400px] rounded-md">
      <Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={60}>
      <div className="max-h-full overflow-auto ">
      <ReactCodeMirror 
        //  value={//Hi, programmer\n//Write your code here\n//Delete me, please}
         value="const testMe = () => {return 1}"
         theme={vscodeDark}
         extensions={[javascript()]}
        //  onChange={handleChangeAnswer}
         style={{ fontSize: 16, maxHeight: '200px', overflowY: 'auto', marginTop: '2px' }}
        />
      </div>
      <div className='text-[#a9a9a9]' style={{ fontSize: 16, maxHeight: '300px', overflowY: 'auto', marginTop: '2px' }}>
       <ReactCodeMirror 
      //  value={`const Test = require('@elbrus/test-compat');\ndescribe("GetMiddle", function() {\nit("Tests", function() {\nTest.assertEquals(getMiddle("test"),"es");\nTest.assertEquals(getMiddle("testing"),"t");\nTest.assertEquals(getMiddle("middle"),"dd");\nTest.assertEquals(getMiddle("A"),"A");\n});
       value={`describe("Tests", () => {\nit("should test", () => {\nassert.strictEqual(sumMul(0,0),"INVALID");\nassert.strictEqual(sumMul(2,9),20);\nassert.strictEqual(sumMul(4,-7),"INVALID");
  });
});`}
       theme={vscodeDark}
       extensions={[javascript()]}
       />
       </div>
      </Split>
    </div>
  );
}

