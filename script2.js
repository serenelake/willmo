document.addEventListener("DOMContentLoaded",
    function(e) {
        let configID = document.querySelector("#id i")
        let idText = document.querySelector("#id span")

        let savedidText = localStorage.getItem("idText")
        if (savedidText !== null) {
            idText.textContent = savedidText
        }

        configID.addEventListener("click",
            function(e) {
                idText.textContent = prompt("새로운 아이디를 입력하세요")
                localStorage.setItem("idText", idText.textContent)
            }
        )

        let profileEditButton = document.querySelector("#profile_info button")
        let userInfo = document.querySelector("#userInfo")
        let summary = document.querySelector("#summary")
        let profileDetail = document.querySelector("#profileDetail")
        let changing = false

        // 저장된 프로필 불러오기
        let savedUserInfo = localStorage.getItem("userInfo")
        let savedSummary = localStorage.getItem("summary")
        let savedProfileDetail = localStorage.getItem("profileDetail")

        // 저장된 데이터가 있을 때만 화면 변경
        if (savedUserInfo !== null) {
            userInfo.innerHTML = savedUserInfo
        }

        if (savedSummary !== null) {
            summary.innerHTML = savedSummary
        }

        if (savedProfileDetail !== null) {
            profileDetail.innerHTML = savedProfileDetail
        }

        profileEditButton.addEventListener("click",
            function(e) {
                if (changing) {
                    let _userInfo = userInfo.querySelector("input").value
                    let _summary = summary.querySelector("input").value
                    let _profileDetail = profileDetail.querySelector("input").value

                    userInfo.innerHTML = _userInfo
                    summary.innerHTML = _summary

                    if (_profileDetail.startsWith("http")) {
                        _profileDetail = "<a href="+ _profileDetail + 
                        ">" + _profileDetail + "</a>"}

                    profileDetail.innerHTML = _profileDetail
                    
                    localStorage.setItem("userInfo", userInfo.innerHTML)
                    localStorage.setItem("summary", summary.innerHTML)
                    localStorage.setItem("profileDetail", profileDetail.innerHTML)

                    e.target.textContent = "프로필 편집"
                    changing = false
                
                } else {
                    let _userInfo = userInfo.textContent
                    let _summary = summary.textContent
                    let _profileDetail = profileDetail.textContent

                    userInfo.innerHTML = "<input value=" + _userInfo + "></input>"
                    summary.innerHTML = "<input value=" + _summary + "></input>"
                    profileDetail.innerHTML = "<input value=" + _profileDetail + "></input>"

                    e.target.textContent = "프로필 편집 완료"
                    changing = true
                }
            }
        )
        
        let profile = document.querySelector("#profile .circle_pic")

        profile.addEventListener("mouseover",
            function(e) {
                e.target.style.filter = "grayscale(50%)"
            }
        )

        profile.addEventListener("mouseout",
            function(e) {
                e.target.style.filter = "grayscale(0%)"
            }
        )

        profile.addEventListener("click",
            function(e) {
                profile.setAttribute("src", prompt("바꿀 이미지 url을 입력하세요"))
            }
        )        
    }
)