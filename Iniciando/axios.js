import axios from "axios"

axios
    .get('https://api.github.com/users/guilgb')
    .then(response => axios.get(response.data.repos_url))


Promise.all([
    axios.get('https://api.github.com/users/guilgb'),
    axios.get('https://api.github.com/users/guilgb')
]).then(response => {
    console.log(response[0].data.login)
    console.log(response[1].data.login)
    })

