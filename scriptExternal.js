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
            case "xpywe":
                coupleTitle.innerText = "초롱아";
                break;
            case "vfqkn":
                coupleTitle.innerText = "종미야";
                break;
            case "ooych":
                coupleTitle.innerText = "경민아";
                break;
            case "mogwh":
                coupleTitle.innerText = "지석아";
                break;
            case "knkvf":
                coupleTitle.innerText = "연구야";
                break;
            case "bpnmf":
                coupleTitle.innerText = "대영아";
                break;
            case "epbsn":
                coupleTitle.innerText = "수환아";
                break;
            case "bcfwc":
                coupleTitle.innerText = "한웅아";
                break;
            case "kekyc":
                coupleTitle.innerText = "국인아";
                break;
            case "imlgg":
                coupleTitle.innerText = "종언아";
                break;
            case "mcjym":
                coupleTitle.innerText = "경용아";
                break;
            case "snvbg":
                coupleTitle.innerText = "호나야";
                break;
            case "pwcsj":
                coupleTitle.innerText = "수인아";
                break;
            case "pyhlr":
                coupleTitle.innerText = "다미야";
                break;
            case "ojiyr":
                coupleTitle.innerText = "민지야";
                break;
            case "sgceh":
                coupleTitle.innerText = "지혜야";
                break;
            case "efrhg":
                coupleTitle.innerText = "아람아";
                break;
            case "mydtv":
                coupleTitle.innerText = "희나야";
                break;
            case "xkdam":
                coupleTitle.innerText = "따우나";
                break;
            case "eyavs":
                coupleTitle.innerText = "여니야";
                break;
            case "nfidw":
                coupleTitle.innerText = "은지야";
                break;
            case "ydoif":
                coupleTitle.innerText = "지영아";
                break;
            case "mktsu":
                coupleTitle.innerText = "영금아";
                break;
            case "vdynb":
                coupleTitle.innerText = "의정";
                break;
            case "wriwm":
                coupleTitle.innerText = "소연";
                break;
            case "rsxdv":
                coupleTitle.innerText = "삼동이 누나";
                break;
            case "ndswh":
                coupleTitle.innerText = "유미 온니";
                break;
            case "jmumr":
                coupleTitle.innerText = "가화 온니";
                break;
            case "lgvbf":
                coupleTitle.innerText = "새롬 언니";
                break;
            case "oinxc":
                coupleTitle.innerText = "선영 언니";
                break;
            case "uxpvj":
                coupleTitle.innerText = "민디 언니";
                break;
            case "samwb":
                coupleTitle.innerText = "진경 언니";
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