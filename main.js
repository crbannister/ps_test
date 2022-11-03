function parseSRC() {
    const iframe = frame
    console.log("frame: ", iframe)
    const srcURLObj = new URL(frame.src)
    const urlParams = new URLSearchParams(srcURLObj.search)
    document.getElementById("entityType").innerHTML = "Entity Type: " + urlParams.get("EntityType")
    document.getElementById("entityID").innerHTML = "Entity ID: " + urlParams.get("EntityID")
    document.getElementById("userID").innerHTML = "Bullhorn User ID: " + urlParams.get("UserID")
    document.getElementById("corporationID").innerHTML = "Corporation ID: " + urlParams.get("CorporationID")
    document.getElementById("privateLabelID").innerHTML = "Private Label ID: " + urlParams.get("PrivateLabelID")

    //alert(JSON.stringify(urlParams.get("UserID")))
}
