import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export default class Graph extends Component {
  constructor (props) {
    super(props)

    this.state = {
      options: {
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        }
      },
      series: [
        {
          name: 'series-1',
          data: [0, 10, 23, 30, 48, 55, 60, 72, 81, 74, 69, 71]
        }
      ]
    }
  }

  render () {
    return (
      <>
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type='bar'
              width='500'
            />
          </div>
        </div>
      </>
    )
  }
}
