document.addEventListener('DOMContentLoaded',function(){
   drawAccelXChart();
});

function drawAccelXChart() {
   var data = {
      labels: [1,2,3,4],
      series: [[22,13,21,52]]
   }

   var options = {
      showPoint: false,
      lineSmooth: false,
      chartPadding: {
         top: 20,
         right: 0,
         bottom: 30,
         left: 0
      },
      axisX: {
         showGrid: true,
         showLabel: true
      },
      axisY: {
         showGrid: true,
         showLabel: true,
         onlyInteger: true
      },
      plugins: [
         Chartist.plugins.ctAxisTitle({
            axisX: {
               axisTitle: 'Timestamp',
               axisClass: 'ct-axis-title',
               offset: {
                  x: 0,
                  y: 50
               },
               textAnchor: 'middle'
            },
            axisY: {
               axisTitle: 'Response Code',
               axisClass: 'ct-axis-title',
               offset: {
                  x: 0,
                  y: 0
               },
               flipTitle: false
            }
         })
      ]
   };

   /*fakeResDataY.forEach(function(t,v){
   var point = new Point()
})*/

new Chartist.Line('#accel_x_chart', data, options);

}
