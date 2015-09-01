var dashize = function (word) {
  return word.replace(/\s+/g, '-').toLowerCase(); 
}
var createVerticalTable = function (model) {
 var concat = function (x, xs) { return x + xs };
 return "<div style='float: left; padding: 10px'>" + 
    "<div style='text-align: center'>" + model.name + "</div>" +
      "<table border='1' class='" + dashize(model.name) + "'>" +
         "<thead>" +
         "<tr>" +
           _.reduce(_.mapObject(model.data[0], function (value, key) {
             return "<th class='" + key + "-label'>" + key + "</th>";
           }), concat, "") +
         "</tr>" +
         "</thead>" +
         "<tbody>" +
      _.reduce(_.map(model.data, function (each, idx) { 
         return "<tr class='" + idx + "'>" +
             _.reduce(_.mapObject(each, function (value, key) {
               return "<td class='" + key + "'>" + value + "</td>"
             }), concat, "") +
          "</tr>";
         }), concat, "") +
         "</tbody>" +
       "</table>" +
  "</div>";
}
var createHorizontalTable = function (model) {
 var concat = function (x, xs) { return x + xs };
 return "<div style='float: left; padding: 10px'>" + 
    "<div style='text-align: center'>" + model.name + "</div>" +
      "<table border='1' class='" + dashize(model.name) + "'>" +
         _.reduce(_.mapObject(model.data[0], function (value, key) {
           return "<tr>" +
             "<th class='" + key + "-label'>" + key + "</th>" +
            _.reduce(_.map(model.data, function (each, idx) { 
              return "<td class='" + idx + " " + key + "'>" + each[key] + "</td>";
             }), concat, "") +
          "</tr>";
         }), concat, "") +
       "</table>" +
  "</div>"
}

