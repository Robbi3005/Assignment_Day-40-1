import React from "react";
import Axios from "axios";

//------------------------------------------------------------------------------

function CatFact() {

    const [text, setText] = React.useState("");

    React.useEffect(() => {

        Axios.get("https://catfact.ninja/fact").then(res => {

            const fact = res.data.fact;
            setText(fact)
            
        }).catch((e) => {

            console.error(e);
            setText(e.message)
        })
    }, [])

    return <p>{text}</p>
}

//------------------------------------------------------------------------------

export default CatFact;