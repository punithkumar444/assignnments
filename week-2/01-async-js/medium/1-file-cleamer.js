const fs = require("fs");
fs.readFile("sample.txt","utf-8",function(err,data){
    if (err) {
        console.log("read file :: error :: ", err);
        return;
      }
     let filteredData= data.split(" ").filter(function (val){
        return val !== "";
     }).join(" ");
     fs.writeFile("sample.txt", filteredData, (err) => {
        if (err) {
          console.log("read file :: error :: ", err);
        }
      });
      console.log("read file :: data ", filteredData);
    });
