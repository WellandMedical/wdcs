<script type = "text/javascript" src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script language = "javascript">

{
	var departments = "#MSOZoneCell_WebPartWPQ2";

	var purchasing = "#MSOZoneCell_WebPartWPQ3";
	var development = "#MSOZoneCell_WebPartWPQ4";
	var facilitiesSecurity = "#MSOZoneCell_WebPartWPQ5";
	var operations = "#MSOZoneCell_WebPartWPQ6";
	var qara = "#MSOZoneCell_WebPartWPQ8";
	var finance = "#MSOZoneCell_WebPartWPQ9";
	var it = "#MSOZoneCell_WebPartWPQ14";
	var salesMarketing = "#MSOZoneCell_WebPartWPQ10";
	var engineering = "#MSOZoneCell_WebPartWPQ11";
	var hr = "#MSOZoneCell_WebPartWPQ12";
	var level2 = [purchasing, development, facilitiesSecurity, operations, qara, finance, it, salesMarketing, engineering, hr];

	var machines = "#MSOZoneCell_WebPartWPQ7";
	
	var pageViewer = "#MSOPageViewerWebPart_WebPartWPQ13";
}

function hideLevel(level)
{
	var speed = "slow";
	
	if (level <= 4)
	{
		$(pageViewer).fadeTo(speed, 0);
	}
	
	if (level <= 3)
	{
		$(machines).fadeOut(speed); 
	}
	
	if (level <= 2)
	{
		for (x = 0; x < level2.length; x++)
		{
			$(level2[x]).fadeOut(speed);
		}
	}
	
	if (level == 1)
	{
		$(departments).fadeOut(speed);
	}
}

$(document).ready(function()
{
	$(pageViewer).fadeTo(0, 0);
	$(machines).fadeOut(0);

	for (x = 0; x < level2.length; x++)
	{
		$(level2[x]).fadeOut(0);
	}
});

function changePage(newPage)
{
	$(pageViewer).attr("src", newPage);
	$(pageViewer).fadeTo(3000, 0);
	$(pageViewer).fadeTo(1000, 100);
}

function displayDocuments(policy)
{
	changePage(("/sites/Welland%20Medical/Welland%20Document%20Control%20System/SitePages/") + policy + ".aspx");
}

