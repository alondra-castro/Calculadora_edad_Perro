
document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculateButton");
    if (calculateButton) {
        calculateButton.addEventListener("click", function() {
            calculate();
        });
    }
});


function calculate() {
    const breed = document.getElementById("breed").value;
    const ageType = document.getElementById("ageType").value;
    const age = parseFloat(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);

    // Obtener valores específicos según la raza seleccionada
    const breedParameters = getBreedParameters(breed);
   
    // Realizar cálculos usando breedParameters y otros valores de entrada
    const ageInYears = ageType === "months" ? age / 12 : age;
    const ageInHumanYears = calculateAgeInHumanYears(ageInYears);
    const dailyCalories = calculateDailyCalories(weight, breedParameters.caloriesFactor);
    const exerciseMinutes = calculateExerciseMinutes(breedParameters.exerciseFactor);
    const recommendedFoodAmount = calculateFoodAmount(breed, weight, age);
    const recommendedTreatsAmount = calculateTreatsAmount(weight, ageInYears) ;
    const calculatedActivityLevel = calculateActivityLevel(weight, ageInYears);
    // Mostrar resultados
    const results = `
        Raza: ${breedParameters.name}<br>
       Edad de los perros actualmente ${age} ${ageType}<br>
        Edad en años humanos: ${ageInHumanYears}<br>
        Calorías diarias a quemar recomendadas: ${dailyCalories} kcal<br>
        Minutos de ejercicio recomendados: ${exerciseMinutes} minutos<br>
        La cantidad recomendada de alimento para tu perro es ${recommendedFoodAmount} gramos por día.<br>
        La cantidad recomendada de premios para tu perro es ${recommendedTreatsAmount} gramos de premios por día.<br>
        El nivel Actual de Actividad en tu perro es ${calculatedActivityLevel}.<br>

    `;

    document.getElementById("results").innerHTML = results;
}


