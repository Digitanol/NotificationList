const callWS = (protocol, hostName, port, trnsPath, userName, password, params) => {
    return fetch(protocol+'://10.10.27.151:50100/XMII/Illuminator?QueryTemplate=REPORT/UI/mobileActiveShiftView/getMobileActiveShiftXqry&Param.1=tr&Param.2=TH01&j_user='+userName+'&j_password='+password+'&Content-Type=text/json')
        .then((response) => response.json())
        .then((json) => {
        return  setData(json.Rowsets.Rowset[0].Row);
        
        })
        .catch((error) => {
        console.error(error);
        });
}
export default callWS;