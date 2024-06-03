let left = 0


function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}


setTimeout(() => {
    loadData("Kenya")

    console.log("Kenya Loaded");
}, 100)

function updateCountry() {

    let userInput = document.querySelector('.userInput').value


    loadData(userInput)
}


























function loadOptions() {
    for (x = 0; x < abbrev.length; x++) {

        let curr_abrev = abbrev[x].abbreviation

        curr_abrev = curr_abrev.toLowerCase()


        let current_flag = `countries/${curr_abrev}.jpg`
            // console.log(`Current Flag: ${current_flag}`)
        let slider = document.querySelector('.countrySlider')

        let slide = document.createElement('img')
        slide.id = abbrev[x].country

        slide.className =
            "slide"

        slide.src = `${current_flag}`








        let cn_name = ""

        if (continents[x].country) {

            cn_name = continents[x].country


            slide.addEventListener('click', () => {
                let name = slide.id


                document.querySelector('.userInput').value = name
                loadData(name)
            })
        }


        let continent = continents[x].continent


        let cntry = document.createElement('option')

        cntry.value = cn_name





        if (continent === "Africa") {
            console.log(continent);
            countryList.append(cntry)
            slider.append(slide)
                // console.log("woza");
        }
    }
}



loadOptions()






function loadData(country) {

    // let country = country


    let userInput = country





    let cn_image = document.querySelector('.current_country')


    let title = document.querySelector('.title')

    let capital = document.querySelector('.capital')

    let population = document.querySelector('.population')

    let surfaceArea = document.querySelector('.surfaceArea')

    let countryList = document.querySelector('#countryList')

    let religion = document.querySelector('.religion')

    let currency = document.querySelector('.currency')

    let region = document.querySelector('.region')

    let coastline = document.querySelector('.coastLine')

    let callingCode = document.querySelector('.callingCode')

    let avgTemp = document.querySelector('.avgTemp')

    let languageList = document.querySelector('.languageList')

    let lifeExpectancy = document.querySelector('.lifeExpectancy')


    userInput = userInput.toLowerCase()



    // Update Flag
    for (x = 0; x < abbrev.length; x++) {

        let cn_name = abbrev[x].country





        // let cntry = document.createElement('option')

        // cntry.value = cn_name

        // countryList.append(cntry)


        cn_name = cn_name.toLowerCase()

        let cn_abv = abbrev[x].abbreviation


        cn_abv = cn_abv.toLowerCase()

        if (userInput === cn_name) {

            cn_image.src = `countries/${cn_abv}.jpg`

            title.innerHTML = `${cn_name}`

            break

        }

    }



    // Update Capital
    for (x = 0; x < allCapitals.length; x++) {

        let cn_name = allCapitals[x].country

        cn_name = cn_name.toLowerCase()

        let cn_capital = allCapitals[x].city


        // cn_abv = cn_abv.toLowerCase()

        if (userInput === cn_name) {

            // cn_image.src = `countries/${cn_abv}.jpg`

            capital.innerHTML = `Capital: ${cn_capital}`

            break

        }

    }


    // Update Population
    for (x = 0; x < allPopulation.length; x++) {

        let cn_name = allPopulation[x].country




        cn_name = cn_name.toLowerCase()

        let cn_population = allPopulation[x].population


        let totalPop = Number(cn_population)






        totalPop = numberWithCommas(totalPop)


        cn_population = totalPop




        for (let index = 0; index < cn_population.length; index++) {
            // console.log(index);

        }


        if (userInput === cn_name) {


            // cn_image.src = `countries/${cn_population}.jpg`

            population.innerHTML = `Population: ${cn_population}👥`

            break

        }

    }



    // Update Surface Area



    function updateDataset(title = String, jsonLibrary = Array, propertyHtml = HTMLElement, dataproperty = String, visualTitle = String) {


        let dataHtml = propertyHtml

        // console.log(dataHtml.innerHTML);

        for (x = 0; x < jsonLibrary.length; x++) {

            let dataset = jsonLibrary[x].country
                // console.log(dataset);

            dataset = dataset.toLowerCase()

            let data = jsonLibrary[x][dataproperty]


            if (userInput === dataset) {

                // cn_image.src = `countries/${cn_population}.jpg`

                if (title === "surfaceArea") {
                    data = Number(data)
                    data = numberWithCommas(data)
                    dataHtml.innerHTML = `${visualTitle}: ${data} KM²`

                } else if (title === "Average Temperature") {
                    dataHtml.innerHTML = `${visualTitle}: ${data} °C`
                } else if (title === "Life Expectancy") {
                    dataHtml.innerHTML = `${visualTitle}: ${data} Years.`
                } else if (title === "Languages") {
                    dataHtml.innerHTML = `Languages: `

                    for (let index = 0; index < data.length; index++) {
                        const element = data[index];



                        if (index === (data.length - 1)) {

                            dataHtml.innerHTML += `${element}. 
                        
                        `
                        } else {
                            dataHtml.innerHTML += `${element}, 
                        
                        `
                        }

                    }

                } else if (title === "Coastline") {
                    dataHtml.innerHTML = `${visualTitle}: ${data} KM`
                } else {
                    dataHtml.innerHTML = `${visualTitle}: ${data} `
                }





                break

            }

        }

        console.log("updateSet");



    }

    updateDataset("surfaceArea", allAreas, surfaceArea, "area", "Surface Area")

    updateDataset("region", regions, region, "location", "Region")

    updateDataset("religion", religions, religion, "religion", "Religion")


    updateDataset("Average Temperature", averageTemps, avgTemp, "temperature", "Average Temperature")

    // updateDataset("currency", currencyNames, currency, "currency_name", "Currency")

    updateDataset("Languages", languages, languageList, "languages", "Languages")

    updateDataset("Life Expectancy", lifeExpectancies, lifeExpectancy, "expectancy", "Life Expectancy")


    updateDataset("Coastline", coastlines, coastline, "costline", "CoastLine")





    for (x = 0; x < currencyNames.length; x++) {

        let cn_name = currencyNames[x].country
        let currency_code = currencyCodes[x].currency_code

        cn_name = cn_name.toLowerCase()

        let cur_currency = currencyNames[x].currency_name


        if (userInput === cn_name) {

            // cn_image.src = `countries/${cn_population}.jpg`

            currency.innerHTML = `Currency: ${cur_currency} (${currency_code}) `

            break

        }

    }





}












function viewData() {

    console.log("Result");

    let resultView = document.querySelector('.result')

    resultView.style = "min-height:600px"
}





function flagTrigger() {
    let slides = document.querySelectorAll('.slides')

    slides.forEach(slide => {


    })
}




function slideLeft() {
    left = left

    let pos = left - 100

    left = pos

    let countrySlider = document.querySelector('.countrySlider')


    countrySlider.scrollLeft = pos
}