console.log("server will run here");
console.log(new Date());
console.log("added line 3");
const app = require('express')();

app.get("/", (req,res) => {
    res.json({ message : "server on aws running"})
})

app.listen(7000, () => { 
    console.log("server on post 7000");
})

// create a git repo
// add .readme .gitignore FileSystem
// copy the URL
// create a new folder on your machine
// git clone "url"
// open project in vscode
// npm init -y
// add new file AudioParamMap.js with some console statements
// npm i 
// git add . 
// git commit -m "message to add file"
// git push
