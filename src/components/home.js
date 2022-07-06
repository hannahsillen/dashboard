import React from "react"
import Convert from "./convert"
import Data from "./csvjson.json";
import {
    VictoryBar,
    VictoryChart,
    VictoryGroup,
    VictoryLine,
    VictoryTooltip,
    VictoryVoronoiContainer
  } from "victory";

const withlabel = Convert.map(avg => ({
  opdracht: avg.opdracht,
  moeilijk: avg.moeilijk,
  leuk: avg.leuk,
  label: `Opdracht ${
    avg.opdracht
  }, moeilijk: ${avg.moeilijk.toFixed(
    1
  )}, leuk: ${avg.leuk.toFixed(1)}`
}));


class Getdata extends React.Component {
    render() {
      return (
        <div>
          <h3>this is the chart of all the data from the all students</h3>
          <p>salmon = difficulty rating</p>
          <p>dark gray = fun rating</p>
          <VictoryChart
          width={1500}
          height={700}
          domainPadding={15}>
            <VictoryGroup
            offset={1}>
                <VictoryBar
                data={Data}
                x="opdracht"
                y="moeilijk"
                colorScale={["#f3a288"]}
                style={{
                  data: {width: 2}
                }}
                />
                <VictoryBar
                data={Data}
                x="opdracht"
                y="leuk"
                colorScale={["#374345"]}
                style={{
                  data: {width: 2}
                }}
                />
            </VictoryGroup>  
          </VictoryChart>
          <h3>this is the chart of the average of all the assignments</h3>
          
          <VictoryChart
          width={3000}
          height={500}
          containerComponent={
            <VictoryVoronoiContainer/>}
          >
            <VictoryLine
            style={{
              data: { stroke: "#f3a288", strokeWidth: 3 }
            }}
            data={withlabel}
            labelComponent={<VictoryTooltip style={{fontSize: 20}}/>}
            x="opdracht"
            y="moeilijk"
            />
            <VictoryLine
            style={{
              data: { stroke: "#374345", strokeWidth: 3}
            }}
            data={withlabel}
            labelComponent={<VictoryTooltip style={{fontSize: 20}}/>}
            x="opdracht"
            y="leuk"
            />
          </VictoryChart>
        </div>  
      )
    }
}

export default Getdata