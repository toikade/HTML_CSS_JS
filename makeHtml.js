//let blockCounter=1;
function makeHtmlTable(){
	/* function makeStyleSheet(fileName){
		let link=$('<link />',{
			rel:'stylesheet',
			type:'text/css',
			href:fileName
		})
		return link;
	};
	$('link[href="textinputmodal.css"]').remove();
	console.log(makeStyleSheet('textinputmodal.css'));
	$('head').append(makeStyleSheet('time_table.css')); */
	//create div element with jquery
	//let $tableDiv=$('<div class="tableDiv"></div>');
	let messageBody=document.createElement('table');
		messageBody.id="table1";
	/* messageBody.innerHTML=`<div width="100px" height="200px" style="border:2px solid black">hello</div>`;
	 */	messageBody.innerHTML=`<thead role="rowgroup"><tr role="row"><th role="columnheader"></th><th role="columnheader">Monday</th><th role="columnheader">Tuesday</th><th role="columnheader">Wednesday</th><th role="columnheader">Thursday</th><th role="columnheader">Friday</th><th role="columnheader">Saturday</th></tr></thead><tbody role="rowgroup"><tr role="row"><td role="cell">7:30 - 8:30</td><td role="cell" class="subject_cell" draggable="true"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td></tr><tr role="row"><td role="cell">8:30 - 9:30</td> <td role="cell" class="subject_cell" draggable="true" ></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td></tr><tr role="row"><td role="cell">9:30 - 10:30</td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td></tr><tr role="row"><td role="cell">10:30 - 11:00</td><td role="cell" colspan="6">BREAK</td></tr><tr role="row"><td role="cell">11:00 - 12:00</td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td></tr><tr role="row"><td role="cell">12:00 - 13:00</td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td></tr><tr role="row"><td role="cell">13:00 - 13:15</td><td role="cell" colspan="6">BREAK</td></tr><tr role="row"><td role="cell">13:15 - 14:15</td><td role="cell" class="subject_cell"> </td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell" ondrop(e)="e.preventDefault()"> </td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"> </td></tr><tr role="row"><td role="cell">14:15 - 15:15</td><td role="cell" class="subject_cell"> </td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"> </td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"> </td></tr><tr role="row"><td role="cell">15:15 - 16:15</td><td role="cell" class="subject_cell"> </td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"> </td><td role="cell" class="subject_cell"></td><td role="cell" class="subject_cell"></td></tr></tbody>`;
	$(`#class${blockCounter}`).append(messageBody);
	//add newly created table to created div
	//$tableDiv.append(messageBody);
	//prepend div to created document body
	//$('script').first().before($tableDiv);
//documentBody.appendChild(messageBody);
};
//makeHtmlTable();