const questions = [
    { q: "スタバは何年創業？", a: "1971", known: false },
    { q: "1号店の場所は？", a: "シアトル", known: false },
    { q: "社名の由来は？", a: "小説『白鯨』の航海士名", known: false },
    { q: "第1号店で販売していなかったものは？", a: "ドリンク（コーヒー一杯ずつ）", known: false },
    { q: "1982年にマーケティング部マネージャーとして入社した人物は？", a: "ハワード・シュルツ", known: false },
    { q: "1983年に感銘を受けた国は？", a: "イタリア", "known": false }, // knownを文字列にしても動作しますが、ブーリアン値のままで通常は問題ありません
    { q: "職場と自宅の間の第三の場所を何という？", a: "サードプレイス", known: false },
    { q: "創設者たちの名前を3人挙げよ", a: "ゴードン・パウカー、ゼブ・シーゲル、ジェリー・ボールドウィン", known: false },
    { q: "1984年4月に提供されたドリンク名は？", a: "スターバックスラテ", known: false } // 最後の要素の後にコンマ (,) は不要
]; // 配列を閉じる ] が必要

// 1ページあたりの問題数
const PAGE_SIZE = 50;
let currentPage = 1;
let index = 0;

// HTML要素
const questionElem = document.getElementById("question");
const answerElem = document.getElementById("answer");
const showAnswerBtn = document.getElementById("showAnswerBtn");
const knownBtn = document.getElementById("knownBtn");
const nextBtn = document.getElementById("nextBtn");

// 現在のページの問題を取得
function getCurrentPageQuestions() {
    const start = (currentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return questions.slice(start, end);
}

let pageQuestions = getCurrentPageQuestions();

// 問題を表示
function displayQuestion() {
    const q = pageQuestions[index];
    if (!q) {
        questionElem.textContent = "問題がありません";
        answerElem.textContent = "";
        return;
    }
    questionElem.textContent = q.q;
    answerElem.textContent = "";
}

// 答えを見る
showAnswerBtn.onclick = () => {
    const q = pageQuestions[index];
    if (q) answerElem.textContent = q.a;
};

// 覚えた
knownBtn.onclick = () => {
    const q = pageQuestions[index];
    if (q) {
        q.known = true;
        alert("覚えた！");
    }
};

// 次へ
nextBtn.onclick = () => {
    index++;
    if (index >= pageQuestions.length) index = 0;
    displayQuestion();
};

// ページ切り替え
function changePage(pageNumber) {
    currentPage = pageNumber;
    index = 0;
    pageQuestions = getCurrentPageQuestions();
    displayQuestion();
}

// 最初の問題を表示
displayQuestion();