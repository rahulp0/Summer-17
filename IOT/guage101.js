

/*setChartLibrary("google-chart")

setChartType('guage');

setAxisName('light_data');


plotChart('light_data');

dataDownload('true');
*/



setChartLibrary("google-chart");
setChartType('gauge');
setAxisName('light_data');
setDimentions(700,700);
setMaxValue(1023);
setRed(726,1023);
setYellow(501,725);
setGreen(250,500);
setMinorTicks(5);
plotChart('light_data');
dataDownload('true');