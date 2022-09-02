import ApiRequest from "./request.js";

export default class Countries {

    static renderCountries(array){
        const tableBody = document.querySelector("tbody")
        
        tableBody.innerText = ""

        const posicao = Countries.newObjectMap(array)
        
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
        const divImg = document.createElement("div")
        const imgFlag = document.createElement("img")
        const tdNameCountry = document.createElement("td")
        const tdGoldMedal = document.createElement("td")
        const tdSilverMedal = document.createElement("td")
        const tdBronzeMedal = document.createElement("td")
        const tdTotalMedal = document.createElement("td")

        divImg.classList.add("divImg")
        tdNameCountry.classList.add("tdName")
        tdPosition.innerText = index + 1
        imgFlag.src = country.flag_url
        tdNameCountry.innerText = country.country
        tdGoldMedal.innerText = Number(country.medal_gold)
        tdSilverMedal.innerText = Number(country.medal_silver)
        tdBronzeMedal.innerText = Number(country.medal_bronze)
        tdTotalMedal.innerText = Number(country.medal_gold) + Number(country.medal_silver) + Number(country.medal_bronze)

        divImg.append(imgFlag)
        tdNameCountry.append(divImg)
        tr.append(tdPosition, tdNameCountry, tdGoldMedal, tdSilverMedal, tdBronzeMedal, tdTotalMedal)
        
        return tr
    }
    
    static searchCountry(country) {
        const search = document.querySelector("#search")
        const btnSearch = document.querySelector(".btnSearch")
        
        btnSearch.addEventListener("click", async () => {
            let value = search.value.toLowerCase().trim()
            if(value == "") {
                Countries.renderCountries(country)
            } else {
                const newSearch = country.filter((element) => element.country.toLowerCase().trim() == value)
    
                Countries.renderCountries(newSearch)
            }
        })
    }

    static organizeByPosition(array) {
        const tableBody = document.querySelector("tbody")
        const btnPosicao = document.querySelector("#btnPosicao")
        const imgPosicao = document.querySelector('#imgPosicao')

        const posicao = Countries.newObjectMap(array)
        
        btnPosicao.addEventListener("click", (event) => {
            event.preventDefault()
            btnPosicao.classList.add("maior")
            let organizar = {}

            tableBody.innerText = ""

            if(btnPosicao.classList == "maior") {
                btnPosicao.classList.remove("maior")
                btnPosicao.classList.add("menor")
                imgPosicao.src = "src/img/setaCima.png"
                organizar = posicao.sort(function(a,b) {
                    return a.totalMedalha - b.totalMedalha
                })

            } else {
                btnPosicao.classList.remove("menor")
                btnPosicao.classList.add("maior")
                imgPosicao.src = "src/img/seta.png"
                return organizar = Countries.renderCountries(posicao)
            }
    
            organizar.forEach((product, index) => { 
    
                const country = Countries.createCountry(product, index)
        
                tableBody.appendChild(country)
            })
        })
    }


    static organizeByMedalGold(array) {
        const tableBody = document.querySelector("tbody")
        const btnGold = document.querySelector("#btnGold")
        const imgGold = document.querySelector('#imgGold')

        const posicao = Countries.newObjectMap(array)
        
        btnGold.addEventListener("click", (event) => {
            event.preventDefault()
            btnGold.classList.add("maior")
            let organizar = {}

            tableBody.innerText = ""

            if(btnGold.classList == "maior") {
                btnGold.classList.remove("maior")
                btnGold.classList.add("menor")
                imgGold.src = "src/img/setaCima.png"
                
                organizar = posicao.sort(function(a,b) {
                    return a.medal_gold - b.medal_gold
                })

            } else {
                btnGold.classList.remove("menor")
                btnGold.classList.add("maior")
                imgGold.src = "src/img/seta.png"

                organizar = posicao.sort(function(a,b) {
                    return b.medal_gold - a.medal_gold
                })
            }
    
            organizar.forEach((product, index) => { 
    
                const country = Countries.createCountry(product, index)
        
                tableBody.appendChild(country)
            })
        })
    }

    static organizeByMedalSilver(array) {
        const tableBody = document.querySelector("tbody")
        const btnSilver = document.querySelector("#btnSilver")
        const imgSilver = document.querySelector('#imgSilver')

        const posicao = Countries.newObjectMap(array)
        
        btnSilver.addEventListener("click", (event) => {
            event.preventDefault()
            btnSilver.classList.add("maior")
            let organizar = {}

            tableBody.innerText = ""

            if(btnSilver.classList == "maior") {
                btnSilver.classList.remove("maior")
                btnSilver.classList.add("menor")
                imgSilver.src = "src/img/setaCima.png"

                organizar = posicao.sort(function(a,b) {
                    return a.medal_silver - b.medal_silver
                })

            } else {
                btnSilver.classList.remove("menor")
                btnSilver.classList.add("maior")
                imgSilver.src = "src/img/seta.png"

                organizar = posicao.sort(function(a,b) {
                    return b.medal_silver - a.medal_silver
                })
            }
    
            organizar.forEach((product, index) => { 
    
                const country = Countries.createCountry(product, index)
        
                tableBody.appendChild(country)
            })
        })
    }

    static organizeByMedalBronze(array) {
        const tableBody = document.querySelector("tbody")
        const btnBronze = document.querySelector("#btnBronze")
        const imgBronze = document.querySelector('#imgBronze')

        const posicao = Countries.newObjectMap(array)
        
        btnBronze.addEventListener("click", (event) => {
            event.preventDefault()
            btnBronze.classList.add("maior")
            let organizar = {}

            tableBody.innerText = ""

            if(btnBronze.classList == "maior") {
                btnBronze.classList.remove("maior")
                btnBronze.classList.add("menor")
                imgBronze.src = "src/img/setaCima.png"
                organizar = posicao.sort(function(a,b) {
                    return a.medal_bronze - b.medal_bronze
                })

            } else {
                btnBronze.classList.remove("menor")
                btnBronze.classList.add("maior")
                imgBronze.src = "src/img/seta.png"

                organizar = posicao.sort(function(a,b) {
                    return b.medal_bronze - a.medal_bronze
                })
            }
    
            organizar.forEach((product, index) => { 
    
                const country = Countries.createCountry(product, index)
        
                tableBody.appendChild(country)
            })
        })
    }

    static newObjectMap(array) {
        const posicao = array.map(function(element) {
            const valor1 = 0
            const object = {}
            object.country = element.country
            object.flag_url = element.flag_url
            object.medal_bronze = element.medal_bronze
            object.medal_gold = element.medal_gold
            object.medal_silver = element.medal_silver
            object.totalMedalha = valor1 + element.medal_gold + element.medal_silver + element.medal_bronze
            return object
        })

        return posicao
    }
}

const countries = await ApiRequest.listCountries()
Countries.renderCountries(countries)
Countries.searchCountry(countries)
Countries.organizeByPosition(countries)
Countries.organizeByMedalGold(countries)
Countries.organizeByMedalSilver(countries)
Countries.organizeByMedalBronze(countries)
// Countries.newObjectMap(countries)