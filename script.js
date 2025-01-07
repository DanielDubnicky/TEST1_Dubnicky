const form = document.getElementById('myForm');
        const resultParagraph = document.getElementById('result');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            var firstName = form.firstname.value;
            var city = form.city.value;

            // Funkce pro spočítání samohlásek a souhlásek
            function countVowelsAndConsonants(str) {
                const vowels = 'aeiouAEIOUáéíóúů';
                const consonants = "HhkKrRdDtTnNŽžšŠčČřŘcCjJďĎťŤňŇbBfFLlMmPpSsVvZz";
                let vowelCount = 0;
                let consonantCount = 0;

                for (let i = 0; i < str.length; i++) {
                    if (vowels.includes(str[i])) {
                        vowelCount++;
                    } else if(consonants.includes(str[i])){
                        consonantCount++;
                    }
                }

                return { vowelCount, consonantCount };
            }

            function containsNumberAndSymbols(str){
                const containsNumber = /\d/.test(str);
                const containsSymbols = /[^\w\s]/g.test(str);
                return containsNumber || containsSymbols;
                
            }

            // Spočítáme samohlásky a souhlásky pro jméno a město
            const firstNameCounts = countVowelsAndConsonants(firstName);
            const cityCounts = countVowelsAndConsonants(city);

            // Sestavíme výslednou větu

            var result;

            if(containsNumberAndSymbols(firstName) && containsNumberAndSymbols(city)){
                result = `Please enter your name and city`;
            } else if (containsNumberAndSymbols(firstName)){
                result = `Please enter your name`;
            } else if (containsNumberAndSymbols(city)){
                result = `Please enter your city`;
            } else {
                result = `Welcome (${firstName}) from (${city}). There are ${firstNameCounts.vowelCount} vowels in your first name and ${firstNameCounts.consonantCount} consonants in your first name and there are ${cityCounts.vowelCount} vowels in your city and ${cityCounts.consonantCount} consonants in your city.`;
            }
            
            resultParagraph.textContent = result;
        });