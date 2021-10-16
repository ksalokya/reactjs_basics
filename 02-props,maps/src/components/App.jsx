import React from "react";
import Entry from "./Entry.jsx"
import emojipedia from "../Emoji";

function createEntry(create){
    return(
        <Entry
            key = {create.id}
            emoji = {create.emoji}
            name = {create.name}
            mean = {create.meaning}
        />
    );
}

function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>

            <dl className="dictionary">
                {emojipedia.map(createEntry)};
            </dl>
        </div>
    );
}

export default App;