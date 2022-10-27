import axios from "axios"

axios
    .get('https://api.github.com/users/guilgb')
    .then(response => axios.get(response.data.repos_url))

