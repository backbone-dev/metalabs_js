const axios = require("axios");

class MetaClient {
    constructor(access_key) {
        this.access_key = access_key;
    }

    async getKey(key) {
        return axios({
            url: `https://api.metalabs.io/v2/licenses/${key}`,
            method: "GET",
            headers: {
                "Authorization": `Basic ${this.access_key}`,
                "Content-Type": "application/json" 
            },
        }).then((response)=>response["data"]).catch((err)=>err["message"]);
    }

    async updateKey(key, meta) {
        return axios({
            url: `https://api.metalabs.io/v2/licenses/${key}`,
            method: "PATCH",
            headers: {
                "Authorization": `Basic ${this.access_key}`,
                "Content-Type": "application/json" 
            },
            data: {
                metadata: {
                       ...meta,
                }
            }
        }).then((response)=>response["data"]).catch((err)=>err["message"]);
    }
}

module.exports = MetaClient;