// // const likeCount = document.getElementsByClassName("like_count");
const pushBtn = document.getElementById(".heartBtn");
function addLike(){
    document.getElementsByClassName(".heartBtn").innerHTML = "<i class= xi-heart xi-3x></i>";
}

    
    

// //         likeBtn.style.background = ''
// //     };

// likeBtn.addEventListener("click", (event)=>{
//     if(event.target.className == "xi-heart-o"){
//         event.target.className = "xi-heart-o";
//     }else if(event.target.className){

//     }
// });



//변수 생성
const postReviewBtn = document.querySelector(".review_upload");
const addReview = document.querySelector('.input_review');
const newReview = document.querySelector('.comment');
const commenter = ['uuu', 'pdds','hooe','ddwwe'];  //db연결대신 배열로 선언
const likeBtn = document.querySelector('li');
//const deleteBtn = document.querySelector('li');


//댓글 추가
function uploadReview(){
    if(addReview.value.length > 0){
        const newComment = document.querySelector("li");
        const commentervalue = Math.floor(Math.random() * commenter.length); //배열 길이만큼 무작위로 값을 생성
        const commenterPick = commenter[commentervalue];//무작위로 생성된 값을 고르도록
        newComment.innerHTML =  commenterPick + addReview.value;
        newReview.appendChild(newComment);
        // newComment.appendChild(likeBtn);
        // likeBtn.innerHTML= '<i class="xi-heart-o"></i>';
        addReview.value="";
        addReview.focus();
    }else{
        alert('댓글을 입력해 주세요');
    }
    postReviewBtn.style.color = "rgb(199, 235, 245)"; //댓글추가후 게시버튼 누르면 버튼색상 다시 초기화
}
//댓글 입력창에 입력이 될 경우에 버튼 활성화
function inputReview(){
    if(addReview.value.length>0){
        postReviewBtn.style.color = "rgb(11, 159, 228)";
    }else{
        postReviewBtn.style.color = "rgb(199, 235, 245)";
    }
}

