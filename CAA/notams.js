var fir = "EGAX";
var category = "";

var subject = "";
var condition = "";

var traffic = [false,false]; //ifr, vfr
var purpose = [];
var scope = "";
var base_fl = "SFC";
var base_raw = "000";
var ceil_fl = "10000ft QNE";
var ceil_raw = "100";

var aerodrome = "";

var radius = "5";

var notamText = "";

var start = "";
var end = "";

updateAtis();

var categories = Object.keys(notamData.subject);
categories = categories.map(cat => cat.replaceAll("_", " ").toUpperCase());
console.log(categories);

const categoryDropdown = document.getElementById("category");
categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categoryDropdown.appendChild(option);
});

const conditionDropdown = document.getElementById("condition");
notamData.condition.forEach(cond => {
    const option = document.createElement("option");
    option.value = cond.tag;
    option.textContent = cond.name;
    conditionDropdown.appendChild(option);
});

document.getElementById("fir").addEventListener("input", function () {
    fir = this.value.toUpperCase();
    this.value = fir;
    updateAtis();
});
document.getElementById("category").addEventListener("input", function () {
    category = this.value.toUpperCase();
    var catName = this.value.replaceAll(" ", "_").toLowerCase();
    var possibleSubjects = notamData.subject[catName];
    const subjectDropdown = document.getElementById("subject");
    subjectDropdown.innerHTML = ""; // Clear existing options
    possibleSubjects.forEach(sub => {
        const option = document.createElement("option");
        option.value = sub.tag;
        option.textContent = sub.name;
        subjectDropdown.appendChild(option);
    });
    updateAtis();
});
document.getElementById("subject").addEventListener("input", function () {
    subject = this.value.toUpperCase();
    updateAtis();
});
document.getElementById("condition").addEventListener("input", function () {
    condition = this.value.toUpperCase();
    updateAtis();
});
document.getElementById("ifr").addEventListener("input", function () {
    traffic = [this.checked,traffic[1]];
    updateAtis();
});
document.getElementById("vfr").addEventListener("input", function () {
    traffic = [traffic[0],this.checked];
    updateAtis();
});
document.getElementById("purpose").addEventListener("input", function () {
    const selectedOptions = Array.from(this.selectedOptions).map(option => option.value);
    console.log(selectedOptions);
    purpose = selectedOptions;
    updateAtis();
});
document.getElementById("scope").addEventListener("input", function () {
    scope = this.value.toUpperCase();
    updateAtis();
});
document.getElementById("base").addEventListener("input", function () {
    base_fl = this.value.toUpperCase();
    if (base_fl.length === 1) base_fl = "00" + base_fl;
    else if (base_fl.length === 2) base_fl = "0" + base_fl;
    else if (base_fl.length === 4) base_fl = base_fl.slice(1, 4); // Ensure it doesn't exceed 3 digits
    this.value = base_fl;
    base_raw = base_fl;

    base_fl = (parseInt(base_fl) * 100).toString() + "ft QNE";

    if (base_fl === "0ft QNE") {
        base_fl = "SFC";
    }

    updateAtis();
});
document.getElementById("ceiling").addEventListener("input", function () {
    ceil_fl = this.value.toUpperCase();
    if (ceil_fl.length === 1) ceil_fl = "00" + ceil_fl;
    else if (ceil_fl.length === 2) ceil_fl = "0" + ceil_fl;
    else if (ceil_fl.length === 4) ceil_fl = ceil_fl.slice(1, 4); // Ensure it doesn't exceed 3 digits
    this.value = ceil_fl;
    ceil_raw = ceil_fl;

    ceil_fl = (parseInt(ceil_fl) * 100).toString() + "ft QNE";

    if (ceil_fl === "0ft QNE") {
        ceil_fl = "SFC";
    }
    updateAtis();
});
document.getElementById("radius").addEventListener("input", function () {
    radius = this.value.toUpperCase();
    this.value = radius;
    updateAtis();
});
document.getElementById("notamText").addEventListener("input", function () {
    notamText = this.value.toUpperCase();
    this.value = notamText;
    updateAtis();
});
document.getElementById("start").addEventListener("input", function () {
    const localDate = new Date(this.value);
    const utcYear = localDate.getUTCFullYear();
    const utcMonth = String(localDate.getUTCMonth() + 1).padStart(2, '0');
    const utcDay = String(localDate.getUTCDate()).padStart(2, '0');
    const utcHours = String(localDate.getUTCHours()).padStart(2, '0');
    const utcMinutes = String(localDate.getUTCMinutes()).padStart(2, '0');
    start = `${utcYear}-${utcMonth}-${utcDay}T${utcHours}${utcMinutes}`;
    updateAtis();
});
document.getElementById("end").addEventListener("input", function () {
    if (this.value === "") updateAtis()
    else {
        const localDate = new Date(this.value);
        const utcYear = localDate.getUTCFullYear();
        const utcMonth = String(localDate.getUTCMonth() + 1).padStart(2, '0');
        const utcDay = String(localDate.getUTCDate()).padStart(2, '0');
        const utcHours = String(localDate.getUTCHours()).padStart(2, '0');
        const utcMinutes = String(localDate.getUTCMinutes()).padStart(2, '0');
        end = `${utcYear}-${utcMonth}-${utcDay}T${utcHours}${utcMinutes}`;
        updateAtis();
    }
});
document.getElementById("ad").addEventListener("input", function () {
    aerodrome = this.value.toUpperCase();
    this.value = aerodrome;
    updateAtis();
});

function updateAtis() {
    console.log("notam definitely updated")
    console.log({fir, category, subject, condition, traffic, purpose, scope, base_fl, ceil_fl, radius, start, end, notamText});

    var notam = ""
    notam += "Q)"+safeString(fir) + "/Q" + safeString(subject) + safeString(condition) + "/" + (traffic[0] && traffic[1] ? "IV" : traffic[0] ? "I" : traffic[1] ? "V" : "") + "/" +
        safeString(purpose.join("")) + "/" + safeString(scope) + "/" + safeString(base_raw) + "/" + safeString(ceil_raw) + "/" + safeString(radius);
    if (aerodrome) notam += "\nA)" + safeString(aerodrome);
    notam += "\nB)FROM: " + safeString(start) + "Z";
    if (end) notam += "\nC)TO: " + safeString(end) + "Z";
    notam += "\nE)" + safeString(notamText);
    notam += "\nLOWER: " + safeString(base_fl) + "\nUPPER: " + safeString(ceil_fl);

    document.getElementById("atisArea").value = notam;
}

function checkRequiredFields() {
    const requiredFields = document.querySelectorAll(".values [required]");
    let allFilled = true;

    requiredFields.forEach(function (field) {
        if (!field.value) {
            allFilled = false;
            field.style.borderColor = "red"; // Highlight in red
        } else {
            field.style.borderColor = ""; // Reset border color
        }
    });

    if (!allFilled) {
        alert("Please fill in all required fields.");
    } else {
        var notamArea = document.getElementById("atisArea");
        notamArea.select();
        document.execCommand("copy");
        alert("NOTAM copied to clipboard!");
    }
}
