const form = document.getElementById('myForm');
        const resultParagraph = document.getElementById('result');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            var firstName = form.firstname.value.trim();
            var city = form.city.value.trim();

            // Funkce pro spočítání samohlásek a souhlásek
            function countVowelsAndConsonants(str) {
                const vowelsRegex = /[aeiou\u00E1\u00E9\u00ED\u00F3\u00FA\u016F\u00C1\u00C9\u00CD\u00D3\u00DA\u016A]/i;
                const consonantsRegex = /[bcdfghjklmnpqrstvwxz\u010D\u010F\u0159\u017E\u0161\u0165\u00FD\u017E\u010D\u011B\u0148\u010D\u0159\u016F\u010D\u00F4]/i;
                let vowelCount = 0;
                let consonantCount = 0;

                for (let i = 0; i < str.length; i++) {
                    const char = str[i];
                    if (vowelsRegex.test(char)) {
                        vowelCount++;
                    } else if(consonantsRegex.test(char)){
                        consonantCount++;
                    }
                }

                return { vowelCount, consonantCount };
            }
            console.log("Č")
            function containsNumberAndSymbols(str){
                const containsNumber = /\d/.test(str); //Kontroluje zda obsahuje číslice
                const containsSymbols = /[^\w\s\u010D\u011B\u0161\u010D\u0159\u017E\u00FD\u00E1\u00ED\u00E9\u0148\u00FA\u016F\u0148]/g.test(str); //Kontroluje zda obsahuje symboly
                return containsNumber || containsSymbols;
                
            }

            ;
            // Spočítáme samohlásky a souhlásky pro jméno a město
            const firstNameCounts = countVowelsAndConsonants(firstName);
            const cityCounts = countVowelsAndConsonants(city)
            // Sestavíme výslednou větu

            var result;

            if((containsNumberAndSymbols(firstName) && containsNumberAndSymbols(city)) || ((firstName == "" || firstName == null) && (city == "" || firstName == null))){
                result = `Please enter your name and city`;
            } else if (containsNumberAndSymbols(firstName) || firstName == "" || firstName == null){
                result = `Please enter your name`;
            } else if (containsNumberAndSymbols(city) || city == "" || city == null){
                result = `Please enter your city`;
            } else {
                result = `Welcome (${firstName}) from (${city}). There are ${firstNameCounts.vowelCount} vowels in your first name and ${firstNameCounts.consonantCount} consonants in your first name and there are ${cityCounts.vowelCount} vowels in your city and ${cityCounts.consonantCount} consonants in your city.`;
            }
            
            resultParagraph.textContent = result;
        });