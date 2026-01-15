function addhotel() {
    event.preventDefault();
    let name = document.getElementById("hotelName");
    let hotelname = name.value;
    let loc = document.getElementById("location");
    let location = loc.value;
    let rat = document.getElementById("rating");
    let rating = rat.value;
    let po = document.getElementById("pool")
    let pool = po.checked ? "Yes" : "No";
    let gy = document.getElementById("gym")
    let gym = gy.checked ? "Yes" : "No";
    let sp = document.getElementById("spa")
    let spa = sp.checked ? "Yes" : "No";



    let tr = document.createElement("tr")
    let td1 = document.createElement("td");
    td1.innerText = hotelname;
    let td2 = document.createElement("td");
    td2.innerText = location;
    let td3 = document.createElement("td");
    td3.innerText = rating;
    let td4 = document.createElement("td");
    td4.innerText = pool;
    let td5 = document.createElement("td");
    td5.innerText = gym;
    let td6 = document.createElement("td");
    td6.innerText = spa;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    let hotellistE = document.getElementById("hotelList");

    hotellistE.appendChild(tr);

    name.value = "";
    loc.value = "";
    rat.value = "";

    po.checked = false;
    gy.checked = false;
    sp.checked = false;

}
