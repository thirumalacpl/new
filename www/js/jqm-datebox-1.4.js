/*
 * jQuery Mobile Framework : plugin to provide a date and time picker.
 * Copyright (c) JTSage
 * CC 3.0 Attribution.  May be relicensed without permission/notification.
 * https://github.com/jtsage/jquery-mobile-datebox
 * Generated: 2014-11-10T14:32:36-05:00 (from theme builder)
 */
 
/* 
 * Shared Styles 
 * 
 * These styles are used for the basic control,
 * and are not specific to any one mode.
 */

.ui-datebox-container { 
	width: 290px;
	-webkit-transform:translate3d(0,0,0);
}
.ui-popup-container .ui-datebox-gridrow { 
	display: table;
	margin-left: auto; 
	margin-right: auto;
}
.ui-datebox-collapse { 
	text-align: center;
}
.ui-datebox-collapse .ui-controlgroup-controls a { 
	max-width: 40%;
}

.ui-datebox-controls.ui-controlgroup-vertical {
	margin-bottom: 5px;
	margin-top: 5px;
}

div.ui-datebox-inline.ui-datebox-inline-has-input {
	float: none;
	clear: both;
	position: relative;
	top: 5px;
}
.ui-field-contain div.ui-datebox-container.ui-datebox-inline {
	margin-right: auto;
	margin-left: auto;
}
div.ui-datebox-container.ui-datebox-inline {
	width: 290px;

}
.ui-datebox-inline .ui-controlgroup-controls {
	float: none;
	margin-left: auto;
	margin-right: auto;
}

/* 
 * Calendar Mode Styles
 * 
 * These are specific to CalBox
 */

.ui-datebox-pickicon {
	display: inline-block; width: 216px;
}
.ui-datebox-gridheader { 
	text-align: center;
}
.ui-datebox-gridheader .ui-btn-inline { 
	margin-right: 0;
}
.ui-datebox-gridheader h4 { 
	text-align: center;
	display: inline-block;
	margin-top: 10px;
	margin-bottom: 10px;
	zoom: 1;
	*display: inline;
}
.ui-datebox-grid { 
	clear: both; 
	margin-bottom: 5px; 
}
.ui-datebox-inline .ui-datebox-gridrow .ui-controlgroup-controls {
	width: 100%;
	text-align: center;
}
.ui-datebox-inline .ui-datebox-gridrow .ui-controlgroup-controls .ui-btn {
	float: none;
	clear: both;
}
.ui-datebox-gridrow { 
	margin-left: auto; 
	margin-right: auto;
	display: table;
	margin-bottom: -7px;
}
.ui-datebox-gridrow-last {
	margin-bottom: 0;
}
.ui-datebox-inline .ui-controlgroup.ui-datebox-gridrow-last {
	margin-bottom: 5px;
}
.ui-datebox-griddate { 
	width: 36px;
	height: 30px;
	line-height: 30px;
	padding: 0;
	display: inline-block;
	vertical-align: middle;
	text-align: center;
	font-weight: bold;
	font-size: 12px;
	zoom: 1;
	*display: inline;
}
.ui-datebox-griddate-week { 
	width: 31px;
	height: 30px;
	line-height: 30px; 
	display: inline-block;
	vertical-align: middle;
	text-align: center;
	font-weight: bold;
	font-size: 12px;
	zoom: 1;
	*display: inline;
}
.ui-datebox-gridrow div.ui-datebox-griddate-empty { 
	border: 1px solid transparent;
	color: #888888;
}
.ui-datebox-griddate.ui-datebox-griddate-label {
	border: 1px solid transparent;
	height: 15px;
	line-height: 15px;
}
.ui-datebox-gridplus 		{ float: right; }
.ui-datebox-gridminus 		{ float: left; }
.ui-datebox-gridplus-rtl 	{ float: left; }
.ui-datebox-gridminus-rtl 	{ float: right; }

/* 
 * Android Mode Styles
 * 
 * These are specific to datebox, timebox, and durationbox
 */

