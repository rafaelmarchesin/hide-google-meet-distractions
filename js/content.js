window.document.addEventListener('keypress', (event) => {
    const keyName = event.key;

    if (keyName == 'z') {
        setTimeout(hideDistractions, 1000);
    }

});

var state = true;

function hideDistractions() {
    var bar = document.getElementsByClassName("rG0ybd");
    var bar1 = document.getElementsByClassName("LCXT6");
    var top = document.getElementsByClassName("NzPR9b");
    var paddingBotton = document.getElementsByClassName("zWfAib");
    var botton = document.getElementsByClassName("mKBhCf");
    var video = document.getElementsByClassName("p2hjYe");

    console.log(state)

    if (state) {
        for (var i = 0; i < bar.length; i++) {
            bar[i].style.display = 'none';
            bar1[i].style.display = 'none';
            top[i].style.display = 'none';
            paddingBotton[i].style = '';
            botton[i].style.bottom = '0px';

            // --- Video ---
            addNewStyle('.p2hjYe {width: 100% !important; height: 100% !important; left: 0px !important}')
        }
    } else {
        for (var i = 0; i < bar.length; i++) {
            bar[i].style.display = '';
            bar1[i].style.display = '';
            top[i].style.display = '';
            paddingBotton[i].style.inset = '0px 0px 88px';
            botton[i].style.bottom = '88px';

            // --- Video ---
            addNewStyle('.p2hjYe {width: 100% !important; height: 100% !important; left: 0px !important}')
        }
    }
    state = !state;
}

function addNewStyle(newStyle) {
    var styleElement = document.getElementById('style');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.id = 'style';
        document.getElementsByTagName('head')[0].appendChild(styleElement);
    }
    styleElement.appendChild(document.createTextNode(newStyle));
}
