import data from "../components/csvjson.json"
import React from "react"
import {
    VictoryBar,
    VictoryChart,
    VictoryGroup
  } from "victory";

const findmaurits = data.filter(naam => naam.naam.includes("Maurits"))

class Maurits extends React.Component {
    render() {
      return (
        <div>
          <h3>this is the chart of Maurits</h3>
          <p>salmon = difficulty rating</p>
          <p>brown = fun rating</p>
          <VictoryChart
          width={1000}
          height={600}
          domainPadding={10}>
            <VictoryGroup
            offset={5}>
                <VictoryBar
                data={findmaurits}
                x="opdracht"
                y="moeilijk"
                colorScale={["#f3a288"]}
                />
                <VictoryBar
                data={findmaurits}
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

export default Maurits