.ui-datebox-dboxin div input {
	text-align: center;
}
.ui-datebox-dboxin div {
	margin: 0 inherit 0;
}
.ui-datebox-dboxlab div label {
	text-align: center;
}
div.ui-datebox-cbut.ui-btn.ui-corner-all.ui-icon-plus {
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0;
	-webkit-border-bottom-right-radius: 0;
	-webkit-border-bottom-left-radius: 0;
	height: 40px;
}
div.ui-datebox-cbut.ui-btn.ui-corner-all.ui-icon-minus {
	border-top-right-radius: 0;
	border-top-left-radius: 0;
	-webkit-border-top-right-radius: 0;
	-webkit-border-top-left-radius: 0;
	height: 40px;
}
.ui-datebox-header h4 {
	text-align: center;
}

/* 
 * Flip Mode Styles
 * 
 * These are specific to flipbox, timeflipbox, durationflipbox, and 
 * customflip
 */

.ui-datebox-fliplab {
	text-align: center;
}
.ui-datebox-flipcenter {
	width: 260px;
	height: 40px;
	border: 1px solid #EEEEEE;
	margin-right: auto;
	margin-left: auto;
	position: relative;
}
.ui-datebox-flipcontent {
	text-align: center;
	height: 125px;
	margin-bottom: -40px;
}
.ui-datebox-flipcontent div {
	margin-left: 3px;
	margin-right: 3px;
	width: 77px;
	height: 120px;
	display: inline-block;
	text-align: center;
	zoom: 1;
	*display: inline;
	overflow: hidden;
}
.ui-datebox-flipcontentd div {
	width: 60px;
}
.ui-datebox-flipcontent ul {
	list-style-type: none;
	display: inline;
	border:1px solid rgba(0,0,0,0);
}
.ui-datebox-flipcontent li {
	height: 30px;
}
.ui-datebox-flipcontent li span {
	margin-top: 7px;
	display: block;
}

/* 
 * Slide Mode Styles
 * 
 * Used solely for SlideBox.  Damn this is a lot of extra CSS.
 */

.ui-datebox-slide { 
	width: 290px;
	margin-left: auto;
	margin-right: auto;
}
.ui-datebox-sliderow-int {
	display: inline-block;
	white-space: nowrap;
}

.ui-datebox-sliderow {
	margin-bottom: 5px;
	text-align: center;
	overflow: hidden;
	width: 290px;
}
.ui-datebox-slide .ui-btn {
	margin: 0;
	padding: 0px 1em;
}

.ui-datebox-slidebox {
	text-align: center;
	display: inline-block;
	zoom:1;
	*display:inline;
	vertical-align: middle;
	font-weight: bold;
}
.ui-datebox-slideyear {
	width: 84px;
	line-height: 30px;
	height: 30px;
	font-size: 14px;
}
.ui-datebox-slidemonth {
	width: 51px;
	line-height: 30px;
	height: 30px;
	font-size: 12px;
}
.ui-datebox-slideday {
	width: 32px;
	line-height: 20px;
	height: 38px;
	font-size: 14px;
}
.ui-datebox-slidehour {
	width: 32px;
	line-height: 22px;
	height: 24px;
	font-size: 14px;
}
.ui-datebox-slidemins {
	width: 32px;
	line-height: 22px;
	height: 24px;
	font-size: 14px;
}
.ui-datebox-slidewday {
	font-size: 10px;
	font-weight: normal;
}

span.ui-datebox-nopad { margin: 0 }
.ui-datebox-repad { margin: .5em .4375em }

/*
 * 6 Element Grid - Used for datebox w/ time only.
 */

.ui-grid-e > .ui-block-a,
.ui-grid-e > .ui-block-b,
.ui-grid-e > .ui-block-c,
.ui-grid-e > .ui-block-d,
.ui-grid-e > .ui-block-e,
.ui-grid-e > .ui-block-f {
	width: 16.65%;
}
.ui-grid-e { 
	overflow: hidden;
}
.ui-block-f {
	margin: 0;
	padding: 0;
	border: 0;
	float: left;
	min-height: 1px;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
