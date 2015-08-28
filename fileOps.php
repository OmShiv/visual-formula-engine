<?php

	/* 
	*	@author - Om Shankar
	*	@Client - gsK, NovoNordisk
	*	@file - sole php file for file operations
	*/

	error_reporting(E_ALL ^ E_NOTICE);

	$companyTag		= 'Santarus';
	$reportType		= ($_POST['reportType'] == 'Best Price') ? 'BP' : $_POST['reportType'];
	$fileExt		= '.json';
	$formulaPath	= 'files/Formula/';
	$formulaPathLt	= 'files/Names/';
	$componentPath	= 'files/Components/';

	if ($_POST['action']=='savingFormula'){
		$formulaID		= $_POST['formulaID'];
		$contentString	= $_POST['contentString'];
		$formulaName	= $_POST['formulaName'];
		$updating		= $_POST['updating'];
		$prevReportType	= $_POST['prevReportType'];

		if ($updating=='true'){
			if( is_file($formulaPath . $prevReportType.'/'. $formulaID . $fileExt) )
			unlink($formulaPath . $prevReportType . '/' . $formulaID . $fileExt);
		}

		if(!is_dir($formulaPath . $reportType.'/') )
			mkdir($formulaPath . $reportType, 0777, true);

		if( file_put_contents($formulaPath . $reportType .'/' . $formulaID . $fileExt, $contentString ) ){
			if($updating=='true')
				echo 'Formula - <b>'.$formulaName.' </b>'.' - Updated Successfully';
			else
				echo 'Formula - <b>'.$formulaName.' </b>'.' - Saved Successfully';
		} else
			print_r (error_get_last());

		/* Names */
		if(!is_dir( $formulaPathLt . $reportType. '/' ) )
			mkdir( $formulaPathLt . $reportType, 0777, true );

		$nameContent = '\'fid\' : \''. $formulaID . '\'';
		if( file_put_contents( $formulaPathLt . $reportType .'/' . $formulaName . '.txt', $nameContent ) ){

		} else
			print_r (error_get_last());
	}

	else if ($_POST['action']=='loadingList'){
		$listOfFiles_name	="";
		$listOfDirsName		= Array();

		if($reportType=='undefined'){
			if ($handle = opendir($formulaPath)) {
				while (false !== ($file = readdir($handle))) {
					if ($file != '' && $file != '.' && $file != '..')
					$listOfDirsName[] = $file;
				}
				closedir($handle);
			}
			$dirLength = count($listOfDirsName);
			for ($i=0; $i < $dirLength; $i++){
				if ($handle = opendir($formulaPath . $listOfDirsName[$i].'/')) {
					while (false !== ($file = readdir($handle))) {
						if ($file != '' && $file != '.' && $file != '..')
							$listOfFiles_name	.=$listOfDirsName[$i].'--'.$file.'~';
					}
					closedir($handle);
				}
			}
		} else if(is_dir($formulaPath . $reportType.'/')) {
			if ($newHandle =opendir($formulaPath . $reportType.'/')) {
				while (false !== ($file = readdir($newHandle))) {
					if ($file != '' && $file != '.' && $file != '..')
						$listOfFiles_name	.=$reportType.'--'.$file.'~';
				}
				closedir($newHandle);
			}
		} else {
			$listOfFiles_name='';
		}

		echo $listOfFiles_name;
	}

	else if ($_POST['action']=='loadingComponents'){
		$listOfFiles_name	= Array();

		if(is_dir($componentPath)) {
			if ( $newHandle = opendir($componentPath) ) {
				while (false !== ($file = readdir($newHandle))) {
					if ($file != '' && $file != '.' && $file != '..')
						$listOfFiles_name[] = $file;
				}
				closedir($newHandle);
			}
		}

		echo file_get_contents( $componentPath . $listOfFiles_name[0]);
	}

	else if ($_POST['action']=='loadingContents'){
		$conTents =	file_get_contents($formulaPath . $reportType . '/' . $_POST['fileName']);
		echo $conTents;
	}

	else if ($_POST['action']=='deletingFormula'){
		if (unlink($formulaPath . $reportType . '/' .  $_POST['fileName']))
		echo '<p>Formula - <b>'.$_POST['formulaName'].'</b> - Deleted Successfully</p>';
	}

?>
