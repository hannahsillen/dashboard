import data from "../components/csvjson.json"
import React from "react"
import {
    VictoryBar,
    VictoryChart,
    VictoryGroup
  } from "victory";

const findwietske = data.filter(naam => naam.naam.includes("Wietske"))

class Wietske extends React.Component {
    render() {
      return (
        <div>
          <h3>this is the chart of Wietske</h3>
          <p>salmon = difficulty rating</p>
          <p>brown = fun rating</p>
          <VictoryChart
          width={1000}
          height={600}>
            <VictoryGroup
            offset={5} style={{ data: { width: 5 } }}>
                <VictoryBar
                data={findwietske}
                x="opdracht"
                y="moeilijk"
                colorScale={["#f3a288"]}
                />
                <VictoryBar
                data={findwietske}
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

export default Wietske