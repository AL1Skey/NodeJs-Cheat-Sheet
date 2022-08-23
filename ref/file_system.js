const fs = require('fs');
const path = require('path');
// const readline = require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout
// });


// // Create folder(Syncronous)
// fs.mkdir(path.join(__dirname,"test"),{}, err=>{
//     if(err) {
//         console.log("Error:",err);
        
//         readline.question("\n Continue (yes)",opt=>{
//             if(opt=="no"||opt=="No"||opt=="NO"){
//                 throw err;
//             }
//             readline.close();
//         })

//     }
//     console.log("Folder created....");
// });



// // Create and Write the file
// fs.writeFile(path.join(__dirname,"test","HEXT.txt"),"HELLLO WOOORRLD", err=>{
//     if(err) throw err;
//     console.log("File created");

//     // Update the file
//     // Create and Write the file
//     fs.appendFile(path.join(__dirname,"test","HEXT.txt"),"HELLLO WOOORRLD", err=>{
//         if(err) throw err;
//         console.log("File updated");
//     })
// })


// // Update the file
// // Create and Write the file
// fs.appendFile(path.join(__dirname,"test","HEXT.txt")," HELLLO WOOORRLD", err=>{
//     if(err) throw err;
//     console.log("File updated");
// })

// // Read File
// fs.readFile(path.join(__dirname,"test","HEXT.txt"),'utf-8', (err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// Rename file

fs.rename(
    path.join(__dirname,"test","HExT.txt"),
    path.join(__dirname,"test","HET.txt"), 
    (err)=>{
    if(err) throw err;
    console.log("File renamed...");
})

