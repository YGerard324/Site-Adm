var quizSteps = $('#quizzie .quiz-step'),
    missCount = [0, 0, 0], // Track misses for each group
    resultGroups = [[], [], []]; // Track answers for each group

// Quiz result options
var resultOptions = [
  { title: 'MATRIZ DE EISENHOWER', desc: '<p>Leia mais em:</p><br></br><img src="https://hexdocs.pm/qr_code/docs/qrcode.svg"/>' },
  { title: 'EAT THAT FROG', desc: '<p>Leia mais em:</p><br></br><img src="https://hexdocs.pm/qr_code/docs/qrcode.svg"/>' },
  { title: 'METÓDO 52/17', desc: '<p>Leia mais em:</p><br></br><img src="https://hexdocs.pm/qr_code/docs/qrcode.svg"/>' }
];

// For each step in the quiz, add the selected answer value to the total score
quizSteps.each(function () {
    var currentStep = $(this),
        ansOpts = currentStep.children('.quiz-answer');
    // For each option per step, add a click listener
    ansOpts.each(function () {
        var eachOpt = $(this);
        eachOpt[0].addEventListener('click', check, false);
        function check() {
            var $this = $(this),
                answerValue = $this.attr('data-answer') === 'true',
                groupIndex = parseInt($this.attr('data-group'));
            
            // Check to see if an answer was previously selected
            if (currentStep.children('.active').length > 0) {
                var wasActive = currentStep.children('.active'),
                    oldAnswerValue = wasActive.attr('data-answer') === 'false',
                    oldGroupIndex = parseInt(wasActive.attr('data-group'));
                
                // Handle visual active state
                currentStep.children('.active').removeClass('active');
                $this.addClass('active');
                
                // Update miss count if necessary
                if (oldAnswerValue) {
                    missCount[oldGroupIndex]--;
                }
                if (!answerValue) {
                    missCount[groupIndex]++;
                }

                // Handle the score calculation
                calcResults();
            } else {
                // Handle visual active state
                $this.addClass('active');

                // Update miss count if necessary
                if (!answerValue) {
                    missCount[groupIndex]++;
                }

                // Handle current step
                updateStep(currentStep);
                calcResults();
            }
        }
    });
});

// Show current step/hide other steps
function updateStep(currentStep) {
    if (currentStep.hasClass('current')) {
        currentStep.removeClass('current');
        currentStep.next().addClass('current');
    }
}

// Display scoring results
function calcResults() {
    // Only update the results div if all questions have been answered
    if (quizSteps.find('.active').length == quizSteps.length) {
        var resultsTitle = $('#results h1'),
            resultsDesc = $('#results .desc');
            resultsImg = ('<p>Acesse pelo Qrcode:</p><img src="../assets/img/QRCode_Fácil.jpg" style="max-width: 350px; max-height: 350px; width: auto; height: auto;"/><div><a href="https://1drv.ms/b/s!AuwMuWsj-nUVpRCvmHyby6JDh1v8?e=ck2hFF" target="_blank"><h2>ou clique aqui</h2></a></div>');

        
        var results = [];

        // Determine final result based on miss counts
        for (var i = 0; i < missCount.length; i++) {
            if (missCount[i] < 2) {
                results.push(resultOptions[i]);
            }
        }

        if (results.length > 0) {
            var resultTitles = results.map(function(result) {
                return result.title;
            }).join(", ");

            var resultDescriptions = results.map(function(result) {
                return result.desc;
            }).join("");

            resultsTitle.text("Métodos que se adequam a você: " + resultTitles);
            // resultsDesc.html(resultDescriptions);

            resultsTitle.append(resultsImg);

        } else {
            resultsTitle.text("NADA");
            resultsDesc.text("NENHUM DOS MÉTODOS APRESENTADOS VAI FUNCIONAR");
        }
    }
}
