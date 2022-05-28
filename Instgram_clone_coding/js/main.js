const pushHeartBtn = document.querySelector(".heartBtn");
function addLike(){
    if(pushHeartBtn){
        pushHeartBtn.innerHTML ='<i class="xi-heart xi-2x"></i>';
        pushHeartBtn.style.color ='red';
        pushHeartBtn
    }else{
        pushHeartBtn.innerHTML='<i class=" xi-heart-o xi-2x">';
    }

    }
// function addCancel(){
//     pushHeartBtn.innerHTML ='<i class=" xi-heart-o xi-2x"></i>';
// }
// pushHeartBtn.addEventListener("click", function(){
//     pushHeartBtn.innerHTML ='<i class="xi-heart xi-2x"></i>'
//     pushHeartBtn.style.color ='red'
// })
// pushHeartBtn.removeEventListener("click",function(){
//     pushHeartBtn.innerHTML ='<i class=" xi-heart-o xi-2x"></i>';
// })


//변수 생성
const postReviewBtn = document.querySelector(".review_upload");
const addReview = document.querySelector('.input_review');
const newReview = document.querySelector('.comment');
const commenter = ['uuu', 'pdds','hooe','ddwwe'];  //db연결대신 배열로 선언
//const deleteBtn = document.querySelector('li');


//댓글 추가
function uploadReview(){
    if(addReview.value.length > 0){
        const newComment = document.createElement("li");
        const deleteBtn = document.createElement('removeComment');
        const commentervalue = Math.floor(Math.random() * commenter.length); //배열 길이만큼 무작위로 값을 생성
        const commenterPick = commenter[commentervalue];//무작위로 생성된 값을 고르도록
        newComment.innerHTML =  commenterPick + " " + addReview.value;
        //const likeBtn = document.querySelector('.likeHeart');
        newReview.appendChild(newComment);
        newComment.appendChild(deleteBtn);
        //newReview.appendChild(likeBtn);
        newReview.style.fontSize ='small';
        deleteBtn.addEventListener("click",removeComm);

        //const likeBtn = document.querySelector('.likeHeart');
        //likeBtn.innerHTML='<i class="xi-heart-o"></i>';
        //newComment.add(newReview);
        //newReview.add(likeBtn);
        //newReview.appendChild(likeBtn);
        
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
//댓글 좋아요 
function pushHeart(){
    const likeBtn = document.querySelector('.likeHeart');
    if(likeBtn !== 0){
        likeBtn.innerHTML='<i class="xi-heart"></i>' ;
        likeBtn.style.color ='red';
    }else{
        likeBtn.innerHTML='';
    }
}

//댓글 삭제
function removeComm(e){
    const oneComment = e.target.parentElement;
    oneComment.remove();
}


