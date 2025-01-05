// btnというidを持つHTML要素を取得し、定数に代入する
const  Btn = document.getElementById('btn');
//textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

//HTML要素がクリックされたときにイベント処理を実行する
Btn.addEventListener('click', () => {
  //新しくi要素を作成し、定数に代入する
  const childList = document.createElement('li');
  //作成したli要素にテキストを追加する
  childList.textContent = 'ボタンをクリックしました';
  //作成したli要素をul要素の子要素として末尾に追加する
  text.appendChild(childList);
  text.textContent ='ボタンをクリックしました。';
});