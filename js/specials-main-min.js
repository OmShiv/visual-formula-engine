	/* 
	*	@author - Om Shankar
	*	@Client - gsK, NovoNordisk
	*	@file - Special Components and main.js file
	*/
	$('.hasNum','#wBoard').live('dblclick',function(){var parenT=$(this),subDrag=$(this).find('.subDrag'),numBoxID=parenT.attr('id')+'_numBox';var initialVal=subDrag.attr('dataelem')?subDrag.attr('dataelem'):'',wac_initialVal=subDrag.attr('wac')?subDrag.attr('wac'):'';var popUpHTML=''+'<table>'+'<tr>'+'<td>Label</td>'+'<td>: <input type="text" id="wac_'+numBoxID+'" class="numBoxVal sixtyPix" value="'+wac_initialVal+'" /></td>'+'<td>Value</td>'+'<td>: <input type="text" id="'+numBoxID+'" class="numBoxVal sixtyPix" value="'+initialVal+'" /></td>'+'</tr>'+'<tr>'+'<td colspan="4" align="right" style="padding-top: 5px;">'+
FE.UI.inputLeftPad+'<input type="button" '+FE.UI.inputFieldAddon+' id="setNumVal" value="Set" />'+
FE.UI.inputRightPad+
FE.UI.inputLeftPad+'<input type="button" '+FE.UI.inputFieldAddon+' value="Cancel" onclick="TINY.box.hide();" style=""/>'+
FE.UI.inputRightPad+'</td>'+'</tr>'+'</table>';TINY.box.show(popUpHTML,0,0,0,0);$('#setNumVal').click(function(){var wacVal=$('#wac_'+numBoxID).val();var numVal=$('#'+numBoxID).val();var thisDiv=parenT.find('.subDrag');if(isNaN(numVal)||numVal==''){alert('Please enter a valid number');}else{subDrag.addClass('number').attr('dataelem',numVal)
if(wacVal!=''){subDrag.attr('wac',wacVal).html(wacVal+' = '+tRim(numVal));}else{subDrag.removeAttr('wac');subDrag.html(tRim(numVal));}
parenT.removeClass('errorBlock');generateLiveFormula();TINY.box.hide();}});});$('.cpiInd','#wBoard').live('dblclick',function(){var parenT=$(this),subDrag=$(this).find('.subDrag'),cpiYr=parenT.attr('id')+'_cpiYr',cpiMnth=parenT.attr('id')+'_cpiMnth',selectedYR=subDrag.attr('yearval'),selectedMN=subDrag.attr('monthval'),labelVal=subDrag.attr('label')?subDrag.attr('label'):'',yrOpts=['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010'],monthOpts=['01','02','03','04','05','06','07','08','09','10','11','12'],yrOptsHTML='<option value="0">- Select -</option>';for(var i=0;i<yrOpts.length;i++){var selected=(yrOpts[i]==selectedYR)?'selected="selected"':'';yrOptsHTML+='<option value="'+yrOpts[i]+'"'+selected+'>'+yrOpts[i]+'</option>'}
var mnthOptsHTML='<option value="0">- Select -</option>';for(var i=0;i<monthOpts.length;i++){var selected=(monthOpts[i]==selectedMN)?'selected="selected"':'';mnthOptsHTML+='<option value="'+monthOpts[i]+'" '+selected+'>'+monthOpts[i]+'</option>'}
var popUpHTML=''+'<table>'+'<tr>'+'<td>Label</td>'+'<td>: <input type="text" id="label_'+cpiYr+'" class="numBoxVal one40Pix" value="'+labelVal+'" /></td>'+'</tr>'+'<tr>'+'<td>Year </td>'+'<td>: '+'<select id="'+cpiYr+'" class="numBoxVal">'+
yrOptsHTML+'</select>'+'</td>'+'</tr>'+'<tr>'+'<td>Month </td>'+'<td>: '+'<select id="'+cpiMnth+'" class="numBoxVal">'+
mnthOptsHTML+'</select>'+'</td>'+'</tr>'+'<tr>'+'<td colspan="2" align="right" style="padding-top: 5px;">'+
FE.UI.inputLeftPad+'<input type="button" '+FE.UI.inputFieldAddon+' id="setCpi" value="Set"/>'+
FE.UI.inputRightPad+
FE.UI.inputLeftPad+'<input type="button" '+FE.UI.inputFieldAddon+' value="Cancel" onclick="TINY.box.hide();" style=""/>'+
FE.UI.inputRightPad+'</td>'+'</tr>'+'</table>';TINY.box.show(popUpHTML,0,0,0,0);$('#setCpi').click(function(){var label=$('#label_'+cpiYr).val(),yearVal=$('#'+cpiYr+' :selected').val(),monthVal=$('#'+cpiMnth+' :selected').val(),thisDiv=parenT.find('.subDrag');if(monthVal=='0'||yearVal=='0'){var alertMsg=(monthVal=='0')?'Please Select Month':'Please Select Year';alert(alertMsg);}else{subDrag.addClass('cpi').attr('yearval',yearVal).attr('monthval',monthVal).attr('dataelem','cpi')
if(label!=''){subDrag.attr('label',label).html(label);}else{subDrag.removeAttr('label').html('CPI');}
parenT.removeClass('errorBlock');generateLiveFormula();TINY.box.hide();}});});$('.pkgSize','#wBoard').live('dblclick',function(){var parenT=$(this),subDrag=$(this).find('.subDrag'),psBox=parenT.attr('id')+'_psBox',sourcE=parenT.attr('id')+'_sourcE';var selected=subDrag.attr('dataelem'),selectedim=subDrag.attr('source'),labelVal=subDrag.attr('label')?subDrag.attr('label'):'';var sourceArr=new Array();sourceArr[0]=(selectedim=='ITEM_MASTER')?'selected="selected"':'';sourceArr[1]=(selectedim=='GP_SALES_ORDER')?'selected="selected"':'';sourceArr[2]=(selectedim=='GP_CHARGEBACK_CLAIM_INFO')?'selected="selected"':'';var fieldArr=new Array();fieldArr[0]=(selected=='PACKAGE_SIZE')?'selected="selected"':'';fieldArr[1]=(selected=='BASELINE_AMP')?'selected="selected"':'';fieldArr[2]=(selected=='UOM')?'selected="selected"':'';fieldArr[3]=(selected=='WAC')?'selected="selected"':'';fieldArr[4]=(selected=='NET_SALES')?'selected="selected"':'';fieldArr[5]=(selected=='GROSS_SALES')?'selected="selected"':'';fieldArr[6]=(selected=='QTY')?'selected="selected"':'';fieldArr[7]=(selected=='CONTRACT_PRICE')?'selected="selected"':'';fieldArr[8]=(selected=='WAC_PRICE')?'selected="selected"':'';fieldArr[9]=(selected=='QUANTITY')?'selected="selected"':'';fieldArr[10]=(selected=='EXTENDED_CB_AMOUNT')?'selected="selected"':'';var dynHTML=new Array();dynHTML['ITEM_MASTER']=''+'<option value="0">- Select -</option>'+'<option value="PACKAGE_SIZE" '+fieldArr[0]+'>PACKAGE_SIZE</option>'+'<option value="BASELINE_AMP" '+fieldArr[1]+'>BASELINE_AMP</option>'+'<option value="UOM" '+fieldArr[2]+' >UOM</option>'+'<option value="WAC" '+fieldArr[3]+' >WAC</option>';dynHTML['GP_SALES_ORDER']=''+'<option value="0">- Select -</option>'+'<option value="NET_SALES" '+fieldArr[4]+' >NET_SALES</option>'+'<option value="GROSS_SALES" '+fieldArr[5]+' >GROSS_SALES</option>'+'<option value="QTY" '+fieldArr[6]+' >QTY</option>';dynHTML['GP_CHARGEBACK_CLAIM_INFO']=''+'<option value="0">- Select -</option>'+'<option value="CONTRACT_PRICE" '+fieldArr[7]+' >CONTRACT_PRICE</option>'+'<option value="WAC_PRICE" '+fieldArr[8]+' >WAC_PRICE</option>'+'<option value="QUANTITY" '+fieldArr[9]+' >QUANTITY</option>'+'<option value="EXTENDED_CB_AMOUNT" '+fieldArr[10]+' >EXTENDED_CB_AMOUNT</option>';var popUpHTML=''+'<table>'+'<tr>'+'<td>Label</td>'+'<td>: <input type="text" id="wac_'+psBox+'" class="numBoxVal one40Pix" value="'+labelVal+'" /></td>'+'</tr>'+'<tr>'+'<td>Source</td>'+'<td>: '+'<select id="'+sourcE+'" class="numBoxVal" onchange="changeUCOpts(\''+sourcE+'\', \''+psBox+'\');">'+'<option value="0">- Select -</option>'+'<option value="ITEM_MASTER" '+sourceArr[0]+'>ITEM_MASTER</option>'+'<option value="GP_SALES_ORDER" '+sourceArr[1]+'>GP_SALES_ORDER</option>'+'<option value="GP_CHARGEBACK_CLAIM_INFO" '+sourceArr[2]+'>GP_CHARGEBACK_CLAIM_INFO</option>'+'</select>'+'</td>'+'</tr>'+'<tr>'+'<td>Field Name</td>'+'<td>: '+'<select id="'+psBox+'" class="numBoxVal">'+
dynHTML[''+selectedim+'']+'</select>'+'</td>'+'</tr>'+'<tr>'+'<td colspan="2" align="right" style="padding-top: 5px;">'+
FE.UI.inputLeftPad+'<input type="button" '+FE.UI.inputFieldAddon+' id="setPkgSize" value="Set"/>'+
FE.UI.inputRightPad+
FE.UI.inputLeftPad+'<input type="button" '+FE.UI.inputFieldAddon+' value="Cancel" onclick="TINY.box.hide();" style=""/>'+
FE.UI.inputRightPad+'</td>'+'</tr>'+'</table>';TINY.box.show(popUpHTML,0,0,0,0);$('#'+sourcE+' option[value="'+selected+'"]').attr('selected','selected')
$('#setPkgSize').click(function(){var label=$('#wac_'+psBox).val(),fieldVal=$('#'+psBox+' :selected').val(),fieldValS=$('#'+sourcE+' :selected').val(),thisDiv=parenT.find('.subDrag');if(fieldValS=='0'||fieldVal=='0'){var alertMsg=(fieldValS=='0')?'Please Select Source':'Please Select Field Name';alert(alertMsg);}else{subDrag.addClass('package_size').attr('dataelem',fieldVal).attr('source',fieldValS)
if(label!=''){subDrag.attr('label',label).html(label);}else{subDrag.removeAttr('label').html('Source Element');}
parenT.removeClass('errorBlock');generateLiveFormula();TINY.box.hide();}});});$('.minMaxCmp','#wBoard').live('dblclick',function(){var parenT=$(this),subDrag=$(this).find('.subDrag'),formula_id=parenT.attr('id')+'_formulaVal',cmp_id=parenT.attr('id')+'_cmpVal';var selectedFM=subDrag.attr('formulaval'),selectedCM=subDrag.attr('compval'),labelVal=subDrag.attr('label')?subDrag.attr('label'):'',mxSelected=subDrag.attr('mmtype')=='max'?'selected="selected"':'',mnSelected=subDrag.attr('mmtype')=='min'?'selected="selected"':'';var popUpHTML=''+'<table>'+'<tr>'+'<td>Label</td>'+'<td>: <input type="text" id="label_'+formula_id+'" class="numBoxVal one40Pix" value="'+labelVal+'" /></td>'+'</tr>'+'<tr>'+'<td>Type</td>'+'<td>: '+'<select id="type_'+cmp_id+'">'+'<option value="0">- Select -</option>'+'<option value="MAX" '+mxSelected+'> MAX </option>'+'<option value="MIN" '+mnSelected+'> MIN </option>'+'</select>'+'</td>'+'</tr>'+'<tr>'+'<td>Formula</td>'+'<td>: '+'<select id="'+formula_id+'">'+'<option value="0">- Select -</option>'+'</select>'+'</td>'+'</tr>'+'<tr>'+'<td>Component</td>'+'<td>: '+'<select id="'+cmp_id+'">'+'<option value="0">- Select -</option>'+'</select>'+'</td>'+'</tr>'+'<tr>'+'<td colspan="2" align="right" style="padding-top: 5px;">'+
FE.UI.inputLeftPad+'<input type="button" '+FE.UI.inputFieldAddon+' id="setminMaxCmp" value="Set"/>'+
FE.UI.inputRightPad+
FE.UI.inputLeftPad+'<input type="button" '+FE.UI.inputFieldAddon+' value="Cancel" onclick="TINY.box.hide();" style=""/>'+
FE.UI.inputRightPad+'</td>'+'</tr>'+'</table>';poupulateMinMax(formula_id,cmp_id,selectedFM,selectedCM);TINY.box.show(popUpHTML,0,0,0,0);$('#setminMaxCmp').click(function(){var label=$('#label_'+formula_id).val(),formulaVal=$('#'+formula_id+' :selected').val(),compVal=$('#'+cmp_id+' :selected').val(),thisDiv=parenT.find('.subDrag');if(formulaVal=='0'||compVal=='0'){var alertMsg=(formulaVal=='0')?'Please Select Formula':'Please Select Component';alert(alertMsg);}else{subDrag.addClass('min_max').attr('formulaval',formulaVal).attr('compval',compVal).attr('dataelem','min_max')
if(label!=''){subDrag.attr('label',label).html(label);}else{}
parenT.removeClass('errorBlock');generateLiveFormula();TINY.box.hide();}});});
/* Main file*/
var workBoard=$('#wBoard'),playgRound=$('#parenT'),isWebkit=$.browser.webkit||$.browser.safari,isMozilla=$.browser.mozilla,isIE=$.browser.msie,fileExt='json',companyTag='Santarus';var browserVer=$.browser.version.substr(0,1);if(isIE){if(browserVer<8){var isIElessThan8=true;}
if(document.documentMode<8){var needExtraIEefforts=true;}}
function tRim(strinG){if(typeof(strinG)=='string'){return strinG.replace(/^\s\s*/,'').replace(/\s\s*$/,'');}
else{return false;}}
function setText(dataElem){var texT;if(dataElem=='plus'){texT='+';}
else if(dataElem=='minus'){texT='&#8211';}
else if(dataElem=='div'){texT='/';}
else if(dataElem=='lbkt'){texT='(';}
else if(dataElem=='rbkt'){texT=')';}
else if(dataElem=='mul'){texT='x';}
else{texT=false;}
return texT;}
function setJSONData(){var boxCount=0;$('div.hasNum','#wBoard').find('.subDrag').each(function(){if(!$(this).attr('dataelem')){boxCount++;$(this).parent().addClass('errorBlock');}});$('div.pkgSize','#wBoard').find('.subDrag').each(function(){if(!$(this).attr('dataelem')){boxCount++;$(this).parent().addClass('errorBlock');}});$('div.cpiInd','#wBoard').find('.subDrag').each(function(){if(!$(this).attr('dataelem')){boxCount++;$(this).parent().addClass('errorBlock');}});$('div.minMaxCmp','#wBoard').find('.subDrag').each(function(){if(!$(this).attr('dataelem')){boxCount++;$(this).parent().addClass('errorBlock');}});if(boxCount>0){var errorString=['Error Reading Components :-','\n','- ',boxCount,' Component',(boxCount>1)?'s are':' is',' not Set Properly','\n','- ','Outlined in Red'].join('');alert(errorString);return false;}else{var tempContString='';$('div.hasElem','#wBoard').find('.subDrag').each(function(i){var parenT=$(this).parent(),subDrag=$(this);var typE='',elemObj='{ "text": "'+tRim($(this).text());if(parenT.hasClass('expRession')){typE='expression';elemObj+='", "type": "'+typE;elemObj+='", "title": "'+parenT.attr('title');elemObj+='", "expData": '+subDrag.data('expData');elemObj+=' },';}else{var formID='',reportType='',cmpID='',dataelem='';if(parenT.hasClass('hasSubForm')){formID=subDrag.data('theData').fID;typE='formula';reportType=subDrag.data('theData').reportType;}else if(subDrag.attr('cmpid')){cmpID=subDrag.attr('cmpid');typE='component';}else if(parenT.hasClass('hasNum')){typE='number';if(subDrag.attr('dataelem')){dataelem=subDrag.attr('dataelem');}}else if(parenT.hasClass('pkgSize')){typE='package_size';if(subDrag.attr('dataelem')){dataelem=subDrag.attr('dataelem');}}else if(parenT.hasClass('cpiInd')){typE='cpi';if(subDrag.attr('dataelem')){dataelem=subDrag.attr('dataelem');}}else if(parenT.hasClass('minMaxCmp')){typE='min_max';if(subDrag.attr('dataelem')){dataelem=subDrag.attr('dataelem');}}else{dataelem=subDrag.attr('dataelem');typE='operator';}
elemObj+='", "type": "'+typE;if(formID!==''){elemObj+='", "formID": "'+formID;}
if(reportType!==''){elemObj+='", "reportType": "'+reportType;}
if(cmpID!==''){elemObj+='", "cmpid": "'+cmpID;}
if(dataelem!==''){elemObj+='", "dataelem": "'+dataelem;}
if($(this).attr('wac')){if(tRim($(this).attr('wac'))){elemObj+='", "wac": "'+tRim($(this).attr('wac'));}}
if($(this).attr('label')){if(tRim($(this).attr('label'))){elemObj+='", "label": "'+tRim($(this).attr('label'));}}
if($(this).attr('source')){if(tRim($(this).attr('source'))){elemObj+='", "source": "'+tRim($(this).attr('source'));}}
if($(this).attr('formulaval')&&$(this).attr('compval')){if(tRim($(this).attr('formulaval'))&&tRim($(this).attr('compval'))){elemObj+='", "formulaval": "'+tRim($(this).attr('formulaval'))+'", "compval": "'+tRim($(this).attr('compval'));}}
if($(this).attr('yearval')&&$(this).attr('monthval')){if(tRim($(this).attr('yearval'))&&tRim($(this).attr('monthval'))){elemObj+='", "yearval": "'+tRim($(this).attr('yearval'))+'", "monthval": "'+tRim($(this).attr('monthval'));}}
if($(this).attr('mmtype')){if(tRim($(this).attr('mmtype'))){elemObj+='", "mmtype": "'+tRim($(this).attr('mmtype'));}}
elemObj+='" },';}
tempContString+=elemObj;});tempContString+=' "'+$('div.hasElem','#wBoard').find('.subDrag').length+'"]}';return tempContString;}}
function expSetFormula(index,texT){if($('#expReportVer'+index+' :selected','#tinycontent').val()!=='- Select -'){texT=tRim(texT);var optionElem=$('#expFormDiv'+index,'#tinycontent'),resultElem=$('#expResDiv'+index,'#tinycontent');optionElem.val(texT).effect('highlight',{color:'#7c4127'},200);resultElem.val(texT).effect('highlight',{color:'#7c4127'},200);$('#expFormulaAuto'+index,'#tinycontent').val(companyTag+' '+texT+' Formula');$('#expformulaVer'+index,'#tinycontent').val('v001');}}
function expOperatorToggle(operatorElem){var opVal=tRim(operatorElem.text())=='>'?' < ':' > ';operatorElem.text(opVal).effect('highlight',{color:'#7c4127'},200);}
function resultToggle(firstOpt,secondOptId){var secondOpt=$('#'+secondOptId,'#tinycontent'),firstOpt_text=tRim(firstOpt.val()),secondOpt_text=tRim(secondOpt.val());firstOpt.val(secondOpt_text);secondOpt.val(firstOpt_text);secondOpt.effect('highlight',{color:'#7c4127'},200);}
function setExpressionSuccess(formName){var nameArray=[];nameArray['reportComparison']='Report Comparison Expression';nameArray['formulaComparison']='Formula Comparison Expression';nameArray['reportValue']='Report Value';nameArray['rebateProgramVal']='Rebate Program Value';var insideHTML='';$('#expGenfunc','#tinycontent').find('input, div, b').each(function(){insideHTML+=($(this).attr('type')=='text')?tRim($(this).val())+' ':tRim($(this).text())+' ';});var unitDivID=$('#expDivID').val();var displayText=$('#expLabel','#tinycontent').val()===''?nameArray[formName]:$('#expLabel','#tinycontent').val();var subDrag=$('<div id="_'+unitDivID+'" class="subDrag" > '+displayText+' </div>');var expData='[{ "expType": "'+formName+'"';$('#tinycontent').find(':input').each(function(i){if($(this).val()!==null&&$(this).val()!=='- Select -'){expData+=', "'+$(this).attr('id')+'": "'+$(this).val()+'"';}});expData+='}]';subDrag.data('expData',expData);$('#'+unitDivID,'#playGroundTable').empty().append(subDrag).addClass('hasElem expRession');if(tRim(insideHTML)!=='>  ?  :'){$('#'+unitDivID,'#playGroundTable').attr('title',insideHTML);}
generateLiveFormula();TINY.box.hide();}
function afterRepCompDrop(divId){TINY.box.show('ajax/reportComparison.html',1,0,0,1);$('#expDivID').val(divId);}
function afterFMDrop(divId){TINY.box.show('ajax/formulaComparison.html',1,0,0,1);$('#expDivID').val(divId);}
function afterRepValDrop(divId){TINY.box.show('ajax/reportValue.html',1,0,0,1);$('#expDivID').val(divId);}
function afterRebateProgDrop(divId){TINY.box.show('ajax/rebateProgramVal.html',1,0,0,1);$('#expDivID').val(divId);}
function changeUCOpts(mainSelID,toChangeSelID){var dynHTML=[],indeX=$('#'+mainSelID+' :selected').val();dynHTML['ITEM_MASTER']=''+'<option value="0">- Select -</option>'+'<option value="PACKAGE_SIZE" >PACKAGE_SIZE</option>'+'<option value="BASELINE_AMP" >BASELINE_AMP</option>'+'<option value="UOM" >UOM</option>'+'<option value="WAC" >WAC</option>';dynHTML['GP_SALES_ORDER']=''+'<option value="0">- Select -</option>'+'<option value="NET_SALES" >NET_SALES</option>'+'<option value="GROSS_SALES" >GROSS_SALES</option>'+'<option value="QTY" >QTY</option>';dynHTML['GP_CHARGEBACK_CLAIM_INFO']=''+'<option value="0">- Select -</option>'+'<option value="CONTRACT_PRICE" >CONTRACT_PRICE</option>'+'<option value="WAC_PRICE" >WAC_PRICE</option>'+'<option value="QUANTITY" >QUANTITY</option>'+'<option value="EXTENDED_CB_AMOUNT" >EXTENDED_CB_AMOUNT</option>';$('#'+toChangeSelID).html(dynHTML[indeX]);}
$(function(){$('#formTable').find('#companyName').append('<option value="'+companyTag+'" > '+companyTag+'</option>');loadComps();var theInitialHtml="";for(var b=1;b<=15;b++){theInitialHtml+='<tr class="eqtnRow _'+b+'">';for(var c=1;c<=6;c++){theInitialHtml+='<td class="eqtnCol _'+c+'">'+'<div id="'+b+'_'+c+'" class="unitDiv"></div>'+'</td>';}
theInitialHtml+='</tr>';}
workBoard.find('#playGroundTable').append(theInitialHtml);workBoard.find('#playGroundTable').find('td._1, td._2').find('.unitDiv').removeClass('unitDiv').addClass('unitDiv2');$('div.draG').draggable({revert:true,helper:'clone',cursor:'move',scope:'draG'});$('.widgeT').draggable({opacity:'0.5',cursor:'move',handle:'.legend'});$('.widgeT').click(function(){$(this).css('z-index','2').siblings().css('z-index','0');});$('.widgeT').find('.legend').click(function(){$(this).closest('.widgeT').css('z-index','2').siblings().css('z-index','0');});workBoard.find('div.unitDiv').droppable({scope:'draG',hoverClass:'hoveredDiv',drop:function(event,ui){if(ui.draggable.attr('id')=='repComp'){afterRepCompDrop($(this).attr('id'));return false;}
if(ui.draggable.attr('id')=='fComp'){afterFMDrop($(this).attr('id'));return false;}
if(ui.draggable.attr('id')=='repVal'){afterRepValDrop($(this).attr('id'));return false;}
if(ui.draggable.attr('id')=='rebProg'){afterRebateProgDrop($(this).attr('id'));return false;}
ui.draggable.removeClass('isSelected');var dropDiv=$(this),subDrag=$(this).find('.subDrag');if(subDrag.length>0){return false;}
var isOriginal=!(ui.draggable.hasClass('subDrag'));var isOperator=(ui.draggable.hasClass('operator'));var isFormula=(ui.draggable.hasClass('formulaElem'));var isNumBox=(ui.draggable.attr('id')=='numBox'||ui.draggable.parent().hasClass('hasNum'));var isPkgSize=(ui.draggable.attr('id')=='pkgSize'||ui.draggable.parent().hasClass('pkgSize'));var isCpi=(ui.draggable.attr('id')=='cpiInd'||ui.draggable.parent().hasClass('cpiInd'));var isMinMax=(ui.draggable.attr('id')=='minCmp'||ui.draggable.attr('id')=='maxCmp'||ui.draggable.parent().hasClass('minMaxCmp'));var isexpRession=(ui.draggable.parent().hasClass('expRession'));var realParent=ui.draggable.parent('div');if(!isOriginal){realParent.removeClass('hasElem hasSubForm hasNum pkgSize cpiInd minMaxCmp expRession').removeAttr('title');}
var newId='_'+dropDiv.attr('id');if(isOriginal){var newDiv=ui.draggable.clone();newDiv.data('theData',ui.draggable.data('theData'));dropDiv.append(newDiv);newDiv.removeClass("ui-draggable draG OriginalSF").addClass("subDrag").attr('id',newId).draggable({scope:'draG',helper:'clone',revert:'invalid'});}else{ui.draggable.attr('id',newId);dropDiv.append(ui.draggable);}
$('div.unitDiv','#playGroundTable').removeClass('isSelected');$('div.formulaElem','table.theFormulae').removeClass('isSelected');dropDiv.addClass('hasElem isSelected');if(ui.draggable.data('theData')){dropDiv.addClass('hasSubForm').attr('title','Double Click to see Subformula');}
if(isNumBox){dropDiv.addClass('hasNum');}
if(isPkgSize){dropDiv.addClass('pkgSize');}
if(isCpi){dropDiv.addClass('cpiInd');}
if(isMinMax){dropDiv.addClass('minMaxCmp');}
if(isexpRession){dropDiv.addClass('expRession');}
if(isFormula){dropDiv.find('.subDrag').removeClass('formulaElem');}
if(workBoard.find('div.hasElem','#wBoard').length>0){generateLiveFormula();}
return true;}});$(document).keydown(function(event){var isTinyOn=($('#tinymask').css('display')=='block')?true:false;if(event.keyCode==46){if(isTinyOn){return;}
if($('div.isSelected').length>0){var selectedDiv=$('div.isSelected');if(selectedDiv.hasClass('formulaElem')){if(confirm('- This will delete the Formula and Related files. Continue? -')){var reportType=selectedDiv.data('theData').reportType,formulaName=selectedDiv.data('theData').formulaName,fileName=selectedDiv.data('theData').fID+'.'+fileExt;deleteFormula(fileName,reportType,formulaName);}
return;}
if(confirm('Are you sure you want to Delete this Element?')){var removeClass=$('div.isSelected')[0].className.split('unitDiv ui-droppable')[1];$('div.isSelected').html('').removeClass(removeClass).effect('highlight',{color:'#6d3c36'},200);generateLiveFormula();}}}
if(event.keyCode==13){if(isTinyOn){$('#tinycontent').find('input[type="button"][value="Set"]').trigger('click');}}});$('div.expRession','#wBoard').live('dblclick',function(event){$('#straightLineDiv','#formulaDiv').html('<b>Expression Value: &nbsp;&nbsp;</b><span id="straightLine">'+$(this).attr('title')+'</span>').effect('highlight',{color:'#c0b1a5'},500);});$('#savePop','#btnsTable').click(function(){if($('div.hasElem','#wBoard').length===0){highLightPG(alert('- No Components Found to Save Formula -'));return false;}
var formulaName='';var companyName=($('#companyName :selected').val()=='0')?'undefined':tRim($('#companyName :selected').text());var reportType=($('#reportType :selected').val()=='0')?'undefined':tRim($('#reportType :selected').text());var businessVer=($('#businessVer :selected').val()=='0')?'undefined':tRim($('#businessVer :selected').text());var modeOptsSelected=false;if(companyName=='undefined'){alert('- Please Select Company Name -');return false;}else if(reportType=='undefined'){alert('- PLease Select Report Type -');return false;}else if(businessVer=='undefined'){alert('- PLease Select Version -');return false;}else{modeOptsSelected=true;}
var takeFormulaName=''+'<table>'+'<tr>'+'<td>Company Name</td>'+'<td>: <input type="text" id="companyNameInpt" value="'+companyName+'"/></td>'+'</tr>'+'<tr>'+'<td>Report Type</td>'+'<td>: <input type="text" id="reportTypeInpt" value="'+reportType+'" /></td>'+'</tr>'+'<tr>'+'<td>Formula Name</td>'+'<td>: <input type="text" id="formulaNameInpt" value="'+formulaName+'"/></td>'+'</tr>'+'<tr>'+'<td>Version</td>'+'<td>: <input type="text" id="businessVerInpt" value="'+businessVer+'"/></td>'+'</tr>'+'<tr>'+'<td colspan="2" align="right" style="padding-top: 5px;">'+'<div class="button_container_" style="float: right;"><span class="button"><span>'+'<input type="button" id="saveFormula" value="Save" onClick=""/>'+'</span></span></div>'+'<div class="button_container_" style="float: right; margin-right: 5px;"><span class="button"><span>'+'<input type="button" value="Cancel" onclick="TINY.box.hide();" style=""/>'+'</span></span></div>'+'</td>'+'</tr>'+'</table>';TINY.box.show(takeFormulaName,0,0,0,0);$('div.hasElem','#wBoard').removeClass('isSelected');return true;});$('#saveFormula').live('click',function(){var formulaName=tRim($('#formulaNameInpt').val()),companyName=tRim($('#companyNameInpt').val()),reportType=tRim($('#reportTypeInpt').val()),businessVer=tRim($('#businessVerInpt').val());if(formulaName===''){highLightPG(alert('- Please Enter Formula Name -'));return false;}
var tempContString=setJSONData();if(!tempContString){alert('- There was an Error in Saving Formula -');return false;}
var formulaID=new Date().getTime().toString();var contentString=''+'{ "formulaName": "'+formulaName+'", "companyName": "'+companyName+'", "reportType": "'+reportType+'", "businessVer": "'+businessVer+'", "fID": "'+formulaID+'", "formulaData": ['+tempContString;saveFormula(formulaID,formulaName,contentString,false,reportType);return true;});$('#updateFormula').click(function(){if(!$('#modeTable').find('#editMod').is(':checked')){return false;}
var theData=$('#formulaBeingEdited').data('theData');if(!theData){TINY.box.show('Please <b>Load</b> a Formula</b> to Update...',0,0,0,0,2);return false;}
if($("#reportType :selected").val()==='0'){alert('Please Select a Report Type for this formula.');return false;}
var descTable=$('#descTable');var cName=tRim(descTable.find('td.cName').text()),rType=tRim(descTable.find('td.rType').text()),prevReportType=$('#prevReportType').attr('val');var formulaID=theData.fID,formulaName=theData.formulaName,companyName=(cName=='..')?companyTag:cName,reportType=(rType=='..')?theData.reportType:rType,businessVer=theData.businessVer;var tempContString=setJSONData();if(!tempContString){alert('- There was an Error in Saving Formula -');return false;}
var contentString=''+'{ "formulaName": "'+formulaName+'", "companyName": "'+companyName+'", "reportType": "'+reportType+'", "businessVer": "'+businessVer+'", "fID": "'+formulaID+'", "formulaData": ['+tempContString;var fileName=formulaID+'.'+fileExt;updateFormula(formulaID,formulaName,contentString,true,reportType,prevReportType);return true;});$('.formulaElem','#theFormulae').live('dblclick',function(){if(!$('#modeTable').find('#editMod').is(':checked')){TINY.box.show('Change to <b>Edit Mode</b> to Load Formula...',0,0,0,0,2);return false;}
var fileName=$(this).data('theData').fID+'.'+fileExt,formulaName=$(this).data('theData').formulaName,reportType=$(this).data('theData').reportType;$('#prevReportType').attr('val',reportType);loadFormula(fileName,formulaName,reportType);$('#formulaBeingEdited').data('theData',$(this).data('theData'));return true;});$('#reportType','#formTable').change(function(){var indeX=$("#reportType :selected").val(),rType=tRim($("#reportType :selected").text());setFormulaDD=''+'<option value="0">- Select One -</option>'+'<option value="'+indeX+'"> '+companyTag+' '+rType+' Formula </option>';var reportType=(indeX=='0')?'undefined':rType;rType=(indeX=='0')?'..':rType;$('#descTable').find('td.rType').html('<b>'+rType+'</b>');$('#formulaNameSel').html(setFormulaDD);if($('#loadSelClick').is(':checked')){$(this).attr('disabled',true);loadList(true,reportType);$(this).attr('disabled',false);}});});

/* Main file end */