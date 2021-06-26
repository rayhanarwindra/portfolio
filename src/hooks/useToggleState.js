import { useState } from "react"

const useToggleState = (defaultState = false) => {
    const [state, setState] = useState(defaultState);

    const toggleState = () => {
        setState(!state);
    }

    return [state, toggleState];
}

export default useToggleState;