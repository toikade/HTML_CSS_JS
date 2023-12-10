/* A program to generate the time table for a class and render as
a pdf*/

/*Define global variables*/
const subjects=['MATHS','PHYSICS','CHEMISTRY','GEOGRAPHY',
				'ENGLISH LANGUAGE','ENGLISH LITERATURE','FRENCH',
				'COMPUTER SCIENCE','HISTORY','FOOD AND NUTRITION',
				'MANUAL LABOUR','PHYSICAL EDUCATION'];

const subject_periods={'MATHS':3,'PHYSICS':3,'CHEMISTRY':3,'GEOGRAPHY':3,
				'ENGLISH LANGUAGE':3,'ENGLISH LITERATURE':2,'FRENCH':3,
				'COMPUTER SCIENCE':2,'HISTORY':2,'FOOD AND NUTRITION':2,
				'MANUAL LABOUR':2,'PHYSICAL EDUCATION':2,
				count(){
					let periodSum=0;	
					for(let subject of subjects){
						periodSum+=subject_periods[subject];
					}
					console.log(periodSum);
					return periodSum;
				}
			};
			
const school_weekly_periods=37;
const class_weekly_periods=subject_periods.count();
//console.log(class_weekly_periods)
 
const week_days=['Monday','Tuesday','Wednesday','Thursday','Friday',
					'Saturday'];
					
let normal_days=['Monday','Tuesday','Thursday','Friday'];
				
const week_day_periods={'Monday':8,'Tuesday':8,'Wednesday':5,'Thursday':8,'Friday':8,
					'Saturday':0};
					
let day_subjects={'Monday':[],'Tuesday':[],'Wednesday':[],'Thursday':[],'Friday':[],
					'Saturday':[]};
					
let subjectWeeklyOccurence={'MATHS':0,'PHYSICS':0,'CHEMISTRY':0,'GEOGRAPHY':0,
				'ENGLISH LANGUAGE':0,'ENGLISH LITERATURE':0,'FRENCH':0,
				'COMPUTER SCIENCE':0,'HISTORY':0,'FOOD AND NUTRITION':0,
				'MANUAL LABOUR':0,'PHYSICAL EDUCATION':0};
					
/* IMPLEMENTATION */
	

	function makeWeeklySubjects(){
	let weekly_subjects= new Array;
	
	while(weekly_subjects.length!=subject_periods.count()){
		//random_int=Math.floor(Math.random()*subjects.length);
		let random_subject=subjects[randomize(subjects.length)];
		if(subjectWeeklyOccurence[random_subject]<subject_periods[random_subject]){
			weekly_subjects.push(random_subject);
			subjectWeeklyOccurence[random_subject]++;
		}else{
			continue;
		}
					
	}
	return weekly_subjects;
}	
					/* subjectWeeklyOccurence[random_subject]++;
					console.log(random_subject); */
				
				
	//console.log(subjectWeeklyOccurence);
	//console.log(weekly_subjects);
function makeDaySubjects(){
	for(let course in subject_periods){
		for(let i=1; i<=subject_periods[course]; i++){
			let random_day=randomize(5);
			let random_period=randomize(week_day_periods[week_days[random_day]]);
			//console.log(i, random_period, '=>', 'iteration',i, course, 'of', week_days[random_day], 'period', random_period );
			if(day_subjects[week_days[random_day]][random_period]!=undefined){
				//console.log(i, random_period, '=>', 'FAILED','iteration',i, course, 'of', week_days[random_day], 'period', random_period );
				i--;	
			}else{
			day_subjects[week_days[random_day]][random_period]=course;
			}
		}
	}
	//return day_subjects;
	addSubjectsToTable();
}	
/* TO BE USED WITH MAKEDAYSUBJECTS ABOVE--------------*/
function createObjectWithEmptyArrayValuesFromGivenArray(givenArray){
    let obj =Object.create(null);
    for(let i of givenArray){
        obj[i]=[];
    }
    return obj;
}
/*-----------------END OF THE CODE-------------------*/


