import data from "../components/csvjson.json"
import React from "react"
import {
    VictoryBar,
    VictoryChart,
    VictoryGroup
  } from "victory";

const findrahima = data.filter(naam => naam.naam.includes("Rahima"))

class Rahima extends React.Component {
    render() {
      return (
        <div>
          <h3>this is the chart of Rahima</h3>
          <p>salmon = difficulty rating</p>
          <p>brown = fun rating</p>
          <VictoryChart
          width={1000}
          height={600}
          domainPadding={10}>
            <VictoryGroup
            offset={5}>
                <VictoryBar
                data={findrahima}
                x="opdracht"
                y="moeilijk"
                colorScale={["#f3a288"]}
                />
                <VictoryBar
                data={findrahima}
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

export default Rahima