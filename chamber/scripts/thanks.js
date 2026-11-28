//Thanks
const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);

document.querySelector("#results").innerHTML = `

<h2>Thank you, welcome to Azua's Chamber</h2>
<p> Name: ${myInfo.get("first")} ${myInfo.get("last")}</p>
<p> Email: ${myInfo.get("email")} </p>
<p>Mobile Number: ${myInfo.get("phone")}</p>
<p>Business Name: ${myInfo.get("organization")} </p>
<p>Timestamp: ${myInfo.get("timestamp")} </p>
`
