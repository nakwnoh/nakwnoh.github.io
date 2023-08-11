document.addEventListener('DOMContentLoaded', function() {
    // URL 파라미터에서 이름을 가져옵니다.
    var urlParams = new URLSearchParams(window.location.search);
    var to = urlParams.get("to");
    var type = urlParams.get("type");

    // 가져온 이름을 사용하여 텍스트를 변경합니다.
    var coupleTitle = document.querySelector("#couple");
    if (to === null) {
        coupleTitle.innerText = "경운 그리고 화영\n 저희 결혼합니다.";
    } else {
        switch (to) {
            case "qyely":
                coupleTitle.innerText = "박동훈 이사님";
                break;
            case "dpeac":
                coupleTitle.innerText = "노정재 팀장님";
                break;
            case "ywvkn":
                coupleTitle.innerText = "태성이형";
                break;
            case "aqwgt":
                coupleTitle.innerText = "미카사";
                break;
            case "fqumb":
                coupleTitle.innerText = "용재야";
                break;
            case "qpmck":
                coupleTitle.innerText = "현석이형";
                break;
            case "ancvh":
                coupleTitle.innerText = "승준이형";
                break;
            case "skxqa":
                coupleTitle.innerText = "가민이형";
                break;
            case "whvkc":
                coupleTitle.innerText = "용만아";
                break;
            case "inpda":
                coupleTitle.innerText = "주성아";
                break;
            case "lqwri":
                coupleTitle.innerText = "성원아";
                break;
            case "mqjeu":
                coupleTitle.innerText = "정근아";
                break;
            case "fswer":
                coupleTitle.innerText = "선모야";
                break;
            case "xfpok":
                coupleTitle.innerText = "가예야";
                break;
            default:
                coupleTitle.innerText = to;
        }
    }
    if (type === 'ff') {
        coupleTitle.innerText += "\n나 시집간다!!";
    } else if(type === 'fs'){
        coupleTitle.innerText += "\n저 시집가요!!";
    }else if(type === 'mf'){
        coupleTitle.innerText += "\n나 장가간다!!";
    }else if(type === 'ms'){
        coupleTitle.innerText += "\n저 장가갑니다!!";
    }
});