//console.log('weekly', weekly_subjects);
function dailySubjectsGenerator(){
	let weekly_subjects=makeWeeklySubjects();
	for(let subject=0; subject<weekly_subjects.length; subject++){
		while(weekly_subjects.length>0){ 
			//console.log('first print', weekly_subjects[subject]);
			//let random_int=Math.floor(Math.random()*(week_days.length-1));
			//console.log('randint', random_int);
			let random_day=week_days[randomize(week_days.length-1)];
			//console.log('randday', random_day);

			//console.log(subject);
			if(day_subjects[random_day].length<week_day_periods[random_day]){
				day_subjects[random_day].push(weekly_subjects[subject]);
				//console.log(random_day);
				//continue;
				//weekly_subjects.shift();
				//console.log('LENGTH',weekly_subjects.length);
				
				//break;
			}
			if((subject===weekly_subjects.length-1)&&checkDaySubjects()){
				console.log('ENDOFSUBJECTCOUNT');
				subject=0;
				for(let day in day_subjects){
					day_subjects[day]=[];
				}
			} 
		break;
		}
		
	}
	
	//addSpaces();
	addSubjectsToTable();
	console.log(countOfSubjectsInTimeTable());
}
/*----------DRAG AND DROP START------------------*/

	let originContent;
	let destinationContent;
	function dragstart_handler(ev){
		ev.dataTransfer.setData("text/plain", ev.target.id);
		ev.dataTransfer.effectAllowed = "copy";
		console.log(ev.target.id);
		console.log(getCellDay(ev.target.id));
		console.log(getSubjectIndexFromDaySubjects(ev.target.id));
		originContent=[event.target.id, day_subjects[getCellDay(ev.target.id)][getSubjectIndexFromDaySubjects(ev.target.id)]];
		console.log(originContent);
	}
	
	function dragover_handler(ev) {
		ev.preventDefault();
	}
	
	function drop_handler(ev){
		ev.preventDefault();
		const data = ev.dataTransfer.getData("text/plain");
		//ev.target.innerText=originContent[1];
		destinationContent=[event.target.id, day_subjects[getCellDay(ev.target.id)][getSubjectIndexFromDaySubjects(ev.target.id)]];
		day_subjects[getCellDay(originContent[0])][getSubjectIndexFromDaySubjects(originContent[0])]=destinationContent[1];
		
		day_subjects[getCellDay(destinationContent[0])][getSubjectIndexFromDaySubjects(destinationContent[0])]=originContent[1];
		
		addSubjectsToTable();
		//ev.target.style.background='yellow';
		//ev.target.parentNode.appendChild(node);
	}
/*-----------DRAG AND DROP END-----------------*/

function getCellDay(cellId){
	let tr=document.getElementsByTagName('tr');
	return tr[0].cells[parseInt(cellId.substring(0,1))].innerText;
}

function getSubjectIndexFromDaySubjects(cellId){
	let subjectCellId=parseInt(cellId.substring(1));
	
		if(subjectCellId>3&&subjectCellId<=6){
			console.log('SUBJECT', subjectCellId);
			return subjectCellId-2;
		}else if(subjectCellId>6){
			return subjectCellId-3;
		}else{
	
			return subjectCellId-1;
		}
	
	
}

function addSpaces(){
	for(let day in day_subjects){
		if(day_subjects[day].length<week_day_periods[day]){
			let period_difference=week_day_periods[day]-day_subjects[day].length;
			for(let index=0;index<period_difference;index++){
				let random_index=randomize(day_subjects[day].length-1);
				console.log('RANDOMINDEX',random_index, 'DAY',day_subjects[day]);
				day_subjects[day].splice(random_index,0,"");
			}
		}
	}
};

function addSubjectsToTable(){
	let row=document.getElementsByTagName('tr');
 
for(let td=1;td<=5;td++){
    let day=week_days[td-1];
    let cellCount=0;
//console.log('DAY', day);
    for(let tr=1;tr<=8;tr++){
        let cell=[1,2,3,5,6,8,9,10];
        let subject=day_subjects[day][tr-1];
console.log('SUBJECT', subject);
//console.log('TD',td);
        /* if((tr<9)&&(Number.isInteger((tr-1)/3)==true)&&(tr!=1)){
           row[tr+1].cells[td].innerText=day_subjects[day][tr-1];
           tr+=1;
           console.log('BREAK', tr);
           continue;
connsole.log('HERE');
        };*/
       /*if(day=="Wednesday" && tr==6){
            row[tr].cells[td].innerText='bone';
            break;
        };*/
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
		let theBackgroundColor=subjectColorChoice(subject);
        theCell.cells[td].innerText=subject;
		setAttributes(theCell.cells[td], {"style": `background-color: ${theBackgroundColor}; border-radius: 5px;`, "id": `${td}${cell[cellCount]}`, "draggable": "true", "ondragstart": "dragstart_handler(event)", "ondrop": "drop_handler(event)", "ondragover": "dragover_handler(event)"});
        cellCount++;
            
   }
    
    console.log('END OF', day);
   
}
	function subjectColorChoice(subject){
		let colors=['green', 'orange', 'purple', 'indigo',
					'#919191', 'dodgerblue', 'aqua', 'brown',
					'yellow', 'blue', 'pink', 'blue'
		];
		return colors[subjects.indexOf(subject)];
	}
	function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}
}

function countOfSubjectsInTimeTable(){
	let subjectCount=0;
	for(let day in day_subjects){
		for(let subject of day_subjects[day]){
			if((day_subjects[day].length!=0)&&(subject!=undefined)){
				subjectCount++;
			}
		}
	}
	let str='number of subjects on timetable: '+subjectCount;
	return subjectCount;
}

function randomize(object){
	return Math.floor(Math.random()*(object));
}
function checkDaySubjects(){
	let counter=0;
	//console.log('COUNTERBEF',counter);
	for(let day of normal_days){
		if(day_subjects[day].length<5){
			counter++;
			//console.log('check', day);
		}
		//console.log('here',day_subjects[day]);
	};
	
	//console.log('COUNTERAFT',counter);
	return counter;	
}
function main(){
	
		//dailySubjectsGenerator();
		/* let i=0;
		while(i!=5){
			dailySubjectsGenerator();
			i++;
		};  */
		makeDaySubjects();
//checkDaySubjects();
	console.log(day_subjects);
	//console.log('end',weekly_subjects);
	console.log('number of subjects on timetable: '+countOfSubjectsInTimeTable());
}
	
main();