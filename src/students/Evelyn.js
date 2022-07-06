import data from "../components/csvjson.json"
import React from "react"
import {
    VictoryBar,
    VictoryChart,
    VictoryGroup
  } from "victory";

const findEvelyn = data.filter(naam => naam.naam.includes("Evelyn"))

class Evelyn extends React.Component {
    render() {
      return (
        <div>
          <h3>this is the chart of Evelyn</h3>
          <p>salmon = difficulty rating</p>
          <p>brown = fun rating</p>
          <VictoryChart
          width={1000}
          height={500}
          domainPadding={10}>
            <VictoryGroup
            offset={5}>
                <VictoryBar
                data={findEvelyn}
                x="opdracht"
                y="moeilijk"
                colorScale={["#f3a288"]}
                />
                <VictoryBar
                data={findEvelyn}
                x="opdracht"
                y="leuk"
                colorScale={["#374345"]}
                />
            </VictoryGroup>  
          </VictoryChart>
        </div>
      )
    }
}

export default Evelyn