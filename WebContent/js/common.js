
let destroy = document.getElementByid("destroy");

destroy.onclick = function confirmDestroy(){
    if(confirm("本当に削除してよろしいですか?")){
        document.forms[1].submit();
    }
}