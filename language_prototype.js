let languageModule={
				'en':{
						'score-area':['won', 'Moves', 'Time', 'Games won', 'Games Lost'],
						'context-menu':['New game', 'Choose Level', 'Language(fr)', 'Credits' ],
						'buttons':['New Game', 'Exit'],
						'difficulty':['Level', 'Beginner', 'Easy', 'Master', 'Expert']
						},
				'fr':{
						'score-area':['victoires', 'Deplacements', 'Temps', 'Parties gagnées', 'Parties perdues'],
						'context-menu':['Nouvelle partie', 'Niveau', 'Language(en)', 'Credits'],
						'buttons':['Nouvelle Partie', 'Quitter'],
						'difficulty':['Niveau', 'Débutant', 'Facile', 'Maitre', 'Expert']
						}		
			};
			let selectedLanguage='en'; 
			let langModlang=languageModule[selectedLanguage];
			let scoreAreaMobileMarkup=`
				<span class="score_area_mobile_item">${langModlang['score-area'][0]}:</span>
			<p class="score_area_mobile_item">${langModlang['score-area'][1]}:<span class=" turned_card_count"></span></p>
			<span class="score_area_mobile_item">${langModlang['score-area'][2]}:</span>
			<span class="score_area_mobile_item"><i class="fas fa-bars"></i></span>
			<ul class="context_menu">
					<a href="javascript:void(0)"><li>${langModlang['context-menu'][0]}</li></a>
					<a href="javascript:void(0)"><li>${langModlang['context-menu'][1]}</li></a>
					<a href="javascript:void(0)"><li>${langModlang['context-menu'][2]}</li></a>
					<a href="javascript:void(0)"><li>${langModlang['context-menu'][3]}</li></a>
				</ul>
			`;
			$('#score_area_mobile').append(scoreAreaMobileMarkup);
			let scoreAreaMarkup=`
				<div id="icon_status">
				<p>${langModlang['score-area'][1]}:<span class="turned_card_count"></span></p>
				</div>
				<div id="score_status">
				<p>${langModlang['score-area'][3]}:<br>${langModlang['score-area'][4]}:</p>
				</div>
				<div id="buttons">
				<button>${langModlang['buttons'][0]}</button><br>
				<button>${langModlang['buttons'][1]}</button>
				</div>
				<div id="difficulty">
					<p id="diff_level">${langModlang['difficulty'][0]}</p>
					<form method="get" action="#" id="game_difficulty_select">
						<label class="difficulty_buttons"><input type="radio" name="difficulty" value="Beginner" checked>${langModlang['difficulty'][1]}</label>
						<label class="difficulty_buttons"><input type="radio" name="difficulty" value="Easy">${langModlang['difficulty'][2]}</label>
						<label class="difficulty_buttons"><input type="radio" name="difficulty" value="intermediate">${langModlang['difficulty'][3]}</label>
						<label class="difficulty_buttons"><input type="radio" name="difficulty" value="Expert">${langModlang['difficulty'][4]}</label>
					</form>
				</div>
			`;
			$('#score_area').append(scoreAreaMarkup);