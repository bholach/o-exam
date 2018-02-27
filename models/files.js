const fs = require("fs");
const path = require('path');

function fileData(name, ext, cat,dlink,size,date) {
    this.name =name;
    this.size = size;
    this.ext = ext;
    this.cat = cat;
    //this.flink = flink;
    this.dlink = dlink;
    //this.slink = slink;
    this.date = date;
  }

module.exports.path = path.join(__dirname,"../public/uploads");
module.exports.getDrivepath= function(id, callback){
    return "./public/uploads"+id;
  }

  module.exports.getDrivelist = function(p, callback){
    var data = [];
    files = fs.readdirSync(p);
    files.forEach(function (file) {
        if (fs.statSync(path.join(p,file)).isDirectory()) {
            const stat = fs.statSync(path.join(p,file));
            let cat = "folder";
            let dlink = path.join('/public/uploads',file);
            data.push(new fileData(file,path.extname(file),cat,dlink,stat.size,stat.birthtime));
          } else
          {
            const stat = fs.statSync(path.join(p,file));
              let cat = getcategory(file);
              let dlink = path.join('/public/uploads',file);
              data.push(new fileData(file,path.extname(file),cat,dlink,stat.size,stat.birthtime));
          }
    });
    return data;
};

module.exports.getImagelist = function(p, callback){
    var data = [];
    files = fs.readdirSync(p);
    files.forEach(function (file) {
        var ext = path.extname(file) 
        if(ext == ".jpg" || ext == ".jpeg" || ext == ".png" || ext == ".gif"){
            const stat = fs.statSync(path.join(p,file));
              let cat = "image";
              let dlink = path.join(p,file);
              data.push(new fileData(file,path.extname(file),cat,dlink,stat.size,stat.birthtime));
        }
    });
    return data;
};
//method to get audio list
module.exports.getAudiolist = function(p, callback){
    var data = [];
    files = fs.readdirSync(p);
    files.forEach(function (file) {
        var ext = path.extname(file) 
        if(ext == ".mp3" || ext == ".acc" || ext == ".ac3" || ext == ".amr"){
            const stat = fs.statSync(path.join(p,file));
              let cat = "audio";
              let dlink = path.join(p,file);
              data.push(new fileData(file,path.extname(file),cat,dlink,stat.size,stat.birthtime));
        }
    });
    return data;
};
//method to get video list
module.exports.getVudiolist = function(p, callback){
    var data = [];
    files = fs.readdirSync(p);
    files.forEach(function (file) {
        var ext = path.extname(file) 
        if(ext == ".mp4" || ext == ".mpeg" || ext == ".mkv" || ext == ".flv"){
            const stat = fs.statSync(path.join(p,file));
              let cat = "audio";
              let dlink = path.join(p,file);
              data.push(new fileData(file,path.extname(file),cat,dlink,stat.size,stat.birthtime));
        }
    });
    return data;
};
getcategory = function(file){
    if(path.extname(file) === '.txt')
       return "file";
       else if (path.extname(file) === '.mp3') {
           return "music";
       }
       else if (path.extname(file) === '.mp4') {
        return "film";
    }
    else if (path.extname(file) === '.zip') {
        return "archive";
    }
    else if (path.extname(file) === '.doc') {
        return "folder";
    }
    else if (path.extname(file) === '.jpg') {
        return "image";
    }
}

module.exports.createDir = function(dirname,callback){
    var dir = path.join(__dirname,"../public/uploads/")+dirname;
     if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, 0744);
       return {"success":"false","msg":"Folder Created !"};
    }
    else{
       return {"success":"false","msg":"Folder Already Exists"};
    }
}
module.exports.listDir = function(dirname,callback){
    let p = path.join(__dirname,"../public/uploads/")+dirname
   let data = [];
    files = fs.readdirSync(p);
    files.forEach(function (file) {
        if (fs.statSync(path.join(p,file)).isDirectory()) {
            const stat = fs.statSync(path.join(p,file));
            let cat = "folder";
            let dlink = path.join('/public/uploads',file);
            data.push(new fileData(file,path.extname(file),cat,dlink,stat.size,stat.birthtime));
          } else
          {
            const stat = fs.statSync(path.join(p,file));
              let cat = getcategory(file);
              let dlink = path.join('/public/uploads',file);
              data.push(new fileData(file,path.extname(file),cat,dlink,stat.size,stat.birthtime));
          }
    });
    return data;
     
}