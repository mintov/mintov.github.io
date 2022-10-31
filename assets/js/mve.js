(function () {
    let divs = document.createElement("div");
    divs.className = 've-badge';
    window.onload = function () {
        document.body.appendChild(divs);
        initMenuBtn();
    }

    function initMenuBtn() {
        let backtopBtn = document.createElement("span");
        backtopBtn.innerHTML = "开";
        backtopBtn.className = 've-backtop-btn';
        divs.appendChild(backtopBtn);
        let backBtn = document.createElement("span");
        backBtn.innerHTML = "关";
        backBtn.className = 've-backtop-btn';
        divs.appendChild(backBtn);
        let closeBtn = document.createElement("span");
        closeBtn.innerHTML = "收";
        closeBtn.className = 've-backtop-btn';
        closeBtn.addEventListener("click", function () {
            clearChildBtn();
            divs.className = 've-badge-right';
            initOpenBtn();
        })
        divs.appendChild(closeBtn);
    }

    function initOpenBtn() {
        let openBtn = document.createElement("span");
        openBtn.innerHTML = "展";
        openBtn.className = 've-backtop-btn';
        openBtn.addEventListener("click", function () {
            clearChildBtn();
            initMenuBtn();
            divs.className = 've-badge';
        })
        divs.appendChild(openBtn);
    }

    function clearChildBtn() {
        var first = divs.firstElementChild;
        while (first) {
            first.remove();
            first = divs.firstElementChild;
        }
    }
})();