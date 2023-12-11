/* OOP implementation of timetable.js */
function TimeTableMaker(blockCounter, classroomName, subjects, subjectPeriods, classSubjectteachers){
	this.classroomName=classroomName||'FORM 1';
	//console.log(checkedSubjectsData);
	let getSubjectPeriodsFromCheckedSubjectsArray=function(){
		let returnSubjectPeriods={};
		for(let subject in checkedSubjectsData){
			returnSubjectPeriods[subject]=checkedSubjectsData[subject].subjectPeriod;	
		}
		return returnSubjectPeriods;
	};
	/* this.subjects=['MATHS','PHYSICS','CHEMISTRY','GEOGRAPHY',
				'ENGLISH LANGUAGE','ENGLISH LITERATURE','FRENCH',
				'COMPUTER SCIENCE','HISTORY','FOOD AND NUTRITION',
				'MANUAL LABOUR','PHYSICAL EDUCATION']; */
	this.subjectPeriods={'MATHS':3,'PHYSICS':3,'CHEMISTRY':3,'GEOGRAPHY':3,
				'ENGLISH LANGUAGE':3,'ENGLISH LITERATURE':2,'FRENCH':3,
				'COMPUTER SCIENCE':2,'HISTORY':2,'FOOD AND NUTRITION':2,
				'MANUAL LABOUR':2,'PHYSICAL EDUCATION':2};
	this.classSubjectteachers=classSubjectteachers||{'MATHS':'Domene','PHYSICS':'Njume','CHEMISTRY':'Njume','GEOGRAPHY':'Ekoke',
				'ENGLISH LANGUAGE':'Njofie','ENGLISH LITERATURE':'Njofie','FRENCH':"Meva'a",
				'COMPUTER SCIENCE':'NDEH','HISTORY':'Alvine','FOOD AND NUTRITION':'Lum',
				'MANUAL LABOUR':'Mandeng','PHYSICAL EDUCATION':'Mbida'};
	this.daySubjectTeachers={};
	this.day_subjects=this.createObjectWithEmptyArrayValuesFromGivenArray(this.week_days);
	this.blockCounter=blockCounter;
	this.checkCounter=0;
	this.checkedSubjects=[];
	this.checkedSubjectsData={};
	this.checkedSubjectPeriods={};
	this.checkedSubjectTeachers={};
	
};
TimeTableMaker.prototype={
	schoolWeeklyPeriods:37,
	flag:true,
	textinputflag:1,
	//createdclasses:[],
	subjects:['MATHS','PHYSICS','CHEMISTRY','GEOGRAPHY',
				'ENGLISH LANGUAGE','ENGLISH LITERATURE','FRENCH',
				'COMPUTER SCIENCE','HISTORY','FOOD AND NUTRITION',
				'MANUAL LABOUR','PHYSICAL EDUCATION', 'LOGIC', 'ECONS',
				'CIVICS', 'HUMAN BIOLOGY', 'COMMERCE','ORGANIC CHEMISTRY',
				'PHYSICAL CHEMISTRY', 'ADDITIONAL MATHS'
				],
	teachers:['DOMENE JEAN PAUL', 'NJUME LEWIS', 'ESSAMA BEKONO',
					'MELLE DIONE', 'NJOFIE CHRISTABEL', 'OUM DANIELLE',
					'TALLA LINDA', 'MEVA\'A DENISE', 'NDEH TOIKADE',
					'ZE ALVINE', 'LUM LINDA', 'MANDENG MINLEND',
					'EYAMO RACHELLE', 'YUFENYUY FIONA', 'SEVIDZEM JISTAFF',
					'TAMEH FRANCIS', 'MBOUH EVRARD'],
	setCheckboxes(checkedSubjectsArray, addedSubject){
			/* GET SUBJECTS FROM A LIST AND SET THEM AS CHECKBOXES*/
			
			this.checkBoxMessage(this.checkCounter);
			$(`#subjectmodal${this.blockCounter} .subjects_selected`).show(); //show the subjects selected box if hidden
			$(`#subjectmodal${this.blockCounter} .checkboxsubjects`).detach();
			$(`#button__addsubject_to_setsubjects${this.blockCounter}`).detach();
			if($(`#weeklysubjectperiodmodal${this.blockCounter}`)){
				$(`#weeklysubjectperiodmodal${this.blockCounter}`).attr('id', `subjectmodal${this.blockCounter}`);
			}
		let subjectNumber=1;
		for(let subject of this.subjects){				
				let checkBox=`<input type='checkbox' id=${this.blockCounter}checkbox${subjectNumber}>${subject}`;
				$(`#subjectmodal${this.blockCounter}`).append( `<label for=checkbox${this.blockCounter}${subjectNumber} class='checkboxsubjects'>${checkBox}</label>`);
				subjectNumber++;				
			}
			console.log(addedSubject);
		if(addedSubject){
			let checkboxId=`#${this.blockCounter}checkbox${--subjectNumber}`; //decrement subjectNumber because its +1 on line 67
			console.log(checkboxId);
				$(checkboxId).prop("checked", true);
				this.checkedSubjects.push(checkboxId);
				//checkCounter++;
				console.log(`#${this.blockCounter}checkbox${subjectNumber}`)
			}
		if(this.checkedSubjects.length){
			this.checkCounter=0;
			console.log(this.checkCounter);
			for(let checkboxId of this.checkedSubjects){
				let subjectName=$(`${checkboxId}`).parent()[0].innerText; //get subjectname from element id
				//checkedSubjectsData.subjectName={}; //create data object for subject
				$(`${checkboxId}`).prop("checked", true);
				console.log(this.checkCounter);
				this.checkBoxMessage(++this.checkCounter);
				console.log(this.checkCounter);
			}
		}
		if($('label.boxsubjects')){
				$(`#subjectmodal${this.blockCounter} label.boxsubjects`).remove();
			}
			console.log(this.checkedSubjectsData);
			
			console.log(`#checkbox${subjectNumber}`)
			$(`#subjectmodal${this.blockCounter}`).append(`<input type="button" class="button__addsubjectsto_setsubjects" id="button__addsubject_to_setsubjects${this.blockCounter}" value="Add subject"  >`);
			
			//window.countCheckedBoxes();
			this.addNewSubject();
			},
	
	makeBodyDivForClassTimeTable(){
		let tableDiv=document.createElement('div');
		tableDiv.className="tableDiv";
		tableDiv.id=`block${this.blockCounter}`;
		let getInputHtml=`
		<fieldset id="setclassroom${this.blockCounter}" class="fieldset_style" >
		<legend class="enterClassroomNameBanner" id="classroom_name${this.blockCounter}">Enter Class Name</legend>
		<form method="get" autocomplete="off" id="inputmodal${this.blockCounter}" style="text-align:center;">
		
			<input type="text" class="input__textarea" id="inputtext${this.blockCounter}" placeholder="Enter class name" name="className" required>
			<input type="button" class="right_submit_button" id="submitclassname${this.blockCounter}" value="Submit" >
	</fieldset>
	
	<fieldset id="setsubjects${this.blockCounter}" class="setsubjectsarea" style="display:none">
		<legend id="subjects${this.blockCounter}" class="classnamebanner">Select FORM 1 subjects</legend>
		<div id="subjectmodal${this.blockCounter}" class="subjectmodal__area" >
			<div class="subjects_selected">dggddfdfdfgdf</div>
		</div>
	</fieldset>
	<div style="display:none" id="setsubjects_buttons${this.blockCounter}" class="buttons__bottom_nav">
		<input type="button" class="right_submit_button" id="subject_submit_button${this.blockCounter}" value="Next" >
		<input type="button" class="button__returnto_setclassroom" id="button__return_to_setclassroom${this.blockCounter}" value="Back"  >
	</div>`;
	console.log('here');
		tableDiv.innerHTML=getInputHtml;
		//console.log($tableDiv[0].innerHTML);
		$('script').first().before(tableDiv); //globally append to the document body just above the first script tag
		//$('#content').append($tableDiv); //globally append to the document body just above the first script tag
		//$('#content').append($('<input type="button" id="add_classdiv" style="width:100px; height:50px" value="Add subject"/>'));
		this.eventlistening();
		
	},

	checkBoxMessage(counter){
		let selectedSubjectsText="subject(s) selected";
		$(`#subjectmodal${this.blockCounter} .subjects_selected`)[0].innerText=`${counter} ${selectedSubjectsText}`;
		console.log(counter);
	},
	
	makeHtmlTable(block){
		let messageBody=document.createElement('table');
			messageBody.id=`table${block}`;
		messageBody.innerHTML=`<thead role="rowgroup"><tr role="row"><th role="columnheader"></th><th role="columnheader">Monday</th><th role="columnheader">Tuesday</th><th role="columnheader">Wednesday</th><th role="columnheader">Thursday</th><th role="columnheader">Friday</th><th role="columnheader">Saturday</th></tr></thead><tbody role="rowgroup"><tr role="row"><td role="cell">7:30 - 8:30</td><td role="cell" class="subject_cell" draggable="true"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td></tr><tr role="row"><td role="cell">8:30 - 9:30</td> <td role="cell" class="subject_cell" draggable="true" ></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td></tr><tr role="row"><td role="cell">9:30 - 10:30</td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td></tr><tr role="row"><td role="cell">10:30 - 11:00</td><td role="cell" colspan="6">BREAK</td></tr><tr role="row"><td role="cell">11:00 - 12:00</td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td></tr><tr role="row"><td role="cell">12:00 - 13:00</td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td></tr><tr role="row"><td role="cell">13:00 - 13:15</td><td role="cell" colspan="6">BREAK</td></tr><tr role="row"><td role="cell">13:15 - 14:15</td><td role="cell" class="subject_cell"> </td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell" ondrop(e)="e.preventDefault()"> </td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"> </td></tr><tr role="row"><td role="cell">14:15 - 15:15</td><td role="cell" class="subject_cell"> </td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"> </td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"> </td></tr><tr role="row"><td role="cell">15:15 - 16:15</td><td role="cell" class="subject_cell"> </td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"> </td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td></tr></tbody>`;
		$(`#block${this.blockCounter}`).append(messageBody);
	},
	
	countCheckedSubjects(){	
				
			$(`input[type="checkbox"]`).click(function(event){
				if($(this).is(":checked")){
					console.log(event.target.nodeName);
					console.log(that.blockCounter, that.checkedSubjects);
					that.checkBoxMessage(++that.checkCounter);
					let checkboxId=`#${$(this).attr('id')}`
					/* that.checkedSubjects.forEach(item=>{
						checkboxId!==item && that.checkedSubjects.push(checkboxId);
					});	 */
					that.checkedSubjects.push(checkboxId);
					console.log(checkboxId);
					console.log('blockcounter', that.blockCounter);
					console.log(that.blockCounter, that.checkedSubjects);
				}
				else if($(this).is(":not(:checked)")){
					that.checkBoxMessage(--that.checkCounter);
					let removeItem=`#${$(this).attr('id')}`;
					console.log(removeItem);
					console.log('blockcounter', that.blockCounter);
					that.checkedSubjects=$.grep(that.checkedSubjects, (value)=>{
						return value!=removeItem;
						console.log(that.checkedSubjects);
					});
					
					
					console.log(that.blockCounter, that.checkedSubjects);
				}
			});
		},
		
	addNewSubject(){
				textinputflag=0;
				let that=this;
				$(`#button__addsubject_to_setsubjects${this.blockCounter}`).click( function(){
				//$('#setsubjects').hide();

				that.makeModal("setclassroommodal", "classroom_name", "New subject", "inputmodal", "Subject", "submitNewSubject", "Submit");
				$(`#add_subject_inputtext${that.blockCounter}`).focus();
				//$('body').css('backgroundColor', 'blue');
			
				$(`#submitNewSubject${that.blockCounter}`).click(function(){
				let addedSubjectName=$(`#add_subject_inputtext${that.blockCounter}`).val().toUpperCase();
				if(!addedSubjectName){
					//event.preventDefault();
					console.log('enter a subject');
				}else{	
				that.subjects.push(addedSubjectName);
				//console.log(checkedSubjects)
				$(`#setclassroommodal${that.blockCounter}`).detach();
				console.log(addedSubjectName);
				that.setCheckboxes(undefined, addedSubjectName);
				}
				})
				})
	},
	
	addSubjectNameToCheckedSubjectsData(param1, checkedSubjectPeriods, checkedSubjectTeachers){
			if(Object.keys(this.checkedSubjectsData).length==0)this.checkedSubjectsData={};
			if(param1){	
				for(let checkboxId of this.checkedSubjects){
				let subjectName=$(`${checkboxId}`).parent()[0].innerText; //get subjectname from element id
				let subjectId=this.parseStrNumber(checkboxId);
				console.log(subjectId);
				console.log(checkboxId);			
					this.checkedSubjectsData[subjectName]={}; //create data object for subject
					this.checkedSubjectsData[`${subjectName}`]['subjectID']=subjectId;
				}
			}
			if(checkedSubjectPeriods){
				for(let subject in checkedSubjectPeriods){
					this.checkedSubjectsData[subject]['subjectPeriod']=checkedSubjectPeriods[subject];
				}
			}
			if(checkedSubjectTeachers){
				for(let subject in checkedSubjectTeachers){
					this.checkedSubjectsData[subject]['subjectTeacherName']=checkedSubjectTeachers[subject];
				}
			}
		console.log(this.checkedSubjectsData);		
		console.log(this.checkedSubjects);		
	},
	
	eventlistening(){
		$(`#submitclassname${this.blockCounter}`).click(()=>{
			let classRoomName=$(`#inputtext${this.blockCounter}`).val();
			if(!classRoomName){
					alert('enter a className example. FORM1');
			}else{	
				let classNameTopDiv=`<div class="topnamediv">${classRoomName}</div>`;
				$(`#setclassroom${this.blockCounter}`).fadeOut('slow', ()=>{
				$(`#setclassroom${this.blockCounter}`).hide();
				$(`#setsubjects${this.blockCounter}`).show();
				$(`#button__return_to_setclassroom${this.blockCounter}`).hide();
				$(`#block${this.blockCounter}`).prepend(classNameTopDiv);
				this.setCheckboxes();
				$(`#setsubjects_buttons${this.blockCounter}`).show();
			})
			}
		
		/* ADD NEW SUBJECT TO THE LIST OF SUBJECTS */
		
	})
	
	$(`#subject_submit_button${this.blockCounter}`).click(()=>{
		if(document.getElementById(`subjectmodal${this.blockCounter}`)){
		this.addSubjectNameToCheckedSubjectsData(this.checkedSubjects);
		console.log(this.checkedSubjects);
		$(`#button__return_to_setclassroom${this.blockCounter}`).show();
		this.setSubjectPeriodsInForm();
		}
		else if(document.getElementById(`weeklysubjectperiodmodal${this.blockCounter}`)){
			this.addSubjectNameToCheckedSubjectsData(undefined, this.checkedSubjectPeriods);
			console.log(this.checkedSubjectsData);
			this.setTeachersForm();
		}
		else if(document.getElementById(`selectteachermodal${this.blockCounter}`)){
			this.addSubjectNameToCheckedSubjectsData(undefined, undefined, this.checkedSubjectTeachers);
			
			$(`#selectteachermodal${this.blockCounter}`).hide(); //remove()
			$(`#setsubjects${this.blockCounter}`).hide(); //remove()
			$(`#subject_submit_button${this.blockCounter}`).hide(); //remove()
			//createdclasses.push(new timeTableMaker(`table${blockCounter}`));
			this.makeHtmlTable(this.blockCounter);
			this.makeDaySubjects();
			console.log(this.checkedSubjectsData);
		}
		else{
			
		}
	})
	$(`#button__add_class${blockCounter}`).click( function(){
			window.callTimeTable();
	});
	$('#weeklysubjectperiodsubmit').click(()=>{
		
	})
		
	/* WHEN BACK BUTTON IS PRESSED */
	$(`#button__return_to_setclassroom${this.blockCounter}`).click(()=>{
		if(document.getElementById(`subjectmodal${this.blockCounter}`)){  /* for some reason $('#subjectmodal') returns true everywhere */
			$(`#subjectmodal${this.blockCounter} .checkboxsubjects`).detach();
			$(`#subjectmodal${this.blockCounter} .numberboxes`).detach();
			$(`#setsubjects${this.blockCounter}, #setclassroom${this.blockCounter}`).toggle();	
		}
		else if(document.getElementById(`weeklysubjectperiodmodal${this.blockCounter}`)){
			$(`#weeklysubjectperiodmodal${this.blockCounter} .boxsubjects`).detach();
			$(`#weeklysubjectperiodmodal${this.blockCounter}`).removeClass('weeklysubjectperiodmodal');
			$(`#weeklysubjectperiodmodal${this.blockCounter}`).removeClass('formarea');
			$(`#weeklysubjectperiodmodal${this.blockCounter}`).attr('id', `subjectmodal${this.blockCounter}`);
			$(`#button__return_to_setclassroom${this.blockCounter}`).hide();
			this.setCheckboxes();
		}
	else if(!document.getElementById(`table${this.blockCounter}`) && document.getElementById(`selectteachermodal${this.blockCounter}`)){
			$(`#selectteachermodal${this.blockCounter} .selectteacher`).detach();			
			$(`#selectteachermodal${this.blockCounter}`).attr('id', `weeklysubjectperiodmodal${this.blockCounter}`);
			this.setSubjectPeriodsInForm();
		}
		else{
			$(`#table${this.blockCounter}`).detach();
			$(`#selectteachermodal${this.blockCounter}`).show();
			$(`#setsubjects${this.blockCounter}`).show();
		}
	})
	},
	
	getSubjects(){
		if(document.getElementById(`subjectmodal${this.blockCounter}`)){
			console.log('START');
			return $.map($(this.checkedSubjects), ( element, index) =>{
			return $(element).parent()[0].innerText;
		})
		}
		else{
			console.log('END');
			return Object.keys(this.checkedSubjectPeriods);
		}
	},
	
	getSubjectPeriods(){
		let that=this;
		$('.numberboxes').change(function(){
			let subjectName=$(this).parent()[0].innerText;			
			that.checkedSubjectPeriods[subjectName]=$(this).val();
			console.log(that.checkedSubjectPeriods);		
		})
	},
	
	setSubjectPeriodsInForm(){		
		let checkedSubjectsArray=this.getSubjects();
		console.log(checkedSubjectsArray);
		$(`#subjectmodal${this.blockCounter} .checkboxsubjects`).detach();
		$(`#subjectmodal${this.blockCounter} .subjects_selected`).hide();
		$(`#subjectmodal${this.blockCounter}`).attr('id', `weeklysubjectperiodmodal${this.blockCounter}`);
		$(`#weeklysubjectperiodmodal${this.blockCounter}`).addClass('weeklysubjectperiodmodal');
		//$('#subject_submit_button').attr('id', 'weeklysubjectperiodsubmit');
		$(`#button__addsubject_to_setsubjects${this.blockCounter}`).remove();
		for(let subject=0; subject<checkedSubjectsArray.length; subject++){
			//console.log(checkedSubjects);
			let subjectNumber=this.parseStrNumber(this.checkedSubjects[subject]);
			let theSubject=checkedSubjectsArray[subject];
			//let subject=$(id).parent()[0].innerText;
			let numberbox="<input type='number' min='0' max='37' required id=numberbox"+subjectNumber+" class=numberboxes"+">";
			$(`#weeklysubjectperiodmodal${this.blockCounter}`).append( "<label for=numberbox"+subjectNumber+  " class='boxsubjects'>"+theSubject+numberbox+"</label>");
			let inputbox=$(`#weeklysubjectperiodmodal${this.blockCounter} #numberbox${subjectNumber}`);
			inputbox.val('0'); //initialize all input values to 0			
		}
		/* update the values of the object checkedSubjectPeriods*/
		if(Object.keys(this.checkedSubjectPeriods).length){ //take from object and fill the UI boxes
			for(let subject in this.checkedSubjectPeriods){
				$(`label:contains(${subject})`).children().first().val(this.checkedSubjectPeriods[subject]);
				console.log('zero',subject);
			}			
		}		
		else{
			for(let subject of checkedSubjectsArray){  //for the object defaults			
			this.checkedSubjectPeriods[subject]=0 ;  // give 0 as a default value for every subject
			console.log('first',subject);
			}
		}
			/* In case a new subject is added or removed */
		
			for(let subject of checkedSubjectsArray){
				if(!Object.keys(this.checkedSubjectPeriods).includes(subject)){
				this.checkedSubjectPeriods[subject]=0; 
				console.log('second', subject);
				}
			}		
			for(let subject of Object.keys(this.checkedSubjectPeriods)){
				if(!checkedSubjectsArray.includes(subject)){
					delete this.checkedSubjectPeriods[subject];
					console.log('third', subject);
				}
			}
		
		console.log(this.checkedSubjectPeriods);
		this.getSubjectPeriods();
	},
	
	setTeachersForm(){
		let that=this;
		$(`#weeklysubjectperiodmodal${this.blockCounter} .boxsubjects`).detach();
		$(`#weeklysubjectperiodmodal${this.blockCounter}`).attr('id', `selectteachermodal${this.blockCounter}`);
		$(`#selectteachermodal${this.blockCounter}`).addClass("formarea");
		let optionHTML="<option value='' disabled selected>Select teacher</option>";
		let localTeachers=[]; //holds teacher names with underscore added			
		console.log(this.teachers);
		for(let teacher of this.teachers){
			localTeachers.push(checkSpaces(teacher));
		}
		for(let teacher of localTeachers){
			let normalTeacher=teacher.split("_").join(" "); // a normal teacher name
			let optionString="<option value="+teacher+">"+normalTeacher+"</option>";
				optionHTML+=optionString;
		}
		
		for(let subject in this.checkedSubjectsData){
			parsedSubject=checkSpaces(subject); //checkspaces add underscores to the phrases so that its returned as a single word
			let subjectId=this.checkedSubjectsData[subject]['subjectID'];
			let selectHTML="<select "+ "id=subject"+subjectId+ " name="+parsedSubject+ " class=teacherboxes "+" required"+">"+optionHTML+"</select>";			
			let labelHTML="<label for=numberbox"+subjectId+  " class='selectteacher'>"+subject+selectHTML+"</label>";
			$(`#selectteachermodal${this.blockCounter}`).append(labelHTML);
		}
		function checkSpaces(i){
			if(i.split(' ').length>1){
				return i.split(' ').join('_');
			}
			return i;
		}
		function getSubjectTeachers(){
			$('.teacherboxes').change(function(){
				console.log($(this).val());
			 let selectedTeacher=$(this).val().split("_").join(" ");
			 let selectedTeacherSubjectID=(that.parseStrNumber($(this).attr('id')));
			  for(let i in that.checkedSubjectsData){ //use checksubjectsData to get the subjectName
				   if(that.checkedSubjectsData[i].subjectID==selectedTeacherSubjectID){
					  that.checkedSubjectTeachers[i]=selectedTeacher; 
				   }
				
				console.log(that.checkedSubjectTeachers);		
			  }
			})
		}
		
		function autoAddSelectedTeachers(){
			console.log(this);
			let checkedSubjectTeacherEntry=Object.keys(that.checkedSubjectTeachers);
			if(checkedSubjectTeacherEntry.length){
				for(let entry in that.checkedSubjectTeachers){
					$(`label:contains(${entry}) select.teacherboxes option:contains(${checkedSubjectTeachers[entry]})`)[0].selected=true;
				}
			}
		}
		autoAddSelectedTeachers();
		getSubjectTeachers();
		
	},
	
	parseStrNumber(string){
	let newstr='';
		for(let i of string){
			if(isNaN(parseInt(i))){
				
			}else{
				newstr+=i; // if i is not a number add it to newstr
			}
		}	
		return parseInt(newstr);
	},
	
	makeModal(fieldsetId, legendId, modaltitleBar, formId, textPlaceholder, buttonId, buttonValue){
	let modalHtml=`<fieldset id=${fieldsetId}${this.blockCounter} class="fieldset_style" >
					<legend id=${legendId} class="classnamebanner" >${modaltitleBar}</legend>
					<form method="get" autocomplete="off" id=${formId} style="text-align:center;">
		
					<input type="text" id="add_subject_inputtext${this.blockCounter}" placeholder=${textPlaceholder} required>
					<input type="button" class="right_submit_button" id=${buttonId}${this.blockCounter} value=${buttonValue} >
					</fieldset>`
		$(`#block${this.blockCounter}`).append(modalHtml);
	},
	
	objectNumericValuesCounter: function(object){
		let sum=0;	
		for(let number of object){
			sum+=object[number];
		}
		console.log(sum);
		return sum;
	},
	week_days:['Monday','Tuesday','Wednesday','Thursday','Friday',
					'Saturday'],
	week_day_periods:{'Monday':8,'Tuesday':8,'Wednesday':5,'Thursday':8,'Friday':8,
					'Saturday':0},
	
	makeDaySubjects(){
		this.day_subjects=this.createObjectWithEmptyArrayValuesFromGivenArray(this.week_days);
		for(let course in this.checkedSubjectsData){
			for(let i=1; i<=this.checkedSubjectsData[course].subjectPeriod; i++){
				let random_day=this.randomize(5);
				let random_period=this.randomize(this.week_day_periods[this.week_days[random_day]]);
				//console.log(i, random_period, '=>', 'iteration',i, course, 'of', week_days[random_day], 'period', random_period );
				if(this.day_subjects[this.week_days[random_day]][random_period]!=undefined){
					//console.log(i, random_period, '=>', 'FAILED','iteration',i, course, 'of', week_days[random_day], 'period', random_period );
					i--;	
				}else{
				this.day_subjects[this.week_days[random_day]][random_period]=course;
				}
			}
		}
		this.addSubjectsToTable();
		//return day_subjects;
		//console.log(this.countOfSubjectsInTimeTable());
	},
		shittyFunction(){
			window.alert('it works');
		},
	
		dragstart_handler(ev){
			
			ev.dataTransfer.setData("text/plain", ev.target.innerText);
			ev.dataTransfer.effectAllowed = "move";
			
			this.originContent=[ev.target.id, this.day_subjects[this.getCellDay(ev.target.id)][this.getSubjectIndexFromDaySubjects(ev.target.id)]];
			console.log('ORIGIN',this.originContent);
			
		},
		dragover_handler(ev) {
			ev.preventDefault(); 
		},
		drop_handler(ev){
			//ev.preventDefault();
			const data = ev.dataTransfer.getData("text/plain");
			console.log('DATA', data);
			this.destinationContent=[event.target.id, this.day_subjects[this.getCellDay(ev.target.id)][this.getSubjectIndexFromDaySubjects(ev.target.id)]];
			this.day_subjects[this.getCellDay(this.destinationContent[0])][this.getSubjectIndexFromDaySubjects(this.destinationContent[0])]=this.originContent[1];
			this.day_subjects[this.getCellDay(this.originContent[0])][this.getSubjectIndexFromDaySubjects(this.originContent[0])]=this.destinationContent[1];
			console.log('DESTINY', this.destinationContent);
			this.flag=false;         //added this to avoid defining the eventlisteners every addsubjects to table is called
			this.addSubjectsToTable();
			//ev.target.style.background='yellow';
			//ev.target.parentNode.appendChild(node);
		}, 
	
	
	getCellDay(cellId){
		let tr=$(`#table${this.blockCounter} tr`);
		return tr[0].cells[parseInt(cellId.substring(0,1))].innerText;
	},
	
	getSubjectIndexFromDaySubjects(cellId){
		let subjectCellId=parseInt(cellId.substring(1));
	
		if(subjectCellId>3&&subjectCellId<=6){
			console.log('SUBJECT', subjectCellId);
			return subjectCellId-2;
		}else if(subjectCellId>6){
			return subjectCellId-3;
		}else{
	
			return subjectCellId-1;
		}
	},
	
	addSubjectsToTable(){
		let theObject=this;
		let row=$(`#table${this.blockCounter} tr`);
		let table=$(`#block${this.blockCounter} table`);
		/* if(this.flag) dragDrop();
		function dragDrop(){
		table.addEventListener("dragstart", (ev)=>{
			theObject.dragstart_handler(ev);
		}, false);
		table.addEventListener("drop", (event)=> {
			theObject.drop_handler(event);
		}, false);
		table.addEventListener("dragover", (event)=> {
			theObject.dragover_handler(event);
		}, false);
		} */
		
 		for(let td=1;td<=5;td++){
			let day=this.week_days[td-1];
			let cellCount=0;
			//console.log('DAY', day);
			for(let tr=1;tr<=8;tr++){
				let cell=[1,2,3,5,6,8,9,10];
				let subject=this.day_subjects[day][tr-1];
				console.log('SUBJECT', subject);
				//console.log('TD',td);
			
			if(subject==undefined){
				subject='';
			};
			if(td==3 && tr==6){
				//row[tr].cells[td].innerText='bone';
				break;
			}
			//console.log('here');
			//console.log('cellcount', row[cell[cellCount]].cells[td].innerText);
			let theCell=row[cell[cellCount]];
			let theBackgroundColor=this.subjectColorChoice(subject);
			theCell.cells[td].innerText=subject;
			
			if(this.flag) dragDrop();
			
			function dragDrop(){
			theCell.cells[td].addEventListener("drop", function(ev) {
			theObject.drop_handler(ev);
			}, false);
			theCell.cells[td].addEventListener("dragover", function(event) {
			theObject.dragover_handler(event);
			}, false);
			theCell.cells[td].addEventListener("dragstart", function(ev){
			theObject.dragstart_handler(ev);
			}, false);
			};
			
			this.setAttributes(theCell.cells[td], {"style": `background-color: ${theBackgroundColor}; border-radius: 5px;`, "id": `${td}${cell[cellCount]}`, "draggable": "true"} );
			cellCount++;
            
			}
    
    console.log('END OF', day);
   
		}
	},
	
	subjectColorChoice(subject){
		let colors=['green', 'orange', 'purple', 'indigo',
					'#919191', 'dodgerblue', 'aqua', 'brown',
					'yellow', 'blue', 'pink', 'blue'
					];
		return colors[this.subjects.indexOf(subject)];
	},
	
	setAttributes(el, attrs) {
		for(var key in attrs) {
			el.setAttribute(key, attrs[key]);
		}
	},
	
	countOfSubjectsInTimeTable(){
		let subjectCount=0;
		for(let day in this.day_subjects){
			for(let subject of this.day_subjects[day]){
				if((this.day_subjects[day].length!=0)&&(subject!=undefined)){
					subjectCount++;
				}
			}
		}
		let str='number of subjects on timetable: '+subjectCount;
		return subjectCount;
	},
	
	randomize(object){
	return Math.floor(Math.random()*(object));
	},
	
	createObjectWithEmptyArrayValuesFromGivenArray(givenArray){
    let obj =Object.create(null);
    for(let i of givenArray){
        obj[i]=[];
    }
    return obj;
	}
	
}

