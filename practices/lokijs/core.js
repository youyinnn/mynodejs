const loki = require('lokijs');

var db = new loki("quickstart-core.db", {
    autoload: true,
    autoloadCallback: databaseInitialize,
    autosave: true,
    autosaveInterval: 4000
})

// implement the autoloadback referenced in loki constructor
function databaseInitialize() {
    let users = db.getCollection("users");
    if (users === null) {
        users = db.addCollection("users");
    }

    // kick off any program logic or start listening to external events
    runProgramLogic();
}

// example method with any bootstrap logic to run after database initialized
function runProgramLogic() {
    var userCount = db.getCollection("users").count();
    console.log("number of users in database : " + userCount);
    var users = db.getCollection("users");
    
    // seed data
    // users.insert({
    //     name: "odin",
    //     gender: "m",
    //     age: 1000,
    //     tags: ["woden", "knowlege", "sorcery", "frenzy", "runes"],
    //     items: ["gungnir"],
    //     attributes: {
    //         eyes: 1
    //     }
    // })
    
    
    var result;
    
    result = users.find({
        age: 1000
    });
    console.log("result 1 : ");
    console.log(result);
}
