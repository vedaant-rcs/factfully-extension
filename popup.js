document.getElementById("but").addEventListener("click", check);
document.getElementById("rel").hidden = true;

function merge_d(d) {
    let str = "";
    console.log(d);
    for (claim in d.claims) {
        str += "<b>Claim:</b><br>" + d.claims[claim].text + "<br><br>";
        console.log(str);
        str += "<b>Veracity:</b><br>" + d.claims[claim].claimReview[0].textualRating.replace(" ", "&nbsp") + "<hr>";
        console.log(d.claims[claim].claimReview[0].textualRating);
    }
    str = str.replace(new RegExp('<br><br><br>' + '$'), 'finish');
    document.getElementById("rel").hidden = false;
    return str;
}

async function check() {
    let text = document.getElementById("phrase").value;
    let space = document.getElementById("space");
    let res = fetch(`https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${text}&key=AIzaSyDzyIRJExD6M7bhmK4nRZdnosS-E6N8pTk&languageCode=en`);
    res.then((res) => res.json()).then(d => space.innerHTML = merge_d(d));
}

