var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var async = require('async');
var req = require('request');
var schedule = require('node-schedule');
var http = require('http');

var outcome="" ;
var connection;

var config =
{
    userName: 'YYYY', // update me
    password: 'XXX', // update me
    server: 'kevinlai.database.windows.net', // update me
    options:
    {
        database: 'kevindb', //update me
        encrypt: true
		
    }
}

config.options.rowCollectionOnRequestCompletion=true;





/*
var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(0, 6)];
//rule.hour = 6;
//rule.minute = 0;
rule.hour = 14;
rule.minute = 55;

var j = schedule.scheduleJob(rule, function(){
// Create connection to database
*/
outcome = "";
//connection = new Connection(config);
//--------
async.waterfall([
        marksix,
        marksix_1,
		    ewords,
        InsertXC
      
    ], Complete);



//--------------
// Attempt to connect and execute queries if connection goes through
/* connection.on('connect', function(err)
    {
        if (err)
        {
            console.log(err)
        }
        else
        {
		    async.waterfall([
        marksix,
        marksix_1,
		    ewords,
        InsertX
      
    ], Complete);
	
        }
    }
);
*/
//---});
//-----------------------------------
function InsertXC(updated_data,callback) {

connection = new Connection(config);
connection.on('connect', function(err)
    {
        if (err)
        {
            console.log(err)
        }
        else
        {
		
        InsertX(updated_data,callback);
      
   
        }
    }
);



}
//-------------------------------
function marksix(callback)
{
	var dat= new Date();
	var yr=dat.getFullYear();
	//var j= parseInt(yr);
	var j= parseInt(process.argv[2]);
	var mksix=[];
	var ayr=[];
	// while (j>1999)
	//	{
		
		ayr.push(j.toString());
		
		
	//	j--;
//	}
	
	
	callback(null,ayr,mksix);

}
//-------------------------------
function marksix_14(yr,mksix,callback){ 
     
     var url = "https://phantomjscloud.com/api/browser/v2/ak-qqh6m-5qdy2-cmmmm-fvcfj-65ew1/?request={url:%22https://bet.hkjc.com/marksix/getJSON.aspx?sd="+yr+"1001%26ed="+yr+"1231%26sb=0%22,renderType:%22plainText%22}" ;
    //   console.log(url);
 req(url, { json: true }, (err, response) => {
  if (err) {  console.log(err); }
 
    
  var i, j,len ;
  var t=response.body;
  try{
   var keys = Object.keys(t);
 
  for (i=0, len = keys.length;i<len && len>1; i++)
  {  
    
      
       var qid= t[keys[i]].id;
       var  qdate= (t[keys[i]].date).replace(/\//g,"-");
      var   qno= t[keys[i]].no;
		var  qsno= t[keys[i]].sno;
         var a=qdate.split("-");
		 var aqdate=a[2]+'-'+a[1]+'-'+a[0];
		 var aqno=qno.split("+");
             var divmodel = {
  "id": qid,
  "datme": aqdate,
    "no1":aqno[0],
	"no2":aqno[1],
	"no3":aqno[2],
	"no4":aqno[3],
	"no5":aqno[4],
	"no6":aqno[5],
	"sno":qsno
  
};
        mksix.push(divmodel);
       
     
     }
   }
catch(err)
  {
    console.log(err);
  }
 
  callback(null,yr,mksix);
});
   
}
//--------------------------
function marksix_13(yr,mksix,callback){ 
  
    var url = "https://phantomjscloud.com/api/browser/v2/ak-qqh6m-5qdy2-cmmmm-fvcfj-65ew1/?request={url:%22https://bet.hkjc.com/marksix/getJSON.aspx?sd="+yr+"0701%26ed="+yr+"0930%26sb=0%22,renderType:%22plainText%22}" ;
  //      console.log(url);
 req(url, { json: true }, (err, quotes) => {
  if (err) {  console.log(err); }
 
    
  var i, j,len ;
  var t=quotes.body;
   try{
   var keys = Object.keys(t);
 
 
           
  
  for (i=0, len = keys.length;i<len  && len>1; i++)
  {  
    
     
       var qid= t[keys[i]].id;
       var  qdate= t[keys[i]].date.replace(/\//g,"-");
      var   qno= t[keys[i]].no;
		var  qsno= t[keys[i]].sno;
         var a=qdate.split("-");
		 var aqdate=a[2]+'-'+a[1]+'-'+a[0];
		 var aqno=qno.split("+");
             var divmodel = {
  "id": qid,
  "datme": aqdate,
    "no1":aqno[0],
	"no2":aqno[1],
	"no3":aqno[2],
	"no4":aqno[3],
	"no5":aqno[4],
	"no6":aqno[5],
	"sno":qsno
  
};
        mksix.push(divmodel);
         
     
     }
   }
 catch(err)
  {
    console.log(err);
  }
      //
 
  callback(null,yr,mksix);
});
   
}
//------------------------------
function marksix_12(yr,mksix,callback){ 
  
     var url = "https://phantomjscloud.com/api/browser/v2/ak-qqh6m-5qdy2-cmmmm-fvcfj-65ew1/?request={url:%22https://bet.hkjc.com/marksix/getJSON.aspx?sd="+yr+"0401%26ed="+yr+"0630%26sb=0%22,renderType:%22plainText%22}" ;
  //      console.log(url);
 req(url, { json: true }, (err, quotes) => {
  if (err) {  console.log(err); }
 
 
  var i, j,len ;
  var t=quotes.body;
  try{
   var keys = Object.keys(t);
  
  
    
  
  for (i=0, len = keys.length;i<len  && len>1; i++)
  {  
    
      
       var qid= t[keys[i]].id;
       var  qdate= t[keys[i]].date.replace(/\//g,"-");
      var   qno= t[keys[i]].no;
		var  qsno= t[keys[i]].sno;
         var a=qdate.split("-");
		 var aqdate=a[2]+'-'+a[1]+'-'+a[0];
		 var aqno=qno.split("+");
             var divmodel = {
  "id": qid,
  "datme": aqdate,
    "no1":aqno[0],
	"no2":aqno[1],
	"no3":aqno[2],
	"no4":aqno[3],
	"no5":aqno[4],
	"no6":aqno[5],
	"sno":qsno
  
};
        mksix.push(divmodel);
         
     
     }
   }
catch(err)
  {
    console.log(err);
  }
      //
 
  callback(null,yr,mksix);
});
   
}
//---------------------------------------------
function marksix_11(yr,mksix,callback){ 
  
     var url ="https://phantomjscloud.com/api/browser/v2/ak-qqh6m-5qdy2-cmmmm-fvcfj-65ew1/?request={url:%22https://bet.hkjc.com/marksix/getJSON.aspx?sd="+yr+"0101%26ed="+yr+"0331%26sb=0%22,renderType:%22plainText%22}" ;
  //      console.log(url);
 req(url, { json: true }, (err, quotes) => {
  if (err) {  console.log(err); }
 
 
  var i, j,len ;
  var t=quotes.body;
  
  try{
   var keys = Object.keys(t);
 
   
        
    
  
  for (i=0, len = keys.length;i<len  && len>1 ; i++)
  {  
   
    
       
       var qid= t[keys[i]].id;
       var  qdate= t[keys[i]].date.replace(/\//g,"-");
      var   qno= t[keys[i]].no;
		var  qsno= t[keys[i]].sno;
         var a=qdate.split("-");
		 var aqdate=a[2]+'-'+a[1]+'-'+a[0];
		 var aqno=qno.split("+");
             var divmodel = {
  "id": qid,
  "datme": aqdate,
    "no1":aqno[0],
	"no2":aqno[1],
	"no3":aqno[2],
	"no4":aqno[3],
	"no5":aqno[4],
	"no6":aqno[5],
	"sno":qsno
  
};
        mksix.push(divmodel);
        
     
     }
   }
  catch(err)
  {
    console.log(err);
  }
      //
 console.log("End Processing Year "+yr.toString())
 
  callback(null,mksix);
});
   
}

//-----------------------------------------
function marksix_1(ayr, mksix,callback)
{
	var yr =ayr.shift();
  console.log('Entering MarkSix for year '+yr);
async.waterfall([
  function(cb)
{
  cb(null, yr,mksix);
},
//---------------------1st---
  marksix_14 ,

 //-----------------------------------------2nd 
 marksix_13,
// ------------------------ 3rd ---------
marksix_12,
//---------------------------------4th---
marksix_11

],
  function(err, data){
	   if (typeof ayr !== 'undefined' && ayr.length > 0)
      {   
	  marksix_1(ayr,data,callback);
	  }
	  else {
		 
  callback(null,data,[]);
	  }
  }
  );
        }
   
 

//------------------------------------------
function ewords(data,updated_data, callback)
{
	
 var dcopy=data.shift();
 var datme=dcopy.datme;
 
 var url = "https://phantomjscloud.com/api/browser/v2/ak-qqh6m-5qdy2-cmmmm-fvcfj-65ew1/?request={url:%22https://www.sojson.com/open/api/lunar/json.shtml?date="+datme+"%22,renderType:%22plainText%22}" ; 
 // console.log(url);
 req(url, { json: true }, (err, resp) => {
  if (err) {  console.log(err); }
  var t = resp.body;
  
 
try {
   var yr = (encodeURI(t.data.cyclicalYear));
	var mth= (encodeURI(t.data.cyclicalMonth)); 
	var day= (encodeURI(t.data.cyclicalDay));
	
 
var codeList = yr.split('%');
codeList = codeList.map(item => parseInt(item,16));
var codeList1 = codeList.slice(1,4);
var codeList2 = codeList.slice(4);
var code1 = codeList1.map(item => '%'+item.toString(16)).join('');
var code2 = codeList2.map(item => '%'+item.toString(16)).join('');
dcopy.y1=(decodeURI(code1));
dcopy.y2=(decodeURI(code2));

codeList = mth.split('%');
codeList = codeList.map(item => parseInt(item,16));
 var codeList1 = codeList.slice(1,4);
var codeList2 = codeList.slice(4);
 code1 = codeList1.map(item => '%'+item.toString(16)).join('');
code2 = codeList2.map(item => '%'+item.toString(16)).join('');
dcopy.m1=(decodeURI(code1));
dcopy.m2=(decodeURI(code2));

 codeList = day.split('%');
codeList = codeList.map(item => parseInt(item,16));
 var codeList1 = codeList.slice(1,4);
var codeList2 = codeList.slice(4);
 code1 = codeList1.map(item => '%'+item.toString(16)).join('');
code2 = codeList2.map(item => '%'+item.toString(16)).join('');
dcopy.d1=(decodeURI(code1));
dcopy.d2=(decodeURI(code2));
}
catch (err){

  console.log(err);
}

      updated_data.push(dcopy);

         
      
    
	
	 console.log(dcopy);
	 if (typeof data !== 'undefined' && data.length > 0)
      {   

        


	  setTimeout(function () {ewords(data,updated_data, callback);},3000);
	  }
	  else {
		  console.log(updated_data);
  	callback(null,updated_data);
	  }
	 
  
    });
 
 




}
//------------------------------------
function InsertX(updated_data,callback) {

var adata;
   adata=updated_data.shift();
   
   var id=adata.id;
   var datme = adata.datme;
   var no1 = adata.no1;
    var no2 = adata.no2;
	 var no3 = adata.no3;
	  var no4 = adata.no4;
	   var no5 = adata.no5;
	    var no6 = adata.no6;
		 var sno = adata.sno;
		 var y1 = adata.y1;
		 var y2 = adata.y2;
		  var m1 = adata.m1;
		 var m2 = adata.m2;
		  var d1 = adata.d1;
		 var d2 = adata.d2;
  
   console.log(id+' '+datme+' '+no1+' '+no2+' '+no3+' '+no4+' '+no5+' '+ no6+' '+ sno+' '+y1+' '+y2+' '+m1+' '+m2+' '+d1+' '+d2);
   
         
      var request = new Request('Insert_M6',
    function(err) {
      if (err) {
    
      console.log(err);
      }
      if (typeof updated_data !== 'undefined' && updated_data.length > 0)
      { 
      InsertX(updated_data,callback);
      
      
      }
    
     else
      {
     
        callback(null,"Complete Job ");
     }
    });



request.addParameter('id', TYPES.VarChar, id);
    
    request.addParameter('datetme', TYPES.VarChar, datme);
	request.addParameter('Y1', TYPES.NVarChar, y1);
	request.addParameter('Y2', TYPES.NVarChar, y2);
	request.addParameter('M1', TYPES.NVarChar, m1);
	request.addParameter('M2', TYPES.NVarChar, m2);
	request.addParameter('D1', TYPES.NVarChar, d1);
	request.addParameter('D2', TYPES.NVarChar, d2);
 request.addParameter('no1', TYPES.Int, no1);
 request.addParameter('no2', TYPES.Int, no2);
 request.addParameter('no3', TYPES.Int, no3);
 request.addParameter('no4', TYPES.Int, no4);
 request.addParameter('no5', TYPES.Int, no5);
 request.addParameter('no6', TYPES.Int, no6);
 request.addParameter('sno', TYPES.Int, sno);
 request.addParameter('rmk', TYPES.VarChar, '');


  connection.callProcedure(request);
  
   
}




//-------------------------------------------
function Complete(err, result) {
    if (err) {
		
       console.log(err);
    } 
	connection.close();
	 var adate = new Date();
   
    
   outcome = result +' '+ adate.toISOString() ; 
   
    console.log(outcome);
  
}