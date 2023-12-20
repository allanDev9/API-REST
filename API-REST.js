const d = document,
$table = d.querySelector(".crued-table"),
$form = d.querySelector(".crud-form"),
$title = d.querySelector(".crud-title"),
$tmplate = d.getElementById("crud-template").content,
$fragment = d.createDocumentFragment();

const ajax = (options) => {
    let {url, method, success, error, data} = options;
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", e => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.satatus < 300){
        let json = JSON.parse(xhr.responseText);
        success(json);
    }else{
        let message = xhr.statusText || "Ocurrio un error";
        error(`Error ${xhr.status}: ${message}`);
    }
    });

    xhr.open(method || "GET", url);
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.send(JSON.stringify(data));
}

const getAll = () => {
    ajax({
        url: "http://localhost:5555/agentes",
        success: (res) => {
            console.log(res);
            res.forEach(el => {
               $tmplate.querySelector(".name").textContent = el.nombre; 

               let $clone = d.importNode($template, true);
               $fragment.appendChild($clone);
            });

            $table.querySelector("tbody").appendChild($fragment);
        },
        error: (err) => {
            console.log(err);
        $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
    }
    })
}

d.addEventListener("DOMContentLoaded", getAll);