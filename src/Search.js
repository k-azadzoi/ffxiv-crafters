import React from "react"

const Search = props => {
    const XIVAPI = require("xivapi-js")
    const xiv = new XIVAPI({
        language: "en",
        snake_case: "true"
    })

    xiv.search("Shroud Cherry Sapling").then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error(`Error in fetch: ${error.message}`)
      })

    return(
        <div className="main-search">
            <p>What would you like to craft?</p>
        </div>
    )
}

export default Search