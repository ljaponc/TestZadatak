
var inputs = JSON.parse(localStorage.getItem("array") || "[]");

window.onload = () => displayComp(inputs)

function validate() {

    var firstname = document.getElementById("fistname").value;
    var surname = document.getElementById("lastname").value;
    var street = document.getElementById("street").value;
    var city = document.getElementById("city").value;

    if (firstname == "") {
        alert("Fill all data!");
    } else if (surname == "") {
        alert("Fill all data!");
    } else if (street == "") {
        alert("Fill all data!");
    } else if (city == "") {
        alert("Fill all data!");
    } else {


        localStorage.setItem("array", JSON.stringify(inputs));

        inputs.push(

            {
                fname: firstname,
                lname: surname,
                st: street,
                ct: city

            }

        )

        localStorage.setItem('array', JSON.stringify(inputs))

        if (inputs) console.table(inputs)
    }

    displayComp(inputs)

}

function displayComp(arr) {

    var html = arr.map(obj => {
        return `
            <div class="component">

                <div class="input">
                    <label for="fname">${obj.fname}</label>
                </div>
                <div class="input">
                    <label for="lname">${obj.lname}</label>
                </div>
                <div class="input"><label for="st">${obj.st}</label><br>
                    
                </div>
    
                <div class="input"><label for="city">${obj.ct}</label><br>
                    
                </div class="input">
    
                <div class="input">
                    <button onclick="deleteRow(${arr.indexOf(obj)})" id="re">Remove</button>
                </div>
            </div>
        `
    });

    document.getElementById("data").innerHTML = html;
}

function deleteRow(id) {

    inputs = inputs.filter(obj => inputs.indexOf(obj) !== id)
    console.log(inputs)

    localStorage.setItem('array', JSON.stringify(inputs));
    displayComp(inputs)
}
