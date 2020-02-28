jQuery.sap.require("sap.ca.ui.model.format.DateFormat");
jQuery.sap.require("sap.ca.ui.model.format.NumberFormat");
jQuery.sap.declare("com.peol.firstProject.util.Formatter");

sap.ui.define(function() {
	"use strict";

	var Formatter = {
			//converting date 
			DateConversion:function(oDate)
			{
				if(oDate)
				{
					var oDateFormat=sap.ca.ui.model.format.DateFormat
					.getTimeInstance({
						pattern:"yyyy-MM-dd\'T\'HH:mm:ss"
					});
					return oDateFormat.format(oDate);
				}
				else
				{
					return "";
				}
			},

//			converting date to dd.mm.yy format
			DateToStringFormat:function(oDate)
			{
				if(oDate)
				{
					var oDateFormat=sap.ca.ui.model.format.DateFormat
					.getTimeInstance({
						pattern:"dd.MM.yyyy"
					});
					return oDateFormat.format(oDate);

				}
				else
				{
					return "";
				}
			},
			
			// addCommas on Amount field
			addCommas:function(sValue1, sValue2) {
				if(sValue1=="" || sValue1==undefined){
					return "";
				}else{
					var x=sValue1;
					x=x.toString();
					var afterPoint = '';
					if(x.indexOf('.') > 0)
						afterPoint = x.substring(x.indexOf('.'),x.length);
					x = Math.floor(x);
					x=x.toString();
					var lastThree = x.substring(x.length-3);
					var otherNumbers = x.substring(0,x.length-3);
					if(otherNumbers != '')
						lastThree = ',' + lastThree;
					var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
					if(sValue2!="")
					return   res + " ("+sValue2+")";
					else if(sValue2=="" || sValue2==undefined)
						return res;
				}
			},
			
			//converting date to Time
			DateToTimeFormat:function(oDate)
			{
				if(oDate)
				{
					var d=new Date(oDate);
					var hours="";
					var second="";
					var minut="";
					if(d.getUTCHours().toString().length!=2 && d.getUTCHours().toString().length<2)
						hours="0"+d.getUTCHours();
					else
						hours=d.getUTCHours();
					
					if(d.getUTCMinutes().toString().length!=2 && d.getUTCMinutes().toString().length<2)
						minut="0"+d.getUTCMinutes();
					else
						minut=d.getUTCMinutes();
					
					if(d.getUTCSeconds().toString().length!=2 && d.getUTCSeconds().toString().length<2)
						second="0"+d.getUTCSeconds();
					else
						second=d.getUTCSeconds();
					var CreatedAt=hours+":"+minut+":"+second;
					return CreatedAt;

				}
				else
				{
					return "";
				}
			},
	};
	return Formatter;
},true);