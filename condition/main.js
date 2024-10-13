const scoreInputElement1 = document.getElementById('score-input-1')
const scoreInputElement2 = document.getElementById('score-input-2')
const scoreInputElement3 = document.getElementById('score-input-3')
const scoreInputElement4 = document.getElementById('score-input-4')
const expOrgScore = document.getElementById('exp-org-input')
const btnSubmitScore = document.getElementById('btn-submit-score')
const scoreText = document.getElementById('final-score')

btnSubmitScore.addEventListener('click', function(){
const scoreValue1 = parseInt(scoreInputElement1.value)
const scoreValue2 = parseInt(scoreInputElement2.value)
const scoreValue3 = parseInt(scoreInputElement3.value)
const scoreValue4 = parseInt(scoreInputElement4.value)

const expOrgValue = parseInt(expOrgScore.value)

const averageScore = (scoreValue1 + scoreValue2 + scoreValue3 + scoreValue4) / 4
    console.log('Nilai Rata2 = ', averageScore)
if(averageScore >= 75){
    console.log('Masuk Kriteria')

    if(expOrgValue >= 2){
        console.log('Bisa Dapat Beasiswa')
    }else if(expOrgValue >= 1) {
        console.log('Tambah Pengalaman')
    }else {
        console.log('Tidak Dapat Beasiswa')
    }
}
}) 
// //    SOAL LAMA
//     if(scoreValue > 85){
//     scoreText.textContent = "A"
//    }else if (scoreValue >= 70 && scoreValue <= 85){
//         scoreText.textContent = "B"
//    }else if (scoreValue >= 50 && scoreValue <= 69){
//         scoreText.textContent = "C"
//    }else if (scoreValue >= 40 && scoreValue <= 54){
//         scoreText.textContent = "D"
//    }else{
//     scoreText.textContent = "F"
//    }   