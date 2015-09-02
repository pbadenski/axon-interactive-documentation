var addRingBuffer = function (where) {
  var svg = d3.select(where)
     .append("svg")
       .style("float", "left")
       .attr("width", "400px")
       .attr("height", "400px")
  var radius = 200;
  var arc = d3.svg.arc()
      .outerRadius(radius - 10)
      .innerRadius(radius - 70);

  var pie = d3.layout.pie()
      .value(function(d) { return d; });

  var ringBuffer = svg.append("g")
    .attr("class", "ring-buffer")
    .attr("transform", "translate(" + 200 + "," + 200 + ")")

  var g = ringBuffer.selectAll(".arc")
        .data(pie([1, 1, 1, 1]))
        .enter().append("g")
        .attr("class", function (d, idx) { return idx; })
        .append("g")
        .attr("class", function (d, idx) { return "arc sequence contents"; });

    g.append("path")
        .attr("class", function (d, i) { return "sequence contents"; })
        .attr("d", arc)

    g.append("text")
        .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
        .attr("dy", ".35em")
        .style("text-anchor", "middle")
};
