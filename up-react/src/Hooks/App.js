import HookUseState from "./HookUseState";
import HookUseEffect from "./HookUseEffect";
import HookUseEffect2 from "./HookUseEffect2";
import HookUseEffect3 from "./HookUseEffect3";
import HookUseEffect4 from "./HookUseEffect4";

import Counter from './Counter';
import { MyProvider } from './MyContext';

export default function App(){
    return(
        <>
        <HookUseState/>
        <hr/>
        <HookUseEffect/>
        <hr/>
        <HookUseEffect2/>
        <hr/>
        <HookUseEffect3/>
        <hr/>
        <HookUseEffect4/>
        <hr/>
        <MyProvider>
            <div>
                <h1>App Component</h1>
                <Counter />
            </div>
        </MyProvider>
        </>
    );
}