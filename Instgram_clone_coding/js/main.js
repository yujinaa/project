// const likeBtn = document.querySelector(".heartBtn");
// // const likeCount = document.getElementsByClassName("like_count");
// function addLike(){
//     if(likeBtn ="click"){
//         likeBtn.textContent='xi-heart-o';
//     }else{
//         likeBtn.textContent='xi-heart';
//     }
//     likeBtn.addEventListener("click", e => {
//         let eheart = e.currentTarget.querySelector('.xi-heart-o')
//         let fullheart = e.currentTarget.querySelector('.fullheart')

    
    

// //         likeBtn.style.background = ''
// //     };

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
        addReview.focus();
    }else{
        alert('댓글을 입력해 주세요');
    }
    postReviewBtn.style.color = "rgb(199, 235, 245)"; //댓글추가후 게시버튼 누르면 버튼색상 다시 초기화
}

function inputReview(){
    if(addReview.value.length>0){
        postReviewBtn.style.color = "rgb(11, 159, 228)";
    }else{
        postReviewBtn.style.color = "rgb(199, 235, 245)";
    }
}