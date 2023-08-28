import React from 'react';
import ChartBar from'./ChartBar';
import './Chart.css';

function Chart(props) {
    const datapointValues = props.dataPoints.map(dp => dp.value);
    const maxValue = Math.max(...datapointValues);

    console.log(props.dataPoints);

    return (
        <div className='chart'>
            {props.dataPoints.map(datapoint => {
                return <ChartBar key={Math.random().toString()} label={datapoint.label} value={datapoint.value} maxValue={maxValue} />
            })}
        </div>
    )
}

export default Chart;