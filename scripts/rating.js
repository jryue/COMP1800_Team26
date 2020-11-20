const btn = document.querySelector("#button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-rating");
const submit = document.querySelector(".modal-footer")

btn.onclick = () => {
    widget.style.display = "none";
    post.style.display = "block";
    submit.style.display = "none";
    return false;
}