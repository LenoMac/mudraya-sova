const prevBtn = document.getElementById("previos-button");
const nextBtn = document.getElementById("next-button");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");
const iframe = document.getElementById("iframe");
const infoList = [
    { name: "Ариет", role: "Программист", text: "Lorem lorem" },
    { name: "Хафиз", role: "Художник", text: "Lorem lorem" },
    { name: "Ариет", role: "Программист", text: "Lorem lorem" },
    { name: "Ариет", role: "Программист", text: "Lorem lorem" },
    { name: "Ариет", role: "Программист", text: "Lorem lorem" },
]

let newObj = {
    ...infoList[0]
}

let i = 0

nextBtn.onclick = () => {
    i++
    newObj = {
        ...infoList[i]
    }
    // console.log(newObj);
}

prevBtn.onclick = () => {
    i--;
    newObj = {
        ...infoList[i]
    }
}

function showModal() {
    iframe.style.display = "block"
    modal.style.display = "block"
}

closeBtn.onclick = () => {
    iframe.style.display = "none"
    modal.style.display = "none"
}