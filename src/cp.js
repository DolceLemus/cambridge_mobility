

let cp="CB11AB";
    const regex=/^([Cc][Bb]1[0-1][A-Za-z]{2})$/;
        console.log(regex);
    if (regex.exec(cp) != null) {
        console.log(cp);
        console.log("true");
    }else{
        console.log("false");
    }


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(userUbication=(cp)=>{
            let ubication={
                lat:cp.coords.latitude,
                lng:cp.coords.longitude
            }
            console.log(ubication);
        })
}

  