function getBreedParameters(breed) {
    const breedParameters = {
       
        german_shepherd: {
            name: "Pastor Alemán",
            caloriesFactor: 35,
            exerciseFactor: 75
        },
        chihuahua: {
            name: "Chihuahua",
            caloriesFactor: 20,
            exerciseFactor: 20
        },
        chihuahua_mix: {
            name: "Chihuahua Mix",
            caloriesFactor: 22,
            exerciseFactor: 25
        },
        pitbull: {
            name: "Pitbull",
            caloriesFactor: 28,
            exerciseFactor: 50
        },
        pitbull_mix: {
            name: "Pitbull Mix",
            caloriesFactor: 30,
            exerciseFactor: 55
        },
        australian_shepherd: {
            name: "Australian Shepherd",
            caloriesFactor: 30,
            exerciseFactor: 60
        },
        boxer: {
            name: "Bóxer",
            caloriesFactor: 25,
            exerciseFactor: 45
        },
        dogo_canario: {
            name: "Dogo Canario",
            caloriesFactor: 35,
            exerciseFactor: 60
        },
       
        berner_sennenhund: {
            name: "Boyero de Berna",
            caloriesFactor: 28,
            exerciseFactor: 50
        },
        belgian_malinois: {
            name: "Pastor Belga Malinois",
            caloriesFactor: 30,
            exerciseFactor: 70
        },
        cane_corso: {
            name: "Cane Corso",
            caloriesFactor: 35,
            exerciseFactor: 60
        },
        shetland_sheepdog: {
            name: "Pastor de Shetland",
            caloriesFactor: 25,
            exerciseFactor: 40
        },
        lhasa_apso: {
            name: "Lhasa Apso",
            caloriesFactor: 18,
            exerciseFactor: 30
        },
        welsh_corgi_cardigan: {
            name: "Welsh Corgi Cardigan",
            caloriesFactor: 25,
            exerciseFactor: 40
        },
        polish_lowland_sheepdog: {
            name: "Pastor Polaco de las Llanuras",
            caloriesFactor: 30,
            exerciseFactor: 60
        },
        rhodesian_ridgeback: {
            name: "Rhodesian Ridgeback",
            caloriesFactor: 28,
            exerciseFactor: 50
        },
        english_setter: {
            name: "Setter Inglés",
            caloriesFactor: 26,
            exerciseFactor: 45
        },
        australian_shepherd: {
            name: "Pastor Australiano",
            caloriesFactor: 30,
            exerciseFactor: 60
        },
        galgo_español: {
            name: "Galgo Español",
            caloriesFactor: 20,
            exerciseFactor: 40
        },


        pastor_polaco_llanuras: {
            name: "Pastor Polaco de las Llanuras",
            caloriesFactor: 35,     
            exerciseFactor: 70      
        },
        puli: {
            name: "Puli",
            caloriesFactor: 20,
            exerciseFactor: 45
        },
        bulldog_americano: {
            name: "Bulldog Americano",
            caloriesFactor: 20,     
            exerciseFactor: 30      
        },
        perro_agua_espanol: {
            name: "Perro de Agua Español",
            caloriesFactor: 25,     
            exerciseFactor: 40      
        },
        braco_aleman: {
            name: "Braco Alemán",
            caloriesFactor: 30,     
            exerciseFactor: 60      
        },
        galgo_espanol: {
            name: "Galgo Español",
            caloriesFactor: 25,     
            exerciseFactor: 45      
        },
        pastor_australiano: {
            name: "Pastor Australiano",
            caloriesFactor: 30,     
            exerciseFactor: 60      
        },
        setter_ingles: {
            name: "Setter Inglés",
            caloriesFactor: 30,     
            exerciseFactor: 60      
        },

        fox_terrier: {
            name: "Fox Terrier",
            caloriesFactor: 22,
            exerciseFactor: 40
        },
        spanish_water_dog: {
            name: "Perro de Agua Español",
            caloriesFactor: 24,
            exerciseFactor: 40
        },
        samoyed: {
            name: "Samoyedo",
            caloriesFactor: 30,
            exerciseFactor: 60
        },
        american_bulldog: {
            name: "Bulldog Americano",
            caloriesFactor: 25,
            exerciseFactor: 50
        },
        american_eskimo_dog: {
            name: "American Eskimo Dog",
            caloriesFactor: 20,
            exerciseFactor: 40
        },
        pyrenean_mountain_dog: {
            name: "Perro de Montaña de los Pirineos",
            caloriesFactor: 30,
            exerciseFactor: 60
        },
        perro_montana_pirineos: {
            name: "Perro de Montaña de los Pirineos",
            caloriesFactor: 35,     
            exerciseFactor: 60      
        },
        bearded_collie: {
            name: "Collie Barbudo",
            caloriesFactor: 28,
            exerciseFactor: 50
        },
        japanese_spitz: {
            name: "Spitz Japonés",
            caloriesFactor: 20,
            exerciseFactor: 40
        },
        giant_schnauzer: {
            name: "Schnauzer Gigante",
            caloriesFactor: 30,
            exerciseFactor: 60
        },
        miniature_pinscher: {
            name: "pinscher miniatura",
            caloriesFactor: 18,
            exerciseFactor: 35
        },
        anatolian_shepherd_dog: {
            name: "Pastor de Anatolia",
            caloriesFactor: 30,
            exerciseFactor: 60
        },
        portuguese_water_dog: {
            name: "Perro de Agua Portugués",
            caloriesFactor: 25,
            exerciseFactor: 50
        },
        ibizan_hound: {
            name: "Podenco Ibicenco",
            caloriesFactor: 18,
            exerciseFactor: 30
        },
        english_pointer: {
            name: "Pointer Inglés",
            caloriesFactor: 25,
            exerciseFactor: 45
        },
        dalmatian: {
            name: "Dálmata",
            caloriesFactor: 25,     
            exerciseFactor: 45      
        },
        american_staffordshire_terrier: {
            name: "Staffordshire Terrier Americano",
            caloriesFactor: 25,
            exerciseFactor: 50
        },
        irish_water_spaniel: {
            name: "Perro de Agua Irlandés",
            caloriesFactor: 25,
            exerciseFactor: 45
        },
        american_akita: {
            name: "Akita Americano",
            caloriesFactor: 30,
            exerciseFactor: 60
        },
        tibetan_terrier: {
            name: "Terrier Tibetano",
            caloriesFactor: 22,
            exerciseFactor: 40
        },
        saluki: {
            name: "Saluki",
            caloriesFactor: 30,
            exerciseFactor: 50
        },
        hungarian_puli: {
            name: "Puli Húngaro",
            caloriesFactor: 20,
            exerciseFactor: 40
        },
        russian_laicika: {
            name: "Laika Ruso",
            caloriesFactor: 28,
            exerciseFactor: 50
        },
       
       
        weimaraner: {
            name: "Braco de Weimar",
            caloriesFactor: 25,
            exerciseFactor: 50
        },
        basset_bleu_de_gascogne: {
            name: "Basset Azul de Gascuña",
            caloriesFactor: 20,
            exerciseFactor: 40
        },
        russian_black_terrier: {
            name: "Terrier Ruso Negro",
            caloriesFactor: 25,
            exerciseFactor: 45
        },
        gordon_setter: {
            name: "Setter Gordon",
            caloriesFactor: 28,
            exerciseFactor: 50
        },
        spanish_hound: {
            name: "Sabueso Español",
            caloriesFactor: 25,
            exerciseFactor: 45
        },
        longhaired_dachshund: {
            name: "Teckel de Pelo Largo",
            caloriesFactor: 18,
            exerciseFactor: 30
        },
        american_pit_bull_terrier: {
            name: "American Pit Bull Terrier",
            caloriesFactor: 28,
            exerciseFactor: 50
        },
       
     
        affenpinscher: {
            name: "Affenpinscher",
            caloriesFactor: 18,
            exerciseFactor: 30
        },
        doberman_pinscher: {
            name: "Doberman Pinscher",
            caloriesFactor: 30,
            exerciseFactor: 60
        },
        austrian_pinscher: {
            name: "Austrian Pinscher (Pincher Austriaco)",
            caloriesFactor: 25,
            exerciseFactor: 45
        },
        belgian_griffon: {
            name: "Belgian Griffon (Grifón Belga)",
            caloriesFactor: 18,
            exerciseFactor: 30
        },
        labrador: {
            name: "Labrador Retriever",
            caloriesFactor: 30,
            exerciseFactor: 60
        },
        bulldog: {
            name: "Bulldog",
            caloriesFactor: 22,
            exerciseFactor: 40
        },
       
        golden_retriever: {
            name: "Golden Retriever",
            caloriesFactor: 32,
            exerciseFactor: 55
        },
        poodle: {
            name: "Poodle",
            caloriesFactor: 25,
            exerciseFactor: 45
        },
      
        rottweiler: {
            name: "Rottweiler",
            caloriesFactor: 30,
            exerciseFactor: 60
        },
        yorkshire_terrier: {
            name: "Yorkshire Terrier",
            caloriesFactor: 18,
            exerciseFactor: 30
        },
        pastor_aleman: {
            name: "Pastor Alemán",
            caloriesFactor: 30,    
            exerciseFactor: 60     
        },
        teckel_pelo_largo: {
            name: "Teckel de Pelo Largo",
            caloriesFactor: 20,    
            exerciseFactor: 30     
        },
        sabueso_espanol: {
            name: "Sabueso Español",
            caloriesFactor: 25,     
            exerciseFactor: 45      
        },
        setter_gordon: {
            name: "Setter Gordon",
            caloriesFactor: 30,     
            exerciseFactor: 60     
        },
        terrier_ruso_negro: {
            name: "Terrier Ruso Negro",
            caloriesFactor: 25,     
            exerciseFactor: 45     
        },
        basset_azul_gascuna: {
            name: "Basset Azul de Gascuña",
            caloriesFactor: 25,     
            exerciseFactor: 45      
        },
        perdiguero_chesapeake_bay: {
            name: "Perdiguero de Chesapeake Bay",
            caloriesFactor: 30,     
            exerciseFactor: 60      
        },
        perro_agua_frances: {
            name: "Perro de Agua Francés",
            caloriesFactor: 25,     
            exerciseFactor: 40      
        },
        lebrel_escoces: {
            name: "Lebrel Escocés",
            caloriesFactor: 30,     
            exerciseFactor: 60      
        },
        chihuahua_pelo_largo: {
            name: "Chihuahua de Pelo Largo",
            caloriesFactor: 20,     
            exerciseFactor: 25      
        },
        laika_ruso: {
            name: "Laika Ruso",
            caloriesFactor: 30,     
            exerciseFactor: 60      
        },
        puli_hungaro: {
            name: "Puli Húngaro",
            caloriesFactor: 25,     
            exerciseFactor: 45      
        },
        terrier_tibetano: {
            name: "Terrier Tibetano",
            caloriesFactor: 20,     
            exerciseFactor: 30      
        },
        podenco_ibicenco: {
            name: "Podenco Ibicenco",
            caloriesFactor: 25,     
            exerciseFactor: 40      
        },
        perro_agua_portugues: {
            name: "Perro de Agua Portugués",
            caloriesFactor: 30,     
            exerciseFactor: 60      
        },
        pastor_anatolia: {
            name: "Pastor de Anatolia",
            caloriesFactor: 25,     
            exerciseFactor: 45      
        },
        pinscher_miniatura: {
            name: "Pinscher Miniatura",
            caloriesFactor: 20,     
            exerciseFactor: 30      
        },
        schnauzer_gigante: {
            name: "Schnauzer Gigante",
            caloriesFactor: 35,     
            exerciseFactor: 60      
        },
        spitz_japones: {
            name: "Spitz Japonés",
            caloriesFactor: 25,     
            exerciseFactor: 40      
        },
        collie_barbudo: {
            name: "Collie Barbudo",
            caloriesFactor: 30,     
            exerciseFactor: 60      
        },
        akita_americano: {
            name: "Akita Americano",
            caloriesFactor: 25,     
            exerciseFactor: 60      
        },
        perro_agua_irlandes: {
            name: "Perro de Agua Irlandés",
            caloriesFactor: 30,     
            exerciseFactor: 60      
        },
        san_bernardo: {
            name: "San Bernardo",
            caloriesFactor: 40,    
            exerciseFactor: 30     
        },
        pointer_ingles: {
            name: "Pointer Inglés",
            caloriesFactor: 30,     
            exerciseFactor: 60      
        },
        staffordshire_terrier_americano: {
            name: "Staffordshire Terrier Americano",
            caloriesFactor: 28,     
            exerciseFactor: 50      
        },
        pastor_shetland: {
            name: "Pastor de Shetland",
            caloriesFactor: 30,     
            exerciseFactor: 45      
        },
        boyero_berna: {
            name: "Boyero de Berna",
            caloriesFactor: 35,     
            exerciseFactor: 70      
        },
        pastor_belga_malinois: {
            name: "Pastor Belga Malinois",
            caloriesFactor: 40,     
            exerciseFactor: 80      
        },
        setter_irlandes: {
            name: "Setter Irlandés",
            caloriesFactor: 30,     
            exerciseFactor: 60      
        },
        braco_weimar: {
            name: "Braco de Weimar",
            caloriesFactor: 30,    
            exerciseFactor: 60   
        },
        dachshund: {
            name: "Dachshund",
            caloriesFactor: 18,
            exerciseFactor: 30
        },
        shih_tzu: {
            name: "Shih Tzu",
            caloriesFactor: 18,
            exerciseFactor: 35
        },
       
               
       
        miniature_schnauzer: {
            name: "Schnauzer Miniatura",
            caloriesFactor: 20,
            exerciseFactor: 40
        },  
     
    
        irish_setter: {
            name: "Setter Irlandés",
            caloriesFactor: 34,
            exerciseFactor: 65
        },
      
      
        german_shorthaired_pointer: {
            name: "Braco Alemán",
            caloriesFactor: 25,
            exerciseFactor: 50
        },
        irish_wolfhound: {
            name: "Irish Wolfhound",
            caloriesFactor: 30,
            exerciseFactor: 45
        },
     
        
       
        longhaired_chihuahua: {
            name: "Chihuahua de Pelo Largo",
            caloriesFactor: 18,
            exerciseFactor: 30
        },
        bichon_maltese: {
            name: "Bichón Maltés",
            caloriesFactor: 18,
            exerciseFactor: 30
        },
        scottish_deerhound: {
            name: "Lebrel Escocés",
            caloriesFactor: 30,
            exerciseFactor: 50
        },
        french_water_dog: {
            name: "Perro de Agua Francés",
            caloriesFactor: 20,
            exerciseFactor: 40
        },
        chesapeake_bay_retriever: {
            name: "Perdiguero de Chesapeake Bay",
            caloriesFactor: 30,
            exerciseFactor: 60
        },
       
        staffordshire_bull_terrier: {
            name: "Staffordshire Bull Terrier",
            caloriesFactor: 22,
            exerciseFactor: 45
        },
        american_bully: {
            name: "American Bully",
            caloriesFactor: 25,
            exerciseFactor: 50
        },
       
        german_pinscher: {
            name: "German Pinscher (Pincher Alemán)",
            caloriesFactor: 25,
            exerciseFactor: 45
        },
       
      
        beagle: {
            name: "Beagle",
            caloriesFactor: 26,
            exerciseFactor: 50
        },
       
        
       
        siberian_husky: {
            name: "Siberian Husky",
            caloriesFactor: 28,
            exerciseFactor: 60
        },
        pug: {
            name: "Pug",
            caloriesFactor: 18,
            exerciseFactor: 35
        },
        border_collie: {
            name: "Border Collie",
            caloriesFactor: 30,
            exerciseFactor: 60
        },
        doberman: {
            name: "Doberman",
            caloriesFactor: 30,
            exerciseFactor: 60
        },
        boston_terrier: {
            name: "Boston Terrier",
            caloriesFactor: 22,
            exerciseFactor: 40
        },
        cocker_spaniel: {
            name: "Cocker Spaniel",
            caloriesFactor: 25,
            exerciseFactor: 50
        },
       
        french_bulldog: {
            name: "Bulldog Francés",
            caloriesFactor: 20,
            exerciseFactor: 40
        },
        bulldog_frances: {
            name: "Bulldog Francés",
            caloriesFactor: 25,     
            exerciseFactor: 30      
        },
        pomeranian: {
            name: "Pomerania",
            caloriesFactor: 18,
            exerciseFactor: 30
        },
        bichon_frise: {
            name: "Bichon Frisé",
            caloriesFactor: 18,
            exerciseFactor: 30
        },
      
        papillon: {
            name: "Papillon",
            caloriesFactor: 18,
            exerciseFactor: 30
        },
        maltese: {
            name: "Maltese",
            caloriesFactor: 18,
            exerciseFactor: 30
        },
        mixed_breed: {
            name: "Raza mixta (Mestizo)",
            caloriesFactor: 20,
            exerciseFactor: 40
        },
        raza_mixta: {
            name: "Raza mixta (Mestizo)",
            caloriesFactor: 25,     
            exerciseFactor: 40    
        },
        bull_terrier: {
            name: "Bull Terrier",
            caloriesFactor: 22,
            exerciseFactor: 40
        },
        chow_chow: {
            name: "Chow Chow",
            caloriesFactor: 28,
            exerciseFactor: 45
        },
        akita_inu: {
            name: "Akita Inu",
            caloriesFactor: 30,
            exerciseFactor: 60
        },
        west_highland_white_terrier: {
            name: "West Highland White Terrier",
            caloriesFactor: 20,
            exerciseFactor: 40
        },
        miniature_poodle: {
            name: "Poodle Miniatura",
            caloriesFactor: 22,
            exerciseFactor: 40
        },
        poodle_miniatura: {
            name: "Poodle Miniatura",
            caloriesFactor: 20,     
            exerciseFactor: 30     
        },
        cavalier_king_charles_spaniel: {
            name: "Cavalier King Charles Spaniel",
            caloriesFactor: 20,
            exerciseFactor: 40
        },
        dogo_argentino: {
            name: "Dogo Argentino",
            caloriesFactor: 30,
            exerciseFactor: 60
        },
        toy_poodle: {
            name: "Poodle Toy",
            caloriesFactor: 18,
            exerciseFactor: 35
        },
        poodle_toy: {
            name: "Poodle Toy",
            caloriesFactor: 15,     
            exerciseFactor: 20     
        },
        caniche: {
            name: "Caniche",
            caloriesFactor: 18,
            exerciseFactor: 30
        },
        shar_pei: {
            name: "Shar Pei",
            caloriesFactor: 25,
            exerciseFactor: 45
        },
        collie: {
            name: "Collie",
            caloriesFactor: 28,
            exerciseFactor: 50
        },
        great_dane: {
            name: "Gran Danés",
            caloriesFactor: 35,
            exerciseFactor: 75
        },
        scottish_terrier: {
            name: "Terrier Escocés",
            caloriesFactor: 18,
            exerciseFactor: 30
        },
        basenji: {
            name: "Basenji",
            caloriesFactor: 22,
            exerciseFactor: 40
        },
        terrier_escoces: {
            name: "Terrier Escocés",
            caloriesFactor: 20,     
            exerciseFactor: 30      
        },
        gran_danes: {
            name: "Gran Danés",
            caloriesFactor: 35,     
            exerciseFactor: 60      
        },
        dalmatian: {
            name: "Dálmata",
            caloriesFactor: 30,
            exerciseFactor: 60
        },
     
        pug_carlino: {
            name: "Pug Carlino",
            caloriesFactor: 18,
            exerciseFactor: 35
        },
        basset_hound: {
            name: "Basset Hound",
            caloriesFactor: 20,
            exerciseFactor: 40
        },
        dogo_de_burdeos: {
            name: "Dogo de Burdeos",
            caloriesFactor: 35,
            exerciseFactor: 60
        },
        shiba_inu: {
            name: "Shiba Inu",
            caloriesFactor: 20,
            exerciseFactor: 40
        },
        alaskan_malamute: {
            name: "Alaskan Malamute",
            caloriesFactor: 30,
            exerciseFactor: 60
        },
        welsh_corgi_pembroke: {
            name: "Welsh Corgi Pembroke",
            caloriesFactor: 22,
            exerciseFactor: 40
        },
        chinese_crested_dog: {
            name: "Crestado Chino",
            caloriesFactor: 18,
            exerciseFactor: 30
        }
      
        // Agregar más razas y parámetros aquí
    };

    return breedParameters[breed];
}

