const callWS = async (protocol, hostName, port, trnsPath, userName, password, params) => {
    var paramString = "";
   
    for (let index = 0; index < params.length; index++) {
        paramString += "&Param." + Number(index+1) + "=" + params[index];
    }
    //console.log(protocol + '://' + hostName +':' + port + '/XMII/Illuminator?QueryTemplate=' + trnsPath + paramString + '&j_user=' + userName + '&j_password=' + password + '&Content-Type=text/json')
    return fetch(protocol + '://' + hostName +':' + port + '/XMII/Illuminator?QueryTemplate=' + trnsPath + paramString + '&j_user=' + userName + '&j_password=' + password + '&Content-Type=text/json')
        .then((response) => response.json())
        .then((json) => {
            loaderHandler.showLoader("Loading");
            return json.Rowsets.Rowset[0].Row;

        })
        .catch((error) => {
            return error;
        });
}
export default callWS;
