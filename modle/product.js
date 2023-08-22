const { writeFile, readFile } = require("fs");
const path = "./modle/product.json";


const product=(function(){

    var d;

    function read(){
        readFile(path, (error, data) => {
            if (error) {
                console.log(error);
                return;
            }
            console.log("Data called");
            d = JSON.parse(data);
           console.log(d);
           console.log("Data p");
        })
    }

    function  all (){
        read();
        console.log("all called");
        return d;
    }

     function add (data){
        d.push(data);
        writeFile(path, JSON.stringify(d, null, 2), (err) => {
        if (err) {
            console.log("Failed to write updated data to file");
            return;
        }
        console.log("Updated file successfully");
        read();
    });
}
    
read();

return {
    all,
    add
}

})()


module.exports=product;