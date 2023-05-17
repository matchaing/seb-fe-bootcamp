function firstCharacter(str) {
    // TODO: 여기에 코드를 작성합니다.
    let result = '';

    if(str == ''){
        return '';
    }
    let arr = str.split(' '); //배열로 저장
    for(let i=0; i<arr.length; i++){
        result += arr[i].charAt(0);
    }
    return result;
}

let output = firstCharacter('hello world');
console.log(output); // --> "hw"

output = firstCharacter('The community at Code States might be the biggest asset');
console.log(output);