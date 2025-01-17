formatter: (value, ctx) => {
    let sum = 0;
    const dataArr = ctx.chart.data.datasets[0].data;
    dataArr.forEach(data => sum += data);
    const percentage = (value * 100 / sum).toFixed(2) + '%';
    return percentage;
}
