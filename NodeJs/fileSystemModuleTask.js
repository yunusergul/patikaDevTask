const argument = process.argv.slice(2)
const mlt = argument[0]
const fs = require('fs');

createFile = () => {
    fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
        if (err) console.log(err);
        else console.log("dosya başarılı bir şekilde oluşturuldu")
    })
}


readFile = () => {
    fs.readFile('employees.json', 'utf8', (err, data) => {
        if (err) console.log(err)
        console.log(data)
    })
}


updateFile = () => {
    let qrt = ''
    if (argument[argument.length - 1] === "-c") {

        fs.writeFile('employees.json', '', (err) => {
            if (err) console.log(err);
        });
    } else qrt = ","
    if (argument[1] !== '-c' && argument[2] !== '-c') {
        fs.appendFile('employees.json', `\n ${qrt}{"name": "${argument[1]}", "salary": ${argument[2]}}`, 'utf8', (err) => {
            if (err) console.log(err);
        });
    }
}

deleteFile = () => {
    fs.unlink('employees.json', (err, data) => {
        if (err) console.log(err)
        else console.log("dosya başarılı bir şekilde silindi")
    })
}




if (mlt === "create") createFile();
//node fileSystemModuleTask create      
if (mlt === "update") updateFile(); 
//node fileSystemModuleTask update yunus 200 --   node fileSystemModuleTask update yunus 200 -c
if (mlt === "read") readFile();
// node fileSystemModuleTask read
if (mlt === "delete") deleteFile();
// node fileSystemModuleTask delete