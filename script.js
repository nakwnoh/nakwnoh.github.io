
document.addEventListener("DOMContentLoaded", function(){
    // makeMap();
    addPhotos();
    getDDay();

    // Kakao.init('5b530fd96142df42568888e8aba54815'); // 사용하려는 앱의 JavaScript 키 입력
});

/*카카오 맵 불러오기*/
function makeMap() {
    var mapContainer = document.getElementById('map'),
        mapOption = {
            center: new kakao.maps.LatLng(37.517701, 126.899744),
            level: 5
        };

    var map = new kakao.maps.Map(mapContainer, mapOption);
    map.setDraggable(false);
    map.setZoomable(false);

    var geocoderCenter = new kakao.maps.services.Geocoder();
    geocoderCenter.addressSearch('주소', function(result, status) {
         if (status === kakao.maps.services.Status.OK) {
            var centerCords = new kakao.maps.LatLng(result[0].y, result[0].x);

            var geocoder = new kakao.maps.services.Geocoder();
            geocoder.addressSearch('주소', function(result, status) {
                 if (status === kakao.maps.services.Status.OK) {
                    var cords = new kakao.maps.LatLng(result[0].y, result[0].x);

                    var marker = new kakao.maps.Marker({
                        map: map,
                        position: cords
                    });

                    var infowindow = new kakao.maps.InfoWindow({
                        content: '<div style="width:150px;text-align:center;padding:6px 0;font-size: 18px;">ㅇㅇ♡ㅇㅇ<br/>ㅇㅇ컨벤션<br/>ㅇㅇㅇ홀</div>'
                    });
                    infowindow.open(map, marker);

                    map.setCenter(centerCords);
                }
            });
        }
    });

}

function addPhotos() {
    const photoCarousel = document.getElementById("photoCarousel");
    const thumbnailContainer = document.querySelector(".thumbnail-container");

    // Clear the thumbnail container before adding new images.
    thumbnailContainer.innerHTML = '';

    const photoPrefix = 'img/photos/';
    const photoSuffix = '.jpeg';
    let photoName = '';

    for (let i=1; i<=16; i++ ) {
        const baseDiv = document.createElement("div");
        baseDiv.className = i == 1 ? "carousel-item active" : "carousel-item";

        photoName = photoPrefix + i + photoSuffix;

        const baseImg = document.createElement("img");
        baseImg.className = "d-block w-100";
        baseImg.src = photoName;

        baseDiv.appendChild(baseImg);
        photoCarousel.appendChild(baseDiv);

        const thumbnailImg = document.createElement("img");
        thumbnailImg.className = "img-thumbnail";
        thumbnailImg.src = photoName;
        thumbnailImg.dataset.target = "#carouselExampleIndicators";
        thumbnailImg.dataset.slideTo = i - 1;

        thumbnailContainer.appendChild(thumbnailImg);
    }
}

// 카카오 페이
function payLink(receiver) {
    let payLinkList = {
        'kw': 'https://qr.kakaopay.com/FR2AwP21t',
        'hy': 'https://qr.kakaopay.com/FOLfEccEb'
    };

    location.href = payLinkList[receiver];
}

function copyAccount(receiver) {
    let accountList = {
        'kw': '3333105073990',
        'hy': '1002739016609',
        'hs': '97629881002003',
        'hg': '137122022021'
    };

    var tempElem = document.createElement('textarea');
    tempElem.value = accountList[receiver];
    document.body.appendChild(tempElem);

    tempElem.select();
    document.execCommand("copy");
    document.body.removeChild(tempElem);

    alert("계좌번호 복사완료!");
}

function getDDay() {
    const setDate = new Date("2023-09-23T00:00:00+0900");
    const setDateYear = setDate.getFullYear();
    const setDateMonth = setDate.getMonth() + 1;
    const setDateDay = setDate.getDate();

    const now = new Date();

    const distance = setDate.getTime() - now.getTime();

    const day = Math.floor(distance/(1000*60*60*24));

    const dDayElem = document.getElementById("dday");
    dDayElem.innerHTML = day + 1 + '일';

}
