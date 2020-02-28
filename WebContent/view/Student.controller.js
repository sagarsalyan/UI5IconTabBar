jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("com.peol.firstProject.util.Formatter");
sap.ui.controller("com.peol.firstProject.view.Student", {
	onInit : function() {
		// alert("onInit function called");
		// set explored app's demo model on this sample
		var oModel = new sap.ui.model.json.JSONModel("model/student.json");
		//oModel.loadData("model/student.json");
		this.getView().setModel(oModel);

//		// reuse table sample component
//		var oComp = sap.ui.getCore().createComponent({
//			name : 'sap.m.Table'
//		});
		
//		oComp.setModel(this.getView().getModel());
		
		this._oTable = this.getView().byId("idStudentTable").setModel(this.getView().getModel());
		this.byId("idIconTabBar").insertContent(this._oTable);

		// update table
//		this._oTable.setHeaderText(null);
//		this._oTable.setShowSeparators("Inner");
	},
	
	handleIconTabBarSelect: function (oEvent) {
		var oBinding = this._oTable.getBinding("items"),
			sKey = oEvent.getParameter("key"),
			aFilters = [],
			oFilterm;
		
		if (sKey == "distinction") {
			oFilterm = new sap.ui.model.Filter("mark","GT","70");
		}
		else if (sKey == "average") {
			oFilterm = new sap.ui.model.Filter("mark","BT","40","70");
		}
		else if (sKey == "poor") {
			oFilterm = new sap.ui.model.Filter("mark","LT","40");
		}
		//aFilters.push(oFilterm);
		oBinding.filter(oFilterm);
	},
	
	onBeforeRendering : function() {
		// alert("onBeforeRendering function called");
	},

	onAfterRendering : function() {
		// alert("onAfterRendering function called");
	},

	onExit : function() {
		// alert("onExit function called");
	},

	

});