/* let aclass=new timeTableMaker();
aclass.makeDaySubjects(); */
		createdclasses=[];
		let blockCounter=1;
		makeDocumentheader();
		callTimeTable();
		countCheckedBoxes();
		
		function callTimeTable(){			
			createdclasses.push(new TimeTableMaker(blockCounter));
			createdclasses[createdclasses.length-1].makeBodyDivForClassTimeTable();
			console.log(createdclasses);
			console.log(blockCounter);
			console.log(createdclasses);
			$(`#button__add_class${blockCounter}`).attr('id', `#button__add_class${++blockCounter}`);
			
		};
		
		
	
	function makeDocumentheader(){
		let $documentButton=$(`<div id="header" class="headernavbar"><input type="button" class="add_newclass" id="button__add_class${blockCounter}" value="New Class"></div>`);
			$('#content').prepend($documentButton);
	};
	
	function countCheckedBoxes(){
		let that=this;
		$('#content').on('click', function(event){
			if(event.target && event.target.nodeName == "INPUT"){
					let blockNumber=parseInt(event.target.id);
					let checkboxId=`#${event.target.id}`;
					let theObject=createdclasses[blockNumber-1];
				if($(event.target).is(":checked")){
					console.log(this);
					theObject.checkBoxMessage(++theObject.checkCounter);
					theObject.checkedSubjects.push(checkboxId);
					console.log(checkboxId);
					console.log('blockcounter', theObject.blockCounter);
					console.log(theObject.blockCounter, theObject.checkedSubjects);
				}else if($(event.target).is(":not(:checked)")){
					
					theObject.checkBoxMessage(--theObject.checkCounter);
					let removeItem=checkboxId;
					console.log(removeItem);
					console.log('blockcounter', theObject.blockCounter);
					theObject.checkedSubjects=$.grep(theObject.checkedSubjects, (value)=>{
						return value!=removeItem;
					});
				}
			console.log(event.target.id);
			//console.log(that);
			}
		});
	}
	
	
	