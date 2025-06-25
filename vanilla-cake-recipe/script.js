const ingredientsSection = document.getElementById('ingredients');
        const toggleButton = document.getElementById('toggle-ingredients');
        const instructionsList = document.getElementById('instructions');
        const startButton = document.getElementById('start-cooking');
        const progressBar = document.getElementById('progress-bar');
        
        let currentStep = 0;
        const totalSteps = instructionsList.children.length;

        toggleButton.addEventListener('click', () => {
            ingredientsSection.classList.toggle('hidden');
            toggleButton.textContent = ingredientsSection.classList.contains('hidden') ? 'Show Ingredients' : 'Hide Ingredients';
        });

        startButton.addEventListener('click', () => {
            if (currentStep < totalSteps) {
                instructionsList.children[currentStep].classList.add('highlight');
                currentStep++;
                progressBar.style.width = `${(currentStep / totalSteps) * 100}%`;
            }
            if (currentStep === totalSteps) {
                startButton.disabled = true;
                startButton.textContent = 'Cooking Complete!';
            }
        });