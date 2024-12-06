// tampil ke html
const  output_element = document.getElementById("output");

function tampil(){
    output_element.innerHTML = "";

    list_tugas.forEach((value) => {
        const p_elm = document.createElement("p");
        p_elm.textContent = value;
    
        output_element.appendChild(p_elm);
    });
}

tampil();

// mengambil nilai
const formulir = document.querySelector("form");

formulir.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData);

    console.log(Object.values(obj))
    console.log(list_tugas);

    list_tugas.push(Object.values(obj));

    e.target.reset();
    tampil();
    
});
