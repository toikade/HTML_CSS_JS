	let textinputflag=1;  //not really necessary but useful for testing
	let checkCounter=0;
	let blockCounter=1;
	let classRoomName;
	let checkedSubjects=[]; //holds checked subjects
	let checkedSubjectPeriods={}; //holds subjectperiods
	let checkedSubjectsData={};
	let checkedSubjectTeachers={};
	let subjects=['MATHS','PHYSICS','CHEMISTRY','GEOGRAPHY',
				'ENGLISH LANGUAGE','ENGLISH LITERATURE','FRENCH',
				'COMPUTER SCIENCE','HISTORY','FOOD AND NUTRITION',
				'MANUAL LABOUR','PHYSICAL EDUCATION', 'LOGIC', 'ECONS',
				'CIVICS', 'HUMAN BIOLOGY', 'COMMERCE','ORGANIC CHEMISTRY',
				'PHYSICAL CHEMISTRY', 'ADDITIONAL MATHS'
				];
	let teachers=['DOMENE JEAN PAUL', 'NJUME LEWIS', 'ESSAMA BEKONO',
					'MELLE DIONE', 'NJOFIE CHRISTABEL', 'OUM DANIELLE',
					'TALLA LINDA', 'MEVA\'A DENISE', 'NDEH TOIKADE',
					'ZE ALVINE', 'LUM LINDA', 'MANDENG MINLEND',
					'EYAMO RACHELLE', 'YUFENYUY FIONA', 'SEVIDZEM JISTAFF',
					'TAMEH FRANCIS', 'MBOUH EVRARD'];
	console.log(checkedSubjects);			
	function setCheckboxes(checkedSubjectsArray, addedSubject){
			/* GET SUBJECTS FROM A LIST AND SET THEM AS CHECKBOXES*/
			checkBoxMessage(checkCounter);
			this.$('.subjects_selected').show(); //show the subjects selected box if hidden
			this.$('#subjectmodal .checkboxsubjects').detach();
			console.log(this);
			$('#button__addsubject_to_setsubjects').detach();
			if($('#weeklysubjectperiodmodal')){
				$('#weeklysubjectperiodmodal').attr('id', 'subjectmodal');
			}
		let subjectNumber=1;
		for(let subject of subjects){				
				let checkBox="<input type='checkbox' id=checkbox"+subjectNumber+">"+subject;
				$('#subjectmodal').append( "<label for=checkbox"+subjectNumber+  " class='checkboxsubjects'>"+checkBox+"</label>");
				subjectNumber++;				
			}
			console.log(addedSubject);
		if(addedSubject){
			let checkboxId=`#checkbox${--subjectNumber}`;
			console.log(checkboxId);
				$(checkboxId).prop("checked", true);
				checkedSubjects.push(checkboxId);
				//checkCounter++;
				console.log(`#checkbox${subjectNumber}`)
			}
		if(checkedSubjects.length){
			checkCounter=0;
			for(let checkboxId of checkedSubjects){
				let subjectName=$(`${checkboxId}`).parent()[0].innerText; //get subjectname from element id
				//checkedSubjectsData.subjectName={}; //create data object for subject
				$(`${checkboxId}`).prop("checked", true);
				checkBoxMessage(++checkCounter);
			}
		}
		if($('label.boxsubjects')){
				$('#subjectmodal label.boxsubjects').remove();
			}
			console.log(checkedSubjectsData);
			
			console.log(`#checkbox${subjectNumber}`)
			$('#subjectmodal').append(`<input type="button" id="button__addsubject_to_setsubjects" value="Add subject"  >`);
			
			countCheckedSubjects();
			addNewSubject();
			};
			
	function makeBodyDivForClassTimeTable(){
		let $tableDiv=$(`<div id="class${blockCounter}" class="tableDiv"></div>`);
		let getInputHtml=`<fieldset id="setclassroom" class="fieldset_style" >
		<legend id="classroom_name">Enter Class Name</legend>
		<form method="get" autocomplete="off" id="inputmodal" style="text-align:center;">
		
			<input type="text" id="inputtext" placeholder="Enter class name" name="className" required>
			<input type="button" class="right_submit_button" id="submitclassname" value="Submit" >
	</fieldset>
	
	<fieldset id="setsubjects" style="display:none">
		<legend id="subjects">Select FORM 1 subjects</legend>
		<div id="subjectmodal" >
			<div class="subjects_selected">dggddfdfdfgdf</div>
		</div>
		<div id="setsubjects_buttons">
		
		<input type="button" class="right_submit_button" id="subject_submit_button" value="Submit" >
		<input type="button" id="button__return_to_setclassroom" value="Back"  >
		</div>
		
	</fieldset>`;
	console.log('here');
		$tableDiv.append(getInputHtml);
		$('script').first().before($tableDiv);
		//$('#content').append($('<input type="button" id="add_classdiv" style="width:100px; height:50px" value="Add subject"/>'));
	};
	function checkBoxMessage(counter){
		let selectedSubjectsText="subject(s) selected";
		$('.subjects_selected')[0].innerText=`${counter} ${selectedSubjectsText}`;
	}
	function countCheckedSubjects(){			
			$('input[type="checkbox"]').click(function(){
				if($(this).is(":checked")){
					checkBoxMessage(++checkCounter);
					checkedSubjects.push(`#${$(this).attr('id')}`);
					console.log($(this).attr('id'));
					console.log(checkedSubjects);
				}
				else if($(this).is(":not(:checked)")){
					checkBoxMessage(--checkCounter);
					let removeItem=`#${$(this).attr('id')}`;
					console.log(removeItem);
					checkedSubjects=$.grep(checkedSubjects, (value)=>{
						return value!=removeItem;
						
					});
					
					
					console.log(checkedSubjects);
				}
			});
		};	
	
			function addNewSubject(){
				textinputflag=0;
				$('#button__addsubject_to_setsubjects').click( function(){
				//$('#setsubjects').hide();
				makeModal();
				$('#add_subject_inputtext').focus();
				//$('body').css('backgroundColor', 'blue');
			
				$('#submitNewSubject').click(()=>{
				let addedSubjectName=$('#add_subject_inputtext').val().toUpperCase();
				if(!addedSubjectName){
					//event.preventDefault();
					console.log('enter a subject');
				}else{	
				subjects.push(addedSubjectName);
				//console.log(checkedSubjects)
				$('#setclassroommodal').detach();
				console.log(addedSubjectName);
				setCheckboxes(undefined, addedSubjectName);
				}
				})
				})
			}
	function addSubjectNameToCheckedSubjectsData(param1, checkedSubjectPeriods, checkedSubjectTeachers){
			if(Object.keys(checkedSubjectsData).length==0)checkedSubjectsData={};
			if(param1){	
				for(let checkboxId of checkedSubjects){
				let subjectName=$(`${checkboxId}`).parent()[0].innerText; //get subjectname from element id
				let subjectId=parseStrNumber(checkboxId);
				console.log(subjectName);
				console.log(checkboxId);			
					checkedSubjectsData[subjectName]={}; //create data object for subject
					checkedSubjectsData[`${subjectName}`]['subjectID']=subjectId;
				}
			}
			if(checkedSubjectPeriods){
				for(let subject in checkedSubjectPeriods){
					checkedSubjectsData[subject]['subjectPeriod']=checkedSubjectPeriods[subject];
				}
			}
			if(checkedSubjectTeachers){
				for(let subject in checkedSubjectTeachers){
					checkedSubjectsData[subject]['subjectTeacherName']=checkedSubjectTeachers[subject];
				}
			}
		console.log(checkedSubjectsData);		
		console.log(checkedSubjects);		
	}
		/* ON document load */
		makeBodyDivForClassTimeTable(); //this is the start, makes the intial subjectmodal boxes.
	/* ON CLASSNAME SUBMIT */	
	$('#submitclassname').click(()=>{
		//$('#setclassroom, #setsubjects').toggle();
	$('#setclassroom').fadeOut('slow', ()=>{
		$('#setclassroom').hide();
		$('#setsubjects').show();
		//$('#subjectmodal .checkboxsubjects').detach();
		setCheckboxes();
			
		})
		classRoomName=$('#inputtext').val().toUpperCase();
		
		/* ADD NEW SUBJECT TO THE LIST OF SUBJECTS */
		
	})
	
	$('#subject_submit_button').click(()=>{
		if(document.getElementById('subjectmodal')){
		addSubjectNameToCheckedSubjectsData(checkedSubjects);
		setSubjectPeriodsInForm();
		}
		else if(document.getElementById('weeklysubjectperiodmodal')){
			addSubjectNameToCheckedSubjectsData(undefined, checkedSubjectPeriods);
			console.log(checkedSubjectsData);
			setTeachersForm();
		}
		else{
			addSubjectNameToCheckedSubjectsData(undefined, undefined, checkedSubjectTeachers);
			
			$('#setclassroom').remove(); //remove()
			$('#setsubjects').remove(); //remove()
			makeHtmlTable();			
			
			createdclasses=[];
			createdclasses.push(new timeTableMaker('table1'));
			createdclasses[0].makeDaySubjects();
			console.log(createdclasses);
		}
	})
	/* $('#add_classdiv').on('click', function(){
			makeBodyDivForClassTimeTable();
	}); */
	$('#weeklysubjectperiodsubmit').click(()=>{
		
	})
		
	/* WHEN BACK BUTTON IS PRESSED */
	$('#button__return_to_setclassroom').click(()=>{
		if(document.getElementById('subjectmodal')){  /* for some reason $('#subjectmodal') returns true everywhere */
			$('#subjectmodal .checkboxsubjects').detach();
			$('#subjectmodal .numberboxes').detach();
			$('#setsubjects, #setclassroom').toggle();	
		}
		else if(document.getElementById('weeklysubjectperiodmodal')){
			$('#weeklysubjectperiodmodal .boxsubjects').detach();
			$('#weeklysubjectperiodmodal').attr('id', 'subjectmodal');
			setCheckboxes();
		}
		else{
			$('#selectteachermodal .selectteacher').detach();			
			$('#selectteachermodal').attr('id', 'weeklysubjectperiodmodal');
			setSubjectPeriodsInForm();
		}
	})
	
	
	function getSubjects(){
		if(document.getElementById('subjectmodal')){
			return $.map($(checkedSubjects), ( element, index) =>{
			return $(element).parent()[0].innerText;
		})
		}
		else{
			return Object.keys(checkedSubjectPeriods);
		}
	}
	function getSubjectPeriods(){
		$('.numberboxes').change(function(){
			let subjectName=$(this).parent()[0].innerText;			
			checkedSubjectPeriods[subjectName]=$(this).val();
			console.log(checkedSubjectPeriods);		
		})
	}
	function setSubjectPeriodsInForm(){		
		let checkedSubjectsArray=getSubjects();
		console.log(checkedSubjectsArray);
		$('#subjectmodal .checkboxsubjects').detach();
		$('.subjects_selected').hide();
		$('#subjectmodal').attr('id', 'weeklysubjectperiodmodal');
		//$('#subject_submit_button').attr('id', 'weeklysubjectperiodsubmit');
		$('#button__addsubject_to_setsubjects').remove();
		for(let subject=0; subject<checkedSubjectsArray.length; subject++){
			//console.log(checkedSubjects);
			let subjectNumber=parseStrNumber(checkedSubjects[subject]);
			let theSubject=checkedSubjectsArray[subject];
			//let subject=$(id).parent()[0].innerText;
			let numberbox="<input type='number' min='0' max='37' required id=numberbox"+subjectNumber+" class=numberboxes"+">";
			$('#weeklysubjectperiodmodal').append( "<label for=numberbox"+subjectNumber+  " class='boxsubjects'>"+theSubject+numberbox+"</label>");
			let inputbox=$(`#numberbox${subjectNumber}`);
			inputbox.val('0'); //initialize all input values to 0			
		}
		/* update the values of the object checkedSubjectPeriods*/
		if(Object.keys(checkedSubjectPeriods).length){ //take from object and fill the UI boxes
			for(let subject in checkedSubjectPeriods){
				$(`label:contains(${subject})`).children().first().val(checkedSubjectPeriods[subject]);
				console.log('zero',subject);
			}			
		}		
		else{
			for(let subject of checkedSubjectsArray){  //for the object defaults			
			checkedSubjectPeriods[subject]=0 ;  // update checkedSubjectPeriods object
			console.log('first',subject);
			}
		}
			/* In case a new subject is added or removed */
		
			for(let subject of checkedSubjectsArray){
				if(!Object.keys(checkedSubjectPeriods).includes(subject)){
				checkedSubjectPeriods[subject]=0; 
				console.log('second', subject);
				}
			}		
			for(let subject of Object.keys(checkedSubjectPeriods)){
				if(!checkedSubjectsArray.includes(subject)){
					delete checkedSubjectPeriods[subject];
					console.log('third', subject);
				}
			}
		
		console.log(checkedSubjectPeriods);
		getSubjectPeriods();
	}
	
	function setTeachersForm(){
		$('#weeklysubjectperiodmodal .boxsubjects').detach();
		$('#weeklysubjectperiodmodal').attr('id', 'selectteachermodal');
		$('#selectteachermodal').addClass("formarea");
		let optionHTML="<option value='' disabled selected>Select teacher</option>";
		let localTeachers=[]; //holds teacher names with underscore added			
		console.log(teachers);
		for(let teacher of teachers){
			localTeachers.push(checkSpaces(teacher));
		}
		for(let teacher of localTeachers){
			let normalTeacher=teacher.split("_").join(" "); // a normal teacher name
			let optionString="<option value="+teacher+">"+normalTeacher+"</option>";
				optionHTML+=optionString;
		}
		
		for(let subject in checkedSubjectsData){
			parsedSubject=checkSpaces(subject); //checkspaces add underscores to the phrases so that its returned as a single word
			let subjectId=checkedSubjectsData[subject]['subjectID'];
			let selectHTML="<select "+ "id=subject"+subjectId+ " name="+parsedSubject+ " class=teacherboxes "+" required"+">"+optionHTML+"</select>";			
			let labelHTML="<label for=numberbox"+subjectId+  " class='selectteacher'>"+subject+selectHTML+"</label>";
			$('#selectteachermodal').append(labelHTML);
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
			 let selectedTeacherSubjectID=(parseStrNumber($(this).attr('id')));
			  for(let i in checkedSubjectsData){ //use checksubjectsData to get the subjectName
				   if(checkedSubjectsData[i].subjectID==selectedTeacherSubjectID){
					  checkedSubjectTeachers[i]=selectedTeacher; 
				   }
				
				console.log(checkedSubjectTeachers);		
			  }
			})
		}
		
		function autoAddSelectedTeachers(){
			let checkedSubjectTeacherEntry=Object.keys(checkedSubjectTeachers);
			if(checkedSubjectTeacherEntry.length){
				for(let entry in checkedSubjectTeachers){
					$(`label:contains(${entry}) select.teacherboxes option:contains(${checkedSubjectTeachers[entry]})`)[0].selected=true;
				}
			}
		}
		autoAddSelectedTeachers();
		getSubjectTeachers();
		
	}
	
	function parseStrNumber(string){
		let newstr='';
		for(let i of string){
			if(isNaN(parseInt(i))){ 
				
			}else{
				newstr+=i;
			}
		}
		return parseInt(newstr);
	};
	
	function makeModal(fieldsetId="setclassroommodal", legendId="classroom_name", modaltitleBar="New subject", formId="inputmodal", textPlaceholder="Subject", buttonId="submitNewSubject", buttonValue="Submit"){
	let modalHtml=`<fieldset id=${fieldsetId} class="fieldset_style">
					<legend id=${legendId}>${modaltitleBar}</legend>
					<form method="get" autocomplete="off" id=${formId} style="text-align:center;">
		
					<input type="text" id="add_subject_inputtext" placeholder=${textPlaceholder} required>
					<input type="button" class="right_submit_button" id=${buttonId} value=${buttonValue} >
					</fieldset>`
		$('body').append(modalHtml);
	}