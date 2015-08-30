var dashize = function (word) {
  return word.replace(/\s+/g, '-').toLowerCase(); 
}
var createVerticalTable = function (model) {
 var concat = function (x, xs) { return x + xs };
 return "<div style='float: left; padding: 10px'>" + 
    "<div style='text-align: center'>" + model.name + "</div>" +
      "<table border='1' class='" + dashize(model.name) + "'>" +
         "<tr>" +
           _.reduce(_.mapObject(model.data[0], function (value, key) {
             return "<td class='" + key + "-label'>" + key + "</td>";
           }), concat, "") +
         "</tr>" +
      _.reduce(_.map(model.data, function (each, idx) { 
         return "<tr class='" + idx + "'>" +
             _.reduce(_.mapObject(each, function (value, key) {
               return "<td class='" + key + "'>" + value + "</td>"
             }), concat, "") +
          "</tr>";
         }), concat, "") +
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
             "<td class='" + key + "-label'>" + key + "</td>" +
            _.reduce(_.map(model.data, function (each, idx) { 
              return "<td class='" + idx + " " + key + "'>" + each[key] + "</td>";
             }), concat, "") +
          "</tr>";
         }), concat, "") +
       "</table>" +
  "</div>"
}