$(function()
{
	$("a[id^=Tile_WPQ").each(function()
	{
		$(this).click(function()
		{
			var linkTitle = $(this).find('li[title]').attr('id');
			var speed = "slow";
			
			if (linkTitle.indexOf("Tile_WPQ2_") != -1) // Departments
			{
				hideLevel(2);
				switch(linkTitle)
				{
					case "Tile_WPQ2_1_6": $(purchasing).delay(speed).fadeIn(speed);
						break;
					case "Tile_WPQ2_2_6": $(development).delay(speed).fadeIn(speed);
						break;
					case "Tile_WPQ2_3_6": $(facilitiesSecurity).delay(speed).fadeIn(speed);
						break;
					case "Tile_WPQ2_4_6": $(operations).delay(speed).fadeIn(speed);
						break;
					case "Tile_WPQ2_5_6": $(qara).delay(speed).fadeIn(speed);
						break;
					case "Tile_WPQ2_6_6": $(finance).delay(speed).fadeIn(speed);
						break;
					case "Tile_WPQ2_10_6": $(it).delay(speed).fadeIn(speed);
						break;
					case "Tile_WPQ2_7_6": $(salesMarketing).delay(speed).fadeIn(speed);
						break;
					case "Tile_WPQ2_8_6": $(engineering).delay(speed).fadeIn(speed);
						break;
					case "Tile_WPQ2_9_6": $(hr).delay(speed).fadeIn(speed);
						break;
				}
			}
			else if (linkTitle.indexOf("Tile_WPQ3_") != -1) // Purchasing
			{
				hideLevel(3);
				
				switch(linkTitle)
				{
					case "Tile_WPQ3_1_6": displayDocuments("GoodsIn-GoodsReceipt");
						break;
					case "Tile_WPQ3_2_6": displayDocuments("Dispatch");
						break;
					case "Tile_WPQ3_3_6": displayDocuments("Distribution");
						break;
					case "Tile_WPQ3_4_6": displayDocuments("ShelfLifeControl");
						break;
					case "Tile_WPQ3_5_6": displayDocuments("SupplierSetUp");
						break;
					case "Tile_WPQ3_6_6": displayDocuments("PurchasingControl");
						break;
					case "Tile_WPQ3_7_6": displayDocuments("Supplier-OngoingMonitoringAndEvaluation");
						break;
					case "Tile_WPQ3_8_6": displayDocuments("PurchasingAdmin");
						break;
				}
			}
			else if (linkTitle.indexOf("Tile_WPQ4_") != -1) // Development
			{
				hideLevel(3);
				
				switch(linkTitle)
				{
					case "Tile_WPQ4_10_6": displayDocuments("PIM");
						break;
					case "Tile_WPQ4_2_6": displayDocuments("RiskManagement");
						break;
					case "Tile_WPQ4_3_6": displayDocuments("ChangeControlManagement");
						break;
					case "Tile_WPQ4_4_6": displayDocuments("NPD");
						break;
					case "Tile_WPQ4_5_6": displayDocuments("DesignAndDevelopment");
						break;
					case "Tile_WPQ4_6_6": displayDocuments("ClinicalEvaluation");
						break;
					case "Tile_WPQ4_7_6": displayDocuments("WorkingInRnDWorkshop");
						break;
					case "Tile_WPQ4_8_6": displayDocuments("WorkingInRnDLaboratory");
						break;
					case "Tile_WPQ4_9_6": displayDocuments("ResearchAndDevelopmentAdmin");
						break;
				}
			}
			else if (linkTitle.indexOf("Tile_WPQ5_") != -1) // Facilities & Security
			{
				hideLevel(3);
				
				switch(linkTitle)
				{
					case "Tile_WPQ5_1_6": displayDocuments("HealthAndSafety");
						break;
					case "Tile_WPQ5_2_6": displayDocuments("SecurityMaintenance");
						break;
					case "Tile_WPQ5_3_6": displayDocuments("FacilitiesAndSecurityAdmin");
						break;
				}
			}
			else if (linkTitle.indexOf("Tile_WPQ6_") != -1) // Operations
			{
				hideLevel(3);
				
				switch(linkTitle)
				{
					case "Tile_WPQ6_1_6": displayDocuments("ProductionControl");
						break;
					case "Tile_WPQ6_2_6": displayDocuments("Manufacturing");
						$(machines).delay(speed).fadeIn(speed);
						break;
					case "Tile_WPQ6_3_6": displayDocuments("Facilities");
						break;
					case "Tile_WPQ6_4_6": displayDocuments("Resource");
						break;
					case "Tile_WPQ6_5_6": displayDocuments("OperationsAdmin");
						break;
				}
			}
			else if (linkTitle.indexOf("Tile_WPQ8_") != -1) // QARA
			{
				hideLevel(3);
				
				switch(linkTitle)
				{
					case "Tile_WPQ8_1_6": displayDocuments("ManagementReview");
						break;
					case "Tile_WPQ8_2_6": displayDocuments("Non-ConformanceControl");
						break;
					case "Tile_WPQ8_12_6": displayDocuments("VerificationAndValidation");
						break;
					case "Tile_WPQ8_3_6": displayDocuments("DocumentControl");
						break;
					case "Tile_WPQ8_4_6": displayDocuments("IncomingInspection");
						break;
					case "Tile_WPQ8_5_6": displayDocuments("InternalAudit");
						break;
					case "Tile_WPQ8_6_6": displayDocuments("NotifiedBodyAndSupplierAudits");
						break;
					case "Tile_WPQ8_7_6": displayDocuments("PMS");
						break;
					case "Tile_WPQ8_8_6": displayDocuments("Calibration");
						break;
					case "Tile_WPQ8_9_6": displayDocuments("TechnicalFiles-ProductRegistration");
						break;
					case "Tile_WPQ8_10_6": displayDocuments("QCProductionControls");
						break;
					case "Tile_WPQ8_13_6": displayDocuments("WorkingInQARALaboratory");
						break;
					case "Tile_WPQ8_11_6": displayDocuments("QARAAdmin");
						break;
				}
			}
			else if (linkTitle.indexOf("Tile_WPQ9_") != -1) // Finance
			{
				hideLevel(3);
				
				switch(linkTitle)
				{
					case "Tile_WPQ9_1_6": displayDocuments("SalesOrderProcessing");
						break;
					case "Tile_WPQ9_2_6": displayDocuments("AccountsPayable");
						break;
					case "Tile_WPQ9_3_6": displayDocuments("Cash");
						break;
					case "Tile_WPQ9_4_6": displayDocuments("ManagementAccounts");
						break;
					case "Tile_WPQ9_5_6": displayDocuments("Expenses");
						break;
					case "Tile_WPQ9_6_6": displayDocuments("StockTake");
						break;
					case "Tile_WPQ9_7_6": displayDocuments("Assets");
						break;
					case "Tile_WPQ9_8_6": displayDocuments("BusinessRiskManagement");
						break;
					case "Tile_WPQ9_9_6": displayDocuments("HMRC");
						break;
					case "Tile_WPQ9_10_6": displayDocuments("InternalReporting");
						break;
					case "Tile_WPQ9_11_6": displayDocuments("FinanceAdmin");
						break;
				}
			}
			else if (linkTitle.indexOf("Tile_WPQ14_") != -1) // IT
			{
				hideLevel(3);
				
				switch(linkTitle)
				{
					case "Tile_WPQ14_1_6": displayDocuments("Backup-Recovery");
						break;
					case "Tile_WPQ14_1_6": displayDocuments("ITSecurity");
						break;
					case "Tile_WPQ14_1_6": displayDocuments("SoftwareVerificationAndValidation");
						break;
				}
			}
			else if (linkTitle.indexOf("Tile_WPQ10_") != -1) // Sales & Marketing
			{
				hideLevel(3);
				
				switch(linkTitle)
				{
					case "Tile_WPQ10_1_6": displayDocuments("ProductEvaluations");
						break;
					case "Tile_WPQ10_2_6": displayDocuments("Pricing");
						break;
					case "Tile_WPQ10_3_6": displayDocuments("CopyApproval(PromotionalMaterial)");
						break;
					case "Tile_WPQ10_4_6": displayDocuments("TradeMarking");
						break;
					case "Tile_WPQ10_5_6": displayDocuments("Forecasting");
						break;
					case "Tile_WPQ10_6_6": displayDocuments("NewProductionLaunch-AdditionTo");
						break;
					case "Tile_WPQ10_7_6": displayDocuments("SalesAndMarketingAdmin");
						break;
				}
			}
			else if (linkTitle.indexOf("Tile_WPQ11_") != -1) // Engineering
			{
				hideLevel(3);
				
				switch(linkTitle)
				{
					case "Tile_WPQ11_1_6": displayDocuments("AssetCare");
						break;
					case "Tile_WPQ11_2_6": displayDocuments("EnviromentalControls");
						break;
					case "Tile_WPQ11_3_6": displayDocuments("WorkingOnAMachine");
						break;
					case "Tile_WPQ11_4_6": displayDocuments("Projects");
						break;
					case "Tile_WPQ11_5_6": displayDocuments("Tooling");
						break;
					case "Tile_WPQ11_6_6": displayDocuments("Spares");
						break;
					case "Tile_WPQ11_7_6": displayDocuments("ManagementOfSub-Contractors");
						break;
					case "Tile_WPQ11_8_6": displayDocuments("EngineeringWorkshop");
						break;
					case "Tile_WPQ11_9_6": displayDocuments("EngineeringAdmin");
						break;
				}
			}
			else if (linkTitle.indexOf("Tile_WPQ12_") != -1) // HR
			{
				hideLevel(3);
				
				switch(linkTitle)
				{
					case "Tile_WPQ12_1_6": displayDocuments("TrainingAndDevelopment");
						break;
					case "Tile_WPQ12_2_6": displayDocuments("PDR's");
						break;
					case "Tile_WPQ12_3_6": displayDocuments("Induction"); ////FLAG ? Recruitment?
						break;
					case "Tile_WPQ12_4_6": displayDocuments("GeneralHRAdmin");
						break;
					case "Tile_WPQ12_5_6": displayDocuments("'HaveYourSay'"); //FLAG ? Has Spaces?
						break;
					case "Tile_WPQ12_6_6": displayDocuments("HealthAndSafety(HR)");
						break;
					case "Tile_WPQ12_7_6": displayDocuments("Leave");
						break;
					case "Tile_WPQ12_8_6": displayDocuments("ManagerGuides");
						break;
					case "Tile_WPQ12_9_6": displayDocuments("Policies");
						break;
					case "Tile_WPQ12_10_6": displayDocuments("Recruitment");
						break;
					case "Tile_WPQ12_11_6": displayDocuments("StaffBenefits");
						break;
					case "Tile_WPQ12_12_6": displayDocuments("HRAdmin");
						break;
				}
			}
			else if (linkTitle.indexOf("Tile_WPQ7_") != -1) // Machines
			{
				hideLevel(4);
				
				switch(linkTitle)
				{
					case "Tile_WPQ7_1_6": displayDocuments("Auto1");
						break;
					case "Tile_WPQ7_2_6": displayDocuments("Auto2");
						break;
					case "Tile_WPQ7_3_6": displayDocuments("Auto3");
						break;
					case "Tile_WPQ7_4_6": displayDocuments("Auto4");
						break;
					case "Tile_WPQ7_5_6": displayDocuments("Auto5");
						break;
					case "Tile_WPQ7_6_6": displayDocuments("Auto6");
						break;
					case "Tile_WPQ7_7_6": displayDocuments("Auto7");
						break;
					case "Tile_WPQ7_8_6": displayDocuments("BeltLugCell"); //Auto 8?
						break;
					case "Tile_WPQ7_9_6": displayDocuments("BlisterSealer");
						break;
					case "Tile_WPQ7_10_6": displayDocuments("Deprag");
						break;
					case "Tile_WPQ7_11_6": displayDocuments("Edale");
						break;
					case "Tile_WPQ7_12_6": displayDocuments("HydrocolloidMixer");
						break;
					case "Tile_WPQ7_13_6": displayDocuments("Ident");
						break;
					case "Tile_WPQ7_14_6": displayDocuments("Lambert");
						break;
					case "Tile_WPQ7_15_6": displayDocuments("ManualAssembly");
						break;
					case "Tile_WPQ7_16_6": displayDocuments("Merkle");
						break;
					case "Tile_WPQ7_17_6": displayDocuments("NewExtruder");
						break;
					case "Tile_WPQ7_18_6": displayDocuments("OldExtruder");
						break;
					case "Tile_WPQ7_19_6": displayDocuments("OutlineNo.9");
						break;
					case "Tile_WPQ7_20_6": displayDocuments("Packing");
						break;
					case "Tile_WPQ7_21_6": displayDocuments("Printers");
						break;
					case "Tile_WPQ7_22_6": displayDocuments("SitDownWelder");
						break;
					case "Tile_WPQ7_23_6": displayDocuments("TapWelder");
						break;
					case "Tile_WPQ7_24_6": displayDocuments("TapeLoader");
						break;
					case "Tile_WPQ7_25_6": displayDocuments("TwinShuttlePress");
						break;
					case "Tile_WPQ7_26_6": displayDocuments("UltrasonicWelder");
						break;
				}
			}
		});
	});
});
</script>	