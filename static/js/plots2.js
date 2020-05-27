var Sales= data.map(sales => sales.Sales);

var Price= data.map(price => price.Price);

var trace1 = {
    x:Price, y: Sales, 
    mode: 'markers',
	
	type: 'scatter'
};



var layout = {
    title: "Price to Sales",
    xaxis: {title: "Price"},
    yaxis: {title: "Sales"}
};

Plotly.newPlot("plotArea", [trace1], layout);
