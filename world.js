let left = 0


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
        console.log(`Current Flag: ${current_flag}`)
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
                loadData(name)
            })
        }


        let continent = continents[x].continent


        let cntry = document.createElement('option')

        cntry.value = cn_name


        countryList.append(cntry)


        if (continent === "Africa") {

            slider.append(slide)
            console.log("woza");
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


        for (let index = 0; index < cn_population.length; index++) {
            console.log(index);

        }


        if (userInput === cn_name) {

            // cn_image.src = `countries/${cn_population}.jpg`

            population.innerHTML = `Population: ${cn_population}`

            break

        }

    }



    // Update Surface Area


    for (x = 0; x < allAreas.length; x++) {

        let cn_name = allAreas[x].country

        cn_name = cn_name.toLowerCase()

        let cn_area = allAreas[x].area


        if (userInput === cn_name) {

            // cn_image.src = `countries/${cn_population}.jpg`

            surfaceArea.innerHTML = `Surface Area: ${cn_area}`

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