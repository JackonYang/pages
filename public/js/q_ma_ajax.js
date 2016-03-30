function createXmlHttpRequestObject() 
{
   var xmlHttp;
   try
   {
     // try to create XMLHttpRequest object
     xmlHttp = new XMLHttpRequest();
   }
   catch(e)
   {
     // assume IE6 or older
     var XmlHttpVersions = new Array("MSXML2.XMLHTTP.6.0",
                                     "MSXML2.XMLHTTP.5.0",
                                     "MSXML2.XMLHTTP.4.0",
                                     "MSXML2.XMLHTTP.3.0",
                                     "MSXML2.XMLHTTP",
                                     "Microsoft.XMLHTTP");
     for (var i=0; i<XmlHttpVersions.length && !xmlHttp; i++) 
     {
       try 
       { 
            xmlHttp = new ActiveXObject(XmlHttpVersions[i]);
       } 
       catch (e) {}
     }
   }
   // return the created object or display an error message
   if (!xmlHttp)
     alert("Error creating the XMLHttpRequest object.");
   else 
     return xmlHttp;
}
function createXMLHttpRequest() 
{
    var xmlHttp;
    if (window.ActiveXObject) 
    {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest) 
    {
        xmlHttp = new XMLHttpRequest();
    }
    
    return xmlHttp;
}

var retVal;


/* 变量 */
var error="异步通信错误";
var defer="您的查询次数过多，请一分钟后再查询";

/* ajax engine */
function ajaxCheck(url,arg, callBack)
{
	var XHR; 
	var date=new Date();
	var parameter=arg+"&rd="+Math.random();
	try
	{
		try{
			XHR=new ActiveXObject("Microsoft.XMLHTTP");
		}catch(e){
				try{
					XHR=new XMLHttpRequest();
				} catch (e){ }
		}
        
		XHR.open("POST",url);
		XHR.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		XHR.onreadystatechange=function(){
			if(XHR.readyState==4)
			{
				if(XHR.status==200)
				{
					if(callBack) callBack(XHR.responseText);  
				}
			}
		}
		XHR.send(parameter);
		
	}
	catch (e)
	{
		alert(e.toString());
	}
	return retVal;
}