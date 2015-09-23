//var fakeResDataY = {400, 404, 200, 200, 200, 100, 500, 404, 400, 200};
//var fakeResDataX = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}; // change to timestamp

document.addEventListener('DOMContentLoaded',function(){
   drawResChart();
   drawDurChart();
});

function drawResChart() {
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

new Chartist.Line('#res_chart', data, options);

}

function drawDurChart() {
   var data = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      series: [[1, 2, 5, 7, 15]]
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
               axisTitle: 'Load Test ID',
               axisClass: 'ct-axis-title',
               offset: {
                  x: 0,
                  y: 50
               },
               textAnchor: 'middle'
            },
            axisY: {
               axisTitle: 'Duration (msec)',
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

new Chartist.Line('#dur_chart', data, options);

}

function Point(timestamp, value) {
   this.timestamp = timestamp;
   this.value = value;
}
