export default class ApiRequest {

    static BASEURL = `https://kenzie-olympics.herokuapp.com`
    static headers = {
        "Content-Type": "application/json"
    }

    static async listCountries(){
        const paises = await fetch(`${this.BASEURL}/paises`, {
            method:"GET",
            headers: this.headers
        })
        .then(res => res.json())
        .catch(err => console.log(err))

        return paises
    }
}