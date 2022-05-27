// const likeBtn = document.querySelector(".heartBtn");
// // const likeCount = document.getElementsByClassName("like_count");
// function addLike(){
//     if(likeBtn.src.match("click")){
//         likeBtn.src = "img/heart.png";
//     }else{
//         likeBtn.src = "img/redheart.png";
//     }

// //         likeBtn.style.background = ''
// //     };
//likeBtn.addEventListener("click", addLike);

// likeBtn.addEventListener("click", (event)=>{
//     if(event.target.className == "xi-heart-o"){
//         event.target.className = "xi-heart-o";
//     }else if(event.target.className){

//     }
// });


// const addReview = document.getElementsByClassName(".input_review");
// // const postReviewBtn = document.getElementsByClassName(".review_upload");

// function uploadReview(){
//     if(addReview.value){
//         let newReview = document.createElement("li");
//         newReview.innerHTML = addReview.value;
//         addReview.appendChild(newReview);
//     }else{
//         alert("댓글이 입력되지 않았습니다");
//         addReview.value = "";

//     }
// };
// function uploadReview(){
//     if(addReview.value){
//         let newReview = document.querySelector("newComment");
//         newReview.innerHTML = addReview.value;
//         addReview.appendChild(newReview);
//     }else{
//         alert("댓글이 입력되지 않았습니다");
//     }
// };

// postReviewBtn.addEventListener("click", uploadReview(){

//     if(addReview.value){
//         newReview();
//     }else{
//     }
// };

// const postReviewBtn = document.querySelector(".review_upload").value;

// addReview.addEventListener("click",()=>{
//     let addReview = document.querySelector('.input_review').value;
//     if(addReview.length !== 0){
//         postReviewBtn.classList.add('active')
//     }else{
//         postReviewBtn.classList.remove('active');
//     }
// })


// const postReviewBtn = document.querySelector(".review_upload").value;
// postReviewBtn.addEventListener('click',() => {
//         uploadReview()
// })

// const uploadReview = () => {
//     if(postReviewBtn.value.length == 0){
//         return
//     }
//     const commentPart = document.createElement('.comment')
//     const newComment = document.createElement('.div')
    
//     commentPart.classList.add('.commentPart')
//     newComment.classList.add('.div')

//     commentPart.append(newComment)
    
//     newComment.textContent = uploadReview.value

//     uploadReview.focus()
//     postReviewBtn.classList.remove('blue')
//     uploadReview.value=''

// }

const postReviewBtn = document.querySelector(".review_upload");
const addReview = document.querySelector('.input_review');
const newReview = document.querySelector('.comment');

function uploadReview(){
    if(addReview.value.length > 0){
        const newComment = document.querySelector("li"); 
        newComment.innerHTML = addReview.value;
        newReview.appendChild(newComment);
        addReview.value="";

    }
}
