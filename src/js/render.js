import ApiRequest from "./request.js";

export default class Countries {

    static renderCountries(array){
        const tableBody = document.querySelector("tbody")
        
        tableBody.innerText = ""

        const posicao = array.map(function(element) {
            const valor1 = 0
            const object = {}
            object.country = element.country
            object.img = element.flag_url
            object.medal_bronze = element.medal_bronze
            object.medal_gold = element.medal_gold
            object.medal_silver = element.medal_silver
            object.totalMedalha = valor1 + element.medal_gold + element.medal_silver + element.medal_bronze
            return object
        })
        
        const organizar = posicao.sort(function(a, b) {
            return b.totalMedalha - a.totalMedalha
        })
        
        organizar.forEach((product, index) => {
            

            const country = Countries.createCountry(product, index)

            tableBody.appendChild(country)
        })
    }

    static createCountry(country, index){
        const tr = document.createElement("tr")
        const tdPosition =  document.createElement("td")
        const imgFlag = document.createElement("img")
        const tdNameCountry = document.createElement("td")
        const tdGoldMedal = document.createElement("td")
        const tdSilverMedal = document.createElement("td")
        const tdBronzeMedal = document.createElement("td")
        const tdTotalMedal = document.createElement("td")

        tdPosition.innerText = index + 1
        imgFlag.innerText = country.flag_url
        tdNameCountry.innerText = country.country
        tdGoldMedal.innerText = Number(country.medal_gold)
        tdSilverMedal.innerText = Number(country.medal_silver)
        tdBronzeMedal.innerText = Number(country.medal_bronze)
        tdTotalMedal.innerText = Number(country.medal_gold) + Number(country.medal_silver) + Number(country.medal_bronze)

        tdNameCountry.append(imgFlag)
        tr.append(tdPosition, tdNameCountry, tdGoldMedal, tdSilverMedal, tdBronzeMedal, tdTotalMedal)
        
        return tr
    }
    
    static searchCountry(country) {
        const search = document.querySelector("#search")
        const btnSearch = document.querySelector(".btnSearch")
        
        btnSearch.addEventListener("click", async () => {
            let value = search.value.toLowerCase().trim()
            const newSearch = country.filter((element) => element.country.toLowerCase().trim() == value)

            Countries.renderCountries(newSearch)
        })
    }

    static organizeByPosition(array) {
        const tableBody = document.querySelector("tbody")
        const btnPosicao = document.querySelector("#btnPosicao")
        const imgBtn = document.querySelector("#imgBtn")
        console.log(imgBtn)
        const posicao = array.map(function(element) {
            const valor1 = 0
            const object = {}
            object.country = element.country
            object.img = element.flag_url
            object.medal_bronze = element.medal_bronze
            object.medal_gold = element.medal_gold
            object.medal_silver = element.medal_silver
            object.totalMedalha = valor1 + element.medal_gold + element.medal_silver + element.medal_bronze
            return object
        })
        btnPosicao.addEventListener("click", (event) => {
            event.preventDefault()
            let organizar = {}

            tableBody.innerText = ""
            if(imgBtn.src == "src/img/seta.png") {
                imgBtn.src = "src/img/setaCima.png"
                organizar = posicao.sort(function(a,b) {
                    return a.totalMedalha - b.totalMedalha
                })

            } else {
                imgBtn.src = "src/img/seta.png"
                return organizar = Countries.renderCountries(posicao)
            }
    
            organizar.forEach((product, index) => { 
    
                const country = Countries.createCountry(product, index)
        
                tableBody.appendChild(country)
            })
        })
    }


    static organizeByMedalGold() {

    }
}

const countries = await ApiRequest.listCountries()
Countries.renderCountries(countries)
Countries.searchCountry(countries)
Countries.organizeByPosition(countries)