function calculateAgeInHumanYears(age) {
    if (age === 1) {
        return 15;
    } else if (age === 2) {
        return 24;
    } else {
        return 24 + (age - 2) * 4;
    }
}

function calculateDailyCalories(weight, caloriesFactor) {
    const dailyCalories = caloriesFactor * weight;
    return dailyCalories.toFixed(2);
}

function calculateExerciseMinutes(exerciseFactor) {
    return exerciseFactor;
}

function calculateFoodAmount(breed, weight, age) {
    const breedParameters = getBreedParameters(breed);

    // Calcula el factor de edad
    let ageFactor = 1.0;
    if (age < 1) {
        ageFactor = 2.5; // Cachorro
    } else if (age < 7) {
        ageFactor = 1.0; // Adulto
    } else {
        ageFactor = 0.8; // Senior
    }

    // Calcula la cantidad de alimento
    const foodAmount = (weight * breedParameters.caloriesFactor * ageFactor).toFixed(2);
    return foodAmount;
}
function calculateActivityLevel(weight, ageInYears) {
    let calculatedActivityLevel = '0';

    if (weight <= 5) {
        calculatedActivityLevel = 'sedentary';
    } else if (weight <= 15) {
        calculatedActivityLevel = 'moderate';
    } else {
        calculatedActivityLevel = 'active';
    }

       if (ageInYears <= 1) {
            calculatedActivityLevel = 'active';
        } else if (ageInYears <= 7) {
            calculatedActivityLevel = 'moderate';
        }else{
            calculatedActivityLevel = 'sedentary';
        }
    

    // Puedes agregar más lógica aquí para otras razas y factores

    return calculatedActivityLevel;
}


function calculateTreatsAmount(weight, ageInYears) {
    // Obtén el nivel de actividad según la raza y otros factores
    const activityLevel = calculateActivityLevel(weight, ageInYears, breed);

    // Define los factores según el nivel de actividad
    const activityFactors = {
        sedentary: 0.5,    // Nivel de actividad bajo
        moderate: 1.0,     // Nivel de actividad moderado
        active: 1.5        // Nivel de actividad alto
    };

    // Calcula la cantidad de premios
    const treatAmount = (weight * activityFactors[activityLevel]).toFixed(2);
    return treatAmount;
}





