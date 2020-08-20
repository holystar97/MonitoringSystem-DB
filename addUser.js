function add_info(subscribers) {
    debugger;
    for(let i = 0; i < subscribers.length; i++) {
        var ipAdress = subscribers[i];

        // 원본 찾아서 pre_set으로 저장.
        var pre_set = document.getElementById('pre_set');
        // last-id 속성에서 필드ID르 쓸값 찾고
        var fieldid = pre_set.getAttribute('last-id');
        // 다음에 필드ID가 중복되지 않도록 1 증가.
        pre_set.setAttribute('last-id', fieldid + 1 );

        // 복사할 div 엘리먼트 생성
        var div = document.createElement('div');
        // 내용 복사
        div.innerHTML = pre_set.innerHTML;
        // 복사된 엘리먼트의 id를 'field-data-XX'가 되도록 지정.
        div.id = 'field-data-' + fieldid;
        // selection_content 영역에 내용 변경.
        // var temp = div.getElementsByClassName('selection_content')[0];
        //  temp.innerText = "IP :" +ipAdress;
        var a = div.getElementsByClassName("selection_content2")[0]
        // var aObj = document.createElement("a");
        // aObj.innerText = `IP : ${ipAdress}`;
        // aObj.href = '#'; // 여기 부분에 실제 url을 넣으면 됩니다.
        // div.appendChild(aObj)

        a.innerText = `IP : ${ipAdress}`;

        // temp.innerText = x;
        // delete_box에 삭제할 fieldid 정보 건네기
        var deleteBox = div.getElementsByClassName('delete_box')[0];
        // target이라는 속성에 삭제할 div id 저장
        deleteBox.setAttribute('target',div.id);
        // #field에 복사한 div 추가.
        document.getElementById('field').appendChild(div);


    }

}

function delete_info(obj) {
    // 삭제할 ID 정보 찾기
    var target = obj.parentNode.getAttribute('target');
    // 삭제할 element 찾기
    var field = document.getElementById(target);
    debugger;
    // #field 에서 삭제할 element 제거하기
    document.getElementById('field').removeChild(field);
}