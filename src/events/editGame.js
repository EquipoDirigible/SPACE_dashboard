function saveObject(gameId) {
    window.localStorage.setItem("gameId", gameId);
}

function changePage(page) {
    window.location.href = page;
}

function enableEditListener() {
    let editButtonElements = document.querySelectorAll(".main__container-game--icons .fa-pen-to-square");

    [...editButtonElements].map(button => {
        button.addEventListener("click", (event) => {
            let gameId = event.target.dataset.game;
            saveObject(gameId);
            changePage('../../edit.html');
        })
    })
}

setTimeout(enableEditListener, 500);