let reviews = [
    {
        id: 1,
        img: "1.jpg",
        name: "aru khan",
        position: "Web Developer",
        review: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo earum voluptatem harum placeat quaerat deleniti quos blanditiis dolore. Illo cupiditate quae nisi sed autem. Rerum consequatur quos amet itaque quisquam. ",
    },
    {
        id: 2,
        img: "2.jpg",
        name: "mahek khan",
        position: "Web Desiner",
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo earum voluptatem harum placeat quaerat deleniti quos blanditiis dolore. Illo cupiditate quae nisi sed autem. Rerum consequatur quos amet itaque quisquam.",
    }, 
    {
        id: 3,
        img: "3.jpg",
        name: "mustarin sultana",
        position: "Web Developer",
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo earum voluptatem harum placeat quaerat deleniti quos blanditiis dolore. Illo cupiditate quae nisi sed autem. Rerum consequatur quos amet itaque quisquam.",
    }, 
    {
        id: 4,
        img: "4.jpg",
        name: "zoya khan",
        position: "CEO",
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo earum voluptatem harum placeat quaerat deleniti quos blanditiis dolore. Illo cupiditate quae nisi sed autem. Rerum consequatur quos amet itaque quisquam.",
    }, 
    {
        id: 5,
        img: "5.jpg",
        name: "raina jainab",
        position: "Manager",
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo earum voluptatem harum placeat quaerat deleniti quos blanditiis dolore. Illo cupiditate quae nisi sed autem. Rerum consequatur quos amet itaque quisquam.",
    }, 
    {
        id: 6,
        img: "6.jpg",
        name: "ayesha shaikh",
        position: "Singer",
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo earum voluptatem harum placeat quaerat deleniti quos blanditiis dolore. Illo cupiditate quae nisi sed autem. Rerum consequatur quos amet itaque quisquam.",
    }, 
    {
        id: 7,
        img: "7.jpg",
        name: "afrin sadiya",
        position: "Web Developer",
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo earum voluptatem harum placeat quaerat deleniti quos blanditiis dolore. Illo cupiditate quae nisi sed autem. Rerum consequatur quos amet itaque quisquam.",
    }, 
    {
        id: 8,
        img: "8.jpg",
        name: "afjal khan",
        position: "Actar",
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo earum voluptatem harum placeat quaerat deleniti quos blanditiis dolore. Illo cupiditate quae nisi sed autem. Rerum consequatur quos amet itaque quisquam.",
    }, 
    {
        id: 9,
        img: "9.jpg",
        name: "razab hussain",
        position: "Web Developer",
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo earum voluptatem harum placeat quaerat deleniti quos blanditiis dolore. Illo cupiditate quae nisi sed autem. Rerum consequatur quos amet itaque quisquam.",
    }, 
    {
        id: 10,
        img: "10.jpg",
        name: "khurshid hussain",
        position: "Web Developer",
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo earum voluptatem harum placeat quaerat deleniti quos blanditiis dolore. Illo cupiditate quae nisi sed autem. Rerum consequatur quos amet itaque quisquam.",
    }, 
];

let img = document.getElementById("img");
let names = document.getElementById("name");
let position = document.getElementById("position");
let review = document.getElementById("review");

let left = document.getElementById("#prevBtn");
let right = document.getElementById("#nextBtn");
let btn = document.getElementById("#SurpriseBtn")

let currentItem = 0;
windows.addEventlistener("DOMContentLoaded", function(){
    showPerson(currentItem);
    console.log('hello')
});

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    names.textContent = item.name;
    position.textContent = item.position;
    review.textContent = item.review;

}

function next(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);

}
function prev(){
    currentItem--;
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson(currentItem);
        
}

function surprise(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
}