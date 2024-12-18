const form = document.getElementById('myForm');
        const resultParagraph = document.getElementById('result');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            var firstName = form.firstname.value;
            var city = form.city.value;

            // Funkce pro spočítání samohlásek a souhlásek
            function countVowelsAndConsonants(str) {
                const vowels = 'aeiouAEIOU';
                let vowelCount = 0;
                let consonantCount = 0;

                for (let i = 0; i < str.length; i++) {
                    if (vowels.includes(str[i])) {
                        vowelCount++;
                    } else {
                        consonantCount++;
                    }
                }

                return { vowelCount, consonantCount };
            }

            function containsNumberAndSymbols(str){
                return /\d/.test(str);
            }

            // Spočítáme samohlásky a souhlásky pro jméno a město
            const firstNameCounts = countVowelsAndConsonants(firstName);
            const cityCounts = countVowelsAndConsonants(city);

            // Sestavíme výslednou větu

            var result;

            if(containsNumber(firstName) && containsNumber(city)){
                result = `Please enter your name and city`;
            } else if (containsNumber(firstName)){
                result = `Please enter your name`;
            } else if (containsNumber(city)){
                result = `Please enter your city`;
            } else {
                result = `Welcome (${firstName}) from (${city}). There are ${firstNameCounts.vowelCount} vowels in your first name and ${firstNameCounts.consonantCount} consonants in your first name and there are ${cityCounts.vowelCount} vowels in your city and ${cityCounts.consonantCount} consonants in your city.`;
            }
            
            resultParagraph.textContent = result;
        });