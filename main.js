function parseSRC() {
    const window = window
    console.log("window: ", window)
    const srcURLObj = new URL(iframe.src)
    const urlParams = new URLSearchParams(srcURLObj.search)
    document.getElementById("entityType").innerHTML = "Entity Type: " + urlParams.get("EntityType")
    document.getElementById("entityID").innerHTML = "Entity ID: " + urlParams.get("EntityID")
    document.getElementById("userID").innerHTML = "Bullhorn User ID: " + urlParams.get("UserID")
    document.getElementById("corporationID").innerHTML = "Corporation ID: " + urlParams.get("CorporationID")
    document.getElementById("privateLabelID").innerHTML = "Private Label ID: " + urlParams.get("PrivateLabelID")
    document.getElementById("payAdjustmentsBtn").href = "https://hrpdev.kellyservices.com/?entityID=" + urlParams.get("EntityID") + "&userID=" + urlParams.get("UserID")
}